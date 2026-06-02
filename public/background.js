'use strict'

// 사이드 패널 열림 상태 추적 (tabId별로)
const sidePanelState = new Map()
// 닫혀 있다가 열릴 때 전달할 pending slide-on 메시지 (sidePanel/ready 수신 시 전송)
let pendingSlideOnMessage = null

chrome.action.onClicked.addListener(async function (tab) {
  const isOpen = sidePanelState.get(tab.id) || false
  if (isOpen) {
    chrome.runtime.sendMessage({ type: 'sidePanel/close' })
    sidePanelState.set(tab.id, false)
  } else {
    chrome.sidePanel.open({ tabId: tab.id })
    sidePanelState.set(tab.id, true)
  }
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request?.type === 'sidePanel/consumedSlideOnMessage') {
    const navRequestId = request?.navRequestId
    if (navRequestId && pendingSlideOnMessage?.navRequestId === navRequestId) {
      pendingSlideOnMessage = null
    }
    chrome.storage.local.remove('sidePanel/pendingSlideOnMessage', () => {})
    sendResponse(true)
    return true
  }

  if (request.type === 'sidePanel/opened') {
    if (sender.tab?.id) {
      sidePanelState.set(sender.tab.id, true)
    }
    sendResponse(true)
    return true
  }

  if (request.type === 'sidePanel/closed') {
    if (sender.tab?.id) {
      sidePanelState.set(sender.tab.id, false)
    }
    sendResponse(true)
    return true
  }

  if (request.type === 'sidePanel/ready') {
    if (pendingSlideOnMessage) {
      chrome.runtime
        .sendMessage({ type: 'sidePanel/pendingSlideOnMessage', payload: pendingSlideOnMessage })
        .catch(() => {})
      pendingSlideOnMessage = null
      sendResponse(true)
      return true
    }
  }

  if (request.type === 'charge/complete') {
    console.log('[RORR] 충전 완료', request.data ?? {})
    chrome.runtime.sendMessage({ type: 'charge/complete', data: request.data }).catch(() => {})
    sendResponse(true)
    return true
  }

  if (request.type === 'charge/closeTab') {
    if (sender.tab?.id) {
      chrome.tabs.remove(sender.tab.id)
    }
    sendResponse(true)
    return true
  }

  if (request.type === 'auth/loginSuccess') {
    chrome.tabs.query({}, (tabs) => {
      tabs
        .filter(
          (tab) => tab.id != null && tab.url && (tab.url.includes('twitch.tv') || tab.url.includes('youtube.com')),
        )
        .forEach((tab) => chrome.tabs.reload(tab.id))
    })
    sendResponse(true)
    return true
  }

  if (request.type === 'auth/chromeLogin') {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError || !token) {
        sendResponse({
          code: 401,
          message: 'fail',
          data: { error: chrome.runtime.lastError?.message || 'OAuth 토큰 발급 실패' },
        })
      } else {
        sendResponse({ code: 200, message: 'success', data: { token } })
      }
    })
    return true
  }

  if (request.type) {
    if (request.type.split('/')[0] === 'auth') {
      sendResponse({ code: 501, message: 'auth module not bundled', data: {} })
      return true
    }

    if (request.type.split('/')[0] === 'page') {
      if (request.type === 'page/action/slideon') {
        const tabId = sender.tab?.id
        const navRequestId = `${Date.now()}-${Math.random().toString(16).slice(2)}`
        const requestWithId = { ...request, navRequestId }
        if (tabId) {
          if (requestWithId.data) {
            chrome.tabs.sendMessage(tabId, {
              type: 'slide/action/on',
              page: requestWithId.page,
              data: requestWithId.data,
            })
          } else {
            chrome.tabs.sendMessage(tabId, { type: 'slide/action/on', page: requestWithId.page })
          }
        }
        chrome.storage.local.set({ 'sidePanel/pendingSlideOnMessage': requestWithId }, () => {
          if (tabId) {
            pendingSlideOnMessage = requestWithId
            chrome.sidePanel.open({ tabId })
          }
        })
        chrome.runtime.sendMessage(requestWithId).catch(() => {})
        sendResponse(true)
      }
      return true
    }
  }

  if (request.action === 'open-side-panel') {
    chrome.sidePanel.open({ tabId: sender.tab?.id })
    sendResponse(true)
    return true
  }

  if (request.type === 'open-slide-panel') {
    const getTabId = async () => {
      if (sender.tab?.id) {
        return sender.tab.id
      }
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
      return tabs[0]?.id
    }

    getTabId().then((tabId) => {
      if (tabId) {
        chrome.tabs.sendMessage(tabId, { type: 'slide/action/on', page: request.page, data: request.data })
      }
    })

    sendResponse(true)
    return true
  }

  if (request.action === 'moveToChatPageWithState') {
    if (request.data) {
      chrome.tabs.sendMessage(sender.tab?.id, { type: 'state', page: request.page, data: request.data })
    } else {
      chrome.tabs.sendMessage(sender.tab?.id, { type: 'state', page: request.page })
    }
    sendResponse(true)
    return true
  }
})

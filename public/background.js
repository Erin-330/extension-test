chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id })
})

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'auth/chromeLogin') {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError || !token) {
        sendResponse({ error: chrome.runtime.lastError?.message ?? 'no token' })
      } else {
        sendResponse({ token })
      }
    })
    return true // 비동기 응답을 위해 true 반환
  }
})

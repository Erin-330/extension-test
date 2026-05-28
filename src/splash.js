import { Rive, EventType } from '@rive-app/canvas'

const SPLASH_RIV_SRC = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/splash.riv'
const SPLASH_SHOWN_KEY = 'splash-shown'
const BG_TRANSITION_MS = 1000

// DEV 모드에서는 항상 표시, 프로덕션에서는 세션당 1회
if (!import.meta.env.DEV && sessionStorage.getItem(SPLASH_SHOWN_KEY)) {
  window.location.replace('login.html')
}

const canvas = document.getElementById('splash-canvas')

function onComplete() {
  document.body.classList.add('fading')
  setTimeout(() => {
    sessionStorage.setItem(SPLASH_SHOWN_KEY, '1')
    window.location.replace('login.html')
  }, BG_TRANSITION_MS)
}

const r = new Rive({
  src: SPLASH_RIV_SRC,
  canvas,
  artboard: 'SplashAni',
  stateMachines: 'State Machine 1',
  autoplay: true,
  onLoad: () => {
    const inputs = r.stateMachineInputs('State Machine 1')
    const trigger = inputs?.find(i => i.name === 'start')
    trigger?.fire()
  },
  onLoadError: () => onComplete(),
})

r.on(EventType.RiveEvent, (event) => {
  if (event.data?.name === 'EVENT DONE') onComplete()
})

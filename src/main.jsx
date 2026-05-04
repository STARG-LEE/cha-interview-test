import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const kakaoJsKey = import.meta.env.VITE_KAKAO_JS_KEY

if (kakaoJsKey && window.Kakao && !window.Kakao.isInitialized()) {
  try {
    window.Kakao.init(kakaoJsKey)
  } catch (e) {
    console.error('Kakao init error:', e)
  }
} else if (!kakaoJsKey) {
  console.warn('VITE_KAKAO_JS_KEY is not set; Kakao login will be unavailable.')
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

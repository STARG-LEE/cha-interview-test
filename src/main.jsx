import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const kakaoJsKey = 'f756aef8a9d7573742de8b220ee1db1b'

if (kakaoJsKey && window.Kakao && !window.Kakao.isInitialized()) {
  try {
    window.Kakao.init(kakaoJsKey)
  } catch (e) {
    console.error('Kakao init error:', e)
  }
} else if (!window.Kakao) {
  console.warn('Kakao SDK is not loaded; Kakao login will be unavailable.')
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

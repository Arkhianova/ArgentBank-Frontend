import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './store/store.js'
import { setCredentials } from './store/auth/authSlice.js'
import { createRoot } from 'react-dom/client'

// HYDRATION AVANT RENDER
const token = localStorage.getItem("token")

if (token) {
  store.dispatch(setCredentials({ token }))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
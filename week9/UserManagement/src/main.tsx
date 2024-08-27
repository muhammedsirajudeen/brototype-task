import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="648514127357-kggqtnndi6h3m7ibhkajl7mfdb5vsj27.apps.googleusercontent.com">
      <StrictMode>
        <App />
      </StrictMode>
    </GoogleOAuthProvider>

  </Provider>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="648514127357-kggqtnndi6h3m7ibhkajl7mfdb5vsj27.apps.googleusercontent.com">
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
)

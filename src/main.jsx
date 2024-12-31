import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
</QueryClientProvider>

  )
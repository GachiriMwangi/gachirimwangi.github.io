import { ViteReactSSG } from 'vite-react-ssg'
import App from './App.jsx'

export const createRoot = ViteReactSSG(
  { routes: [{ path: '/', element: <App /> }] }
)

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalsStyle } from './styles/global'
import { Router } from './components/Roter'
import { BrowserRouter } from 'react-router-dom'
import { PostProvider } from './Contexts/PostsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalsStyle />
      </PostProvider>
    </ThemeProvider>
  )
}

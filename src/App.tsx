import HomePage from "./components/homepage/HomePage"
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from "./utils/router/privateRoute"
import AuthRootComponent from "./components/auth"
import { ColorModeContext, useMode } from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material"
import LayoutComponent from "./components/layout"
import WatchlistComponent from "./components/watchlist"
import SettingsComponet from "./components/settings"
import NewsComponent from "./components/news"

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <Routes>
            <Route element={<LayoutComponent />}>
              {/* <Route element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/watchlist" element={<WatchlistComponent />} />
                <Route path="/settings" element={<SettingsComponet />} />
                <Route path="/news" element={<NewsComponent />} />
              </Route> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/watchlist" element={<WatchlistComponent />} />
              <Route path="/settings" element={<SettingsComponet />} />
              <Route path="/news" element={<NewsComponent />} />
              <Route path="login" element={<AuthRootComponent />} />
              <Route path="register" element={<AuthRootComponent />} />
            </Route>
          </Routes>
        </>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App

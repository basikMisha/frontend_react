import HomePage from "./pages/homepage"
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from "./utils/router/privateRoute"
import AuthRootComponent from "./pages/auth"
import { ColorModeContext, useMode } from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material"
import LayoutComponent from "./components/layout"
import WatchlistComponent from "./pages/watchlist"
import SettingsComponet from "./pages/settings"
import NewsComponent from "./pages/news"
import SingleAssetPage from "./pages/single-asset"

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/watchlist" element={<WatchlistComponent />} />
                <Route path="/settings" element={<SettingsComponet />} />
                <Route path="/news" element={<NewsComponent />} />
                <Route path="/single/:id" element={<SingleAssetPage />} />
              </Route>
              {/* <Route path="/" element={<HomePage />} />
              <Route path="/watchlist" element={<WatchlistComponent />} />
              <Route path="/settings" element={<SettingsComponet />} />
              <Route path="/news" element={<NewsComponent />} /> */}
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

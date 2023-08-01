import HomePage from "./components/homepage/HomePage"
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from "./utils/router/privateRoute"
import AuthRootComponent from "./components/auth"
import { ColorModeContext, useMode } from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material"
import LayoutComponent from "./components/layout"

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div>
            <Routes>
              {/* <Route element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
              </Route> */}
               <Route path="/" element={<HomePage />} />
              <Route path="login" element={<AuthRootComponent />} />
              <Route path="register" element={<AuthRootComponent />} />
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App

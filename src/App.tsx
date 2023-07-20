import HomePage from "./components/homepage/HomePage"
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from "./utils/router/privateRoute"
import AuthRootComponent from "./components/auth"
function App() {
  

  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="login" element={<AuthRootComponent/>}/>
        <Route path="register" element={<AuthRootComponent/>}/>
      </Routes>
    </div>
  )
}

export default App

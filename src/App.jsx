import Navbar from './components/Navbar'
import Home from './components/Home'
import Tasks from './components/Tasks'
import TaskDetails from './components/TaskDetails'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProtectedRoute from './guard/ProtectedRoute'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter basename="/any-do">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

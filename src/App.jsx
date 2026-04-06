import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tasks from './components/Tasks'
import Profile from './components/profile'
import TaskDetails from './components/TaskDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter basename="/any-do">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

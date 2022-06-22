import React from 'react'
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import Home from "../src/pages/Home"
import ExerciseDetail from "../src/pages/ExerciseDetail"

import "./App.css";

const App = () => {
  return (
    <Box width="400px">
        <Navbar />    
        <Routes>
            <Route path="/" element={<Home/>}/>;
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>;
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App
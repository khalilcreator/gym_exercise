import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';

function App() {
  return (
  <BrowserRouter>
    <Box>
      <Navbar />
      
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/exerises/:id' element={<ExerciseDetails />} />
            </Routes>
       <Footer />     
    </Box>
    </BrowserRouter>
  );
}

export default App;

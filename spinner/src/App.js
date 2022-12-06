import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import bg from './assets/pc-bg1.png';
import bg1 from './assets/pc-bg2.png';
import Game from './pages/Game';
import Result from './pages/Result';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <>
        <div
          style={{          
            backgroundImage: `url(${bg1})`,
            backgroundColor: '#CADB7F',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            backdropFilter: 'blur(10px)',
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/game" element={<Game />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
  );
}

export default App;

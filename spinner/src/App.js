import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import bg from './assets/pc-bg1.png';
import bg1 from './assets/pc-bg2.png';
import Game from './pages/Game';
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
            height: '100vh',
            width: '100vw',
            backdropFilter: 'blur(10px)',
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
  );
}

export default App;

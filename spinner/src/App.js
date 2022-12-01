import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import bg from './assets/pc-bg1.png';
import bg1 from './assets/pc-bg2.png';


function App() {
  return (
      <>
        <div
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            height: '100vh',
            width: '100vw',
            backdropFilter: 'blur(10px)',
          }}
        >
            <Landing/>
        </div>
        
      </>
  );
}

export default App;

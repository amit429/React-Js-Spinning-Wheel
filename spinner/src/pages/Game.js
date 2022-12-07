import { Box, Button, Container ,Image } from '@chakra-ui/react'
import React from 'react'
import WheelComponent from "react-wheel-of-prizes";
import { useState } from 'react';
import spin from '../assets/spin.png';
import ad from '.././assets/ad.png'
import './Game.css';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

export default function Game() {

    const navigate = useNavigate();

    const [type, setType] = useState("");

    const rotate = () => {

      let wheel = document.querySelector('.wheel1');
      let value = Math.floor(Math.random() * 3600);
      wheel.style.transform = `rotate(${value}deg)`;
      value += Math.floor(Math.random() * 3600);
      console.log(value);
      let prize = value % 360;
      console.log(prize);

      window.localStorage.setItem('type', prize);

      setTimeout(() => {

        navigate('/result');
      }, 6000);
    }
    

  return (

    <Box className='game'>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            height: '100vh',
          }}
        >
          <Box className='container'>
            <Box className='spin-point'></Box>
            <Box className='wheel1'>
              <Box className='content'>
                <img src={spin} alt='wheel' width="100%" height="100%" />
              </Box>
            </Box>
          </Box>
          <Button
            onClick={rotate}
            className='spin-btn'
            mt={[1, 1, 1, 10]}
          >Spin</Button>

        </Box>
        <Box className='add'>
                <Image className='add-img'  src={ad} alt="advertisment" />
          </Box>
      </Box>
  )
}

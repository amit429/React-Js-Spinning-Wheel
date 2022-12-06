import React, { useEffect } from 'react'
import './Landing.css'
import wheel from '.././assets/wheel.png'
import { useNavigate } from "react-router-dom";
import { useClipboard } from '@chakra-ui/react'

import {
    Box,
    Button,
    Image,
    Flex,
    IconButton,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Text,
    Stack,
    InputLeftAddon,
    FormControl,
    FormLabel,
    Checkbox
} from '@chakra-ui/react';
import {
    SearchIcon,
    ArrowForwardIcon,
    PhoneIcon,
    EmailIcon,
} from '@chakra-ui/icons'
import { useState } from 'react';

export default function Result() {

    const navigate = useNavigate();

    const offer = window.localStorage.getItem('type');
    const [code , setCode] = useState("");
    const [type, setType] = useState("");
    const { onCopy, value, setValue, hasCopied } = useClipboard("");
    
    console.log(offer);

    const win = () => {

        if(offer > 1 && offer<=60){
            setType('30% SITEWIDE DISCOUNT')
            setCode('XXVPTWE')
            setValue('XXVPTWE')
        }else if(offer>60 && offer<=120){
            setType('BUY 1 GET 1 FREE')
            setCode('XXVDKFMD')
            setValue('XXVDKFMD')
        }else if(offer>120 && offer<=180){
            setType('Free coffee mug with purchase worth 1000+')
            setCode('XXLKFLDK')
            setValue('XXLKFLDK')
        }else if(offer>180 && offer<=240){
            setType('Buy 2 get 1 free')
            setCode('XXVDKNS')
            setValue('XXVDKNS')
        }else if(offer>240 && offer<=300){
            setType('Free 50g tea with purchase worth 500+')
            setCode('XXVDJNJS')
            setValue('XXVDJNJS')
        }else if(offer>300 && offer<=360){
            setType('Free 100g tea with purchase worth 1000+')
            setCode('XXVDKJN')
            setValue('XXVDKJN')
        }
    }

    
    // if (offer <= 60) {
    //     setType('30% SITEWIDE DISCOUNT')
    // } else if (offer > 60 && offer <= 120) {
    //     setType('BUY 1 GET 1 FREE')

    // } else if (offer > 120 && offer <= 180) {
    //     setType('Free coffee mug with purchase worth 1000+')

    // } else if (offer > 180 && offer <= 240) {
    //     setType('Buy 2 get 1 free')

    // } else if (offer > 240 && offer <= 300) {
    //     setType('Free 50g tea with purchase worth 500+')

    // } else if (offer > 300 && offer <= 360) {
    //     setType('Free 100g tea with purchase worth 1000+')


    // } else {
    //     window.alert('Error');
    // }
    
    useEffect(() => {
        win();
    }, [])

  return (
    <>
        <Box flexFlow={1} flexWrap="wrap" className='main'>
            <Box className='wheel'>
                <Image w={400} h={400} src={wheel} alt="wheel" className='wheel' />
            </Box>
            <Box className='form'>
                <Text fontSize={['xl', 'md', 'lg', 'xl']} 
                    
                    fontWeight={'medium'} className='title'>
                         Congrats You Won :
                    </Text>
                <Text fontSize={['xl', 'md', 'lg', '2xl']} 
                    
                fontWeight={'extrabold'} className='title'>
                     20% Off Coupon  <br/> on Best Sellers
                </Text>
                <Stack className='form-input' spacing={5}>
                <Flex mb={2}>
                    <Input
                    placeholder={type}
                    background={'#F2F2F2'}
                    value={code}
                    readOnly
                    mr={2}
                    />
                    <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
                </Flex>
                </Stack>

                <Button 
                    mt={5} 
                    borderRadius="50px" 
                    bg={'#146531'} 
                    colorScheme='green'
                    fontSize={'2xl'}
                    w={[250, 250, 300, 310]}
                    onClick={() => {
                        navigate('/');
                        window.localStorage.clear();
                    }}
                >
                        Close Panel & Copy
                </Button>

                <Box className='disclaimer'
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: '8px',
                            textAlign: 'center',
                        }}
                    >
                        **You can claim your coupon for 10 minutes only!
                    </span>
                </Box>
            </Box>
        </Box>

    </>
  )
}

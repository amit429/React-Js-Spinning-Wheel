import React from 'react'
import './Landing.css'
import wheel from '.././assets/wheel.png'
import ad from '.././assets/ad.png'
import {
    useState
} from 'react'
import { useNavigate } from "react-router-dom";

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

export default function Landing() {

    const navigate = useNavigate();

    const [tick, setTick] = useState("false");
    const [email, setEmail] = useState("");
    const [phone , setPhone] = useState("");

    const check = () => {

       if(email === "" || phone === "") {
            window.alert("Please enter your email address")
        }
        // else if (tick === "false") {
        //     window.alert("Please tick the box to continue")
        // }
          else{
            window.alert("Thank you for your submission")
            navigate("/game")
            
        }  
    }

    //API call for email and phone
    //post email and phone to database
    // const post = async () => {

    //     const data = {
    //         email: email,
    //         phone: phone
    //     }

    //     const response = await fetch('http://localhost:5000/api', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     });

    //     const json = await response.json();
    //     console.log(json);
    // }

  return (
    <>
        <Box flexFlow={1} flexWrap="wrap" className='main'>
            <Box className='wheel'>
                <Image w={400} h={400} src={wheel} alt="wheel" className='wheel' />
            </Box>
            <Box className='form'>
                <Text fontSize={['xl', 'md', 'lg', '2xl']} fontWeight="bold" className='title'>
                    This is how EngageBud <br/> looks like in action!
                </Text>
                <Stack className='form-input' spacing={5}>
                    <InputGroup>
                        <InputLeftElement children={<EmailIcon/>} />
                        <Input type='email' placeholder='joe@gmail.com'
                            backgroundColor={'white'}
                            borderRadius="3px"
                            borderBottom={'1.5px solid black'}
                            w={300}
                            onChange={(e) => setEmail(e.target.value)}
                            
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement children={<PhoneIcon/>} />
                        <Input type='number' placeholder='+91 98256 XXXXX'
                            backgroundColor={'white'}
                            borderRadius="none"
                            w={300}
                            borderBottom={'1.5px solid black'}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </InputGroup>
                </Stack>

                <Checkbox
                    colorScheme="green"
                    className='checkbox'
                    border="2px"
                    p={1}
                    mt={3}
                    w={[250, 250, 210, 310]}
                >
                    <span className='check'>
                    I agree to receiving recurring automated messages at the number I have provided.
                    Consent is not a condition to purchase.
                    </span>
                    
                </Checkbox>

                <Button 
                    className='button'
                    mt={5} 
                    borderRadius="50px" 
                    bg={'#146531'} 
                    colorScheme='green'
                    fontSize={['md', 'md', 'lg', '2xl']}
                    w={[250, 250, 200, 310]}
                    onClick={check}
                >
                        Try your luck
                </Button>

                <Box className='disclaimer'>
                    <span
                        style={{
                            fontSize: '8px',
                        }}
                    >
                        *You can spin the wheel only once! *If you win, you can claim your coupon for 10 minutes only!
                    </span>
                </Box>
            </Box>
            <Box className='add'>
                <Image className='add-img'  src={ad} alt="advertisment" />
            </Box>
        </Box>

    </>
  );
}

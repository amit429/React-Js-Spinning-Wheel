import React from 'react'
import './Landing.css'
import wheel from '.././assets/wheel.png'
import { useState } from 'react'

export default function Landing() {

    const [tick, setTick] = useState("false");
    const [email, setEmail] = useState("");
    const [phone , setPhone] = useState("");

    const check = () => {

       if(email === "" || phone === "") {
            window.alert("Please enter your email address")
        }
        else if (tick === "false") {
            window.alert("Please tick the box to continue")
        }
          else{
            window.alert("Thank you for your submission")
        }  
    }

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
        
    <div className="landing"
         style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '70vw',
            margin: 'auto',
         }}
       >
             <div class="flex-1 w-64 ..."
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                }}
             >
                <img src={wheel} alt="wheel" width= "400px" height= "400px" />
            </div>

            <div class="flex-1 w-32 ..."
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    padding: '20px',
                }}
            >
                <h1 
                    style={{
                         fontSize: '25px',
                         fontWeight: '700',
                         lineHeight: '1.2',
                         textAlign: 'left',
                    }}
                    >
                        This is how EngageBud<br/> looks like in action!
                    </h1>

                    <div class="relative mb-6 mt-6">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                             <svg aria-hidden="true" class="w-5 h-5 text-black-500 dark:text-black-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                    </div>
                    <input type="text" id="input-group-1" 
                    class="bg-white-50   text-black-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-7/12 pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                    <div class="relative mb-6">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                    </div>
                    <input type="text" id="input-group-1" 
                    class="bg-white-50  text-black-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-7/12 pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="91+ 9822xxxxxx"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    </div>

                    <div class="flex items-center mb-3 w-7/12 border border-black p-2" >
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required
                            onClick={() => setTick("true")}
                            />
                        </div>
                            <label for="remember" class="ml-2 text-sm font-sm text-black dark">I agree to receiving recurring automated messages at the number I have provided. Consent is not a condition to purchase.
                            </label>
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-7/12  "
                        onClick={check}
                    >
                        Default
                    </button>
                    <p class="text-sm w-7/12"
                        style = {{
                            fontSize: '7px'
                        }}
                    >
                    *You can spin the wheel only once! *If you win, you can claim your coupon for 10 minutes only!
                    </p>
            </div>
         </div>
    </>
  );
}

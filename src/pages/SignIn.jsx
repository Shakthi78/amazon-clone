import React, { useState } from 'react'
import { darkLogo } from '../assets'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { motion } from 'framer-motion';
import { RotatingLines } from  'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/amazonSlice';


const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //Error message
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  //Firebase error
  const [userInvalid, setUserInvalid] = useState("")

  //Loading state
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

  //Handle function
  const handleEmail = (e)=>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setErrPassword("")
    setUserInvalid("")
  }

  //Email validation 
  const emailValidation = (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }

  //Submit
  const handleSignIn =(e)=>{
    e.preventDefault()
    if(!email){
      setErrEmail("Enter your Email")
    }else if (!emailValidation(email)) {
      setErrEmail("Enter valid Email")      
    } 

    if(!password){
      setErrPassword("Enter your password")
    }

    if(email && emailValidation(email) && password){
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(setUserInfo({
          _id:user.uid,
          userName:user.displayName,
          email:user.email
        }))
        setLoading(false)
        setSuccessMsg("Logged in succesfully!")
        setTimeout(() => {
          navigate("/")
        }, 2000);
        // ...
      })
      .catch((error) => {
        setLoading(false)
        const errorCode = error.code;  
        console.log(errorCode);     
        setUserInvalid("Invalid login credentials")
      });
      setEmail("")
      setPassword("")
    }
  }
  return (
    <div className='w-full'>
        <div className='w-full bg-gray-100 '>
            <form className='w-[350px] mx-auto flex flex-col items-center'>
              
              <Link to="/">
                <img className='w-32' src={darkLogo} alt=""/>
              </Link>
                <div className='w-full border border-zinc-200 p-6'>
                    <h2 className='font-titleFont text-3xl fot-medium mb-4'>Sign in</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-medium'>Email or mobile phone number</p>
                            <input 
                            onChange={handleEmail}
                            value={email}className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="email"  />
                            {errEmail && (
                            <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                            <span className="italic font-titleFont font-extrabold text-base">
                              !
                            </span>
                            {errEmail}
                            </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-medium'>Password</p>
                            <input 
                            value={password}
                            onChange={handlePassword}className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="password"  />
                            {errPassword && (
                              <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                              <span className="italic font-titleFont font-extrabold text-base">
                                !
                              </span>
                              {errPassword}
                            </p>
                            )}
                            {
                              userInvalid && (
                                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                <span className="italic font-titleFont font-extrabold text-base">
                                  !
                                </span>
                                {userInvalid}
                              </p>
                              )
                            }
                        </div>
                        <button
                        onClick={handleSignIn}
                        className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                        >
                        Continue
                        </button>
                        {
                          loading && (
                            <div className='flex justify-center'>
                              <RotatingLines
                                strokeColor="#febd69"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="50"
                                visible={true}
                              />
                            </div>
                          )
                        }
                        {
                          successMsg && (
                            <div>
                              <motion.p
                              initial={{ y:10, opacity:0}}
                              animate={{ y:0, opacity:1}}
                              transition={{ duration: 0.5}}
                              className='text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center'>{successMsg}</motion.p>
                            </div>
                          )
                        }
                    </div>
                    <p className="text-xs text-black leading-4 mt-4">
                        By Continuing, you agree to Amazon's{" "}
                        <span className="text-blue-600">Conditions of Use </span>and{" "}
                        <span className="text-blue-600">Privace Notice.</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                        <ArrowRightIcon />{" "}
                        <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                        Need help?
                        </span>
                    </p>
                </div>
                <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
                    <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                    <span className="w-1/3 text-center">New to Amazon?</span>
                    <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                </p>
                <Link to="/registration">
                <button className="w-full py-1.5 px-2 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                Create your Amazon account
                </button>
                </Link>
            </form>
        </div> 

         <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
        </div>  

    </div>
  )
}

export default SignIn
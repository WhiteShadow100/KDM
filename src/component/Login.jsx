import React from 'react'
import { useState } from 'react'
import { apiCall } from '../util/apiCall'


const Login = () => {
    const [formData, setFormData] = useState({
        username: 'bishwesh',
        password: 'bishwesh@123',
        secret: ''
    })

    // helps in manageing API calls
    const [isLoading, setIsLoading] = useState(false)

    // holds error message
    const [error, setError] = useState('')

    // true if login, false for sign up
    const [isLogin, setIsLogin] = useState(true)

    // handles form changes
    function handleForm(e, label){

        // validating received value
        if(e == null || e.target == null) { return }

        switch (label) {
        case 'username':
            setFormData(pre => ({
            ...pre,
            username: (e.target.value || '')
            }))
            break;

        case 'password':
            setFormData(pre => ({
            ...pre,
            password: (e.target.value || '')
            }))
            break;

        case 'secret':
            setFormData(pre => ({
            ...pre,
            secret: (e.target.value || '')
            }))
            break;

        default:
            break

        }
        
    }

    // handles logins
    function login(){
        
        setIsLoading(true)

        setError('')

        apiCall({
            route:'login',
            payload: formData,
            callBack: (res) => {
                console.log("Log In:", res)

                if(res.is_error){
                    setError(error.message)
                }
            },
            complete: () => {
                setIsLoading(false)
            }
        })
    }

    // handles signup
    function signup(){
        setIsLoading(true)
        setError('')
        apiCall({
            route:'signup',
            payload: formData,
            callBack: (res) => {
                console.log("Sign Up: ", res)
                if(res.is_error){
                    setError(res.message)
                }
            },
            complete: () => {
                setIsLoading(false)
            }
        })
    }

    return (
        <div className='form-container'>
            {error}
            <div className='container  w-25 justify-content-center'>
            <div className='row mt-2 mb-2'>
                <input 
                placeholder='Username'
                type='text'
                value={formData.username}
                onChange={(e) => {
                    handleForm(e, 'username')
                }}
                />
            </div>

            <div className='row mt-2 mb-2'> 
                <input 
                placeholder='Password'
                type='password' 
                value={formData.password} 
                onChange={(e) => {
                    handleForm(e, "password")
                }} 
                />
            </div>

            {
                isLogin ? (
                    <></>
                ) : (
                    <div className='row mt-2 mb-2'>
                        <input 
                        placeholder='Secret'
                        type='text'
                        value={formData.secret}
                        onChange={(e) => {
                            handleForm(e, "secret")
                        }}
                        />
                    </div>
                )
            }

            <div className='row mt-2 mb-2'>
                <button
                className='btn btn-primary'
                onClick={() => {isLogin ? login() : signup() }}
                >
                { isLogin ? (isLoading ? 'Loading...' : 'Login') : (isLoading ? 'Signing...' : 'Sign Up') }
                </button>
            </div>

            <div className='row mt-2 mb-2'>
                <input type='button' value={isLogin ? 'Create an account' : 'Already have an account?'} onClick={() => {
                isLogin ? (
                    setIsLogin(false)
                ) : (
                    setIsLogin(true)
                )
                }} />
            </div>


            </div>
        </div>
    )
}

export default Login

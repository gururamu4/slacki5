import React from 'react'
import './Login.css'
import {authenticator, fireBaseProvider} from './firebase'
import { useStateValue } from './stateProvider'

function Login() {
    const [{}, dispatch] = useStateValue();
    const signin =() => {
        authenticator.signInWithPopup(fireBaseProvider).then(res => {
            dispatch({
                type: 'SET_USER',
                user: res.user
            })
            localStorage.setItem('user', JSON.stringify(res.user))
        }).catch(err => {
            console.error(err)
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
                <h1>
                    Signin to Slack
                </h1>
                <p>
                    Guru.slack.com
                </p>
                <button onClick={signin}>
                    Sign in with google
                </button>
            </div>
        </div>
    )
}

export default Login

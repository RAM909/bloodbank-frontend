import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../Login.css";
const suffix = "hos.med.in";
const end = "gmail.com";
const Login_api = process.env.REACT_APP_LOGIN_API;

function Login() {

    const history = useNavigate();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post(Login_api, {
                email, password
            })
                .then(res => {
                    if (res.data == "exist" && email.endsWith(suffix)) {
                        console.log(email);
                        history("/Dash2", { state: { id: email } })
                    }
                    else if (res.data == "exist" && email.endsWith(end)) {
                        history("/Dash", { state: { id: email } })

                    }
                    else if (res.data == "wrongemail") {
                        alert("User not found")
                    }
                    else if (res.data == "wrongpassword") {
                        alert("Check Password")
                    }
                    else if (res.data == "wrong") {
                        alert("Fill correct detail")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>



        </div>
    )
}

export default Login
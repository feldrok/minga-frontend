import { Link, useNavigate } from "react-router-dom"
import React, { useRef } from "react"
import { useDispatch } from "react-redux"

import userActions from "../../store/user/actions"

const { signIn } = userActions

function SigninForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let inputMail = useRef("")
    let inputPassword = useRef("")

    const handleSignIn = async (e) => {
        e.preventDefault()
        let user = {
            mail: inputMail.current.value,
            password: inputPassword.current.value,
        }
        let response = await dispatch(signIn(user))
        localStorage.setItem(
            "token",
            response.payload?.response.user.response.token
        )
        navigate("/")
    }

    return (
        <div className="signup-container">
            <div className="container-1">
                <div className="title-container">
                    <h2>Minga</h2>
                    <p>Sign in to your account</p>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSignIn} className="sign-form">
                        <div className="form-row-signin">
                            <label className="label-sign" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                ref={inputMail}
                            />
                        </div>
                        <div className="form-row-signin">
                            <label className="label-sign" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                ref={inputPassword}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                className="submitButton"
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                    </form>
                </div>
                <div className="account-exists-container">
                    <p>Don't have an account?</p>
                    <Link className="signin-link" to="/signup">
                        Sign up
                    </Link>
                </div>
                <div className="back-home">
                    <p>Go back to</p>
                    <Link className="signin-link" to="/">
                        home page
                    </Link>
                </div>
            </div>
            <div className="image-film-wrap"></div>
        </div>
    )
}

export default SigninForm

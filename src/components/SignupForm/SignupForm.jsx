import React, { useRef } from "react"

import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import userActions from "../../store/user/actions"

const { addUser } = userActions

function SignupUser() {
    const dispatch = useDispatch()
    const mail = useRef("")
    const photo = useRef("")
    const password = useRef("")
    const navigate = useNavigate()

    const captureData = async (e) => {
        e.preventDefault()
        let data = {
            mail: mail.current.value,
            photo: photo.current.value,
            password: password.current.value,
        }
        let res = await dispatch(addUser(data))
        if (res.payload.success) {
            navigate("/", { replace: true })
        }
    }

    return (
        <>
            <div className="title-container">
                <h2>Minga</h2>
                <h3>Welcome!</h3>
                <p>
                    Discover manga, manhua and manhwa, track your progress, have
                    fun, read manga.
                </p>
            </div>
            <div className="form-container">
                <form className="sign-form">
                    <div className="form-signup-row">
                        <label className="label-sign" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="form-signup-row">
                        <label className="label-sign" htmlFor="password">
                            Password
                        </label>
                        <input
                            autoComplete="false"
                            type="password"
                            className="form-control"
                            id="password"
                            ref={password}
                        />
                    </div>
                    <div className="form-signup-row">
                        <label className="label-sign" htmlFor="photo">
                            Photo
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="form-control"
                            id="photo"
                            ref={photo}
                        />
                    </div>
                    <div className="form-row">
                        <Link className="submitButton" to={"/new-role"}>
                            Sign up
                        </Link>
                    </div>
                </form>
                <button className="signup-google">
                    <img
                        className="signup-google-img"
                        alt="google icon"
                        src="./Google.png"
                    />{" "}
                    Sign up with Google
                </button>
            </div>
        </>
    )
}

export default SignupUser

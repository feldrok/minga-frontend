import React, { useRef } from "react";
import authorActions from "../../store/authors/actions";
import { useDispatch } from "react-redux"
const { addAuthor } = authorActions

function SignupAuthor() {
  const dispatch = useDispatch()
  const authorName = useRef(null)
  const authorLastName = useRef(null)
  const authorCity = useRef(null)
  const authorCountry = useRef(null)
  const authorDate = useRef(null)
  const authorPhoto = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const authorData = {
      name: authorName.current.value,
      lastName: authorLastName.current.value,
      city: authorCity.current.value,
      country: authorCountry.current.value,
      date: authorDate.current.value,
      photo: authorPhoto.current.value,
      user_id: "63b1cb4db1f1ec1540d8078f",
      active: true,
    }
    await dispatch(addAuthor(authorData))
  }
  return (
    <>
      <div className="title-container">
        <h2>Author Sign up</h2>
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={authorName}
                autoComplete="false"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                ref={authorLastName}
                autoComplete="false"
                type="text"
                className="form-control"
                id="lastName"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                ref={authorCity}
                autoComplete="false"
                type="text"
                className="form-control"
                id="city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                ref={authorCountry}
                autoComplete="false"
                type="text"
                className="form-control"
                id="country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                ref={authorDate}
                autoComplete="false"
                type="text"
                className="form-control"
                id="date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="photo">Photo</label>
              <input
                ref={authorPhoto}
                autoComplete="false"
                type="text"
                className="form-control"
                id="photo"
              />
            </div>
          </div>
{/*           <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                ref={}
                autoComplete="false"
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                autoComplete="false"
                type="password"
                className="form-control"
                id="confirm-password"
              />
            </div>
          </div> */}
          <div className="form-row">
            <input className="submitButton" type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupAuthor;
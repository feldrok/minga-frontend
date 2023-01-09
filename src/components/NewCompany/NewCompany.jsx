import React, { useRef } from "react";

import companyActions from "../../store/companies/actions";
import { useDispatch } from "react-redux";

const { addCompany } = companyActions

function SignupCompany() {
  const dispatch = useDispatch()
  const companyName = useRef(null)
  const companyLogo = useRef(null)
  const companyWebsite = useRef(null)
  const companyDescription = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const companyData = {
      name: companyName.current.value,
      logo: companyLogo.current.value,
      website: companyWebsite.current.value,
      description: companyDescription.current.value,
      user_id: "63b1cb4db1f1ec1540d8078f",
      active: true,
    }
    await dispatch(addCompany(companyData))
  }
  return (
    <>
      <div className="title-container">
        <h2>Company Sign up</h2>
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={companyName}
                autoComplete="false"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="logo">Logo</label>
              <input
                ref={companyLogo}
                autoComplete="false"
                type="text"
                className="form-control"
                id="logo"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input
                ref={companyWebsite}
                autoComplete="false"
                type="text"
                className="form-control"
                id="website"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                ref={companyDescription}
                autoComplete="false"
                type="text"
                className="form-control"
                id="description"
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

export default SignupCompany;

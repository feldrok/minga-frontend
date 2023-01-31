import React, { useRef } from "react";

import authorActions from "../../store/authors/actions";
import { useDispatch, useSelector } from "react-redux";

const { addAuthor } = authorActions;

function NewAuthor() {
  const dispatch = useDispatch();
  const authorName = useRef(null);
  const authorLastName = useRef(null);
  const authorCity = useRef(null);
  const authorCountry = useRef(null);
  const authorDate = useRef(null);
  const authorPhoto = useRef(null);
  const userStore = useSelector((store) => store.user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authorData = {
      name: authorName.current.value,
      lastName: authorLastName.current.value,
      city: authorCity.current.value,
      country: authorCountry.current.value,
      date: authorDate.current.value,
      photo: authorPhoto.current.value,
      user_id: userStore.user?.response?.user.id,
      active: false,
    };
    await dispatch(addAuthor(authorData));
  };
  return (
    <>
      <div className="title-container">
        <h2>You are an Author</h2>
        <p>Please complete the form</p>
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-signup-row">
              <label className="label-sign" htmlFor="name">Name</label>
              <input
                ref={authorName}
                autoComplete="false"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-signup-row">
              <label className="label-sign" htmlFor="lastName">Last Name</label>
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
            <div className="form-signup-row">
              <label className="label-sign" htmlFor="city">City</label>
              <input
                ref={authorCity}
                autoComplete="false"
                type="text"
                className="form-control"
                id="city"
              />
            </div>
            <div className="form-signup-row">
              <label className="label-sign" htmlFor="country">Country</label>
              <input
                ref={authorCountry}
                autoComplete="false"
                type="text"
                className="form-control"
                id="country"
              />
            </div>
          </div>
            <div className="form-row">
              <div className="form-signup-row">
                <label className="label-sign" htmlFor="date">Date</label>
                <input
                  ref={authorDate}
                  autoComplete="false"
                  type="text"
                  className="form-control"
                  id="date"
                />
              </div>
              <div className="form-signup-row">
                <label className="label-sign" htmlFor="photo">Photo</label>
                <input
                  ref={authorPhoto}
                  autoComplete="false"
                  type="text"
                  className="form-control"
                  id="photo"
                />
              </div>
            </div>
          <div className="form-row">
            <input className="submitButton" type="submit" value="Continue" />
          </div>
        </form>
      </div>
    </>
  );
}

export default NewAuthor;
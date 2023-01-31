import "./AccountVerify.css";

import { Link as Anchor, useParams } from "react-router-dom";
import React, { useEffect } from "react";

import { useDispatch } from 'react-redux'
import userActions from "../../store/user/actions";

const VerifyAccount = () => {
  const { user_id, verify_code } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.verifyUser({user_id, verify_code}))
  }, []);
  return (
    <div className="verify-container">
      <div className="verify-div">
        <div>
          <h1 className="verify-message">Your account has been verified!</h1>
          <Anchor className="verify-redirect" to="/signin">
            Login
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;

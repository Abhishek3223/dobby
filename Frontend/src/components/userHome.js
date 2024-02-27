import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  const navigate = useNavigate();
  const handleUploadImage = () => {
    // Navigate to "/uploadImage" route
    navigate("/uploadImage");
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <div class="d-flex align-items-center justify-content-between">
            <button onClick={logOut} className="btn btn-primary">
              Log Out
            </button>
            <button onClick={handleUploadImage} className="btn btn-primary">
              Upload Image
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

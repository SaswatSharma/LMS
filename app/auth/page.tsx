"use client";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import React from "react";

const Auth = () => {
  return (
    <div>
      <h1>Authentication</h1>
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Auth;

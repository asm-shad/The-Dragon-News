import React from "react";
import SocialLogin from "../SocialLogin";
import FindUs from "../FindUs";

const RightNavBar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNavBar;

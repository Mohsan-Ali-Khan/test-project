import React from "react";
import { useMediaQuery } from "react-responsive";
import { Accessibility } from "./accessibility";
import { DeviceSize } from "../responsive";
import { Logo } from "../logo";

import './commonStyles.css'


export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className="NavbarContainer">
      <div className='LeftSection'>
      <Logo />
      </div>
      <div className="RightSection">
        {!isMobile && <Accessibility />}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "/public/svg/sun.svg";
import moonIcon from "/public/svg/moon.svg";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Setting setMounted to true at component mount
  // Musr be sure component is mounted to use useTHeme, otherwise we get hydration mismatch
  useEffect(() => setMounted(true), []);

  //If component is not mounted, we display a placeholder image to avoid ui shifting
  if (!mounted) {
    return (
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAIlJREFUOE+tkjEKwCAMRePk4CA4Onv/k3gEcdNRcHBwsqSlVGyQEuoUEx/Jj19474cxBqSU8OX03qGUAiLGODBwzoHWesvWWiGEANhIpJSGUupM7OAbwjettQu01sJcWDuvtZzzA+KMFEzlXuAK452SQIIzjDGl+19w1vR5VNZyWN/BMgDbclyTH0ENztPgWWvqAAAAAElFTkSuQmCC"
        alt="Loading Light/Dark theme Toogle"
        height={14}
        width={14}
      />
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Image
        className="cursor-pointer"
        src={sunIcon}
        alt="Toggle light theme"
        width={14}
        height={14}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Image
        className="cursor-pointer"
        src={moonIcon}
        alt="Toggle light theme"
        width={14}
        height={14}
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default ThemeSwitch;

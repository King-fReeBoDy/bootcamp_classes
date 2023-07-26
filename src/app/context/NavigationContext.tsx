"use client";
import React, { ReactNode, createContext, useState, useEffect } from "react";

type IPath = {
  path: number;
  setPath: (num: number) => void;
};

export const navigation = createContext<IPath>({
  path: 0,
  setPath: () => {},
});

const NavigationContext = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState(0);

  useEffect(() => {
    const pathName = window.location.pathname;

    if (pathName === "/") {
      setPath(0);
    } else if (pathName === "/about") {
      setPath(1);
    } else if (pathName === "/courses") {
      setPath(2);
    } else {
      setPath(3);
    }
  }, []);

  return (
    <navigation.Provider value={{ path, setPath }}>
      {children}
    </navigation.Provider>
  );
};

export default NavigationContext;

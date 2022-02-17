import React, { useState } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

import { Router } from "./src/Router";
import { Login } from "./src/screens/Login";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  while (isLogged) {
    return (
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    );
  }
  return <Login setIsLogged={setIsLogged} />;
}

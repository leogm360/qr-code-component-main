import { ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles/theme";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default GlobalProvider;

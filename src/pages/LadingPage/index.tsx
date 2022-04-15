import { Flex } from "@chakra-ui/react";

import QRCodeCard from "../../components/QRCodeCard";

const LadingPage = () => {
  return (
    <Flex
      as="main"
      h="100vh"
      p="1rem"
      alignItems="center"
      justifyContent="center"
    >
      <QRCodeCard />
    </Flex>
  );
};

export default LadingPage;

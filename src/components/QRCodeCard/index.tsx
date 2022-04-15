import { animate, motion } from "framer-motion";

import { Box, VStack, Image, Text, Heading } from "@chakra-ui/react";

import qrCodeImg from "../../assets/images/image-qr-code.png";

const QRCodeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 1 }}
    >
      <Box
        textAlign="center"
        bg="grey.0"
        borderRadius="25px"
        p="1rem"
        paddingBottom="3em"
        w="100%"
        maxW="350px"
        boxShadow="box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;"
        cursor="pointer"
        filter="auto"
        _hover={{ brightness: "95%" }}
      >
        <VStack spacing="6">
          <Image borderRadius="10px" src={qrCodeImg} alt="QR Code, scan it!" />

          <Heading as="h2" fontSize="2xl" color="blue.900" p="0 1rem">
            Improve your front-end skills by building projects
          </Heading>

          <Text as="p" fontSize="md" p="0 1rem">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default QRCodeCard;

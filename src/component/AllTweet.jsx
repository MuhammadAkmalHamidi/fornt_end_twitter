import React from "react";
import {
  Avatar,
  Box,
  Text,
  Flex,
  Textarea,
  Button,
  Image,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {
  IoChatbubbleOutline,
  IoRepeat,
  IoShareOutline,
  IoHeartOutline,
} from "react-icons/io5";

export const AllTweet = () => {
  const Data = [1, 2, 3]

  const onTweet = async () => {
    try {
      const writer = document.getElementById("tulisan").value;
      console.log(writer);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex
        pl="6"
        pt="3"
        pb="3"
        pr="6"
        w={[400, 500, 600]}
        bg="whiteAlpha.900"
        borderRight="1px"
        borderLeft="1px"
        borderBottom="1px"
        borderColor="gray.300"
        position="fixed"
        zIndex={999}
      >
        <Box ml="3" w={[400, 500, 600]}>
          <Text
            fontSize={{ base: "18px", md: "20px", lg: "24px" }}
            fontWeight="extrabold"
            as={Link}
            onClick={window.location.reload}
          >
            Beranda
          </Text>
        </Box>
      </Flex>
      <Flex
        w={[400, 500, 600]}
        mt="12"
        pl="6"
        pt="6"
        pr="6"
        boxShadow="lg"
        bg="white"
        borderRight="1px"
        borderLeft="1px"
        borderColor="gray.300"
      >
        <Avatar mr="5" />
        <Textarea mb={4} placeholder="Apa yang sedang terjadi?" id="tulisan" />
      </Flex>

      <Flex
        w={[400, 500, 600]}
        pl="6"
        pb="6"
        pr="6"
        pt="2"
        boxShadow="lg"
        bg="white"
        borderBottom="1px"
        borderRight="1px"
        borderLeft="1px"
        borderColor="gray.300"
        justifyContent="right"
      >
        <Button colorScheme="twitter" borderRadius="full" onClick={onTweet}>
          Tweet
        </Button>
      </Flex>
      {Data.map((item) => {
        return (
          <>
            <Box
              w={[400, 500, 600]}
              h="auto"
              borderTop="1px"
              borderRight="1px"
              borderLeft="1px"
              borderColor="gray.300"
            >
              <Flex
                pl="6"
                pt="6"
                pr="6"
                boxShadow="lg"
                bg="white"
                borderRight="1px"
                borderLeft="1px"
                borderColor="gray.100"
              >
                <Avatar />
                <Box ml="3">
                  <Text
                    fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                    fontFamily="serif"
                  >
                    <Link fontWeight="bold">ahmad</Link>{" "}
                    ahmad@gmail.com - 10 juli 2023
                  </Text>
                </Box>
              </Flex>
              <Flex
                pl="20"
                pb="6"
                pr="6"
                boxShadow="lg"
                bg="white"
                textAlign="left"
                borderRight="1px"
                borderLeft="1px"
                borderColor="gray.100"
              >
                <Box>
                  <Text
                    fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                    fontFamily="serif"
                  >
                    Semangat bikin minpro 2
                  </Text>
                </Box>
              </Flex>

              <Flex
                pl="6"
                pb="6"
                pr="6"
                boxShadow="lg"
                bg="white"
                borderBottom="1px"
                borderRight="1px"
                borderLeft="1px"
                borderColor="gray.100"
                justifyContent="space-evenly"
              >
                <Flex justifyContent="center">
                  <IoChatbubbleOutline />
                </Flex>
                <IoShareOutline />
                <Flex>
                  <IoHeartOutline />
                </Flex>
                <IoRepeat />
              </Flex>
            </Box>
          </>
        );
      })}
    </>
  );
};

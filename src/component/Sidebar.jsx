import { Flex, Avatar, Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export const SidebarComp = () => {
  const Data = [1, 2, 3, 4, 5]

  return (
    <>
      <Box
        w={[200, 300, 350]}
        ml="6"
        bg="gray.50"
        borderRadius="2xl"
        mt="6"
        h="500"
        overflow="scroll"
        position="-webkit-sticky"
      >
        <Box bgColor="gray.50" pt="6">
          <Text pl="4" pr="6" pb="3" fontSize="2xl" fontWeight="bold">
            Untuk Diikuti
          </Text>
        </Box>
        {Data.map((item) => {
          return (
            <>
              <Flex
                pl="6"
                pt="3"
                pb="3"
                pr="6"
                bg="gray.50"
                borderBottom="1px"
                borderColor="gray.200"
              >
                <Avatar />
                <Text pl="4" pr="6" fontWeight="bold">
                  ahmad
                </Text>
                <Button size="xs" colorScheme="twitter" borderRadius="full">
                  Ikuti
                </Button>
              </Flex>
            </>
          );
        })}
      </Box>
    </>
  );
};

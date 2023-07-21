import { Flex, Avatar, Box, Text, Button } from "@chakra-ui/react";
import  Axios  from "axios";
import { useEffect, useState } from "react";

export const SidebarComp = () => {
  const [data, setData] = useState([])
  const getAllUser = async () => {
    const response = await Axios.get(`https://dark-rose-hermit-crab-belt.cyclic.app/user/getAllUser`)
    setData(response.data)
  }

  useEffect(() => {
    getAllUser()
  },[])

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
        {data.map((item) => {
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
                  {item.name}
                </Text>
                <Button size="xs" colorScheme="twitter" borderRadius="full">
                  Follow
                </Button>
              </Flex>
            </>
          );
        })}
      </Box>
    </>
  );
};

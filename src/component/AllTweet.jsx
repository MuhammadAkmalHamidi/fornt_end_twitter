import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Text,
  Flex,
  Textarea,
  Button,
  Image,
  transition,
  Icon,
  Input
} from "@chakra-ui/react";
import { GrImage } from "react-icons/gr"

import { Link } from "react-router-dom";
import {
  IoChatbubbleOutline,
  IoRepeat,
  IoShareOutline,
  IoHeartOutline,
  IoHeartSharp
} from "react-icons/io5";
import { useSelector } from "react-redux";
import  Axios  from "axios";

export const AllTweet = () => {
  const Data = [1, 2, 3]
  const [reload, setReload] = useState(true)
  const button = useRef()
  const [tweet, setTweet] = useState([])
  const [file, setFile] = useState(null)
  const tweets = async () => {
    try {
      const response = await Axios.get(`https://dark-rose-hermit-crab-belt.cyclic.app/user/getAll`)
      
      setTweet(response.data.reverse())
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    tweets()
  },[reload])

  const onTweet = async () => {
    
    const token = localStorage.getItem("token")
    try {
      const data = new FormData()
      const writer = {
        content : document.getElementById('tulisan').value,  
      }
      data.append('content', writer.content)
      data.append('file', file)
      const response = await Axios.post(`https://dark-rose-hermit-crab-belt.cyclic.app/user/write`, data,{
        headers : {Authorization : `bearer ${token}`}
      })
      setReload(!reload)
    } catch (err) {
      console.log(err);
    }
  }

  const like = async (id) => {
    try {
      const token = localStorage.getItem('token')
      const response = await Axios.post(`https://dark-rose-hermit-crab-belt.cyclic.app/user/like`,{tweetId : id},{
        headers : {Authorization : `bearer ${token}`}
      })
      setReload(!reload)
    } catch (error) {
      console.log(error);
    }
  }

  const data = useSelector((state) => state.userSlice.value)
  console.log(data);
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
        justifyContent="space-between"
      >
      <Flex cursor={"pointer"}>
        <Input hidden ref={button} cursor={"pointer"} onChange={(e) => {
          setFile(e.target.files[0])
        }}variant={"unstyled"} type="file" id="image" bgColor={"white"}  >
        </Input>
          <Icon cursor={"pointer"} onClick={() => button.current.click()}  as={GrImage}  fontSize={"25px"} />
      </Flex>
        <Button colorScheme="twitter" borderRadius="full" onClick={onTweet} >
          Tweet
        </Button>
      </Flex>
      {tweet?.map((item) => {
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
                <Avatar name={data.name} />
                <Box ml="3">
                  <Text
                    fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                    fontFamily="serif"
                  >
                    <Link fontWeight="bold"> {item.user.name} </Link>{" "}
                    {item.user.email} - {item.createdAt}
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
                    {item.content}
                  </Text>
                  <Box>
                    <img src={`https://dark-rose-hermit-crab-belt.cyclic.app/${item.Image}`} alt="" />
                  </Box>
                </Box>
              </Flex>

              <Flex
               alignItems={"center"}
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
                <Flex justifyContent={"center"}  alignItems={"center"}>
                  {item.likeTweets.findIndex(item => item.userId == data.id) !== -1 ? <IoHeartSharp onClick={()=> like(item.id)} color="red" cursor={"pointer"} />  : <IoHeartOutline onClick={()=> like(item.id)} color="black" cursor={"pointer"} /> }    
                  <Text> {item.likeTweets.length} </Text>
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

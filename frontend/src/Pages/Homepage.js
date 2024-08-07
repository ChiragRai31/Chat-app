import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect,Image } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import backgroundImage from '../logo.png'
function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#F26523"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
        
      <img src={backgroundImage} width={70} height={20} alt="log" px="20px"/>
        <Text fontSize="4xl" p="10px" fontFamily="Work sans" fontWeight="semibold">
          Type08
        </Text>
      </Box>
      <Box color="white" bg="#292524" w="100%" p={4} borderRadius="md" borderWidth="1px">
        <Tabs  isFitted variant="enclosed" colorScheme="orange  ">
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bg: 'orange.500' }}>Login</Tab>
            <Tab _selected={{ color: 'white', bg: 'orange.500' }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

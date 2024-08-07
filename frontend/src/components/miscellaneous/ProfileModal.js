import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton bg="#1C1917"   d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} color="teal.500"  />
      )}
      <Modal bg="#1C1917"  size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg="#1C1917" h="410px">
          <ModalHeader 
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center" color="#FFFFFF"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton color="teal.500" />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text 
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans" color="#FFFFFF"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button bg="#292524" color="#FFFFFF" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;

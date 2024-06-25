import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.900" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Financial Times</Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} color="gray.800">Home</Link>
          <Link as={RouterLink} to="/about" px={2} color="gray.800">About</Link>
          <Link as={RouterLink} to="/contact" px={2} color="gray.800">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
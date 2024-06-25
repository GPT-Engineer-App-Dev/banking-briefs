import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="gray.800">Welcome to Financial Times</Heading>
        <Text fontSize="lg" color="gray.700">Your source for the latest financial news and market data.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
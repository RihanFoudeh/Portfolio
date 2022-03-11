import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
     
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify="center" 
        align="center" 
      >
        <Stack direction={"row"} spacing={6}></Stack>
        <Text>© 2022 made by Rihan Foudeh </Text>
      </Container>
    </Box>
  );
}

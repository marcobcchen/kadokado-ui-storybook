import React from "react";
import { Box, Flex } from "theme-ui";

const Card = () => {
  return (
    <Flex p={3} sx={{ justifyContent: "space-between", background: "hotpink" }}>
      <Box sx={{ background: "hotpink" }}>A</Box>
      <Box sx={{ background: "hotpink" }}>B</Box>
    </Flex>
  );
};

export default Card;

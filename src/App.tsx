import "./App.css";
import React from "react";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

import TopBar from "./components/TopBar";

function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
}

export default App;

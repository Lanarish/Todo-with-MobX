import * as React from "react";
import { Button, Flex, Grid } from "@chakra-ui/react";

import store from "../store";
import { observer } from "mobx-react-lite";

/*
JSON source: https://jsonplaceholder.typicode.com/todos
*/
const completedTodos = () => {
  const compleeted = store.todos.filter((todo) => todo.completed === true);
  return compleeted.length;
};
const TopBar = () => {
  const loadTodos = () => {
    store.load("https://jsonplaceholder.typicode.com/todos");
  };
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <Flex justifyContent="center" alignItems="center">
        Completed todos: {completedTodos()} / {store.todos.length}
      </Flex>
      <Button onClick={loadTodos}>Load todos</Button>
    </Grid>
  );
};

export default observer(TopBar);

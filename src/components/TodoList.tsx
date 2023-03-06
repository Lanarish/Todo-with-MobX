import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import store from "../store";

import { observer } from "mobx-react-lite";

const TodoListItems = () => {
  return (
    <>
      {store.todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            mx={2}
            isChecked={todo.completed}
            onChange={(e) => {
              todo.completed = e.target.checked;
            }}
          />
          <Input
            mx={2}
            value={todo.title}
            onChange={(e) => (todo.title = e.target.value)}
          />
          <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
};

const TodoListItemsObserver = observer(TodoListItems);

const TodoList = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItemsObserver />
    </>
  );
};

export default TodoList;

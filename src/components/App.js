import React from "react";
import "../styles/App.css";
import UserList from "./UserList";
import Counter from "./Counter";
import TodoList from "./TodoList";
// DRY => Dont Repeat Yourself
function App({ users }) {
  return (
    <>
      <UserList users={users} />
      <TodoList list/>
    </>
  );
}

export default App;

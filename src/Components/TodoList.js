import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItems";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="퇴근 후 개발 공부" done={true} />
      <TodoItem text="리액트랑 제발 친해지기" done={true} />
      <TodoItem text="피곤하다" done={false} />
      <TodoItem text="전역하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;

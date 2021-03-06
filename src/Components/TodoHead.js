import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    msrgin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .task-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2022년 5월 31일</h1>
      <div className="day">화요일</div>
      <div className="task-left">남은 할 일</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;

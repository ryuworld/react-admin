import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px #eee;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImg = styled.div`
  width: 50px;
  height: 50px;
  background: #ddd;
  border-radius: 25px;
  margin-right: 10px;
`;

export const StyledList = styled.li`
  padding: ${props => props.padding ?? '20px'};
`;

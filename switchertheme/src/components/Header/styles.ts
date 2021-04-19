import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  height: 60px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
`
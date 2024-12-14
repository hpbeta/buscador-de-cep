import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 40px;
    margin-bottom: 15px;
  }
`;

export const ContainerCabecalho = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
  background-color: #b8b9bd;
  border-radius: 5px;

  input {
    outline: none;
    padding: 15px 0 10px 7px;
    border: none;
    width: 300px;
    background-color: transparent;
    padding-left: 12px;
  }

  input::placeholder {
    color: #212121;
  }
`;

export const StyledIcons = styled.button`
  width: 30px;
  height: 35px;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin-top: 5px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  background-color: #ffffff;
  color: #000000;

  h2 {
    margin: 10px 0;
  }

  span {
    margin-bottom: 15px;
  }
`;

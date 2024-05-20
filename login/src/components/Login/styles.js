import styled from "styled-components";

export const TelaLogin = styled.div`
  width: 450px;

  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 40px;
  background-color: #333;
  margin-top: 40px;
  h1 {
    text-align: center;
    font-size: 30px;
    color: #ffff;
  }
`;
export const Formulario = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px auto;

  input {
    width: 100%;
    height: 100%;
    background: transparent;

    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 5px 0 5px 25px;
  }
  input::placeholder {
    color: #fff;
  }
  .icon {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #fff;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: 15px 0 15px;
  color: #fff;

  label input {
    accent-color: #fff;
    margin-right: 4px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    margin-left: 80px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 700;
  text-shadow: none;
  margin: 5px 0;

  button:hover {
    background-color: blue;
    transition: 0.5s;
    color: #fff;
  }

  button:active {
    background: black;
  }
`;

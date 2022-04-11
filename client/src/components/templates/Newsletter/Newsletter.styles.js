import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 50vh;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 30vw;
  border: 1px solid grey;
  border-radius: 0.2rem;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding: 0.5rem;
  font: inherit;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: black;
  border: 1px solid grey;
  border-radius: 0.2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 3rem;
  display: grid;
  place-content: center;
  color: white;
  transition: all 0.3s ease;

  :hover {
    color: black;
    background-color: white;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }
`;

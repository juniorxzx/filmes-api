import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const MoovieList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Back = styled.button`
  background-color: red;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: ease-in 0.5s;

  &:hover {
    background-color: #800000;
  }
`;
export const Moovie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 300px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
 
 
`;

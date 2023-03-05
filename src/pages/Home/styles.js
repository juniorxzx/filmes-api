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

export const Search = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  li {
    margin: 20px 0;
  }
  input {
    width: 80%;
    height: 50px;
    font-size: 20px;
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    color: red;
    font-weight: 600;
    text-transform: capitalize;
  }

  input:focus {
    outline: none;
  }

  .button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 1rem;
    border: none;
    background-color: white;
  
  }
`;

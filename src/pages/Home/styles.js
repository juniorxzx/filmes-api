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
  a {
    transition: all 0.5s;
  }
  a:hover {
    transform: scale(1.1);
  }
`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .button {
    display: flex;
    align-items: center;

    text-decoration: none;
    background-color: red;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    font-size: 100%;
    transition: ease-in 0.5s;
    &:hover {
      background-color: #800000;
    }
  }
  input {
    width: 80%;
    height: 64px;
    font-size: x-large;
    border-radius: 3rem;
    padding: 1rem;
    border: none;
    color: red;
    font-weight: 600;
    text-transform: capitalize;
  }

  input:focus {
    outline: none;
  }
`;

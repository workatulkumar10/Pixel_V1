import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  li a {
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 500;
    color: #000; /* Text color: black for contrast */
    background: #fff; /* Background color: white */
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #f0f0f0;
      color: #9f70fd;
      box-shadow: 0 0 10px rgba(159, 112, 253, 0.4);
    }
  }
`;
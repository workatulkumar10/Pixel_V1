import styled from "styled-components";

export const Container = styled.footer`
  padding: 0.6rem 0.4rem; /* Tighter vertical and horizontal padding */
  background-color: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  color: #aaa;
  font-family: 'Inter', sans-serif;

  p {
    font-size: 0.75rem; /* Smaller font */
    margin-bottom: 0.4rem; /* Less margin below text */
    letter-spacing: 0.02em;
    color: #777;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 0.8rem; /* Reduced spacing between icons */

    a {
      font-size: 1.1rem; /* Slightly smaller icons */
      color: #666;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        color: #fff;
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.7rem;
    }

    .social-icons a {
      font-size: 1rem;
    }
  }
`;
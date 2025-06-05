import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(3px);
  z-index: 1;
`;

export const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 2rem;
  color: #fff;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    font-size: 2.6rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: #ffffff;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    background: linear-gradient(90deg, #a78bfa, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 1rem;

    span {
      color: #60a5fa;
    }

    strong {
      background: linear-gradient(to right, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: #ddd;
    margin-bottom: 2rem;
    max-width: 600px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    background: linear-gradient(to right, #764ba2, #667eea);
    color: #fff;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.3s ease;

    &:hover {
      background: linear-gradient(to right, #5a3e85, #5466cc);
    }
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.8rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    backdrop-filter: blur(4px);

    &:hover {
      transform: translateY(-6px) scale(1.1);
    }

    &.linkedin:hover {
      background-color: #0077b5;
    }

    &.gmail:hover {
      background-color: #ea4335;
    }

    &.telegram:hover {
      background-color: #0088cc;
    }
  }
`;
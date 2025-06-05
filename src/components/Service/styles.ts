import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  position: relative;
  overflow: hidden;
  height: auto;
  padding: 6rem 2rem;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.5);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: #fff;

  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    background: linear-gradient(90deg, #9f70fd, #7368f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

export const Card = styled.div`
  position: relative;
  height: 320px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.035);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }

  &:hover video {
    opacity: 1;
    filter: brightness(1);
  }
`;

export const CardVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0;
  filter: brightness(0.5);
  transition: opacity 0.4s ease, filter 0.4s ease;
  pointer-events: none;
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e0e0e0;
  }
`;

export const AccentBar = styled.div`
  width: 50px;
  height: 4px;
  background: linear-gradient(90deg, #7f5af0, #2cb67d);
  border-radius: 2px;
  margin-bottom: 1rem;
`;
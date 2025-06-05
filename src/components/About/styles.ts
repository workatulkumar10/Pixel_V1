import styled from "styled-components";
import { motion } from "framer-motion";

// Section container with modern dark gradient
export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0f0f0f, #1c1c1c);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Background video (soft and interactive feel)
export const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  filter: blur(5px);
  z-index: 1;
  pointer-events: none;
`;

// Overlay layer with subtle dark blend
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

// Central content wrapper
export const CenteredContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Gradient heading
export const StyledHeading = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #a78bfa, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Paragraph text
export const StyledParagraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #e0e0e0;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);
  max-width: 750px;
  margin-bottom: 1rem;

  strong {
    color: #fff;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Cards container
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  padding: 0 1rem;
  z-index: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Individual card
export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  width: 280px;
  backdrop-filter: blur(5px);
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-6px);
  }
`;

// Card image/video wrapper
export const CardImage = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 1rem;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

// Card title
export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
`;

// Card description
export const CardText = styled.p`
  font-size: 1rem;
  color: #d0d0d0;
  line-height: 1.6;
`;
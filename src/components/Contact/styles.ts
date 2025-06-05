import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
`;

export const CardBackground = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.5);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  z-index: 2;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  padding: 3rem 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-top: 1.6rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  font-size: 1rem;
  backdrop-filter: blur(4px);
  outline: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.4rem;
    font-size: 0.75rem;
    color: #a855f7;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 1.2rem;
  left: 1rem;
  color: #ccc;
  font-size: 1rem;
  pointer-events: none;
  transition: 0.2s ease;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 130px;
  padding: 1rem;
  padding-top: 1.6rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  font-size: 1rem;
  backdrop-filter: blur(4px);
  outline: none;
  resize: vertical;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.4rem;
    font-size: 0.75rem;
    color: #a855f7;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #8b5cf6, #c084fc);
  border: none;
  border-radius: 14px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(139, 92, 246, 0.5);
  }
`;

export const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: #a3e635;
  font-weight: 600;
`;
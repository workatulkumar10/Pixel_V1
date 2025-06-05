import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container,
  CardWrapper,
  CardBackground,
  Overlay,
  Content,
  Title,
  Form,
  InputGroup,
  Input,
  Label,
  Textarea,
  Button,
  SuccessMessage,
} from "./styles";
import { motion } from "framer-motion";

const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [captchaValid, setCaptchaValid] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false); // If you want to trigger this later

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  return (
    <Container id="contact">
      <CardWrapper>
        <CardBackground autoPlay muted loop>
          <source src="/Contactbg.mp4" type="video/mp4" />
        </CardBackground>
        <Overlay />
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>Contact Us</Title>
            <Form
              action="https://formspree.io/f/mvgrgvpl"
              method="POST"
              onSubmit={(e) => {
                if (!captchaValid) {
                  e.preventDefault();
                  alert("Please complete the reCAPTCHA.");
                } else {
                  setFormSuccess(true); // Optional: only if you want success message to show
                }
              }}
            >
              <InputGroup>
                <Input type="text" name="name" placeholder="Your Name" required />
                <Label>Your Name</Label>
              </InputGroup>
              <InputGroup>
                <Input type="email" name="email" placeholder="Your Email" required />
                <Label>Your Email</Label>
              </InputGroup>
              <InputGroup>
                <Textarea name="message" placeholder="Your Message" required />
                <Label>Your Message</Label>
              </InputGroup>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Le2WlYrAAAAAJQ25sB1Ygov255qBj13WnX3TUKT"
                onChange={handleCaptchaChange}
              />

              <Button type="submit">Send Message</Button>
              {formSuccess && (
                <SuccessMessage>Thank you! We'll be in touch.</SuccessMessage>
              )}
            </Form>
          </motion.div>
        </Content>
      </CardWrapper>
    </Container>
  );
};

export default Contact;
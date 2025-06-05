
import { Container, Overlay, VideoBackground, Content, SocialIcons } from "./styles";
import { motion } from "framer-motion";
import { FaLinkedin, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import bgVideo from "../../assets/herobg.mp4";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <Container id="hero">
      <VideoBackground autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />

      <Content>
        <motion.div
          className="logo"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Pixellium
        </motion.div>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <span>Synchronizing</span> Ideas <br />
          into <strong>Impact</strong>
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          We craft design, motion & web solutions to shape stunning experiences.
        </motion.p>

        <motion.a
          href="#services"
          className="cta-button"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Explore Our Work
        </motion.a>

        <SocialIcons
          as={motion.div}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a
            href="https://www.linkedin.com/company/pixellium-co/"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="gmail">
            <FaEnvelope />
          </a>
          <a
            href="https://t.me/yourTelegram"
            className="telegram"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </a>
        </SocialIcons>
      </Content>
    </Container>
  );
};

export default Hero;
import {
  Container,
  VideoBackground,
  Overlay,
  CenteredContent,
  StyledHeading,
  StyledParagraph,
  CardsContainer,
  Card,
  CardImage,
  CardTitle,
  CardText,
} from "./styles";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const cards = [
    {
      icon: "/aboutCard1.jpeg", // ✅ Public path
      title: "Creative Design",
      text: "Visual storytelling through stunning UI/UX.",
    },
    {
      icon: "/aboutCard2.jpeg", // ✅ Public path
      title: "Clean Code",
      text: "Frontend and backend solutions that scale.",
    },
    {
      icon: "/aboutCard3.mp4", // ✅ Public video path
      title: "Motion Magic",
      text: "Seamless looping videos for immersive section design.",
    },
  ];

  return (
    <Container id="about">
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/about2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />

      <CenteredContent>
        <StyledHeading
          as={motion.h2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          About Pixellium
        </StyledHeading>

        <StyledParagraph
          as={motion.p}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          At <strong>Pixellium</strong>, we don’t just design—we craft immersive
          digital experiences. From bold brand identities to interactive web
          solutions, our passion is to transform ideas into impactful realities.
        </StyledParagraph>

        <StyledParagraph
          as={motion.p}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
        >
          Our team thrives at the intersection of design, code, and motion,
          turning vision into visual storytelling. Every project is an
          opportunity to push boundaries and spark engagement.
        </StyledParagraph>

        <StyledParagraph
          as={motion.p}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={4}
          viewport={{ once: true }}
        >
          Welcome to <strong>Pixellium</strong> — where creativity meets
          technology, and imagination fuels innovation.
        </StyledParagraph>

        <CardsContainer>
          {cards.map((card, i) => (
            <Card
              as={motion.div}
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i + 5}
              viewport={{ once: true }}
            >
              <CardImage>
                {typeof card.icon === "string" && card.icon.endsWith(".mp4") ? (
                  <video src={card.icon} autoPlay muted loop playsInline />
                ) : (
                  <img src={card.icon} alt={card.title} />
                )}
              </CardImage>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </Card>
          ))}
        </CardsContainer>
      </CenteredContent>
    </Container>
  );
};

export default About;
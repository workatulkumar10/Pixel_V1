import { useRef } from "react";
import {
  Container,
  VideoBackground,
  Overlay,
  Content,
  Card,
  CardVideo,
  CardOverlay,
  CardContent,
  AccentBar,
} from "./styles";
import { motion } from "framer-motion";

const services = [
  {
    title: "Branding & Design",
    description:
      "We shape your brand’s identity through compelling visuals and cohesive design strategy.",
    video: "card1.mp4",
  },
  {
    title: "Motion Graphics",
    description:
      "Engage your audience with dynamic animations and creative motion visuals.",
    video: "card2.mp4",
  },
  {
    title: "Website Development",
    description:
      "We build responsive, high-performance websites tailored to your business goals.",
    video: "card3.mp4",
  },
];

const Services = () => (
  <Container
    id="services"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <VideoBackground autoPlay loop muted>
      <source src="/servicebg.mp4" type="video/mp4" />
    </VideoBackground>
    <Overlay />

    <Content>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => {
          const videoRef = useRef<HTMLVideoElement>(null);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => {
                  if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0; // Rewind
                  }
                }}
              >
                <CardVideo ref={videoRef} muted loop>
                  <source src={service.video} type="video/mp4" />
                </CardVideo>
                <CardOverlay />
                <CardContent>
                  <AccentBar />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Content>
  </Container>
);

export default Services;
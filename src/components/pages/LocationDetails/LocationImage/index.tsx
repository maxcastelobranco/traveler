import React from "react";
import { useStyles } from "./styles";
import { preventImageDrag } from "../../../../utils/preventImageDrag";
import { motion, Transition, Variants } from "framer-motion";

interface LocationImageProps {
  src: string;
  name: string;
}
const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const transition: Transition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
};
const LocationImage: React.FC<LocationImageProps> = ({ src, name }) => {
  const { image } = useStyles();
  return (
    <motion.img
      {...preventImageDrag}
      {...{ src, variants, transition }}
      initial="initial"
      animate="animate"
      alt={name}
      className={image}
    />
  );
};

export default LocationImage;

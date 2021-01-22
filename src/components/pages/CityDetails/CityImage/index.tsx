import React from "react";
import { useStyles } from "./styles";
import { preventImageDrag } from "../../../../utils/preventImageDrag";
import { motion, Transition, Variants } from "framer-motion";

interface CityImageProps {
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

const CityImage: React.FC<CityImageProps> = ({ src, name }) => {
  const { container, image } = useStyles();

  return (
    <div className={container}>
      <motion.img
        {...preventImageDrag}
        {...{ variants, transition }}
        initial="initial"
        animate="animate"
        src={src}
        alt={name}
        className={image}
      />
    </div>
  );
};

export default CityImage;

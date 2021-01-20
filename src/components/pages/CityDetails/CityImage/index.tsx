import React from "react";
import { useStyles } from "./styles";
import { preventImageDrag } from "../../../../utils/preventImageDrag";

interface CityImageProps {
  src: string;
  name: string;
}

const CityImage: React.FC<CityImageProps> = ({ src, name }) => {
  const { container, image } = useStyles();

  return (
    <div className={container}>
      <img {...preventImageDrag} src={src} alt={name} className={image} />
    </div>
  );
};

export default CityImage;

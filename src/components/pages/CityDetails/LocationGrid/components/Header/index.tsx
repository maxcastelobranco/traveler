import React from "react";
import { Button, Typography, useTheme } from "@material-ui/core";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { useStyles } from "./styles";
import { CategoryOptions } from "../../../../../../hooks/types";
import { Theme } from "../../../../../../theme";

interface HeaderProps {
  selectedCategory: CategoryOptions;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryOptions>>;
}

const categories: CategoryOptions[] = [
  "All",
  "Tourist Spots",
  "Food and Drinks",
  "Organized Events",
];
const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
const transition: Transition = {
  type: "spring",
  bounce: 0.4,
};

const Header: React.FC<HeaderProps> = ({ selectedCategory, setSelectedCategory }) => {
  const { container, categoriesContainer, categoryButton, underline } = useStyles();
  const {
    palette: {
      text: { primary, secondary },
    },
  } = useTheme<Theme>();

  return (
    <div className={container}>
      <Typography variant="h4">Discover all locations</Typography>
      <div className={categoriesContainer}>
        {categories.map(category => {
          const isSelected = category === selectedCategory;

          return (
            <Button
              key={category}
              className={categoryButton}
              style={{
                color: isSelected ? primary : secondary,
              }}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    className={underline}
                    {...{ variants, transition }}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                  />
                )}
              </AnimatePresence>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

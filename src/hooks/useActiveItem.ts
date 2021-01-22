import { useState } from "react";

export const useActiveItem = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return {
    activeItem,
    setActiveItem,
  };
};

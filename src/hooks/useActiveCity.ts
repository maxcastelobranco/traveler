import { useState } from "react";

export const useActiveCity = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return {
    activeCity,
    setActiveCity,
  };
};

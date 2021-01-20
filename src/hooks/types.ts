export interface CityData {
  id: string;
  name: string;
  description: string;
  image: string;
  numberOfLocations: number;
}

export type Category = "Tourist Spots" | "Food and Drinks" | "Organized Events";

export const categories: Category[] = ["Tourist Spots", "Food and Drinks", "Organized Events"];

export interface LocationData {
  id: string;
  cityId: string;
  name: string;
  description: string;
  category: Category;
  rating: number;
  image: string;
}

export type Category = "Tourist Spots" | "Food and Drinks" | "Organized Events";
export type CategoryOptions = Category | "All";
export const categories: Category[] = ["Tourist Spots", "Food and Drinks", "Organized Events"];
export interface CityData {
  id: string;
  name: string;
  description: string;
  image: string;
  numberOfLocations: number;
}
export interface LocationData {
  id: string;
  cityId: string;
  name: string;
  description: string;
  category: Category;
  rating: number;
  image: string;
}
export interface CommentData {
  id: string;
  locationId: string;
  username: string;
  image: string;
  comment: string;
  rating: number;
}

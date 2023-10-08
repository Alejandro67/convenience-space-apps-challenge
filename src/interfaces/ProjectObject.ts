import Category from "./Category";

export interface ProjectObject {
  name: string;
  categories: string[];
  meta: Meta;
  about: string;
  communityId: string;
  image: string;
  author: string;
}
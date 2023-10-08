import Category from "@/interfaces/Category";

type Project = {
  id: string;
  file: ProjectFile[];
  name: string;
  categories: string[];
  meta: Meta;
  about: string;
  communityId: string;
  image: string;
  author: string
};

type ProjectFile = {
  id: string;
  uri: string;
  name: string;
  uploaderId: string;
  meta: Meta;
};

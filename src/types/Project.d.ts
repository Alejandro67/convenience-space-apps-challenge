import Category from "@/interfaces/Category";

type Project = {
  id: string;
  file: ProjectFile[];
  name: string;
  categories: Category[];
  meta: Meta;
  about: string;
  community: Community;
};

type ProjectFile = {
  id: string;
  uri: string;
  name: string;
  uploaderId: string;
  meta: Meta;
};

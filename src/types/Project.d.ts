import Category from "@/interfaces/Category";

type Project = {
    id:string;
    file: ProjectFile[],
    name:string;
    categories: Category[],
    description:string;
    meta: Meta;
    about: string;
}

type ProjectFile = {
    id:string;
    uri: string,
    name:string;
    uploaderId:string;
    meta: Meta;
}
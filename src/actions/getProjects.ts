import { Project } from "@/types/Project"
import { ProjectFile } from "@/types/Project"

async function getProjects(){
    let projects: Project[] = [
        {
            id: "1",
            name:"proyecto1",
            description:"description1",
            about:"abouttext",
            file:[{
                id:"11",
                uri:"www.google.com",
                name:"file1",
                uploaderId:"user1",
                meta:{
                    createdAt:new Date(),
                    updatedAt: new Date(),
                    deletedAt: undefined
                }
            }],
            categories: [
                {
                    name:"fisica",
                    description:"physics projects",
                    imageUrl:"www.google.com"
                }
            ],
            meta: {
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: undefined
            }
        }
    ]
    return projects
}
import { Project } from "@/types/Project"
import { ProjectFile } from "@/types/Project"
import { collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore"
import {db} from "../../firebase"

export default async function getProjects(){
    /*let projects: Project[] = [
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
            },
            community: {
                members: [
                    {
                        userId:"user1",
                        joinedAt: new Date()
                    }
                ],
                comments: [],
                id: "111"
            }
        }
    ]
    return projects*/
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projectArray = querySnapshot.docs.map((doc) => doc.data()) as Project[]
    console.log(projectArray)
    return projectArray
}
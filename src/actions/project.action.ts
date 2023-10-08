import { Project } from "@/types/Project"
import { ProjectFile } from "@/types/Project"
import { collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore"
import {db} from "../../firebase"
import { addDoc } from "firebase/firestore";
import { ProjectObject } from "@/interfaces/ProjectObject";

async function get(){
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
    const projectArray = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})) as Project[]
    console.log(projectArray)
    return projectArray
}

async function add(project:ProjectObject):Promise<Project | undefined>{
    try {
        const docRef = await addDoc(collection(db, "projects"), project);
        console.log("Document written ", docRef.id);
        return ({
            ...project,
            id:docRef.id
        } as Project)
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e
    }
}

const ProjectActions = {
    add,
    get
}

export default ProjectActions
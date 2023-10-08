import ProjectActions from "@/actions/project.action";
import getProjects from "@/actions/project.action";
import { Project } from "@/types/Project";
import {createContext, useReducer, useEffect, useContext} from "react"

type State = {
    loading: boolean;
    projects: Project[];
  };
  
  type DispatchPayload = {
    type: "set";
    newState: State;
  };
  
  export const ProjectsContext = createContext<{
    state: State;
    dispatch: React.Dispatch<DispatchPayload>;
    loadProjects: () => void;
    createProject: (project:Project) => Promise<Project | undefined>
  }>({
    state: {
      loading: false,
      projects: [] as Project[],
    },
    dispatch: () => {},
    loadProjects: () => {},
    createProject: (project:Project) => ({} as Promise<Project | undefined>)
  });

  function ProjectsReducer(state: State, action: DispatchPayload) {
    switch (action.type) {
      case "set":
        return { ...state, ...action.newState };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  export default function ProjectsProvider(props: { children: any }){
    const [state, dispatch] = useReducer(ProjectsReducer, {
        loading: false,
        projects: new Array<Project>(0),
    });

    async function loadProjects(){
        try{
            const response = await ProjectActions.get()
            dispatch({
                type:"set",
                newState:{
                    loading:false,
                    projects: response as Project[]
                }
            })
        }catch(e){
            throw e
        }
    }

    async function createProject(project:Project):Promise<Project | undefined>{
        try{
            const response = await ProjectActions.add(project)
            const updatedProjects = state.projects
            updatedProjects.push(response as Project)
            dispatch({
                type:"set",
                newState: {
                    loading:false,
                    projects: updatedProjects
                }
            })
            return response
        } catch(e){
            throw e
        }
    }

    useEffect(()=> {
        loadProjects()
    }, [])

    return (
        <ProjectsContext.Provider
          value={{
            state,
            dispatch,
            loadProjects,
            createProject
          }}
        >
          {props.children}
        </ProjectsContext.Provider>
    );
  }

export function useProjects() {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error("useContacts must be used within a ContactsProvider");
    }
    return context;
}
  
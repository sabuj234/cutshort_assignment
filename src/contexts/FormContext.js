import { createContext,useState,useContext,useReducer } from "react";
import { FormReducer,initialState } from "./FormReducer";

const FormContext = createContext();

const FormProvider =({children}) =>{
    const [state,dispatch] = useReducer(FormReducer,initialState);
    const levels = Object.keys(state);
    const [currentPage,setCurrentPage] = useState(levels[0]);

    const submitNamesDivision =(details) =>{
        const{fullName,displayName} = details;
        dispatch({
            type:"SET_NAME_DETAILS",
            payload :{fullName,displayName}
        });
    };
    const submitWorkspaceDivision =(details)=>{
        const{workspaceURL,workspaceName} = details;
        dispatch({
            type:"SET_WORKSPACE_DETAILS",
            payload:{workspaceURL,workspaceName}
        });
    };
    const planningDetails=(select)=>{
        dispatch({
            type:"SET_PLANNING_DETAILS",
            payload:select
        });
    };
    const submitStreamlineDivision=()=>{
        dispatch({
            type:"SET_SUCCESS",
        });
    };
    const values={
        state,
        dispatch,
        currentPage,
        setCurrentPage,
        submitNamesDivision,
        submitStreamlineDivision,
        submitWorkspaceDivision,
        planningDetails,
        levels
    }
    return <FormContext.Provider value={values}>
        {children}
    </FormContext.Provider>
}

const useFormContext =()=>useContext(FormContext);

export{useFormContext,FormProvider}
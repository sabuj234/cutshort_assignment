export const initialState = {
    nameDivision: {
        fullName : "",
        displayName : "",
        isCompleted: false,
    },
    workspaceDivision :{
        workspaceName : "",
        workspaceURL : "",
        isCompleted:false,
    },
    streamlineDivision:{
        self : true, // default
        team: false,
        isCompleted:false
    }
};

export const FormReducer = (state,action) =>{
    const {type, payload} = action;
    switch(type){
        case "SET_NAME_DETAILS" : 
            const {fullName, displayName} = payload;
            return{
                ...state, nameDivision:{fullName,displayName,isCompleted:true}
            };
        case "SET_WORKSPACE_DETAILS" : 
            const {workspaceName,workspaceURL} = payload;
            return{
                ...state,workspaceDivision:{
                    workspaceName,workspaceURL,isCompleted:true
                }
            };
        case "SET_PLANNING_DETAILS" : 
                return {
                    ...state,
                    streamlineDivision:{
                        ...state.streamlineDivision,
                        self: payload === "self"? true:false,
                        team : payload === "team" ?true :false
                    }
                };
        case "SET_SUCCESS" : 
            return {
                ...state, streamlineDivision: { ...state.streamlineDivision,isCompleted:true}
            };
        default : 
            return state;
    }
}
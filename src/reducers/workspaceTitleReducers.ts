import * as actionTypes from '../actions/actionTypes/workspaceTitleTypes';

export interface IWorkspaceTitleReducer {
    workspaceTitle: string,
};

const defaultState = (): IWorkspaceTitleReducer => ({
    workspaceTitle: "Current title"
});

export default ( state = defaultState(), action: any ) => {
    switch (action.type) {
        case actionTypes.PUSH_WORKSPACE_TITLE: {
            const data: actionTypes.IWorkspaceTitleTypes['PUSH_WORKSPACE_TITLE'] = action;
            return {
                ...state,
                workspaceTitle: data.workspaceTitle

            }
        }
        default: {
            return state;
        }
    }
} 
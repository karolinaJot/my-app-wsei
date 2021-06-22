import { Dispatch } from "redux";

import * as actionTypes from '../actions/actionTypes/workspaceTitleTypes';
import { IWorkspaceTitleReducer } from "../reducers/workspaceTitleReducers";

export const getWorkspaceTitle = ( workspaceTitle: string): Promise<IWorkspaceTitleReducer> => ((dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.PUSH_WORKSPACE_TITLE,
        workspaceTitle
    })
}) as any;
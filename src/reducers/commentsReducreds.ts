import { ISingleComment } from '../entities/comments';
import * as actionTypes from '../actions/actionTypes/commentType';

export interface ICommetsReducer {
    commentsList: ISingleComment[];
};

const defaultState = (): ICommetsReducer => ({
    commentsList: [],
});

export default ( state = defaultState(), action: any ) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.ICommetTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commetsList: data.commentsList
            }
        }

        default: {
            return state;
        }
    };
};
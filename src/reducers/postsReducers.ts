import { ISinglePost} from '../entities/posts';
import * as actionTypes from '../actions/actionTypes/postType';

export interface IPostsReducers {
    postsList: ISinglePost[];
};

const defaultState = (): IPostsReducers => ({
    postsList: [],
});

export default ( state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_POSTS: {
            const data: actionTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: data.postsList
            }
        }
        default: {
            return state;
        }
    }

}


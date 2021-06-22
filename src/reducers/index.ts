import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotosReducer } from './photosReducers';
import comments, { ICommetsReducer } from './commentsReducreds';
import posts, { IPostsReducers } from './postsReducers';
import workspaceTitle, { IWorkspaceTitleReducer } from './workspaceTitleReducers';

export default combineReducers({
    users,
    photos,
    comments,
    posts,
    workspaceTitle,
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
    comments: ICommetsReducer;
    posts: IPostsReducers;
    workspaceTitle: IWorkspaceTitleReducer;
};
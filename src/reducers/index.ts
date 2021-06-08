import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotosReducer } from './photosReducers';
import comments, { ICommetsReducer } from './commentsReducreds';
import posts, { IPostsReducers } from './postsReducers';

export default combineReducers({
    users,
    photos,
    comments,
    posts
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
    comments: ICommetsReducer;
    posts: IPostsReducers;
};
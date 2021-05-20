import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotosReducer } from './photosReducers';
import comments, { ICommetsReducer } from './commentsReducreds';

export default combineReducers({
    users,
    photos,
    comments
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
    comments: ICommetsReducer;
};
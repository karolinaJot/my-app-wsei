import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotosReducer } from './photosReducers';

export default combineReducers({
    users,
    photos
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
};
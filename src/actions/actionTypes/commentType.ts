import { ISingleComment } from '../../entities/comments';

export const GET_COMMENTS = 'GET_COMMENTS';

export interface ICommetTypes {
    GET_COMMENTS: {
        commentsList: ISingleComment[];
    };
};
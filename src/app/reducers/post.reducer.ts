import { Action } from '@ngrx/store';
import { Post } from '../models/post.model';
import * as PostActions from '../actions/post.actions';

const initialState: Post = {
  text: 'Hello',
  votes: 0,
};

export function postReducer(state: Post = initialState, action: Action): Post {
  switch (action.type) {
    case PostActions.UPVOTE:
      return { ...state, votes: state.votes + 1 };

    case PostActions.DOWNVOTE:
      return { ...state, votes: state.votes - 1 };

    case PostActions.RESET:
      return initialState;

    case PostActions.EDIT_TEXT:
      return { ...state, text: (action as PostActions.EditText).payload };

    default:
      return state;
  }
}
import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post.model';
import * as PostActions from './post.actions';

export const initialState: Post = {
  text: 'Hello',
  votes: 0,
  history: [],
};

export const postReducer = createReducer(
  initialState,

  on(PostActions.upvote, (state) => ({
    ...state, 
    votes: state.votes + 1,
    history: [...state.history, 'upvote'],
  })),

  on(PostActions.downvote, (state) => ({
    ...state,
    votes: state.votes - 1,
    history: [...state.history, 'downvote'],
  })),

  on(PostActions.reset, (state) => ({
    ...state,
    votes: 0,
    history: [...state.history, 'reset'],
  })),

  on(PostActions.editText, (state, { text }) => ({
    ...state,
    text,
    history: [...state.history, `edit: ${text}`],
  })),

  on(PostActions.clearHistory, (state) => ({
    ...state,
    history: [],
  }))
);
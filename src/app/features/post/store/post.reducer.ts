import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post.model';
import * as PostActions from './post.actions';

export const initialState: Post = {
  text: 'Hello',
  votes: 0,
  history: [],
  actionCount:0,
};

export const postReducer = createReducer(
  initialState,

  on(PostActions.upvote, (state) => ({
    ...state, 
    votes: state.votes + 1,
    history: [...state.history, 'upvote'],
  })),

  on(PostActions.doubleUpvote, (state)=>({
    ...state,
    votes:state.votes + 2,
    history:[...state.history, 'doubleUpvote']
  })),

  on(PostActions.downvote, (state) => ({
    ...state,
    votes: state.votes - 1,
    history: [...state.history, 'downvote'],
  })),

  on(PostActions.doubleDownVote,(state)=>({
    ...state,
    votes:state.votes -2,
    history:[...state.history, 'doubleDownvote']
  })),

  on(PostActions.randomVote, (state, { delta }) => ({
    ...state,
    votes: state.votes + delta,
    history: [...state.history, `randomVote(${delta})`],
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
  })),
);
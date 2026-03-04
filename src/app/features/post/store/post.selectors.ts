import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '../models/post.model';

export const selectPostState = createFeatureSelector<Post>('post');

export const selectPostText = createSelector(
  selectPostState,
  (post) => post.text
);

export const selectPostVotes = createSelector(
  selectPostState,
  (post) => post.votes
);

export const selectPostHistory = createSelector(
  selectPostState,
  (post) => post.history
);
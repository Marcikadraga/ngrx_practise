import { createAction, props } from '@ngrx/store';

export const upvote = createAction('[Post] Upvote');
export const downvote = createAction('[Post] Downvote');
export const reset = createAction('[Post] Reset');
export const clearHistory = createAction('[Post] Clear History');
export const editText = createAction(
  '[Post] Edit Text',
  props<{ text: string }>()
);

export const doubleDownVote= createAction('[Post] Double downvote');
export const doubleUpvote= createAction('[Post] Double upvote');
export const randomVote = createAction(
  '[Post] Random Vote',
  props<{ delta: number }>()
);


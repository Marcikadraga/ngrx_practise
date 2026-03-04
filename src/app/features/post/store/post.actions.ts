import { createAction, props } from '@ngrx/store';

export const upvote = createAction('[Post] Upvote');
export const downvote = createAction('[Post] Downvote');
export const reset = createAction('[Post] Reset');
export const clearHistory = createAction('[Post] Clear History');
export const editText = createAction(
  '[Post] Edit Text',
  props<{ text: string }>()
);


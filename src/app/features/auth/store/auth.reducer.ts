import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    error: null,
    loading: false,
  }))
);
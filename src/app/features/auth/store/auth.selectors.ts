import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { AuthState } from './auth.state';

export const selectAuthState = (state: AppState): AuthState => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
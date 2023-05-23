import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State
} from '@ngrx/store';
import { AuthActions } from '../actions-types';
import { User } from '../model/user.model';
//import { environment } from '../../../environments/environment';

//export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = {

// };

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state,action) => {
    return {
      user: action.user
    }
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    }
  })
);




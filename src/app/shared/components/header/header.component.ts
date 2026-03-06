import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../../core/models/user.model';
import { AppState } from '../../../features/auth/store/app.state';
import { selectCurrentUser, selectIsAuthenticated } from '../../../features/auth/store/auth.selectors';
import * as AuthActions from '../../../features/auth/store/auth.actions';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated$!: Observable<boolean>;
  user$!: Observable<User | null>;

  constructor(private store: Store<AppState>) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.user$ = this.store.select(selectCurrentUser);
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
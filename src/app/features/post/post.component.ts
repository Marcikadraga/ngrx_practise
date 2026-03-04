import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './models/post.model';
import * as PostActions from './store/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: false, 
})
export class PostComponent {
  post$: Observable<Post>;
  text = '';

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  upvote() { this.store.dispatch(PostActions.upvote()); }
  downvote() { this.store.dispatch(PostActions.downvote()); }
  resetPost() { this.store.dispatch(PostActions.reset()); }

  editText() {
    const trimmed = this.text.trim();
    if (!trimmed) return;
    this.store.dispatch(PostActions.editText({ text: trimmed }));
    this.text = '';
  }

  clearHistory() { this.store.dispatch(PostActions.clearHistory()); }
}
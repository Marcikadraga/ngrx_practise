import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PostComponent } from './features/post/post.component';
import { postReducer } from './features/post/store/post.reducer';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({ post: postReducer })],
  bootstrap: [AppComponent],
})
export class AppModule {}
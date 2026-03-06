import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { authReducer } from './features/auth/store/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({
      auth: authReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
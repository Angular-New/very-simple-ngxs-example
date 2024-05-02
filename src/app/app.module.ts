import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgxsModule } from '@ngxs/store';
import { PostsState } from './store/posts.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/posts/post/post.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PostsComponent, PostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([PostsState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

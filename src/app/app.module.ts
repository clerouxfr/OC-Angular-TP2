import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { SinglePostComponent } from './post-list/single-post/single-post.component';
import { HeaderComponent } from './header/header.component';
import { PostArrayService } from './services/post-array.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: PostFormComponent},
  {path: '', component: PostListComponent},
  {path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFormComponent,
    SinglePostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostArrayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

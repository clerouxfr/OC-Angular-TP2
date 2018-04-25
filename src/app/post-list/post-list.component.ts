import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostArrayService } from '../services/post-array.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostArrayService) {}

  posts: any[];
  postSubscription: Subscription;

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Array<object>) => {
        this.posts = posts.reverse();
      }
    );
    this.postService.emmitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}

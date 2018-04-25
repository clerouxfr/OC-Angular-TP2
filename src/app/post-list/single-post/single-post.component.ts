import { Component, Input, OnInit } from '@angular/core';
import { PostArrayService } from '../../services/post-array.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})

export class SinglePostComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostArrayService) {}

  ngOnInit() {}

  onLoveIt(post: Post) {
    this.postService.lovePost(post);
  }

  onDoNotLoveIt(post: Post) {
    this.postService.doNotLovePost(post);
  }

  onDelete(post: Post) {
    this.postService.removePost(post);
  }


}

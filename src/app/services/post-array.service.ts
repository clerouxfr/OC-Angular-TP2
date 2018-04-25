import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';


@Injectable()

export class PostArrayService {

  postsSubject = new Subject<any[]>();

  private posts: Array<object> = [
    {
      title: 'Mon premier post',
      content: 'Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus immobilis.',
      loveIt: 5,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Sed laeditur hic coetuum magnificus splendor levitate es lyricus docet, beaconvenit gloriosam.',
      loveIt: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Procedente igitur mox tempore cum adventiciu intersaepientes itinera praetenturisus pascebantur.',
      loveIt: -5,
      created_at: new Date()
    }
  ];


  emmitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  doNotLovePost(post: Post) {
    post.loveIt--;
  }

  lovePost(post: Post) {
    post.loveIt++;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1);
    this.emmitPostSubject();
  }

}

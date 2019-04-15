import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material';

import { Post } from '../models/post.model';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

import * as _ from 'lodash';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: Post[] = [
    {
      Timestamp: '2019-04-01 09:30:15',
      Content: `Greeting from Winnipeg. It is bright, sunny and lovely here.
      It seems like finally end of the winter. Finally Good days are coming.`
    },
    {
      Timestamp: '2019-03-01 15:33:15',
      Content: `Not snow again. Today when i woke up in the moring it was 
      white all over again. It seems like there is no end to this year's winter`
    }, {
      Timestamp: '2019-01-01 19:30:19',
      Content: `On plane to France. I am heading on my trip to France. It 
      will be lovely there. I am planning to visit Monaco, Marseille, Montpellier and Paris.`
    }];

  postText: string;

  constructor(
    public datepipe: DatePipe,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  createPost() {
    let timestamp = new Date();
    let fromatedTimestamp = this.datepipe.transform(timestamp, 'yyyy-mm-dd HH:mm:ss');

    this.posts.unshift(
      {
        Timestamp: fromatedTimestamp,
        Content: this.postText
      }
    );
    this.postText = '';
  }

  onDeletePost(post: Post) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      data: {
        post: post.Content
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let index = _.findIndex(this.posts, post);
        this.posts.splice(index, 1);
      }
    });

  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MatInputModule, MatIconModule, MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostsComponent } from './posts.component';

export class DatePipeStub {
  public transform(key: any): any {
    return of(key);
  }
}

export class MatDialogStub {
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatIconModule,
        MatInputModule
      ],
      providers: [
        { provide: DatePipe, useClass: DatePipeStub },
        { provide: MatDialog, useClass: MatDialogStub }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Post should create new post', () => {
    let totalPosts = component.posts.length;
    component.createPost();
    expect(component.posts.length).toBe(totalPosts + 1);
  });

  it('Delete should delete a post', () => {
    let totalPosts = component.posts.length;
    let postToDelete =
    {
      Timestamp: '2019-04-01 09:30:15',
      Content: `Greeting from Winnipeg. It is bright, sunny and lovely here.
      It seems like finally end of the winter. Finally Good days are coming.`
    };
    component.onDeletePost(postToDelete);
    expect(component.posts.length).toBe(totalPosts - 1);
  });

});

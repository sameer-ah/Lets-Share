import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public imagePath;
  imgURL: any;

  profileForm = new FormGroup({
    username: new FormControl(''),
    sex: new FormControl(''),
    dateOfBirth: new FormControl(''),
    picture: new FormControl('')
  });

  user: User = {
    Username: 'Jimmy',
    DateOfBirth: '2000-05-10',
    Sex: 'Male',
    Picture:''
  };

  constructor() { }

  ngOnInit() {
    this.profileForm.patchValue({
      username: this.user.Username,
      sex: this.user.Sex,
      dateOfBirth: this.user.DateOfBirth,
      picture:''
    });
  }

  onSave() {
    console.log(this.profileForm.value);
    this.user.Username = this.profileForm.get('username').value;
    this.user.Sex = this.profileForm.get('sex').value;
    this.user.DateOfBirth = this.profileForm.get('dateOfBirth').value;
    this.user.Picture = this.profileForm.get('picture').value;
    this.profileForm.markAsPristine();
    console.log('Save Form');
  }

  previewImage(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;      
    }
  }

}

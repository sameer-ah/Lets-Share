import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatRadioModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A form field value change should make form dirty', () => {
    expect(component.profileForm.dirty).toBeFalsy();
    component.profileForm.get('username').setValue('Sameer');
    component.profileForm.get('username').markAsDirty();
    expect(component.profileForm.get('username').value).toBe('Sameer');
    expect(component.profileForm.dirty).toBeTruthy();
  });
});

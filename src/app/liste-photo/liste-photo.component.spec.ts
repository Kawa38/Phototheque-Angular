import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePhotoComponent } from './liste-photo.component';

describe('ListePhotoComponent', () => {
  let component: ListePhotoComponent;
  let fixture: ComponentFixture<ListePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

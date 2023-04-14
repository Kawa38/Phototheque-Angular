import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffPhotoComponent } from './aff-photo.component';

describe('AffPhotoComponent', () => {
  let component: AffPhotoComponent;
  let fixture: ComponentFixture<AffPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

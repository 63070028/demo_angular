import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqaureWidthComponent } from './sqaure-width.component';

describe('SqaureWidthComponent', () => {
  let component: SqaureWidthComponent;
  let fixture: ComponentFixture<SqaureWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqaureWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqaureWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

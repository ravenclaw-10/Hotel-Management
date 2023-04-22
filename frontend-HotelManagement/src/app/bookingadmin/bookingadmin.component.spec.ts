import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingadminComponent } from './bookingadmin.component';

describe('BookingadminComponent', () => {
  let component: BookingadminComponent;
  let fixture: ComponentFixture<BookingadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

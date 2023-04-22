import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffadminComponent } from './staffadmin.component';

describe('StaffadminComponent', () => {
  let component: StaffadminComponent;
  let fixture: ComponentFixture<StaffadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

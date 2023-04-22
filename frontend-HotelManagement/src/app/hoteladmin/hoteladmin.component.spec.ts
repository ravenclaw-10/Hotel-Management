import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminComponent } from './hoteladmin.component';

describe('HoteladminComponent', () => {
  let component: HoteladminComponent;
  let fixture: ComponentFixture<HoteladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteladminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

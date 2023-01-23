import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffticketlistComponent } from './staffticketlist.component';

describe('StaffticketlistComponent', () => {
  let component: StaffticketlistComponent;
  let fixture: ComponentFixture<StaffticketlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffticketlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffticketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

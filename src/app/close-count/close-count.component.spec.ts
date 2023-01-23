import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCountComponent } from './close-count.component';

describe('CloseCountComponent', () => {
  let component: CloseCountComponent;
  let fixture: ComponentFixture<CloseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

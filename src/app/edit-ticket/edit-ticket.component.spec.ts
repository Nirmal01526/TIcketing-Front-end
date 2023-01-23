import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTIcketComponent } from './edit-ticket.component';

describe('EditTIcketComponent', () => {
  let component: EditTIcketComponent;
  let fixture: ComponentFixture<EditTIcketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTIcketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTIcketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

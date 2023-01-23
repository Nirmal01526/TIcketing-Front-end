import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdataComponent } from './countdata.component';

describe('CountdataComponent', () => {
  let component: CountdataComponent;
  let fixture: ComponentFixture<CountdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

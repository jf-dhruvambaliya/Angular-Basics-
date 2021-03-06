import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePersonComponent } from './single-person.component';

describe('SinglePersonComponent', () => {
  let component: SinglePersonComponent;
  let fixture: ComponentFixture<SinglePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

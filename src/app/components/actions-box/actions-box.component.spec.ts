import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsBoxComponent } from './actions-box.component';

describe('ActionsBoxComponent', () => {
  let component: ActionsBoxComponent;
  let fixture: ComponentFixture<ActionsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedListComponent } from './sharedlist.component';

describe('BussinessComponent', () => {
  let component: SharedListComponent;
  let fixture: ComponentFixture<SharedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

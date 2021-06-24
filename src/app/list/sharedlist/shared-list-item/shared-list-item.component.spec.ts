import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedListItemComponent } from './shared-list-item.component';

describe('SharedListItemComponent', () => {
  let component: SharedListItemComponent;
  let fixture: ComponentFixture<SharedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

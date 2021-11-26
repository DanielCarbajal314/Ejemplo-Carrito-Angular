import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesItemDisplayerComponent } from './sales-item-displayer.component';

describe('SalesItemDisplayerComponent', () => {
  let component: SalesItemDisplayerComponent;
  let fixture: ComponentFixture<SalesItemDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesItemDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesItemDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersListSearchComponent } from './suppliers-list-search.component';

describe('SuppliersListSearchComponent', () => {
  let component: SuppliersListSearchComponent;
  let fixture: ComponentFixture<SuppliersListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

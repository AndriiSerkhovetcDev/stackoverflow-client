import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTableComponent } from './search-result-table.component';

describe('ResultTableComponent', () => {
  let component: SearchResultTableComponent;
  let fixture: ComponentFixture<SearchResultTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchResultTableComponent]
    });
    fixture = TestBed.createComponent(SearchResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

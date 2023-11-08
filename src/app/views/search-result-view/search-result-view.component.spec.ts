import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultViewComponent } from './search-result-view.component';

describe('SearchResultComponent', () => {
  let component: SearchResultViewComponent;
  let fixture: ComponentFixture<SearchResultViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchResultViewComponent]
    });
    fixture = TestBed.createComponent(SearchResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

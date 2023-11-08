import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTableViewComponent } from './quick-table-view.component';

describe('ModalTableComponent', () => {
  let component: QuickTableViewComponent;
  let fixture: ComponentFixture<QuickTableViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuickTableViewComponent]
    });
    fixture = TestBed.createComponent(QuickTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

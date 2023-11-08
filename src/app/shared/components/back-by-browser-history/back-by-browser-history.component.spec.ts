import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackByBrowserHistoryComponent } from './back-by-browser-history.component';

describe('BackByBrowserHistoryComponent', () => {
  let component: BackByBrowserHistoryComponent;
  let fixture: ComponentFixture<BackByBrowserHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BackByBrowserHistoryComponent]
    });
    fixture = TestBed.createComponent(BackByBrowserHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

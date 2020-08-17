import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMatExpansionPanelComponent } from './nested-mat-expansion-panel.component';

describe('NestedMatExpansionPanelComponent', () => {
  let component: NestedMatExpansionPanelComponent;
  let fixture: ComponentFixture<NestedMatExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedMatExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedMatExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

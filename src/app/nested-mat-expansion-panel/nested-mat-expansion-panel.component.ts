import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-nested-mat-expansion-panel',
  templateUrl: './nested-mat-expansion-panel.component.html',
  styleUrls: ['./nested-mat-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedMatExpansionPanelComponent implements ICellRendererAngularComp, OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  public params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit(): void {
  }

  refresh(): boolean {
    return true;
  }


}

import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-mat-expansion-panel',
  templateUrl: './mat-expansion-panel.component.html',
  styleUrls: ['./mat-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatExpansionPanelComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}

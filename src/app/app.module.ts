import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NestedMatExpansionPanelComponent } from './nested-mat-expansion-panel/nested-mat-expansion-panel.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NestedMatExpansionPanelComponent,
    MatExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    AgGridModule.withComponents([
      NestedMatExpansionPanelComponent
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

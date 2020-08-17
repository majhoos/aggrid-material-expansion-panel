import { Component } from '@angular/core';
import * as agGrid from 'ag-grid-community';
import { NestedMatExpansionPanelComponent } from './nested-mat-expansion-panel/nested-mat-expansion-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aggrid-material-expansion-panel';

  dataToShow = [
    { name: 'name1', companyCountry: 'UK', reference: 'Ref 1' },
    { name: 'name2', companyCountry: 'Germany', reference: 'Ref 2' },
    { name: 'name3', companyCountry: 'France', reference: 'Ref 3' },
    { name: 'name4', companyCountry: 'UK', reference: 'Ref 4' },
    { name: 'name5', companyCountry: 'USA', reference: 'Ref 5' },
  ];

  columnDefs = [
    // tslint:disable-next-line: max-line-length
    { headerName: 'Name', colId: 'name', cellRenderer: 'nestedMatExpansionPanelRenderer', filter: false, sortable: false },
    { headerName: 'Country', field: 'companyCountry', sortable: true, filter: true },
    { headerName: 'Reference', field: 'reference', sortable: true, filter: true }
  ];

  // agG_rid
  gridApi: agGrid.GridApi;
  gridColumnApi: agGrid.ColumnApi;
  gridOptions: agGrid.GridOptions = {};
  public defaultColDef: any;
  public columnTypes: any;
  public context: any;
  public frameworkComponents: any;
  public sortingOrder: any;

  constructor() {
    this.initTable();
  }

  public onGridReady(params: any) {
    // this.gridApi = this.gridOptions.api;
    // this.gridColumnApi = this.gridOptions.columnApi;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  public initTable(): void {
    this.defaultColDef = {
      flex: 1,
      autoHeight: true,
      editable: false,
      enableBrowserTooltips: true,
      resizable: true,
      filter: 'agTextColumnFilter',
      suppressMenu: true,
      floatingFilterComponentParams: { suppressFilterButton: true },
      filterParams: { newRowsAction: 'keep' },
      sortable: true,
    };
    this.columnTypes = {
      numericColumn: { filter: 'agnumericColumnFilter' },
      dateColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          newRowsAction: 'keep',
          comparator(filterLocalDateAtMidnight, cellValue) {
            const dateParts = cellValue.split('/');
            const day = Number(dateParts[2]);
            const month = Number(dateParts[1]) - 1;
            const year = Number(dateParts[0]);
            const cellDate = new Date(day, month, year);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          }
        }
      }
    };
    this.sortingOrder = ['desc', 'asc'];
    this.context = { componentParent: this };
    this.frameworkComponents = {
      nestedMatExpansionPanelRenderer: NestedMatExpansionPanelComponent,
    };
  }

  public onRowClicked() {
    //
  }

}

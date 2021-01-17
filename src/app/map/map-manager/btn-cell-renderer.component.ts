import { Component, OnDestroy } from '@angular/core';

import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-cell-renderer',
  template: `
    <button (click)="btnClickedHandler($event)" class="btn btn-success btn-sm mb-1 ml-3" data-action="marker" role="button"><i class="fas fa-map-marker-alt"></i></button>
    <button (click)="btnClickedHandler($event)" class="btn btn-primary btn-sm mb-1 ml-3" data-action="info" role="button"><i class="fas fa-info-circle"></i></button>
    <button (click)="btnClickedHandler($event)" class="btn btn-danger btn-sm mb-1 ml-3" data-action="delete" role="button"><i class="fas fa-trash"></i></button>
  `
})

// tslint:disable-next-line:component-class-suffix
export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  // tslint:disable-next-line:typedef
  btnClickedHandler($event: MouseEvent) {
    this.params.clicked($event);
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    // no need to remove the button click handler
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }

  // @ts-ignore
  refresh: (params: ICellRendererParams) => boolean = (params: ICellRendererParams): boolean => false;

}

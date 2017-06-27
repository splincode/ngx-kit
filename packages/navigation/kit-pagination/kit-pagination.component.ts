import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output } from '@angular/core';

/**
 * @todo use button-group for styling
 */
@Component({
  selector: 'kit-pagination,[kit-pagination],[kitPagination]',
  template: `
    <button *ngIf="displayFirstLink"
            (click)="pageChange.emit(1)">First
    </button>
    <button *ngIf="displayPrevLink && currentPage > 1"
            (click)="pageChange.emit(currentPage - 1)">Prev
    </button>
    <button *ngFor="let page of pages"
            (click)="pageChange.emit(page)">{{ page }}
    </button>
    <button *ngIf="displayNextLink && currentPage < totalPages"
            (click)="pageChange.emit(currentPage + 1)">Next
    </button>
    <button *ngIf="displayLastLink"
            (click)="pageChange.emit(totalPages)">Last
    </button>
  `,
})
export class KitPaginationComponent implements OnInit, OnChanges {

  @Input() kitPagination: any;

  @Input() totalRows: number;
  @Input() currentPage: number;
  @Input() rowsPerPage: number;

  @Input() pageLinksNumber = 5;
  @Input() displayNextLink: boolean = true;
  @Input() displayPrevLink: boolean = true;
  @Input() displayFirstLink: boolean = true;
  @Input() displayLastLink: boolean = true;

  @Output() pageChange = new EventEmitter<number>();

  @HostBinding('class') hostClass: string;

  pages: number[] = [];
  totalPages: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.recalcPages();
  }

  private recalcPages() {
    // calc total pages
    this.totalPages = Math.ceil(this.totalRows / this.rowsPerPage);
    // calc sides
    const half = Math.floor(this.pageLinksNumber / 2);
    const range = this.pageLinksNumber - 1;
    let leftSide = this.currentPage <= half ? 1 : this.currentPage - half;
    const rightSide = this.totalPages <= leftSide + range ? this.totalPages : leftSide + range;
    // check left range at the end
    if (rightSide === this.totalPages && range < this.totalPages) {
      leftSide = rightSide - range;
    }
    // compile range
    this.pages = [];
    for (let i = leftSide; i <= rightSide; i++) {
      this.pages.push(i);
    }
  }

}

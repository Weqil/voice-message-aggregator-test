import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationButton } from './pagination-button/pagination-button';

@Component({
  selector: 'app-paginations',
  imports: [PaginationButton],
  templateUrl: './paginations.html',
  styleUrl: './paginations.scss',
})
export class Paginations {
  @Input() maxPage?: number;
  @Input() currentPage?: number;
  @Input() alsoPages: number[] = [];
  @Output() nextPage = new EventEmitter<void>();
  @Output() prevPage = new EventEmitter<void>();
  @Output() setPage = new EventEmitter<number>();
}

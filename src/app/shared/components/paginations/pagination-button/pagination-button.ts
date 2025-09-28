import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  imports: [],
  templateUrl: './pagination-button.html',
  styleUrl: './pagination-button.scss',
})
export class PaginationButton {
  @Input() page?: number;
  @Input() alsoButton?: {
    name: 'prev' | 'next';
    icon: string;
  };
  @Input() currentPage?: number;
  @Output() onClick = new EventEmitter<void>();
}

import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() user?: IUser;
}

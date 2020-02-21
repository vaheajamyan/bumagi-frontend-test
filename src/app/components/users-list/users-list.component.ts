import {Component, OnInit, Input} from '@angular/core';
import {IUser} from 'src/app/models/userModel';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users: IUser[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

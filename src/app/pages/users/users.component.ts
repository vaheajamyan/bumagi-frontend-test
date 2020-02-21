import {Component, OnInit} from '@angular/core';
import {IUser} from 'src/app/models/userModel';
import {UsersService} from 'src/app/services/users.service';
import {timer} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersPage implements OnInit {

  loading = true;
  users: IUser[] = [];
  usersMap: Map<number, IUser> = new Map();
  selectedTab = '-1';

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.changeSelectedTab('');
  }

  changeSelectedTab(id: string): void {
    this.usersMap.clear();
    this.users = [];
    this.selectedTab = id;
    this.loading = true;
    timer(0, 5000)
      .pipe(
        mergeMap(_ => {
          return this.usersService.getUsers(this.selectedTab);
        }),
      )
      .subscribe((e: IUser[] | any) => {
        if (!e.message) {
          e.map(user => {
            if ((String(user.status) === this.selectedTab || this.selectedTab === '')
            ) {
              if (!this.usersMap.get(user.id)) {
                this.usersMap.set(user.id, user);
              }
            }
          });
          this.users = [...this.usersMap.values()];
          this.loading = false;
        }
      });
  }
}

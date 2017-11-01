import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: User[];

  constructor(private us: UsersService) { }

  ngOnInit() {
  	this.users = this.us.getUsers();
  }
}

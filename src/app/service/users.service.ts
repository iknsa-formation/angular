import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable()
export class UsersService {

  constructor() {
  	if (localStorage.getItem("users") === undefined) {
  		localStorage.setItem("users", JSON.stringify([]));
  	}
  }

  getUsers():any {
  	return JSON.parse(localStorage.getItem("users"));
  }
}

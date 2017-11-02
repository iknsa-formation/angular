import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable()
export class UsersService {

  users: any;

  getUsers(){
  	this.users = [
  		{
  			firstName:"Moussa",
  			lastName:"Camara",
  			email:"Moussa@iknsa.fr"
  		},
  		{
  			firstName:"Mouskito",
  			lastName:"Camara",
  			email:"Moussa@iknsa.fr"
  		},
  		{
  			firstName:"Khalid",
  			lastName:"Sookia",
  			email:"khalid@iknsa.fr"
  		},
  		{
  			firstName:"Moustakime",
  			lastName:"Kifia",
  			email:"moustakime@iknsa.fr"
  		}

  	];

  	return this.users;
  }
}

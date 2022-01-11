import { Component, OnInit } from '@angular/core';
import { mockUsers } from '../../user-profile/mock-users';
import {User} from "../../user-profile/user.interface";


@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {

  pi: number = Math.PI;
  amount: number= 0.75;
  text: string = "course of itprofit";
  now: Date= new Date();

  maxLength: number;

  user: User;
  users : User[]

  constructor() {
   this.user = [...mockUsers].pop() as User;
   this.users = mockUsers;

  }

  ngOnInit(): void {
  }

  onAddUser() {
    let newUser: User = {
      name: "Bob",
      age: 22,
      id: 234,
      avatarUrl: "",
      email: "",
      lastname: "",
    };
    this.users.push(newUser)

  }

}

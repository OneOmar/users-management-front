import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Users list
  users: User[] = [];

  // Inject UsersService
  constructor(private usersService: UsersService) {}

  // Load users when the component initializes
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}

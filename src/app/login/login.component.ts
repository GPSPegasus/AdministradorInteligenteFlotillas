import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	email: string = null;
	password: string = null;
	remember_me: boolean = true;

	constructor(private userService: UserService, private router: Router) { 
		if(localStorage.getItem('access_token')) {
			this.router.navigate(['home']);
		}
	}

	ngOnInit() {

	}

	logIn() {
		this.userService.getSession(this.email, this.password, this.remember_me)
		.subscribe(
			(response: any) => { 
				localStorage.setItem('access_token', response.access_token);
				this.router.navigate(['home']);
			}, 
			(error: any) => { 
				alert("Usuario y/o contraseña incorrectos"); 
			}
		);
	}
}

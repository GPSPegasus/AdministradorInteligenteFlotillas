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
			this.userService.getUser(localStorage.getItem('access_token'))
			.subscribe(
				(response) => {
					this.router.navigate(['home']);
				}, 
				(error) => { 
					localStorage.removeItem('access_token');
					alert('La sesión expiró, inicie sesión nuevamente'); 
				}
			);
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
			(error) => { 
				alert('Usuario y/o contraseña incorrectos'); 
			}
		);
	}

	addUser() {
		this.userService.createUser("name", this.email, this.password, this.password)
		.subscribe(
			(response) => { 
				alert('Usuario creado exitosamente')
			}, 
			(error) => { 
				console.log('No se pudo crear el usuario, intente nuevamente');
			}
		);
	}
}

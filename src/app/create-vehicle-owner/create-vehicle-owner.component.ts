import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
	selector: 'app-create-vehicle-owner',
	templateUrl: './create-vehicle-owner.component.html',
	styleUrls: ['./create-vehicle-owner.component.css']
})
export class CreateVehicleOwnerComponent implements OnInit {
  	name: string = null;
	email: string = null;
	password: string = null;

  	constructor(private userService: UserService, private router: Router) { 

  	}

  	ngOnInit() {
  
  	}

  	addVehicleOwner() {
  		this.userService.createVehicleOwner(localStorage.getItem('access_token'), this.name, this.email, this.password)
		.subscribe(
			(response) => { 
				alert('Cuenta de propietario creada exitosamente')
			}, 
			(error) => { 
				this.userService.getUser(localStorage.getItem('access_token'))
				.subscribe(
					(response) => {
						alert('No se pudo crear la cuenta, intente nuevamente'); 
					}, 
					(error) => { 
						localStorage.removeItem('access_token');
						alert('La sesión expiró, inicie sesión nuevamente'); 
						this.router.navigate(['']);
					}
				);
			}
		);
  	}
}

import { Component, OnInit } from '@angular/core';

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

  	constructor(private userService: UserService) { 

  	}

  	ngOnInit() {
  
  	}

  	addVehicleOwner() {
  		this.userService.createVehicleOwner(this.name, this.email, this.password, localStorage.getItem('access_token'))
		.subscribe(
			(response: any) => { 
				alert('Cuenta de propietario creada exitosamente')
			}, 
			(error: any) => { 
				alert("No se pudo crear la cuenta, intente nuevamente"); 
			}
		);
  	}
}

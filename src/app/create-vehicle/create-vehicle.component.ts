import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {
	vehicleOwners: any = [];
	imei: string = null;
	vehicleOwnerId: number = null;
	deviceCountId: string = null;

	constructor(private userService: UserService, private vehicleService: VehicleService) { 
		this.userService.getVehicleOwners(localStorage.getItem('access_token')).subscribe(
            (response) => { 
            	console.log(response);
                this.vehicleOwners = response; 
            }, 
            (error) => { 
            	this.userService.getUser(localStorage.getItem('access_token'))
				.subscribe(
					(response) => {
						alert('No se pudo obtener la lista de propietarios, recargue la página');
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

	ngOnInit() {

	}

	addVehicle() {
		this.vehicleService.createVehicle(localStorage.getItem('access_token'), this.imei, this.vehicleOwnerId, this.deviceCountId)
		.subscribe(
			(response) => { 
				alert('Vehículo creado exitosamente')
			}, 
			(error) => { 
				this.userService.getUser(localStorage.getItem('access_token'))
				.subscribe(
					(response) => {
						alert('No se pudo crear el vehículo, intente nuevamente');
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

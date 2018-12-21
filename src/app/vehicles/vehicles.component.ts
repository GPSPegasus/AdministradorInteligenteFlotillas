import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { VehicleService } from '../services/vehicle.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})

export class VehiclesComponent implements OnInit {
    displayedColumns: string[] = ['imei', 'vehicle_owner', 'device_count_id', 'status'];
    vehicles: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private userService: UserService, private vehicleService: VehicleService) { 
        this.vehicleService.getVehicles(localStorage.getItem('access_token')).subscribe(
            (response: any) => { 
                this.vehicles = new MatTableDataSource(response); 
                this.vehicles.paginator = this.paginator;
            }, 
            (error) => { 
                this.userService.getUser(localStorage.getItem('access_token'))
                .subscribe(
                    (response) => {
                        alert('No se pudo obtener la lista de vehículos, recargue la página');
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

    changeVehicleStatus(vehicle: any) {
        this.vehicleService.updateVehicleStatus(localStorage.getItem('access_token'), vehicle.id, Number(!vehicle.status_vehicle))
        .subscribe(
            (response) => {
                vehicle.status_vehicle = !vehicle.status_vehicle;
            }, 
            (error) => { 
                this.userService.getUser(localStorage.getItem('access_token'))
                .subscribe(
                    (response) => {
                        alert('No se pudo cambiar el status del vehículo, intente nuevamente');
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
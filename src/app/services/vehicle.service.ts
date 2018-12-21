import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class VehicleService {
	url: string = 'http://127.0.0.1:8000/api/';

	constructor(private http: HttpClient) { 

	}

	createVehicle(access_token: string, imei: string, vehicleOwnerId: number, deviceCountId: string) {
		const headers = new HttpHeaders({'Authorization': 'Bearer ' + access_token});
		return this.http.put(this.url + 'auth/admin/create_Vehicle', {imei: imei, owner_vehicle_id: vehicleOwnerId, device_count_id: deviceCountId}, {headers: headers});
	}

	getVehicles(access_token: string) {
		const headers = new HttpHeaders({'Authorization': 'Bearer ' + access_token});
		return this.http.get(this.url + 'auth/admin/getAll_Vehicles', {headers: headers});
	}

	updateVehicleStatus(access_token: string, id: number, statusVehicle: number) {
		const headers = new HttpHeaders({'Authorization': 'Bearer ' + access_token});
		return this.http.patch(this.url + 'auth/admin/changeState_Vehicle', {id: id, status_vehicle: statusVehicle}, {headers: headers});
	}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class UserService {
	url: string = 'http://127.0.0.1:8000/api/';

  	constructor(private http: HttpClient) { 

  	}

  	getSession(email: string, password: string, remember_me: boolean) {
		const headers = new HttpHeaders({'Content-Type': 'application/json'});
		return this.http.post(this.url + 'auth/login', {email, password, remember_me}, {headers: headers});
	}

	createUser(name: string, email: string, password: string, password_confirmation: string) {
		const headers = new HttpHeaders({'Content-Type': 'application/json'});
		return this.http.put(this.url + 'auth/signup', {name: name, email: email, password: password, password_confirmation: password_confirmation}, {headers: headers});
	}

	getUser(access_token: string) {
		const headers = new HttpHeaders({'Authorization': 'Bearer ' + access_token});
		return this.http.get(this.url + 'auth/user', {headers: headers});
	}

	createVehicleOwner(access_token: string, name: string, email: string, password: string) {
		const headers = new HttpHeaders({'Authorization': 'Bearer ' + access_token});
		return this.http.put(this.url + 'auth/admin/create_Owner_Vehicle', {name: name, email: email, password: password}, {headers: headers});
	}

	getVehicleOwners(access_token: string) {
		const headers = new HttpHeaders({'Authorization': 'Bearer ' + access_token});
		return this.http.get(this.url + 'auth/admin/getAll_OwnerVehicle', {headers: headers});
	}
}

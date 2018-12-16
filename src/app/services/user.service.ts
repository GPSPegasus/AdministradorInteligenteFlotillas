import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class UserService {
	url: string = 'http://127.0.0.1:8000/api/'

  	constructor(private http: HttpClient) { 

  	}

  	getSession(email: string, password: string, remember_me: boolean) {
		const headers = new HttpHeaders({'Content-Type': 'application/json'});
		return this.http.post(this.url + 'auth/login', {email, password, remember_me}, {headers: headers});
	}

	createVehicleOwner(name: string, email: string, password: string, access_token: string) {
		const headers = new HttpHeaders({'Authorization': 'Bearer ' + access_token});
		return this.http.post(this.url + 'auth/admin/create_Owner_Vehicle', {name, email, password}, {headers: headers});
	}
}

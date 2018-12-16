import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class UserService {
  	constructor(private http: HttpClient) { 

  	}

  	getSession(email: string, password: string, remember_me: boolean) {
		const headers = new HttpHeaders({'Content-Type': 'application/json'});
		return this.http.post('http://127.0.0.1:8000/api/auth/login', {email, password, remember_me}, {headers: headers});
	}
}

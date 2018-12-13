import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  	title = 'AdministradorInteligenteFlotillas';

  	constructor(private swUpdate: SwUpdate, public router: Router) {

  	}

  	ngOnInit(): void {
  		if(this.swUpdate.isEnabled){
      		this.swUpdate.available.subscribe( 
      		next => {
        		window.location.reload();
      		})
    	}
  	}
}

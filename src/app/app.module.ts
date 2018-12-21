import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateVehicleOwnerComponent } from './create-vehicle-owner/create-vehicle-owner.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

import { MatSidenavModule, MatInputModule, MatExpansionModule, MatMenuModule } from  '@angular/material';
import { MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule } from  '@angular/material';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'create-vehicle-owner', component: CreateVehicleOwnerComponent },
    { path: 'create-vehicle', component: CreateVehicleComponent },
    { path: 'vehicles', component: VehiclesComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CreateVehicleOwnerComponent,
        CreateVehicleComponent,
        VehiclesComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        MatSidenavModule,
        MatExpansionModule,
        MatInputModule,
        HttpClientModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { 

}

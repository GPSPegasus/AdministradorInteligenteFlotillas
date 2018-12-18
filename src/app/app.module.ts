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

import { MatSidenavModule, MatInputModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatIconModule} from  '@angular/material';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'create-vehicle-owner', component: CreateVehicleOwnerComponent },
    { path: 'create-vehicle', component: CreateVehicleComponent }
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
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { 

}

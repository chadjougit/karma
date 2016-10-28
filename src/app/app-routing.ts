import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginpageComponent } from './shared/loginpage/loginpage.component';
import { DataComponent } from './core/data/data.component';
import { FirstdashComponent } from './core/dashboard/firstdash/firstdash.component';
import { SeconddashComponent } from './core/dashboard/seconddash/seconddash.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import {LoginguardService  } from './shared/loginpage/loginguard.service'






export const routes = RouterModule.forRoot([


    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'firstdash', pathMatch: 'full' },
            { path: 'firstdash', component: FirstdashComponent },
            { path: '**', component: SeconddashComponent }

        ]

    },
     { path: 'data', component: DataComponent, canActivate: [LoginguardService]  },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginpageComponent },
]);

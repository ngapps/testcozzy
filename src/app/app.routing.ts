import { Routes, RouterModule } from "@angular/router"
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboardv2Component } from './dashboard/dashboardv2.component';
import { Dashboardv3Component } from './dashboard/dashboardv3.component';
import { LayoutsComponent } from './layouts/layouts.component';

const APP_ROUTES: Routes = [
    { path: 'layouts', component: LayoutsComponent },
    { path: 'widget', component: LayoutsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard2', component: Dashboardv2Component },
    { path: 'dashboard3', component: Dashboardv3Component },
    { path: '', component: DashboardComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
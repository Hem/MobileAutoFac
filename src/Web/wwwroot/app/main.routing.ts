import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/home.routes';


//import { TodolistRoutes } from './todolist/index';
//const appRoutes: Routes = [
//    ...HomeRoutes,
//    ...TodolistRoutes
//];


const ipgRoutes: Routes = [
    ...HomeRoutes
];

export const IPG_ROUTE_PROVIDERS: any[] = [

];

export const MAIN_ROUTES = RouterModule.forRoot(ipgRoutes);

//Importar modulos del router de angular
import{ModuleWithProviders}from'@angular/core';
import{Routes,RouterModule}from'@angular/router';

//importar mis componentes
import{InicioComponent}from './inicio/inicio.component';
import{UsuariosComponent}from './usuarios/usuarios.component';

const appRoutes:Routes=[
  {path:'',component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'**',component:InicioComponent}
];

//Exportar el modulo de router

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);

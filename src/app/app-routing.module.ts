import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path : '',component: HomeComponent },
  { path : 'lista',component: ListaComponent },
  { path : 'perfil/:id',component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaEmpleadosComponent } from './components/vista-empleados/vista-empleados.component';

const routes: Routes = [
  { path: '', component: VistaEmpleadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-vista-empleados',
  templateUrl: './vista-empleados.component.html',
  styleUrls: ['./vista-empleados.component.css']
})
export class VistaEmpleadosComponent {
  empleadoId: number = 0;
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  buscarEmpleados() {
    this.empleadoService.getEmpleados(this.empleadoId).subscribe(data => {
      this.empleados = data;
    });
  }

  mostrarTodosEmpleados() {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }
}

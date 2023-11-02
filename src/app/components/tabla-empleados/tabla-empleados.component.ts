import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent {
  @Input() empleados: any[] = [];
}

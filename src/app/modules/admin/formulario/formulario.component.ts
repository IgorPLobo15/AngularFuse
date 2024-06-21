import { Component } from '@angular/core';
import { FuseAlertComponent } from '@fuse/components/alert';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  showalert: boolean =false

  alertar(){
    this.showalert=true;
  }
}

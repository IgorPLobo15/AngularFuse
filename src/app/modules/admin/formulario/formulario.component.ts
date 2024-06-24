import { Component } from '@angular/core';
import { FuseAlertComponent } from '@fuse/components/alert';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',

})
export class FormularioComponent {
<<<<<<< HEAD
    printPage() {
        window.print();
      }
=======
  showalert: boolean =false

  alertar(){
    this.showalert=true;
  }
>>>>>>> 6b23a9b2c7688fd44629704f2f86f630c6101ad9
}

import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { fuseAnimations } from '@fuse/animations';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { MatFormField } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';




@Component({
  selector: 'app-riscos',
  standalone: true,
  imports: [FormsModule ,MatListModule,FuseHighlightComponent,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatInputModule],
  templateUrl: './riscos.component.html',
  styleUrl: './riscos.component.scss'
})
export class RiscosComponent {
  novoObjetivo: string = '';
  objetivos: string[]=[];

  adicionarObjetivo(){
    if(this.novoObjetivo.trim()){
      this.objetivos.push(this.novoObjetivo);
      
      console.log(this.novoObjetivo);
    }
  }

  deletarObjetivo(index : number){
    this.objetivos.splice(index,1);
  }


}



import { ApplicationModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RiscosService, objetivosEstrategi } from './riscos.service';
import { AnimationBuilder } from '@angular/animations';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { fuseAnimations } from '@fuse/animations';




@Component({
  selector: 'app-risco',
  standalone: true,
  imports: [
    ApplicationModule,
    MatCommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatTableModule,
    FuseHighlightComponent,
    MatListModule,
    FormsModule,
    CommonModule,

  ],
  templateUrl: './riscos.component.html',
  styleUrls: ['./riscos.component.scss'],
  animations: fuseAnimations,
})
export class RiscosComponent implements OnInit {
  objetivosEstrategicos: objetivosEstrategi[] = [];
  errorMessage: string = '';
  objetivoEstrategico : string = '';




  constructor(private objetivosEstrategicosService: RiscosService) { }


  ngOnInit(): void {
    this.objetivosEstrategicosService.pegarObjetivos().subscribe(
      (data: objetivosEstrategi[]) => {
        this.objetivosEstrategicos = data;

      },
      (error) => {
        this.errorMessage = 'Ainda não possui objetivos estratégicos cadastrados!';
        console.error('Erro ao carregar os objetivos estratégicos:', error);
      },

    );



  }

}


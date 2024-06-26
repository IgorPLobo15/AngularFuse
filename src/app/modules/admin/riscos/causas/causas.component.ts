import { CommonModule } from '@angular/common';
import { ApplicationModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { RiscosComponent } from '../riscos.component';
import { RiscosService } from '../riscos.service';


@Component({
  selector: 'app-causas',
  standalone: true,
  imports: [ApplicationModule,
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
    RiscosComponent,


    ],
  templateUrl: './causas.component.html',
  styleUrl: './causas.component.scss'
})
export class CausasComponent {

}

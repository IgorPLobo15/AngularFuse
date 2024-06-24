import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { fuseAnimations } from '@fuse/animations';
import { FuseHighlightComponent } from '@fuse/components/highlight';

@Component({
  selector: 'app-riscos',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './riscos.component.html',
  styleUrl: './riscos.component.scss'
})
export class RiscosComponent {

}

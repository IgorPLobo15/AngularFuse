import { Routes } from '@angular/router';
import { RiscosComponent } from './riscos.component';
import { ClassficacaoriscoComponent } from './classficacaorisco/classficacaorisco.component';


export default [
    {
        path     : '',
        component: RiscosComponent,
    },
    {
        path     : 'classificacaorisco',
        component: ClassficacaoriscoComponent,
    },
] as Routes;

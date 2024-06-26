/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'form',
        title: 'Formulario',
        type : 'basic',
        icon : 'heroicons_outline:document-text',
        link : '/formulario'
    },

    {
        id   : 'produto1',
        title: 'Quimicos',
        type : 'basic',
        icon : 'heroicons_outline:beaker',
        link : '/losprodutos1'
    },
    {
        id: 'analise.riscos',
        title: 'Riscos',
        type: 'collapsable',
        icon: 'heroicons_outline:presentation-chart-line',
        children :[
            {
                id   : 'Riscos',
                title: 'Riscos',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-line',
                link : '/riscos'
            }

        ]
    }

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'form',
        title: 'Formulario',
        type : 'basic',
        icon : 'heroicons_outline:document-text',
        link : '/formulario'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'form',
        title: 'Formulario',
        type : 'basic',
        icon : 'heroicons_outline:document-text',
        link : '/formulario'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'form',
        title: 'Formulario',
        type : 'basic',
        icon : 'heroicons_outline:document-text',
        link : '/formulario'
    }
];

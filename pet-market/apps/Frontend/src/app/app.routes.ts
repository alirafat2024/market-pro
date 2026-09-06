import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: async () => {
            const module = await import('./home/home');
            return module.Home;
        }
    },

    {
        path: 'products',
        loadComponent: async () => {
            const module = await import('./products/produtcs');
            return module.Produtcs;
        }
    }
];

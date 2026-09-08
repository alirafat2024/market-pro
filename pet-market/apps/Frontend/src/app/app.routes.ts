import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: async () => {
      const module = await import('./home/home');
      return module.Home;
    },
  },

  {
    path: 'products',
    loadComponent: async () => {
      const module = await import('./products/produtcs');
      return module.Produtcs;
    },
  },
  {
    path: 'cart',
    loadComponent: async () => {
      const module = await import('./cart/cart');
      return module.Cart;
    },
  },
  {
    path: 'checkout',
    loadComponent: async () => {
      const module = await import('./checkout/checkout');
      return module.Checkout;
    },
  }
];

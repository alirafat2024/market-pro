import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stripePriceId: string;
}

function isProduct(value: unknown): value is Product {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const product = value as Partial<Product>;
  return Boolean(
    product.id &&
      product.name &&
      product.description &&
      typeof product.price === 'number' &&
      product.image &&
      product.stripePriceId,
  );
}

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      image
      stripePriceId
    }
  }
`;

export interface ProductState {
  products: Product[];
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  featuredProducts: [],
  loading: false,
  error: null,
};

export const ProductStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),
  withMethods((store, apollo = inject(Apollo)) => ({
    loadProducts() {
      patchState(store, { loading: true });
      apollo
        .watchQuery<{ products: Product[] }>({
          query: GET_PRODUCTS,
        })
        .valueChanges.pipe(
          tap({
            next: ({ data }) =>
              patchState(store, {
                products: (data?.products ?? []).reduce<Product[]>(
                  (products, value) => {
                    if (isProduct(value)) {
                      products.push({
                        id: value.id,
                        name: value.name,
                        description: value.description,
                        price: value.price,
                        image: value.image,
                        stripePriceId: value.stripePriceId,
                      });
                    }
                    return products;
                  },
                  [],
                ),
                loading: false,
                error: null,
              }),
            error: (error) =>
              patchState(store, { error: error.message, loading: false }),
          })
        )
        .subscribe();
    },
  }))
);

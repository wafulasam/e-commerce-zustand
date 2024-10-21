import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
const products = [
    {
        id: 1,
        image: require('../../public/images/cerave.jpeg'),
        name:'CeraVe Cleanser',
        price: 2000
    },
    {
        id: 2,
        image: require('../../public/images/cantu.jpg'),
        name:'Cantu Hair Food',
        price: 1300
    },
    {
        id: 3,
        image: require('../../public/images/dove.jpg'),
        name:'Dove Body Wash',
        price: 1350
    },
    {
        id: 4,
        image: require('../../public/images/huddah.webp'),
        name:'Huddah Mate Nude Lipstick',
        price: 2000
    },
    {
        id: 5,
        image: require('../../public/images/mac.jpg'),
        name:'MAC Foundation',
        price: 3200
    },
    {
        id: 6,
        image: require('../../public/images/shop-new-level.webp'),
        name:'Shop New Level Lipstick',
        price: 1700
    }
]

interface Product {
    [key: string]: any; 
}

interface ProductsState {
    products: Product[] | any;
    setProducts: (newProduct: Product[]) => void;
}



export const useProductsStore = create<ProductsState>()(
    persist(
        (set) => ({
            products: [...products],
            setProducts: (newProduct) => set({ products: newProduct }),
        }),
        {
            name: "products-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

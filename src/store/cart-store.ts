import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Cart {
    [key: string]: any; 
}

interface CartState {
    cart: Cart[] | any;
    AddToCart: (newCart: Cart[]) => void;
}



export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            AddToCart: (newCart) => set({ cart: newCart }),
        }),
        {
            name: "cart-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

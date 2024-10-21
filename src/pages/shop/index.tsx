import styled from "styled-components";
import Headingbar from "@/layout/Headingbar";
import ShopListing from "@/components/shop/ShopListing";
import Cart from "@/components/cart/Cart";
import { BsBagFill } from "react-icons/bs";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ShopPage (){
    const [ showCart, setShowCart ] = useState(false)
    const { cart } = useCartStore()
    const cartCount = cart?.reduce((acc:any, item:any) => acc + item?.count, 0);
    const route = useRouter()
    return (
        <div>
            <Headingbar title="Shop">
                <div style={{display:'flex', alignItems:'center', gap:'0px'}}>
                    <BsBagFill onClick={()=> setShowCart(true)} fontSize={40} color="#BF3A8C" style={{cursor:'pointer'}}/> 
                    {cartCount}
                </div>
            </Headingbar>
            <PageWrapper>
                <ShopListing/>
                {showCart && <Cart setShowCart={setShowCart}/>}
            </PageWrapper>
        </div>
    )
}

const PageWrapper = styled.div`
    margin-top: 80px;
`
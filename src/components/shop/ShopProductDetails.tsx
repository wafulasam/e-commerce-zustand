import styled from "styled-components";
import Headingbar from "@/layout/Headingbar";
import { BsBagFill } from "react-icons/bs";
import { useCartStore } from "@/store/cart-store";
import { useProductsStore } from "@/store/products-store";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/sky_design_system";

export default function ShopProductDetails (){
    const router = useRouter();
    const { id } = router.query;
    const idInt = typeof id === 'string' ? parseInt(id, 10) : (Array.isArray(id) ? parseInt(id[0], 10) : null);
    const { cart, AddToCart } = useCartStore()
    const { products } = useProductsStore()
    const cartCount = cart?.reduce((acc:any, item:any) => acc + item?.count, 0);
    const productDetails = products.find((product:any)=> product.id === idInt)

    const addItemToCart = (product:any) => {
        const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].count += 1;
            AddToCart(updatedCart);
        } else {
            const productToAdd = { ...product, count: 1 };
            AddToCart([...cart, productToAdd]);
        }
    }

    return (
        <div>
            <Headingbar title="Product Details">
                <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <BsBagFill fontSize={40} color="#BF3A8C"/> 
                    <section className="badge" style={{position:'absolute', right:'25px', top:'25px', color:'#fff'}}>
                        {cartCount}
                    </section>
                </div>
            </Headingbar>
            <PageWrapper>
                <div className="item-card">
                    <section>
                        <Image src={productDetails.image} alt="image" height={200} width={100} style={{ width:'auto', height:'200px'}} />
                    </section>
                    <section>
                        <p><b>{productDetails?.name}</b></p>
                        <p>KES{productDetails.price}</p>
                        <Button
                            label='Add to Pack'
                            onClick={()=> addItemToCart(productDetails)}
                        />
                    </section>
                </div>
            </PageWrapper>
        </div>
    )
}

const PageWrapper = styled.div`
    margin-top: 80px;

    .item-card {
        background-color: #fff;
        padding: 20px;
        margin: 20px;
        border-radius: 4px;
        display: flex;
        gap: 20px;
        align-items: center;
    }
`
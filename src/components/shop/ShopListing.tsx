import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Search } from "@/sky_design_system";
import { useProductsStore } from "@/store/products-store";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";

export default function ShopListing (){
    const { products } = useProductsStore()
    const { cart, AddToCart } = useCartStore()
    const [ searchInput, setSearchInput ] = useState('')
    const [ items, setItems ] = useState<any>([])

    useEffect(()=> {
        if(searchInput){
            const searchResults = {
                nodes: products.filter((item:any) =>
                    item.name.toLowerCase().includes(searchInput.toLowerCase())
                ),
            };
            setItems(searchResults.nodes)
        }
        if(!searchInput) {
            setItems(products)
        }
    },[searchInput])

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
        <Styles>
            <Search
                placeholder="Search Product"
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                width="300px"
            /><br/>
            <div className="list">
                <p>{(items.length < 1) && 'No products found'}</p>
                {items.map((product:any)=> (
                    <div className="item" key={items.indexOf(product)}>
                        <Image src={product.image} alt="image" height={200} width={100} style={{ width:'auto', height:'200px'}} />
                        <section>
                           <Link href={`/dashboard?active=shop&id=${product.id}`} className="link">
                                <b>{product.name}</b><br/>
                                <span>KES {product.price}</span>
                           </Link>
                            <Button
                                label='Add to Pack'
                                onClick={()=> addItemToCart(product)}
                            />
                        </section>
                    </div>
                ))}
            </div>
        </Styles>
    )
}

const Styles = styled.div`
    background-color: #fff;
    margin: 20px;
    border-radius: 4px;
    padding: 20px;

    .list {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;

        .item {
            margin: 10px 0;
            text-align: center;
            //flex: 1 1 calc(33.33% - 10px); 

            .link {
                text-decoration: none;
                color: inherit;
            }
            section {
                text-align: left;
            }
        }
    }
`
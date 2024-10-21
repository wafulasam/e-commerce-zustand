import styled from "styled-components";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import { FormatItems } from "@/utils/format-items";
import { Input, Button } from "@/sky_design_system";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";



interface cartProps {
    setShowCart: (value:boolean)=> void
}

export default function Cart ({ setShowCart }:cartProps){
    const { cart , AddToCart} = useCartStore()
    const formatAmount = (amount:any) => new FormatItems().formatAmount(amount)

    const totalAmount = cart?.reduce((total:any, item:any) => {
        return total + (item.count * item.price)
    },0)

    const addItemCount = (product:any)=> {
        const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].count += 1;
            AddToCart(updatedCart);
        }
    }

    const minusItemCount = (product:any)=> {
        const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].count -= 1;
            if (updatedCart[existingItemIndex].count === 0) {
                updatedCart.splice(existingItemIndex, 1);
            }
            AddToCart(updatedCart);
        }
    }

    const removeItemFromCart = (product:any) => {
        const newCart = cart.filter((item: any) => item.id !== product.id);
        AddToCart(newCart)
    }

    return (
        <CartStyles>
            <div className="item-card" style={{display:'flex', justifyContent:'space-between'}}>
                <h2>Cart</h2>
                <IoCloseCircleOutline 
                    onClick={()=> setShowCart(false)}
                    fontSize={24}
                    color="#BF3A8C"
                />
            </div>
            {(cart.length < 1) && <p>Cart is empty</p>}
            {(cart.length > 0) &&
                <div>
                {cart.map((item:any)=> (
                    <div className="item-card" key={cart.indexOf(item)}>
                        <section>
                            <Image src={item.image} alt="image" height={50} width={50}/>
                        </section>
                        <section>
                            {item.name}
                        </section>
                        <section style={{display:'flex', alignItems:'center', gap:'5px'}}>
                            <LuMinusCircle onClick={()=> minusItemCount(item)}/>
                                {item.count}
                            <FiPlusCircle onClick={()=> addItemCount(item)}/>
                        </section>
                        <section>
                            KES {(item.price * item.count)}
                        </section>
                        <section style={{textAlign:'right'}}>
                            <FaRegTrashAlt onClick={()=> removeItemFromCart(item)}/>
                        </section>
                    </div>
                ))}

                <div className="item-card">
                    <b>Total</b>KES {formatAmount(totalAmount)}
                </div>

                <div className="item-card">
                    <Input
                        placeholder="Customer Name"
                        value=""
                        onChange={()=> null}
                        width="100%"
                        required
                    />
                </div>

                <div className="item-card">
                    <Button
                        label='Place Order'
                    />
                     <Button
                        label='Genarate Receipt'
                    />
                </div>
            </div>
            }
        </CartStyles>
    )
}

const CartStyles = styled.div`
    min-width: 300px;
    height: 100vh;
    background-color: #f4f6f8;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    overflow-y: scroll;

    .item-card {
        background-color: #fff;
        margin: 10px;
        padding: 10px 20px;
        display: flex;
        gap: 10px;
        align-items: center;

        section {
            flex: 1;
            width: fit-content;
        }

        svg {
            cursor: pointer;
            color: #BF3A8C;
        }
    }
`
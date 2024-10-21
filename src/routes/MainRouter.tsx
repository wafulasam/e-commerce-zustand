import { useRouter } from "next/router";
import ShopPage from "@/pages/shop";
import ShopProductDetails from "@/components/shop/ShopProductDetails";

export default function MainRouter (){
    const router = useRouter();
    const { active, id } = router.query;

    let page;
    switch (active){
        case 'shop':
            id ? page = <ShopProductDetails/> : page = <ShopPage/>;
            break;
        default:
            page = <ShopPage/>;
            break;
    }

    return (
        <div>
            {page}
        </div>
    )
}
// discounts

export interface getDiscountsProps {
    payload:string,
    setDiscounts: (value: any) => void,
    setDiscountsLoading: (value: boolean) => void,
    setDiscountsError: (value: any) => void,
}
export interface getDiscountDetailsProps {
    id:string,
    setDiscountDetails: (value: any) => void,
    setDiscountDetailsLoading: (value: boolean) => void,
    setDiscountDetailsError: (value: any) => void,
}

export interface createDiscountProps {
    payload: any,
    setCreateDiscountResponse: (value: any) => void,
    setCreateDiscountLoading: (value: boolean) => void,
    setCreateDiscountError: (value: any) => void,
}

export interface activateDiscountProps {
    payload: any,
    setActivateDiscountLoading: (value: boolean) => void,
    setActivateDiscountResponse: (value: any) => void,
    setActivateDiscountError: (value: any) => void,
    setDiscounts:(value:any)=> void,
    updatedDiscounts:any,
}

export interface editDiscountProps {
    payload: any,
    discountId: any,
    setEditDiscountLoading: (value: boolean) => void,
    setEditDiscountResponse: (value: any) => void,
    setEditDiscountError: (value: any) => void,
}

export interface deleteDiscountProps {
    discountId: any,
    setDeleteDiscountLoading: (value: boolean) => void,
    setDeleteDiscountResponse: (value: any) => void,
    setDeleteDiscountError: (value: any) => void,
}
// orders
export interface getOrdersProps {
    setOrders: (value: any) => void,
    setLoading: (value: boolean) => void,
    setError: (value: any) => void,
}
export interface getOrderDetailsProps {
    id:string,
    setOrderDetails: (value: any) => void,
    setLoading: (value: boolean) => void,
    setError: (value: any) => void,
}
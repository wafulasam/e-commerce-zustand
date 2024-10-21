export class FormatItems {
    // format money
    public formatAmount = (amount:any) => {
        const integerPart = Math.floor(amount);
        const formattedAmount = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return formattedAmount;
    }
}
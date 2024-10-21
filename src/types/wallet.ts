// wallet
export interface getWalletProps {
    setWallet: (value: any) => void,
    setWalletLoading: (value: boolean) => void,
    setWalletError: (value: any) => void,
}

export interface getWalletInsightsProps {
    setWalletInsights: (value: any) => void,
    setWalletInsightsLoading: (value: boolean) => void,
    setWalletInsightsError: (value: any) => void,
}

export interface getWalletStatementProps {
    params:string,
    setWalletStatement: (value: any) => void,
    setWalletStatementLoading: (value: boolean) => void,
    setWalletStatementError: (value: any) => void,
}
// auth
export interface phoneToRegisterData {
    join: number,
    phone_country: string,
    phone_local: string
}

export interface newSignupAccountData {
    phone_country: string,
    phone_local: string,
    user: {}
}

export interface submitNewPhoneForOtpData {
    login: string,
    phone_country: string, 
    phone_local: string,
}

export interface verifyNewPhoneOtpData {
    login: string,
    phone_country: string, 
    phone_local: string,
    code: string
}

export interface addCompanyInfoData{
    name: string,
    mpesa_number: string,
    location_text: string,
    location_notes: string,
    location_lat: number,
    location_lng: number,
    add_shop_to_google_my_business: boolean
}

export interface addAccountInfoData{
    phone_local: string,
    user:{
        email: string,
        first_name: string,
        last_name: string,
        username: string
    }
}

export interface logoData {
    image_data: string,
}

export interface submitPhoneToRegisterProps {
    phonePayload: phoneToRegisterData, 
    setSubmitPhoneToRegisterLoading: (value: boolean) => void,
    setStep:(value:number) => void,
}

export interface modifyNewSignupAccountProps {
    payload: newSignupAccountData, 
    setModifyNewSignupAccountLoading: (value: boolean) => void,
    setStep:(value:number) => void,
}

export interface submitNewPhoneForOtpProps {
    otpPayload: submitNewPhoneForOtpData, 
    setSubmitNewPhoneForOtpLoading: (value: boolean) => void,
    setStep:(value:number) => void,
}

export interface verifyNewPhoneOtpProps {
    verifyOtpPayload: verifyNewPhoneOtpData, 
    setVerifyNewPhoneOtpLoading: (value: boolean) => void,
    stepCount: number,
    setStepCount: (value:number) => void,
    setStepInfo: (value:string) => void,
}

export interface addCompanyInfoProps {
    payload: addCompanyInfoData, 
    setAddCompanyInfoLoading: (value: boolean) => void,
    stepCount: number,
    setStepCount: (value:number) => void,
    setStepInfo: (value:string) => void,
}

export interface addAccountInfoProps {
    payload: addAccountInfoData, 
    setAddAccountInfoLoading: (value: boolean) => void,
    stepCount: number,
    setStepCount: (value:number) => void,
    setStepInfo: (value:string) => void,
}

export interface submitLogoProps {
    payload: logoData, 
    setSubmitLogoLoading: (value: boolean) => void,
    setSubmitLogoError: (value: any) => void,
    setSubmitLogoResponse: (value: any) => void,
}
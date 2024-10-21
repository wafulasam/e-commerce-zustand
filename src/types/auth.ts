// auth
export interface authPhoneProps {
    login: string,
    phone_country: string, 
    phone_local: string
}

export interface authOtpProps {
    login: string,
    phone_country: string, 
    phone_local: string,
    code: string
}

export interface submitPhoneProps {
    phonePayload: authPhoneProps, 
    setSubmitPhoneLoading: (value: boolean) => void,
    setSubmitPhoneError?: (value: any) => void,
    setSubmitPhoneResponse: (value: any) => void,
}

export interface submitOtpProps {
    otpPayload: authOtpProps, 
    setSubmitOtpLoading: (value: boolean) => void,
    setSubmitOtpError?: (value: any) => void,
    setSubmitOtpResponse: (value: any) => void,
}

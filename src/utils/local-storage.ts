// set items to local storage
interface save2localProps {
    name: string,
    data: any
}
export const saveToLocalStorage = ({ name, data }:save2localProps) => {
    if(data){
        const formattedData = JSON.stringify(data);
        localStorage.setItem(name, formattedData)
    }
}

// get items from local storage

export const getUserFromLocalStorage = () => {
    let localUser;
    if (typeof window !== "undefined") {
        const savedUser:any = localStorage.getItem('user');
        const formattedUser = JSON.parse(savedUser);
        localUser = formattedUser;
    }
    return {
        localUser
    };
}

export const getAuthToken = () => {
    let token;
    if (typeof window !== "undefined") {
        token = localStorage.getItem('token')
    }
    return {
        token
    };
}

export const getPartnerURL = () => {
    let partnerURL;
    if (typeof window !== "undefined") {
        partnerURL = localStorage.getItem('partner_url')
    }
    return {
        partnerURL
    };
}

export const getPartnerId = () => {
    let partnerId;
    if (typeof window !== "undefined") {
        partnerId = localStorage.getItem('partner_id')
    }
    return {
        partnerId
    };
}
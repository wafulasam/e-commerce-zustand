// events
export interface getEventsProps {
    setEvents: (value: any) => void,
    setLoading: (value: boolean) => void,
    setError: (value: any) => void,
}
export interface getEventDetailsProps {
    id: string,
    setEventDetails: (value: any) => void,
    setLoading: (value: boolean) => void,
    setError: (value: any) => void,
}

// create events
export interface createEventProps {
    payload: any,
    setCreateEventResponse: (value: any) => void,
    setCreateEventLoading: (value: boolean) => void,
    setCreateEventError: (value: any) => void,
}

// event categories
export interface getEventCategoriesProps {
    setEventCategories: (value: any) => void,
    setLoading: (value: boolean) => void,
    setError: (value: any) => void,
}
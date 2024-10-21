import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
    const [noInternet, setNoInternet] = useState<boolean | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const handleOnline = () => setNoInternet(false);
        const handleOffline = () => setNoInternet(true);

        // Initial check
        setNoInternet(!navigator.onLine);
        setIsMounted(true); 

        // Event listeners
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return { noInternet, isMounted };
};

export default useOnlineStatus;
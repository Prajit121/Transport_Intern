import { useState, useEffect } from 'react';

/**
 * Hook to ensure consistent values between server and client rendering
 * Helps prevent hydration mismatches when using dynamic values like dates or currency formatting
 */
export function useClientSideValue(initialValue, getValue) {
    const [value, setValue] = useState(initialValue);
    
    useEffect(() => {
        // Only update on client side
        if (typeof window !== 'undefined') {
            const clientValue = getValue();
            if (clientValue !== value) {
                setValue(clientValue);
            }
        }
    }, [getValue, initialValue]);

    return [value, setValue];
}

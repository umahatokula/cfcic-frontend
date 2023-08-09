import { useState, useEffect } from 'react'

export function useIsMounted() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    })

    return (
        mounted
    )
}
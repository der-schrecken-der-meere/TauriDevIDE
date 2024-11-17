import { useCallback } from 'react'

const Init = ({
    setLoading
}: {
    setLoading: (state: () => boolean) => void,
}) => {

    const finishInitiation = useCallback(() => setLoading(() => false), []);

    finishInitiation();

    return (
        null
    )
}

export default Init
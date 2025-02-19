import { useEffect, useRef, useState } from "react";

export default function CountUp({start = 0, end, isMounted}: {start?: number, end: number, isMounted: boolean}) {

    const [value, setValue] = useState<number | undefined>(0);
    const ref = useRef(start);
    const counter = end / 20;

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const count = () => {
            if (ref.current < end) {
                const result = Math.ceil(ref.current + counter);
                setValue(result);
                ref.current = result;
            } else {
                setValue(end);
            }
            timeoutId = setTimeout(count, 70);
        };

        if (isMounted) {
            count();
        } else {
            setValue(0);
            ref.current = start;
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isMounted]);
    
    return (
        <span>
            {value}+
        </span>
    )
}

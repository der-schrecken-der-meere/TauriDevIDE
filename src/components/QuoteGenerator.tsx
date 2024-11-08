import { shuffleFunQuotes } from "@/meme"
import { useCallback, useEffect, useMemo, useRef } from "react";
import { animate, HTMLMotionProps, motion } from "framer-motion";

const QuoteGenerator = (props: HTMLMotionProps<"div">) => {
    const index = useRef(-1);
    const hint = useRef<HTMLDivElement|null>(null)
    const randomQuotes = useMemo(() => shuffleFunQuotes(), []);
    const easeDuration = 0.7;

    const changeQuote = useCallback((duration: number) => {
        if (hint.current) {
            index.current = index.current + 1 > randomQuotes.length - 1 ? 0 : index.current + 1;
            console.log(index.current);
            console.log(randomQuotes[index.current])
            hint.current.textContent = randomQuotes[index.current];
            animate(hint.current, { opacity: [0, 1] }, { duration: easeDuration, ease: "easeInOut", onComplete: () => {
                if (hint.current) {
                    animate(hint.current, { opacity: [1, 0] }, { duration: easeDuration, ease: "easeInOut", delay: duration - (easeDuration * 2)});
                }
            } });
        }
    }, []);

    useEffect(() => {
        const duration = 5;
        changeQuote(duration);
        const interval = setInterval(() => changeQuote(duration), duration * 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <motion.div ref={hint} initial={{ opacity: 0 }} {...props} />
    )
}

export { QuoteGenerator };
import { animate, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react";
import { PulseLoader } from "react-spinners";
import { QuoteGenerator } from "./components/QuoteGenerator";

const Preloader = () => {
    
    const loadingScreen = useRef<HTMLDivElement|null>(null);
    const loader = useRef<HTMLDivElement|null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        (async () => {
            await new Promise(resolve => {
                const to = setTimeout(() => {
                    clearTimeout(to);
                    finishLoading();
                    resolve(null);
                }, 5000);
            })
        })();
    }, []);

    const finishLoading = useCallback(() => {
        if (loader.current) {
            animate(loader.current, { opacity: [1, 0] }, { duration: 0.5, ease: "easeIn", onComplete: () => {
                if (loadingScreen.current) {
                    animate(loadingScreen.current, { y: ["0%", "-100%"] }, { duration: 1, ease: "easeInOut", delay: 0.3, onComplete: () => {
                        if (loadingScreen.current) {
                            setIsReady(true);
                        }
                    }})
                }
            } });
        }
    }, []);

    return (
        isReady
            ? null
            : (
                <motion.div
                    ref={loadingScreen}
                    className="w-screen h-screen flex flex-col justify-center items-center bg-accent absolute z-50"
                    initial={{
                        y: "0%",
                    }}
                >
                    <motion.div ref={loader} className="flex flex-col items-center gap-2">
                        <PulseLoader color="hsl(var(--primary))" speedMultiplier={0.8} />
                        <QuoteGenerator className="text-center text-lg" />
                    </motion.div>
                </motion.div>
            )
    )
}

export default Preloader
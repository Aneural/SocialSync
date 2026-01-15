import { useRef, useCallback } from "react";

function safePress(action: () => void, wait = 1200) {
const lastPressRef = useRef(0);

    return useCallback(() => {
    const now = Date.now();
    if (now - lastPressRef.current < wait) return;
    lastPressRef.current = now;

    action();
    }, [action, wait]);
}

export default safePress;
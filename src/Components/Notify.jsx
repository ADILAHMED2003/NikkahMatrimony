import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotify } from "../redux/slices/notifySlice";

const Notify = () => {
    const { message, visible, type } = useSelector((state) => state.notify);
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(100); // starts full (100%)

    useEffect(() => {
        if (visible) {
            setProgress(100); // reset line

            // Animate progress line
            let width = 100;
            const interval = setInterval(() => {
                width -= 1;
                setProgress(width);
                if (width <= 0) clearInterval(interval);
            }, 30); 

            const timer = setTimeout(() => {
                dispatch(hideNotify());
            }, 3000);

            return () => {
                clearInterval(interval);
                clearTimeout(timer);
            };
        }
    }, [visible, dispatch]);

    if (!visible) return null;

    const bgColor =
        type === "success"
            ? "#4CAF50"
            : type === "error"
                ? "#fc5246ff"
                : "#2196F3";

    return (
        <div
            style={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "12px 20px",
                backgroundColor: bgColor,
                // backgroundColor: "#fc75b8ff",
                color: "white",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: "500",
                zIndex: 9999,
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                minWidth: "280px",
                textAlign: "center",
            }}
        >
            {message}

            {/* Progress Line */}
            <div
                style={{
                    height: "4px",
                    width: `${progress}%`,
                    backgroundColor: "white",
                    marginTop: "8px",
                    borderRadius: "10px",
                    transition: "width 0.03s linear",
                }}
            ></div>
        </div>
    );
};

export default Notify;

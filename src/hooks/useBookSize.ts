import { useState, useEffect } from "react";

const BASE_W = 420;
const BASE_H = 700;
const H_PAD = 32; // horizontal padding around book
const V_PAD = 120; // space for controls + vertical padding

export function useBookSize() {
  const [dims, setDims] = useState({ width: BASE_W, height: BASE_H, scale: 1 });

  useEffect(() => {
    const compute = () => {
      const availW = window.innerWidth - H_PAD;
      const availH = window.innerHeight - V_PAD;
      const scale = Math.min(availW / BASE_W, availH / BASE_H, 1);
      setDims({
        width: Math.floor(BASE_W * scale),
        height: Math.floor(BASE_H * scale),
        scale,
      });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return dims;
}

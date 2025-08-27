"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: any ) {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 0.75,
    //  smoothTouch: true
      }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
// // components/global/SmoothScroll.tsx
// "use client";

// import { useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// declare global {
//   interface Window {
//     lenis?: Lenis;
//   }
// }

// export default function SmoothScroll({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const isMobileOrTablet = () => window.innerWidth < 1024;

//     const lenis = new Lenis({
//       lerp: isMobileOrTablet() ? 0.14 : 0.04,
//       smoothWheel: true,
//       wheelMultiplier: isMobileOrTablet() ? undefined : 0.9,
//       touchMultiplier: isMobileOrTablet() ? undefined : 1.5,
//       infinite: false,
//     });

//     window.lenis = lenis;

//     lenis.on("scroll", ScrollTrigger.update);

//     const raf = (time: number) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };
//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//       ScrollTrigger.clearMatchMedia();
//       window.lenis = undefined;
//     };
//   }, []);

//   return <>{children}</>;
// }

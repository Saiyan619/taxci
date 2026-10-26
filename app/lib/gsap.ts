import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // Mobile-friendly ScrollTrigger configuration
  ScrollTrigger.config({
    // Prevent address-bar resize from recalculating triggers
    ignoreMobileResize: true,
  });

  // Normalise scroll on touch devices so ScrollTrigger
  // tracks scroll position reliably (prevents iOS momentum
  // scroll de-sync)
  ScrollTrigger.normalizeScroll(true);

  // Refresh triggers once everything (images, fonts) has loaded
  // so start/end positions are accurate
  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

export { gsap, ScrollTrigger, SplitText };
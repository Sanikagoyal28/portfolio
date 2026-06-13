"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps<T extends ElementType> = {
  /** Element to render. Defaults to a div. */
  as?: T;
  /** Staggered entrance delay (maps to the .d1–.d4 classes). */
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Reveals its content on scroll by adding the `.in` class when it enters the
 * viewport — the same IntersectionObserver behavior as the prototype, but
 * scoped per-element. Honors prefers-reduced-motion via the CSS in globals.css.
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  delay,
  className = "",
  children,
  ...rest
}: RevealProps<T>) {
  const Comp = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", delay && `d${delay}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Comp ref={ref} className={classes} {...rest}>
      {children}
    </Comp>
  );
}

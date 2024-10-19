import React, { ReactNode } from "react";

type CardItemProps = {
  children: ReactNode;
  translateZ: string | number;
  as?: React.ElementType;
  [x: string]: any;
};

export function CardContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative perspective-1000 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`transform-style-preserve-3d transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
}

export function CardItem({ children, translateZ, as: Component = "div", ...rest }: CardItemProps) {
  return (
    <Component
      {...rest}
      className={`transform translate-z-${translateZ}`}
      style={{ transform: `translateZ(${translateZ}px)` }}
    >
      {children}
    </Component>
  );
}

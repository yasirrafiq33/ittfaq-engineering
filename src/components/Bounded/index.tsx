import React from 'react';
import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Comp = 'section', className, children, ...restProps }, ref) => {
        return (
            <Comp
                ref={ref}
                className={clsx("px-16 py-10 md:px-16 md:py-14 lg:py-16", className)}
                {...restProps}
            >
                <div>{children}</div>
            </Comp>
        )
    }
)

Bounded.displayName = "Bounded";

export default Bounded;
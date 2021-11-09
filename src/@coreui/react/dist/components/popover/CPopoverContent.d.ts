import React, { CSSProperties } from 'react';
import { CPopoverProps } from './CPopover';
import { PopperChildrenProps } from 'react-popper';
interface CPopoverContentProps extends Omit<CPopoverProps, 'placement' | 'children' | 'trigger'>, Omit<PopperChildrenProps, 'placementPostfix' | 'style'> {
    transitionClass?: string;
    style?: CSSProperties;
    placementClassNamePostfix?: string;
}
export declare const CPopoverContent: React.ForwardRefExoticComponent<Pick<CPopoverContentProps, "style" | "title" | "visible" | "content" | "placement" | "arrowProps" | "forceUpdate" | "update" | "isReferenceHidden" | "hasPopperEscaped" | "offset" | "placementClassNamePostfix" | "transitionClass"> & React.RefAttributes<HTMLDivElement>>;
export {};

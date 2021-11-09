import React, { HTMLAttributes } from 'react';
import './CIcon.css';
export interface CIconProps extends HTMLAttributes<SVGSVGElement> {
    /**
     * A string of all className you want applied to the component.
     */
    className?: string;
    /**
     * Use `icon={...}` instead of
     *
     * @deprecated since version 3.0
     */
    content?: string | string[];
    /**
     * Use for replacing default CIcon component classes. Prop is overriding the 'size' prop.
     */
    customClassName?: string | object | string[];
    /**
     * Name of the icon placed in React object or SVG content.
     */
    icon?: string | string[];
    /**
     * The height attribute defines the vertical length of an icon.
     */
    height?: number;
    /**
     * Use `icon="..."` instead of
     *
     * @deprecated since version 3.0
     */
    name?: string;
    /**
     * Size of the icon. Available sizes: 'sm', 'lg', 'xl', 'xxl', '3xl...9xl', 'custom', 'custom-size'.
     */
    size?: 'custom-size' | 'sm' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    /**
     * If defined component will be rendered using 'use' tag.
     */
    use?: string;
    /**
     * Title tag content.
     */
    title?: string;
    /**
     * The width attribute defines the horizontal length of an icon.
     */
    width?: number;
}
export declare const CIcon: React.ForwardRefExoticComponent<CIconProps & React.RefAttributes<SVGSVGElement>>;

import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors } from '../Types';
declare type Value = {
    title?: string | ReactNode;
    value?: number | string | ReactNode;
};
export interface CWidgetStatsDProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Chart node for your component. [docs]
     */
    chart?: string | ReactNode;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color?: Colors;
    /**
     * Icon node for your component. [docs]
     */
    icon?: string | ReactNode;
    /**
     * Values and titles for your component. [docs]
     */
    values?: Value[];
}
export declare const CWidgetStatsD: React.ForwardRefExoticComponent<CWidgetStatsDProps & React.RefAttributes<HTMLDivElement>>;
export {};

import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors } from '../Types';
export interface CWidgetStatsFProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color?: Colors;
    /**
     * Footer node for your component. [docs]
     */
    footer?: string | ReactNode;
    /**
     * Icon node for your component. [docs]
     */
    icon?: string | ReactNode;
    /**
     * Set padding of your component. [docs]
     */
    padding?: boolean;
    /**
     * Title node for your component. [docs]
     */
    title?: string | ReactNode;
    /**
     * Value node for your component. [docs]
     */
    value?: string | number | ReactNode;
}
export declare const CWidgetStatsF: React.ForwardRefExoticComponent<CWidgetStatsFProps & React.RefAttributes<HTMLDivElement>>;

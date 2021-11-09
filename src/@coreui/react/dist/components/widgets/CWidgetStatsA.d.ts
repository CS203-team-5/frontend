import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors } from '../Types';
export interface CWidgetStatsAProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Action node for your component. [docs]
     */
    action?: ReactNode;
    /**
     * Chart node for your component. [docs]
     */
    chart?: string | ReactNode;
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
     * Title node for your component. [docs]
     */
    title?: string | ReactNode;
    /**
     * Value node for your component. [docs]
     */
    value?: string | number | ReactNode;
}
export declare const CWidgetStatsA: React.ForwardRefExoticComponent<CWidgetStatsAProps & React.RefAttributes<HTMLDivElement>>;

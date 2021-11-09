import React, { HTMLAttributes, ReactNode } from 'react';
export interface CWidgetStatsEProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Chart node for your component. [docs]
     */
    chart?: string | ReactNode;
    /**
     * Title node for your component. [docs]
     */
    title?: string | ReactNode;
    /**
     * Value node for your component. [docs]
     */
    value?: string | number | ReactNode;
}
export declare const CWidgetStatsE: React.ForwardRefExoticComponent<CWidgetStatsEProps & React.RefAttributes<HTMLDivElement>>;

import React, { InputHTMLAttributes } from 'react';
export interface CFormSelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Specifies the number of visible options in a drop-down list. [docs]
     */
    htmlSize?: number;
    /**
     * Set component validation state to invalid. [docs]
     */
    invalid?: boolean;
    /**
     * Size the component small or large. [docs]
     *
     * @type 'sm' | 'lg'
     */
    size?: 'sm' | 'lg';
    /**
     * Set component validation state to valid. [docs]
     */
    valid?: boolean;
}
export declare const CFormSelect: React.ForwardRefExoticComponent<CFormSelectProps & React.RefAttributes<HTMLSelectElement>>;

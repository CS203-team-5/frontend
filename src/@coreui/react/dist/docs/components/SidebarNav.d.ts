import PropTypes from 'prop-types';
export declare type Badge = {
    color: string;
    text: string;
};
export declare type NavItem = {
    name: string | JSX.Element;
    icon?: string | JSX.Element;
    badge?: Badge;
    to: string;
    items?: NavItem[];
};
interface SidebarNavProps {
    items: NavItem[];
    currentRoute: string;
}
export declare const SidebarNav: {
    ({ items, currentRoute }: SidebarNavProps): JSX.Element;
    propTypes: {
        items: PropTypes.Validator<any[]>;
        currentRoute: PropTypes.Validator<string>;
    };
};
export {};

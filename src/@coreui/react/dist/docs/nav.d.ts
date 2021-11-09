declare const nav: {
    name: string;
    to: string;
    icon: JSX.Element;
    items: ({
        name: string;
        to: string;
        disabled?: undefined;
        badge?: undefined;
    } | {
        name: string;
        to: string;
        disabled: boolean;
        badge: {
            color: string;
            text: string;
        };
    })[];
}[];
export default nav;

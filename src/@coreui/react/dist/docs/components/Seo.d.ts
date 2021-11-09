import PropTypes from 'prop-types';
declare const SEO: {
    ({ title, description, image, article }: {
        title: any;
        description: any;
        image: any;
        article: any;
    }): JSX.Element;
    propTypes: {
        title: PropTypes.Requireable<string>;
        description: PropTypes.Requireable<string>;
        image: PropTypes.Requireable<string>;
        article: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        title: null;
        description: null;
        image: null;
        article: boolean;
    };
};
export default SEO;

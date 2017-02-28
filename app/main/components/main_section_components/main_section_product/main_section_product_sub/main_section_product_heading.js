import React from "react";
import productHeadingStyles from "./main_section_product_heading_styles.css"

class ProductHeading extends React.Component {
    render() {
        return <h1 className={productHeadingStyles.productHeading}>This is Putting!</h1>;
    }
}

export default ProductHeading;
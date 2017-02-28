import React from "react";
import {Image} from "react-bootstrap";
import puttingProductImage from "./putting_product_image.jpg";
import productImageStyles from "./main_section_product_image_styles.css";

class ProductImage extends React.Component {
    render() {
        return <Image circle src={puttingProductImage} className={productImageStyles.productImage} />;
    }
}

export default ProductImage;
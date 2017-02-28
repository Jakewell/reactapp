import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import PuttingProductHeading from "./main_section_product_sub/main_section_product_heading";
import PuttingProductImage from "./main_section_product_sub/main_section_product_image";
import productStyles from "./main_section_product_styles.css";

class Product extends React.Component {
    render() {
        return(
            <Row className={productStyles.productRow}>
                <Col lg={2} md={1} sm={0} xs={0}>
                </Col>

                <Col lg={8} md={10} sm={12} xs={12}>
                    <Row>
                        <Col lg={8} md={8} sm={8} xs={12} className={productStyles.productHeadingCol}>
                            <PuttingProductHeading />
                        </Col>
                        
                        <Col lg={4} md={4} sm={4} xs={0}>
                            <PuttingProductImage />
                        </Col>
                    </Row>
                </Col>

                <Col lg={2} md={1} sm={0} xs={0}>
                </Col>
            </Row>
        );
    }
}

export default Product;
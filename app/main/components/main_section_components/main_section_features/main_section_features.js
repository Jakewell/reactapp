import React from "react";
import {Row, Col, Carousel} from "react-bootstrap";
import puttingFeaturesImage_1 from "./putting_features_image_1.jpg";
import puttingFeaturesImage_2 from "./putting_features_image_2.jpg";
import featuresStyles from "./main_section_features_styles.css";

class FeaturesCarousel extends React.Component {
    render() {
        return(
            <Row className={featuresStyles.featuresRow}>
                <Col lg={12} md={12} sm={12} className={featuresStyles.carouselCol}>
                    <Carousel>
                        <Carousel.Item>
                            <img width={1920} height={300} alt="1920x300" src={puttingFeaturesImage_1} />
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>123456789</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img width={1920} height={300} alt="1920x300" src={puttingFeaturesImage_2} />
                            <Carousel.Caption>
                                <h3>Heading</h3>
                                <p>Hello</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        );
    }
}

export default FeaturesCarousel;
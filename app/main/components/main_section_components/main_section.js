import React from "react";
import {Grid} from "react-bootstrap";
import mainSectionStyles from "./main_section_styles.css";
import ProductSection from "./main_section_product/main_section_product";
import FeaturesSection from "./main_section_features/main_section_features";

class MainSection extends React.Component {
    render() {
        return (   
            <Grid fluid className={mainSectionStyles.mainGrid}>
                <ProductSection />
                <FeaturesSection />
            </Grid>
        );
    }
}

export default MainSection;
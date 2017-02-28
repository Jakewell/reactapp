import React from "react";
import TopBarNavigation from "./components/navbar_components/navbar";
import MainSection from "./components/main_section_components/main_section";
import "./favicon.ico";

class MainApplication extends React.Component {
    render() {
        return (
            <div>
                <TopBarNavigation />
                <MainSection />
            </div>
        );
    }
}

export default MainApplication;
import { Component } from "react";

import About from "../../components/About";
import Catalog from "../../components/Catalog";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default class Home extends Component {

    render() {
        return (
            <>
            <header>
                <Nav />
            </header>
                <body>
                    <Catalog />
                    <About />
                    <Features />
                    <Footer />
                </body>

            </>
        )
    }
}

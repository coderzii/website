/*
 * @Date: 2022-01-24
 * @Description:
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "./styles";
import Layout from "@theme/Layout";

class Page extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout>
                <PageWrapper>
                    <div className="page-content">Say Hello to you !</div>
                    <div className="page-footer">/ see you later /</div>
                </PageWrapper>
            </Layout>
        );
    }
}

export default Page;
Page.propsType = {};
Page.defaultProps = {};

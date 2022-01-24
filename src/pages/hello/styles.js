/*
 * @Date: 2022-01-24
 * @Description:
 */

import styled from "styled-components";

export const PageWrapper = styled.div`
    background-color: #f6f6f6;
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 600px;
    .page-content {
        width: 1400px;
        min-height: 400px;
        line-height: 100px;
        font-weight: 500;
        text-align: center;
    }
    .page-footer {
        text-align: center;
        font-size: 24px;
        font-weight: 500;
    }
`;

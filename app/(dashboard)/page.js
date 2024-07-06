'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import required data files`
import NarSatuDataTable from "sub-components/dashboard/NarSatuDataTable";
import RecSatuDataTable from "sub-components/dashboard/RecSatuDataTable";
import NarSatuADataTable from "sub-components/dashboard/NarSatuADataTable";

const Home = () => {
    return (
        <Fragment>
            <div className="bg-primary pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h1 className="mb-0  text-white fw-bold">Walk-by Inspection</h1>
                                    <h2></h2>
                                    <h4 className="mb-0  text-white fw">Condition-based Monitoring</h4>
                                </div>
                                <div>
                                    <Link href="/route" className="btn btn-white">Fill in Report</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <table>
                        <tbody>
                            <tr>
                                <td width='545px'><NarSatuDataTable/></td>
                                <td width='545px'><NarSatuADataTable/></td>
                            </tr>
                            <tr>
                                <td><RecSatuDataTable/></td>
                            </tr>
                        </tbody>
                    </table>
                </Row>

            </Container>
        </Fragment>
    )
}
export default Home;

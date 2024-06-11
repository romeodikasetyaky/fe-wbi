'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "widgets";

// import sub components
import { ActiveProjects, Teams, 
    TasksPerformance 
} from "sub-components";

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";
import NarSatuDataTable from "sub-components/dashboard/NarSatuDataTable";

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
                                    <h1 className="mb-0  text-white fw-bold">Walk By Inspection</h1>
                                </div>
                                <div>
                                    <Link href="/route" className="btn btn-white">Fill in Report</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <NarSatuDataTable/>
                </Row>

            </Container>
        </Fragment>
    )
}
export default Home;

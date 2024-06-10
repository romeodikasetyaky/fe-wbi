'use client'

import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
import { Fragment } from "react";
import { PricingCard } from 'widgets'
import { n1, n2, kiln } from 'data/pricing/PricingPlansData';

const Route = () => {
  return (
    <Fragment>
      <div className="bg-primary pt-10 pb-21"></div>
      <Container fluid className="mt-n22 px-6">
        <Row>
          <Col lg={12} md={12} xs={12}>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-2 mb-lg-0">
                  <h1 className="mb-0  text-white fw-bold">Route</h1>
                </div>
                <div>
                  {/* <Link href="/route" className="btn btn-white">Create New Project</Link> */}
                </div>
              </div>
            </div>
          </Col>
          <Row className="mb-10 mt-6">
            <Col xl={4} lg={6} md={12} xs={12} className="mb-3">
              <PricingCard content={n1} />
            </Col>
            <Col xl={4} lg={6} md={12} xs={12} className="mb-3">
              <PricingCard content={kiln} />
            </Col>
            <Col xl={4} lg={6} md={12} xs={12} className="mb-3">
              <PricingCard content={n2} />
            </Col>
          </Row>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Route;
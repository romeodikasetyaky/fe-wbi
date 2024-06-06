'use client'
// import node module libraries
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';

// import sub components
import { PricingCard, PageHeading, FeatureLeftTopIcon } from 'widgets'

// import data files
import { n1, n2, kiln } from 'data/pricing/PricingPlansData';
import FAQsData from 'data/pricing/FAQsData';
import FeaturesData from 'data/pricing/FeaturesData';

const Route = () => {
  return (
    <Container fluid className="p-6">
      <div className="py-8">
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12}>
            <Col md={12} xs={12} className="mb-6">
              <h2 className="display-4 fw-bold ls-sm">Walk By Inspection</h2>
            </Col>
            <Row className="mb-10">
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
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Route;
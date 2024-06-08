'use client';

import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollapsibleTable = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{ backgroundColor: 'var(--bs-light)', width: '7%' }} className='text-center'>No</th>
          <th style={{ backgroundColor: 'var(--bs-light)' }} className='text-center'>HAC</th>
          <th style={{ backgroundColor: 'var(--bs-light)' }} className='text-center'>Task</th>
          <th style={{ backgroundColor: 'var(--bs-light)' }} className='text-center'>Standard</th>
          <th style={{ backgroundColor: 'var(--bs-light)' }} className='text-center'>Actual Value</th>
          <th style={{ backgroundColor: 'var(--bs-light)' }} className='text-center'>Remark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={6} className='text-center align-middle'>
            <span>1</span>
          </td>
          <td rowSpan={6} className='align-middle accordion-toggle rotate-text'
            style={{ cursor: 'pointer' }}
            onClick={handleToggleCollapse}
            aria-controls="multiCollapse1"
            aria-expanded={isCollapsed}
          >
            <span>NR.213-MS1</span>
          </td>
        </tr>
        <tr className={`collapse ${isCollapsed ? 'show' : ''}`} id="multiCollapse2">
          <td colSpan={5}>
            <span>1. Safety Guard</span>
          </td>
        </tr>
        <tr className={`collapse ${isCollapsed ? 'show' : ''}`} id="multiCollapse2">
          <td className='align-middle'>Rotating parts</td>
          <td className='align-middle'>Secured, Tight</td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
        </tr>
        <tr className={`collapse ${isCollapsed ? 'show' : ''}`} id="multiCollapse1">
          <td className='align-middle'>High Speed Cover</td>
          <td className='align-middle'>Secured, Tight</td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
        </tr>
        <tr className={`collapse ${isCollapsed ? 'show' : ''}`} id="multiCollapse1">
          <td className='align-middle'>Low Speed Cover</td>
          <td className='align-middle'>Secured, Tight</td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
        </tr>
        <tr className={`collapse ${isCollapsed ? 'show' : ''}`} id="multiCollapse1">
          <td className='align-middle'>Cover Sepanjang Wobler</td>
          <td className='align-middle'>Secured, Tight</td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
        </tr>
        <tr className={`collapse ${isCollapsed ? 'show' : ''}`} id="multiCollapse1">
          <td className='align-middle'>Remaining guarding</td>
          <td className='align-middle'>All in place and not loose</td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
          <td className='p-0'>
            <Form.Control style={{ height: '65px' }} type="text" placeholder="Enter here" required />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CollapsibleTable;

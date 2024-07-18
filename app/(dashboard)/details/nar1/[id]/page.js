'use client';

import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

const detailsNarSatu = ({ params }) => {
  const narId = params.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const detailNarSatu = async () => {
      const narsatu = await fetch(process.env.NEXT_PUBLIC_API_URL + 'nar1/' + narId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });

      const response = await narsatu.json();
      if (response.data != null) {
        setData(response.data);
      }
    };
    detailNarSatu();
  }, []);

  return (
    <Container fluid className="p-6">
      <Row className="align-items-center">
        <Col xl={12} lg={12} md={12} xs={12}>
          <div className="bg-white rounded smooth-shadow-sm">
            <div className="d-flex flex-column align-items-center pt-4 pb-6 px-4">
              <Col md={12} xs={12} className="mb-6">
                <h3 className=" fw-bold ls-sm">Crusher Limestone NAR 1</h3>
              </Col>
              <Col md={12} xs={12} xl={12} className="mb-6">
                <Form>
                  <Table responsive bordered className="text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff', width: '7%' }} className='text-center'><b>No</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff', width: '7%' }} className='text-center'><b>HAC</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff', width: '37%' }} className='text-center'><b>Task</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff', width: '27%' }} className='text-center'><b>Standard</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff', width: '7%' }} className='text-center'><b>Actual Value</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff', width: '15%' }} className='text-center'><b>Status</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* WQ1 */}
                      <tr>
                        <td rowSpan={28} className='text-center align-middle'>
                          <span>1</span>
                        </td>
                        <td rowSpan={28} className='text-center align-middle rotate-text'>
                          <b>NR.213-WQ1</b>
                        </td>
                      </tr>
                      {/* SAFETY GUARD */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safety Guard</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rotating parts</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiSgRotatingParts'
                            name='wqiSgRotatingParts'
                            className="large-checkbox"
                            checked={data.wq1_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.wq1_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiSgHSC'
                            name='wqiSgHSC'
                            className="large-checkbox"
                            checked={data.wq1_1_hsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiSgLSC'
                            name='wqiSgLSC'
                            className="large-checkbox"
                            checked={data.wq1_1_lsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Sepanjang Wobler</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiSgCSW'
                            name='wqiSgCSW'
                            className="large-checkbox"
                            checked={data.wq1_1_csw}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_1_csw ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiSgRG'
                            name='wqiSgRG'
                            className="large-checkbox"
                            checked={data.wq1_1_remaining_guarding}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      {/* REDUCER */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Reducer</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiRedNoise'
                            name='wqiRedNoise'
                            className="large-checkbox"
                            checked={data.wq1_2_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='wqiRedTemp' name="wqiRedTemp" placeholder=""
                          value={data.wq1_2_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.wq1_2_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leaking</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiRedSeal'
                            name='wqiRedSeal'
                            className="large-checkbox"
                            checked={data.wq1_2_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiRedLevelOli'
                            name='wqiRedLevelOli'
                            className="large-checkbox"
                            checked={data.wq1_2_level_oil}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_level_oil ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Driver Sprocket</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiRedRS'
                            name='wqiRedRS'
                            className="large-checkbox"
                            checked={data.wq1_2_drive_s}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_drive_s ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Driven Sprocket</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiRedDVS'
                            name='wqiRedDVS'
                            className="large-checkbox"
                            checked={data.wq1_2_driven_s}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_driven_s ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Chain</td>
                        <td className='align-middle'>Oiled</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiRedChain'
                            name='wqiRedChain'
                            className="large-checkbox"
                            checked={data.wq1_2_chain}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_chain ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (no noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiRedCoup'
                            name='wqiRedCoup'
                            className="large-checkbox"
                            checked={data.wq1_2_coupling}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      {/* BEARING HEAD FIX */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Bearing hed fix</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiBhfNoise'
                            name='wqiBhfNoise'
                            className="large-checkbox"
                            checked={data.wq1_3_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_3_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='wqiBhfTemp' name="wqiBhfTemp" placeholder=""
                          value={data.wq1_3_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.wq1_3_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      {/* 4. Bearing head free */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Bearing head free</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiBhfrNoise'
                            name='wqiBhfrNoise'
                            className="large-checkbox"
                            checked={data.wq1_4_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_4_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='wqiBhfrTemp' name="wqiBhfrTemp" placeholder=""
                          value={data.wq1_4_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.wq1_4_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      {/* 5. Bearing Free (other wobler) */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Bearing Free (other wobler)</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiBfNoise'
                            name='wqiBfNoise'
                            className="large-checkbox"
                            checked={data.wq1_5_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_5_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='wqiBfTemp' name="wqiBfTemp" placeholder=""
                          value={data.wq1_5_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.wq1_5_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Triple Chain</td>
                        <td className='align-middle'>Tidak crack/kendor</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiBfTc'
                            name='wqiBfTc'
                            className="large-checkbox"
                            checked={data.wq1_5_tc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_5_tc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      {/* 6. Casing */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Casing</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cleanliness</td>
                        <td className='align-middle'>Clean (no material)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='wqiCClean'
                            name='wqiCClean'
                            className="large-checkbox"
                            checked={data.wq1_6_cleanliness}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_6_cleanliness ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='wqiRm' name="wqiRm" placeholder=""
                          value={data.wq1_remark}
                        /></td>
                      </tr>
                      {/* END WQ1 */}

                      {/* HC1 */}
                      <tr>
                        <td rowSpan={37} className='text-center align-middle'>
                          <span>2</span>
                        </td>
                        <td rowSpan={37} className='text-center align-middle rotate-text'>
                          <b>NR.213-HC1</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safety Guard</b>
                        </td>
                      </tr>
                      {/* HC1 Safety Guard */}
                      <tr>
                        <td className='align-middle'>Rotating parts</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hc1SgRotpart'
                            name='hc1SgRotpart'
                            className="large-checkbox"
                            checked={data.hc1_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hc1SgHsc'
                            name='hc1SgHsc'
                            className="large-checkbox"
                            checked={data.hc1_1_hsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hc1SgRg'
                            name='hc1SgRg'
                            className="large-checkbox"
                            checked={data.hc1_1_remaining_guarding}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Bearing head fix</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hc1BhfrNoise'
                            name='hc1BhfrNoise'
                            className="large-checkbox"
                            checked={data.hc1_2_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_2_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leaking</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hc1BhfrSeal'
                            name='hc1BhfrSeal'
                            className="large-checkbox"
                            checked={data.hc1_2_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_2_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='hc1BhfrTemp' name="hc1BhfrTemp" placeholder=""
                          value={data.hc1_2_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_2_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Bearing head free</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hc1BhfreNoise'
                            name='hc1BhfreNoise'
                            className="large-checkbox"
                            checked={data.hc1_3_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_3_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leaking</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hc1BhfreSeal'
                            name='hc1BhfreSeal'
                            className="large-checkbox"
                            checked={data.hc1_3_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_3_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='hc1BhfreTemp' name="hc1BhfreTemp" placeholder=""
                          value={data.hc1_3_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_3_temp) ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Reducer Breaker plate</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpNoise'
                            name='hciRbpNoise'
                            className="large-checkbox"
                            checked={data.hc1_4_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>  
                        <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='hciRbpTemp' name="hciRbpTemp" placeholder=""
                          value={data.hc1_4_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_4_temp) ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leaking</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpSeal'
                            name='hciRbpSeal'
                            className="large-checkbox"
                            checked={data.hc1_4_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpLevelOli'
                            name='hciRbpLevelOli'
                            className="large-checkbox"
                            checked={data.hc1_4_level_oil}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_level_oil ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Chain Drive</td>
                        <td className='align-middle'>Oiled (good)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpCD'
                            name='hciRbpCD'
                            className="large-checkbox"
                            checked={data.hc1_4_cd}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_cd ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Drive sprocket</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpDvS'
                            name='hciRbpDvS'
                            className="large-checkbox"
                            checked={data.hc1_4_drive_s}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_drive_s ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Driven sprocket</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpDvnS'
                            name='hciRbpDvnS'
                            className="large-checkbox"
                            checked={data.hc1_4_driven_s}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_driven_s ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Bearing head fix (breaker plate)</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpBpNoise'
                            name='hciRbpBpNoise'
                            className="large-checkbox"
                            checked={data.hc1_5_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_5_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leaking/worn</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hciRbpBpSeal'
                            name='hciRbpBpSeal'
                            className="large-checkbox"
                            checked={data.hc1_5_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_5_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='hciRbpBpTemp' name="hciRbpBpTemp" placeholder=""
                          value={data.hc1_5_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_5_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Bearing head free (breaker plate)</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hci6noise'
                            name='hci6noise'
                            className="large-checkbox"
                            checked={data.hc1_6_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_6_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leaking/worn</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hci6seal'
                            name='hci6seal'
                            className="large-checkbox"
                            checked={data.hc1_6_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_6_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='hci6temp' name="hci6temp" placeholder=""
                          value={data.hc1_6_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_6_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>7. Bearing tail utara (breaker plate)</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hci7noise'
                            name='hci7noise'
                            className="large-checkbox"
                            checked={data.hc1_7_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_7_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='hci7temp' name="hci7temp" placeholder=""
                          value={data.hc1_7_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_7_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Bearing tail selatan (breaker plate)</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hci8noise'
                            name='hci8noise'
                            className="large-checkbox"
                            checked={data.hc1_8_noise}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_8_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='hci8temp' name="hci8temp" placeholder=""
                          value={data.hc1_8_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_8_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>9. Casing</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cleanliness</td>
                        <td className='align-middle'>Clean (no material)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='hci9cesing'
                            name='hci9cesing'
                            className="large-checkbox"
                            checked={data.hc1_9_cleanliness}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_9_cleanliness ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='hciRm' name="hciRm" placeholder=""
                          value={data.hc1_remark}
                        /></td>
                      </tr>
                      {/* END HC1 */}

                      {/* BC1 */}
                      <tr>
                        <td rowSpan={72} className='text-center align-middle'>
                          <span>2</span>
                        </td>
                        <td rowSpan={72} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC1</b>
                        </td>
                      </tr>
                      {/* SAFETY GUARD */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safety Guard</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rotating parts</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSgRotatingParts'
                            name='crbciSgRotatingParts'
                            className="large-checkbox"
                            checked={data.crbc1_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSgHSC'
                            name='crbciSgHSC'
                            className="large-checkbox"
                            checked={data.crbc1_1_hsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc1_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSgLSC'
                            name='crbciSgLSC'
                            className="large-checkbox"
                            checked={data.crbc1_1_lsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc1_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Sepanjang Belt</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSgCSB'
                            name='crbciSgCSB'
                            className="large-checkbox"
                            checked={data.crbc1_1_csb}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc1_1_csb ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSgRG'
                            name='crbciSgRG'
                            className="large-checkbox"
                            checked={data.crbc1_1_remaining_guarding}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc1_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Head Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadLagging'
                            name='crbciHeadLagging'
                            className="large-checkbox"
                            checked={data.crbc1_2_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Primary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadPrimary'
                            name='crbciHeadPrimary'
                            className="large-checkbox"
                            checked={data.crbc1_2_primary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_primary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Secondary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadSecondary'
                            name='crbciHeadSecondary'
                            className="large-checkbox"
                            checked={data.crbc1_2_secondary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_secondary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Fix</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadFixNoise'
                            name='crbciHeadFixNoise'
                            className="large-checkbox"
                            checked={data.crbc1_2_fix_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_fix_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciHeadFixTemp' name="crbciHeadFixTemp" placeholder=""
                          value={data.crbc1_2_fix_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_2_fix_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Free</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadFreeNoise'
                            name='crbciHeadFreeNoise'
                            className="large-checkbox"
                            checked={data.crbc1_2_free_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_free_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciHeadFreeTemp' name="crbciHeadFreeTemp" placeholder=""
                          value={data.crbc1_2_free_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_2_free_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Reducer</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadRedNoise'
                            name='crbciHeadRedNoise'
                            className="large-checkbox"
                            checked={data.crbc1_2_red_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_red_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciHeadRedTemp' name="crbciHeadRedTemp" placeholder=""
                          value={data.crbc1_2_red_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_2_red_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadRedSeal'
                            name='crbciHeadRedSeal'
                            className="large-checkbox"
                            checked={data.crbc1_2_red_seal}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_red_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadRedOli'
                            name='crbciHeadRedOli'
                            className="large-checkbox"
                            checked={data.crbc1_2_red_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_red_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (no noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadRedCoupling'
                            name='crbciHeadRedCoupling'
                            className="large-checkbox"
                            checked={data.crbc1_2_red_coupling}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_2_red_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Snub Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSnubLagging'
                            name='crbciSnubLagging'
                            className="large-checkbox"
                            checked={data.crbc1_3_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_3_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSnubUtaraNoise'
                            name='crbciSnubUtaraNoise'
                            className="large-checkbox"
                            checked={data.crbc1_3_utara_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_3_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciSnubUtaraTemp' name="crbciSnubUtaraTemp" placeholder=""
                          value={data.crbc1_3_utara_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_3_utara_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Selatan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSnubSelNoise'
                            name='crbciSnubSelNoise'
                            className="large-checkbox"
                            checked={data.crbc1_3_sel_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_3_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciSnubSelTemp' name="crbciSnubSelTemp" placeholder=""
                          value={data.crbc1_3_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_3_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Bend Pulley Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciBaratLagging'
                            name='crbciBaratLagging'
                            className="large-checkbox"
                            checked={data.crbc1_4_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_4_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciBaratUtaraNoise'
                            name='crbciBaratUtaraNoise'
                            className="large-checkbox"
                            checked={data.crbc1_4_utara_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_4_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciBaratUtaraTemp' name="crbciBaratUtaraTemp" placeholder=""
                          value={data.crbc1_4_utara_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_4_utara_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Selatan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciBaratSelatanNoise'
                            name='crbciBaratSelatanNoise'
                            className="large-checkbox"
                            checked={data.crbc1_4_sel_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_4_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciBaratSelatanTemp' name="crbciBaratSelatanTemp" placeholder=""
                          value={data.crbc1_4_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_4_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Bend Pulley Timur</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTimurLagging'
                            name='crbciTimurLagging'
                            className="large-checkbox"
                            checked={data.crbc1_5_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_5_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTimurUtaraNoise'
                            name='crbciTimurUtaraNoise'
                            className="large-checkbox"
                            checked={data.crbc1_5_utara_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_5_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciTimurUtaraTemp' name="crbciTimurUtaraTemp" placeholder=""
                          value={data.crbc1_5_utara_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_5_utara_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Selatan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTimurSelatanNoise'
                            name='crbciTimurSelatanNoise'
                            className="large-checkbox"
                            checked={data.crbc1_5_sel_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_5_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciTimurSelatanTemp' name="crbciTimurSelatanTemp" placeholder=""
                          value={data.crbc1_5_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_5_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Take Up Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTakeLagging'
                            name='crbciTakeLagging'
                            className="large-checkbox"
                            checked={data.crbc1_6_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_6_lagging_rm ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTakeUtaraNoise'
                            name='crbciTakeUtaraNoise'
                            className="large-checkbox"
                            checked={data.crbc1_6_utara_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_6_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciTakeUtaraTemp' name="crbciTakeUtaraTemp" placeholder=""
                          value={data.crbc1_6_utara_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_6_utara_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Selatan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTakeSelNoise'
                            name='crbciTakeSelNoise'
                            className="large-checkbox"
                            checked={data.crbc1_6_sel_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_6_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciTakeSelTemp' name="crbciTakeSelTemp" placeholder=""
                          value={data.crbc1_6_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_6_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>7. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTailLagging'
                            name='crbciTailLagging'
                            className="large-checkbox"
                            checked={data.crbc1_7_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_7_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>V Scrapper</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTailVs'
                            name='crbciTailVs'
                            className="large-checkbox"
                            checked={data.crbc1_7_vs}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_7_vs ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTailUtaraNoise'
                            name='crbciTailUtaraNoise'
                            className="large-checkbox"
                            checked={data.crbc1_7_utara_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_7_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciTailUtaraTemp' name="crbciTailUtaraTemp" placeholder=""
                          value={data.crbc1_7_utara_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_7_utara_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Selatan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciTailSelNoise'
                            name='crbciTailSelNoise'
                            className="large-checkbox"
                            checked={data.crbc1_7_sel_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_7_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciTailSelTemp' name="crbciTailSelTemp" placeholder=""
                          value={data.crbc1_7_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc1_7_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear and No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSkirt'
                            name='crbciSkirt'
                            className="large-checkbox"
                            checked={data.crbc1_8_skirt}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_8_skirt ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciChute'
                            name='crbciChute'
                            className="large-checkbox"
                            checked={data.crbc1_8_chute}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_8_chute ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciCondition'
                            name='crbciCondition'
                            className="large-checkbox"
                            checked={data.crbc1_8_condition}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_8_condition ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciJoint'
                            name='crbciJoint'
                            className="large-checkbox"
                            checked={data.crbc1_8_joint}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_8_joint ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Impact Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciImpact'
                            name='crbciImpact'
                            className="large-checkbox"
                            checked={data.crbc1_8_impact}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_8_impact ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carry Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciCarry'
                            name='crbciCarry'
                            className="large-checkbox"
                            checked={data.crbc1_8_carry}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_8_carry ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Return Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciReturn'
                            name='crbciReturn'
                            className="large-checkbox"
                            checked={data.crbc1_8_return}
                          /></td>
                        <td className='align-middle'><b>{data.crbc1_8_return ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='crbciRm' name="crbciRm" placeholder=""
                          value={data.bc1_remark}
                        /></td>
                      </tr>
                      {/* MS1 */}
                      <tr>
                        <td rowSpan={39} className='text-center align-middle'>
                          <span>4</span>
                        </td>
                        <td rowSpan={39} className='text-center align-middle rotate-text'>
                          <b>NR.213-MS1</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safey Guard</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rotating Parts</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSgRot'
                            name='crmsiSgRot'
                            className="large-checkbox"
                            checked={data.crms1_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Tail Pulley</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSgCTP'
                            name='crmsiSgCTP'
                            className="large-checkbox"
                            checked={data.crms1_1_ctp}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_1_ctp ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Head Pulley</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSgCHP'
                            name='crmsiSgCHP'
                            className="large-checkbox"
                            checked={data.crms1_1_chp}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_1_chp ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Along Belt</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSgCAB'
                            name='crmsiSgCAB'
                            className="large-checkbox"
                            checked={data.crms1_1_cab}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_1_cab ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Motor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Foundation Bolts</td>
                        <td className='align-middle'>Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiMotorFound'
                            name='crmsiMotorFound'
                            className="large-checkbox"
                            checked={data.crms1_2_foundation}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_2_foundation ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing LS</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crmsiMotorTempLS' name="crmsiMotorTempLS" placeholder=""
                          value={data.crms1_2_temp_ls}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crms1_2_temp_ls) < 65 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing FS</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crmsiMotorTempFS' name="crmsiMotorTempFS" placeholder=""
                          value={data.crms1_2_temp_fs}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crms1_2_temp_fs) < 65 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Transmission Drive</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>V-Belts</td>
                        <td className='align-middle'>Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiVBelt'
                            name='crmsiVBelt'
                            className="large-checkbox"
                            checked={data.crms1_3_vbelt}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_3_vbelt ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover V-Belts</td>
                        <td className='align-middle'>Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiVCover'
                            name='crmsiVCover'
                            className="large-checkbox"
                            checked={data.crms1_3_cover}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_3_cover ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Reducer</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crmsiRedTemp' name="crmsiRedTemp" placeholder=""
                          value={data.crms1_4_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crms1_4_temp) < 65 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Oil Level</td>
                        <td className='align-middle'>In Range</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedOli'
                            name='crmsiRedOli'
                            className="large-checkbox"
                            checked={data.crms1_4_level_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_4_level_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal Oil High Speed</td>
                        <td className='align-middle'>No Leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedSealHS'
                            name='crmsiRedSealHS'
                            className="large-checkbox"
                            checked={data.crms1_4_seal_hs}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_4_seal_hs ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal Oil Low Speed</td>
                        <td className='align-middle'>No Leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedSealLS'
                            name='crmsiRedSealLS'
                            className="large-checkbox"
                            checked={data.crms1_4_seal_ls}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_4_seal_ls ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>No Noise</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedNoise'
                            name='crmsiRedNoise'
                            className="large-checkbox"
                            checked={data.crms1_4_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_4_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Foundation Bolts</td>
                        <td className='align-middle'>Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedFound'
                            name='crmsiRedFound'
                            className="large-checkbox"
                            checked={data.crms1_4_foundation}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_4_foundation ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Head Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Fix</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crmsiHeadTempFix' name="crmsiHeadTempFix" placeholder=""
                          value={data.crms1_5_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crms1_5_temp_fix) < 65 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise Bearing Fix</td>
                        <td className='align-middle'>No Noise</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiHeadNoiseFix'
                            name='crmsiHeadNoiseFix'
                            className="large-checkbox"
                            checked={data.crms1_5_noise_fix}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_5_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Free</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crmsiHeadTempFree' name="crmsiHeadTempFree" placeholder=""
                          value={data.crms1_5_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crms1_5_temp_free) < 65 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise Bearing Free</td>
                        <td className='align-middle'>No Noise</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiHeadNoiseFree'
                            name='crmsiHeadNoiseFree'
                            className="large-checkbox"
                            checked={data.crms1_5_noise_free}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_5_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Legging</td>
                        <td className='align-middle'>No Crack</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiHeadLegging'
                            name='crmsiHeadLegging'
                            className="large-checkbox"
                            checked={data.crms1_5_legging}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_5_legging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Fix</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crmsiTailTempFix' name="crmsiTailTempFix" placeholder=""
                          value={data.crms1_6_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crms1_6_temp_fix) < 65 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise Bearing Fix</td>
                        <td className='align-middle'>No Noise</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiTaiNoiselFix'
                            name='crmsiTaiNoiselFix'
                            className="large-checkbox"
                            checked={data.crms1_6_noise_fix}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_6_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Free</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crmsiTailTempFree' name="crmsiTailTempFree" placeholder=""
                          value={data.crms1_6_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crms1_6_temp_free) < 65 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise Bearing Free</td>
                        <td className='align-middle'>No Noise</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiTailNoiseFree'
                            name='crmsiTailNoiseFree'
                            className="large-checkbox"
                            checked={data.crms1_6_noise_free}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_6_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Legging</td>
                        <td className='align-middle'>No Crack</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiTailLegging'
                            name='crmsiTailLegging'
                            className="large-checkbox"
                            checked={data.crms1_6_legging}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_6_legging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>7. Support Roller</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carrier Roller</td>
                        <td className='align-middle'>No Stuck</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSupportRoller'
                            name='crmsiSupportRoller'
                            className="large-checkbox"
                            checked={data.crms1_7_roller}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_7_roller ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Clean Lines</td>
                        <td className='align-middle'>No Crack</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSupportClean'
                            name='crmsiSupportClean'
                            className="large-checkbox"
                            checked={data.crms1_7_clean}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_7_clean ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>No Stuck</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiBeltCondition'
                            name='crmsiBeltCondition'
                            className="large-checkbox"
                            checked={data.crms1_8_condition}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_8_condition ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>No Crack</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiBeltjoint'
                            name='crmsiBeltjoint'
                            className="large-checkbox"
                            checked={data.crms1_8_joint}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_8_joint ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cleanliness</td>
                        <td className='align-middle'>Clean</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiBeltCleanliness'
                            name='crmsiBeltCleanliness'
                            className="large-checkbox"
                            checked={data.crms1_8_cleanliness}
                          /></td>
                        <td className='align-middle'><b>{data.crms1_8_cleanliness ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='crmsiRm' name="crmsiRm" placeholder=""
                          value={data.ms1_remark}
                        /></td>
                      </tr>
                      {/* BC2 */}
                      <tr>
                        <td rowSpan={72} className='text-center align-middle'>
                          <span>5</span>
                        </td>
                        <td rowSpan={72} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC2</b>
                        </td>
                      </tr>
                      {/* SAFETY GUARD */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safety Guard</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rotating parts</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSgRotatingParts'
                            name='crbciiSgRotatingParts'
                            className="large-checkbox"
                            checked={data.crbc2_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSgHSC'
                            name='crbciiSgHSC'
                            className="large-checkbox"
                            checked={data.crbc2_1_hsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc2_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSgLSC'
                            name='crbciiSgLSC'
                            className="large-checkbox"
                            checked={data.crbc2_1_lsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc2_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Sepanjang Belt</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSgCSB'
                            name='crbciiSgCSB'
                            className="large-checkbox"
                            checked={data.crbc2_1_csb}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc2_1_csb ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSgRG'
                            name='crbciiSgRG'
                            className="large-checkbox"
                            checked={data.crbc2_1_remaining_guarding}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc2_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Head Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadLagging'
                            name='crbciiHeadLagging'
                            className="large-checkbox"
                            checked={data.crbc2_2_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Primary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadPrimary'
                            name='crbciiHeadPrimary'
                            className="large-checkbox"
                            checked={data.crbc2_2_primary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_primary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Secondary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadSecondary'
                            name='crbciiHeadSecondary'
                            className="large-checkbox"
                            checked={data.crbc2_2_secondary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_secondary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Fix</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadFixNoise'
                            name='crbciiHeadFixNoise'
                            className="large-checkbox"
                            checked={data.crbc2_2_fix_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_fix_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiHeadFixTemp' name="crbciiHeadFixTemp" placeholder=""
                          value={data.crbc2_2_fix_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_2_fix_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Free</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadFreeNoise'
                            name='crbciiHeadFreeNoise'
                            className="large-checkbox"
                            checked={data.crbc2_2_free_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_free_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiHeadFreeTemp' name="crbciiHeadFreeTemp" placeholder=""
                          value={data.crbc2_2_free_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_2_free_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Reducer</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadRedNoise'
                            name='crbciiHeadRedNoise'
                            className="large-checkbox"
                            checked={data.crbc2_2_red_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_red_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiHeadRedTemp' name="crbciiHeadRedTemp" placeholder=""
                          value={data.crbc2_2_red_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_2_red_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadRedSeal'
                            name='crbciiHeadRedSeal'
                            className="large-checkbox"
                            checked={data.crbc2_2_red_seal}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_red_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadRedOli'
                            name='crbciiHeadRedOli'
                            className="large-checkbox"
                            checked={data.crbc2_2_red_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_red_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadRedCoupling'
                            name='crbciiHeadRedCoupling'
                            className="large-checkbox"
                            checked={data.crbc2_2_red_coupling}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_2_red_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Snub Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSnubLagging'
                            name='crbciiSnubLagging'
                            className="large-checkbox"
                            checked={data.crbc2_3_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_3_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSnubUtaraNoise'
                            name='crbciiSnubUtaraNoise'
                            className="large-checkbox"
                            checked={data.crbc2_3_utara_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_3_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiSnubUtaraTemp' name="crbciiSnubUtaraTemp" placeholder=""
                          value={data.crbc2_3_utara_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_3_utara_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Selatan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSnubSelNoise'
                            name='crbciiSnubSelNoise'
                            className="large-checkbox"
                            checked={data.crbc2_3_sel_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_3_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiSnubSelTemp' name="crbciiSnubSelTemp" placeholder=""
                          value={data.crbc2_3_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_3_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Bend Pulley Utara</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiUtaraLagging'
                            name='crbciiUtaraLagging'
                            className="large-checkbox"
                            checked={data.crbc2_4_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_4_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing barat</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiUtaraBaratNoise'
                            name='crbciiUtaraBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc2_4_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_4_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiUtaraBaratTemp' name="crbciiUtaraBaratTemp" placeholder=""
                          value={data.crbc2_4_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_4_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Timur</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiUtaraTimurNoise'
                            name='crbciiUtaraTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc2_4_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_4_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiUtaraTimurTemp' name="crbciiUtaraTimurTemp" placeholder=""
                          value={data.crbc2_4_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_4_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Bend Pulley Selatan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSelatanLagging'
                            name='crbciiSelatanLagging'
                            className="large-checkbox"
                            checked={data.crbc2_5_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_5_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing barat</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSelatanBaratNoise'
                            name='crbciiSelatanBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc2_5_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_5_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiSelatanBaratTemp' name="crbciiSelatanBaratTemp" placeholder=""
                          value={data.crbc2_5_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_5_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Timur</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSelatanTimurNoise'
                            name='crbciiSelatanTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc2_5_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_5_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiSelatanTimurTemp' name="crbciiSelatanTimurTemp" placeholder=""
                          value={data.crbc2_5_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_5_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Take Up Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiTakeLagging'
                            name='crbciiTakeLagging'
                            className="large-checkbox"
                            checked={data.crbc2_6_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_6_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing barat</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiTakeBaratNoise'
                            name='crbciiTakeBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc2_6_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_6_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiTakeBaratTemp' name="crbciiTakeBaratTemp" placeholder=""
                          value={data.crbc2_6_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_6_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Timur</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiTakeTimurNoise'
                            name='crbciiTakeTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc2_6_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_6_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiTakeTimurTemp' name="crbciiTakeTimurTemp" placeholder=""
                          value={data.crbc2_6_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_6_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>7. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiTailLagging'
                            name='crbciiTailLagging'
                            className="large-checkbox"
                            checked={data.crbc2_7_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_7_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>V Scrapper</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiTailVs'
                            name='crbciiTailVs'
                            className="large-checkbox"
                            checked={data.crbc2_7_vs}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_7_vs ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing barat</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiTailBaratNoise'
                            name='crbciiTailBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc2_7_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_7_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiTailBaratTemp' name="crbciiTailBaratTemp" placeholder=""
                          value={data.crbc2_7_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_7_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Timur</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiTailTimurNoise'
                            name='crbciiTailTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc2_7_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_7_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiTailTimurTemp' name="crbciiTailTimurTemp" placeholder=""
                          value={data.crbc2_7_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc2_7_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear and No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiSkirt'
                            name='crbciiSkirt'
                            className="large-checkbox"
                            checked={data.crbc2_8_skirt}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_8_skirt ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiChute'
                            name='crbciiChute'
                            className="large-checkbox"
                            checked={data.crbc2_8_chute}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_8_chute ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiCondition'
                            name='crbciiCondition'
                            className="large-checkbox"
                            checked={data.crbc2_8_condition}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_8_condition ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiJoint'
                            name='crbciiJoint'
                            className="large-checkbox"
                            checked={data.crbc2_8_joint}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_8_joint ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Impact Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiImpact'
                            name='crbciiImpact'
                            className="large-checkbox"
                            checked={data.crbc2_8_impact}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_8_impact ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carry Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiCarry'
                            name='crbciiCarry'
                            className="large-checkbox"
                            checked={data.crbc2_8_carry}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_8_carry ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Return Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiReturn'
                            name='crbciiReturn'
                            className="large-checkbox"
                            checked={data.crbc2_8_return}
                          /></td>
                        <td className='align-middle'><b>{data.crbc2_8_return ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='crbciiRemark' name="crbciiRemark" placeholder=""
                          value={data.bc2_remark}
                        /></td>
                      </tr>
                      </tbody>
                  </Table>
                </Form>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default detailsNarSatu;
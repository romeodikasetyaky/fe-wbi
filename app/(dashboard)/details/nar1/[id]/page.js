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
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff' }} className='text-center'><b>HAC</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff' }} className='text-center'><b>Task</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff' }} className='text-center'><b>Standard</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff', width: '10%' }} className='text-center'><b>Actual Value</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff' }} className='text-center'><b>Remark</b></th>
                        <th style={{ backgroundColor: '#F5333C', color: '#ffffff' }} className='text-center'><b>Status</b></th>
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiSgRotatingParts_r' name="wqiSgRotatingParts_r" placeholder=""
                          value={data.wq1_1_rotating_part_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiSgHSC_r' name="wqiSgHSC_r" placeholder=""
                          value={data.wq1_1_hsc_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiSgLSC_r' name="wqiSgLSC_r" placeholder=""
                          value={data.wq1_1_lsc_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiSgCSW_r' name="wqiSgCSW_r" placeholder=""
                          value={data.wq1_1_csw_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiSgRG_r' name="wqiSgRG_r" placeholder=""
                          value={data.wq1_1_remaining_guarding_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedNoise_r' name="wqiRedNoise_r" placeholder=""
                          value={data.wq1_2_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='wqiRedTemp' name="wqiRedTemp" placeholder=""
                          value={data.wq1_2_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedTemp_r' name="wqiRedTemp_r" placeholder=""
                          value={data.wq1_2_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedSeal_r' name="wqiRedSeal_r" placeholder=""
                          value={data.wq1_2_seal_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedLevelOli_r' name="wqiRedLevelOli_r" placeholder=""
                          value={data.wq1_2_level_oil_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedRS_r' name="wqiRedRS_r" placeholder=""
                          value={data.wq1_2_drive_s_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedDVS_r' name="wqiRedDVS_r" placeholder=""
                          value={data.wq1_2_driven_s_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedChain_r' name="wqiRedChain_r" placeholder=""
                          value={data.wq1_2_chain_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiRedCoup_r' name="wqiRedCoup_r" placeholder=""
                          value={data.wq1_2_coupling_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiBhfNoise_r' name="wqiBhfNoise_r" placeholder=""
                          value={data.wq1_3_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_3_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='wqiBhfTemp' name="wqiBhfTemp" placeholder=""
                          value={data.wq1_3_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiBhfTemp_r' name="wqiBhfTemp_r" placeholder=""
                          value={data.wq1_3_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiBhfrNoise_r' name="wqiBhfrNoise_r" placeholder=""
                          value={data.wq1_4_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_4_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='wqiBhfrTemp' name="wqiBhfrTemp" placeholder=""
                          value={data.wq1_4_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiBhfrTemp_r' name="wqiBhfrTemp_r" placeholder=""
                          value={data.wq1_4_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiBfNoise_r' name="wqiBfNoise_r" placeholder=""
                          value={data.wq1_5_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_5_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='wqiBfTemp' name="wqiBfTemp" placeholder=""
                          value={data.wq1_5_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiBfTemp_r' name="wqiBfTemp_r" placeholder=""
                          value={data.wq1_5_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiBfTc_r' name="wqiBfTc_r" placeholder=""
                          value={data.wq1_5_tc_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='wqiCClean_r' name="wqiCClean_r" placeholder=""
                          value={data.wq1_6_cleanliness_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_6_cleanliness ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1SgRotpart_r' name="hc1SgRotpart_r" placeholder=""
                          value={data.hc1_1_rotating_part_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1SgHsc_r' name="hc1SgHsc_r" placeholder=""
                          value={data.hc1_1_hsc_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1SgRg_r' name="hc1SgRg_r" placeholder=""
                          value={data.hc1_1_remaining_guarding_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1BhfrNoise_r' name="hc1BhfrNoise_r" placeholder=""
                          value={data.hc1_2_noise_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1BhfrSeal_r' name="hc1BhfrSeal_r" placeholder=""
                          value={data.hc1_2_seal_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_2_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='hc1BhfrTemp' name="hc1BhfrTemp" placeholder=""
                          value={data.hc1_2_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1BhfrTemp_r' name="hc1BhfrTemp_r" placeholder=""
                          value={data.hc1_2_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1BhfreNoise_r' name="hc1BhfreNoise_r" placeholder=""
                          value={data.hc1_3_noise_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1BhfreSeal_r' name="hc1BhfreSeal_r" placeholder=""
                          value={data.hc1_3_seal_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_3_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='hc1BhfreTemp' name="hc1BhfreTemp" placeholder=""
                          value={data.hc1_3_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hc1BhfreTemp_r' name="hc1BhfreTemp_r" placeholder=""
                          value={data.hc1_3_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpNoise_r' name="hciRbpNoise_r" placeholder=""
                          value={data.hc1_4_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpSeal_r' name="hciRbpSeal_r" placeholder=""
                          value={data.hc1_4_seal_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_4_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='hciRbpTemp' name="hciRbpTemp" placeholder=""
                          value={data.hc1_4_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpTemp_r' name="hciRbpTemp_r" placeholder=""
                          value={data.hc1_4_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.hc1_4_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpLevelOli_r' name="hciRbpLevelOli_r" placeholder=""
                          value={data.hc1_4_level_oil_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpCD_r' name="hciRbpCD_r" placeholder=""
                          value={data.hc1_4_cd_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpDvS_r' name="hciRbpDvS_r" placeholder=""
                          value={data.hc1_4_drive_s_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpDvnS_r' name="hciRbpDvnS_r" placeholder=""
                          value={data.hc1_4_driven_s_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpBpNoise_r' name="hciRbpBpNoise_r" placeholder=""
                          value={data.hc1_5_noise_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpBpSeal_r' name="hciRbpBpSeal_r" placeholder=""
                          value={data.hc1_5_seal_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_5_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='hciRbpBpTemp' name="hciRbpBpTemp" placeholder=""
                          value={data.hc1_5_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hciRbpBpTemp_r' name="hciRbpBpTemp_r" placeholder=""
                          value={data.hc1_5_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci6noise_r' name="hci6noise_r" placeholder=""
                          value={data.hc1_6_noise_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci6seal_r' name="hci6seal_r" placeholder=""
                          value={data.hc1_6_seal_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_6_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='hci6temp' name="hci6temp" placeholder=""
                          value={data.hc1_6_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci6temp_r' name="hci6temp_r" placeholder=""
                          value={data.hc1_6_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci7noise_r' name="hci7noise_r" placeholder=""
                          value={data.hc1_7_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_7_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='hci7temp' name="hci7temp" placeholder=""
                          value={data.hc1_7_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci7temp_r' name="hci7temp_r" placeholder=""
                          value={data.hc1_7_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci8noise_r' name="hci8noise_r" placeholder=""
                          value={data.hc1_8_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_8_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='hci8temp' name="hci8temp" placeholder=""
                          value={data.hc1_8_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci8temp_r' name="hci8temp_r" placeholder=""
                          value={data.hc1_8_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='hci9cesing_r' name="hci9cesing_r" placeholder=""
                          value={data.hc1_9_cleanliness_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.hc1_9_cleanliness ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      {/* END HC1 */}

                      {/* BC1 */}
                      <tr>
                        <td rowSpan={73} className='text-center align-middle'>
                          <span>2</span>
                        </td>
                        <td rowSpan={73} className='text-center align-middle rotate-text'>
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSgRotatingParts_r' name="crbciSgRotatingParts_r" placeholder=""
                          value={data.crbc1_1_rotating_part_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSgHSC_r' name="crbciSgHSC_r" placeholder=""
                          value={data.crbc1_1_hsc_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSgLSC_r' name="crbciSgLSC_r" placeholder=""
                          value={data.crbc1_1_lsc_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSgCSB_r' name="crbciSgCSB_r" placeholder=""
                          value={data.crbc1_1_csb_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSgRG_r' name="crbciSgRG_r" placeholder=""
                          value={data.crbc1_1_remaining_guarding_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadLagging_r' name="crbciHeadLagging_r" placeholder=""
                          value={data.crbc1_2_lagging_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadPrimary_r' name="crbciHeadPrimary_r" placeholder=""
                          value={data.crbc1_2_primary_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadSecondary_r' name="crbciHeadSecondary_r" placeholder=""
                          value={data.crbc1_2_secondary_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadFixNoise_r' name="crbciHeadFixNoise_r" placeholder=""
                          value={data.crbc1_2_fix_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_2_fix_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciHeadFixTemp' name="crbciHeadFixTemp" placeholder=""
                          value={data.crbc1_2_fix_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadFixTemp_r' name="crbciHeadFixTemp_r"placeholder=""
                          value={data.crbc1_2_fix_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadFreeNoise_r' name="crbciHeadFreeNoise_r" placeholder=""
                          value={data.crbc1_2_free_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_2_free_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciHeadFreeTemp' name="crbciHeadFreeTemp" placeholder=""
                          value={data.crbc1_2_free_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadFreeTemp_r' name="crbciHeadFreeTemp_r"placeholder=""
                          value={data.crbc1_2_free_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadRedNoise_r' name="crbciHeadRedNoise_r" placeholder=""
                          value={data.crbc1_2_red_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_2_red_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciHeadRedTemp' name="crbciHeadRedTemp" placeholder=""
                          value={data.crbc1_2_red_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadRedTemp_r' name="crbciHeadRedTemp_r"placeholder=""
                          value={data.crbc1_2_red_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadRedSeal_r' name="crbciHeadRedSeal_r" placeholder=""
                          value={data.crbc1_2_red_seal_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadRedOli_r' name="crbciHeadRedOli_r" placeholder=""
                          value={data.crbc1_2_red_oli_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciHeadRedCoupling_r' name="crbciHeadRedCoupling_r" placeholder=""
                          value={data.crbc1_2_red_coupling_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSnubLagging_r' name="crbciSnubLagging_r" placeholder=""
                          value={data.crbc1_3_lagging_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSnubUtaraNoise_r' name="crbciSnubUtaraNoise_r" placeholder=""
                          value={data.crbc1_3_utara_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_3_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciSnubUtaraTemp' name="crbciSnubUtaraTemp" placeholder=""
                          value={data.crbc1_3_utara_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSnubUtaraTemp_r' name="crbciSnubUtaraTemp_r"placeholder=""
                          value={data.crbc1_3_utara_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSnubSelNoise_r' name="crbciSnubSelNoise_r" placeholder=""
                          value={data.crbc1_3_sel_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_3_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciSnubSelTemp' name="crbciSnubSelTemp" placeholder=""
                          value={data.crbc1_3_sel_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSnubSelTemp_r' name="crbciSnubSelTemp_r"placeholder=""
                          value={data.crbc1_3_sel_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciBaratLagging_r' name="crbciBaratLagging_r" placeholder=""
                          value={data.crbc1_4_lagging_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciBaratUtaraNoise_r' name="crbciBaratUtaraNoise_r" placeholder=""
                          value={data.crbc1_4_utara_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_4_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciBaratUtaraTemp' name="crbciBaratUtaraTemp" placeholder=""
                          value={data.crbc1_4_utara_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciBaratUtaraTemp_r' name="crbciBaratUtaraTemp_r"placeholder=""
                          value={data.crbc1_4_utara_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciBaratSelatanNoise_r' name="crbciBaratSelatanNoise_r" placeholder=""
                          value={data.crbc1_4_sel_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_4_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciBaratSelatanTemp' name="crbciBaratSelatanTemp" placeholder=""
                          value={data.crbc1_4_sel_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciBaratSelatanTemp_r' name="crbc1_4_sel_temp_rm"placeholder=""
                          value={data.rebc1_4_timur_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTimurLagging_r' name="crbciTimurLagging_r" placeholder=""
                          value={data.crbc1_5_lagging_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTimurUtaraNoise_r' name="crbciTimurUtaraNoise_r" placeholder=""
                          value={data.crbc1_5_utara_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_5_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciTimurUtaraTemp' name="crbciTimurUtaraTemp" placeholder=""
                          value={data.crbc1_5_utara_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTimurUtaraTemp_r' name="crbciTimurUtaraTemp_r"placeholder=""
                          value={data.crbc1_5_utara_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTimurSelatanNoise_r' name="crbciTimurSelatanNoise_r" placeholder=""
                          value={data.crbc1_5_sel_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_5_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciTimurSelatanTemp' name="crbciTimurSelatanTemp" placeholder=""
                          value={data.crbc1_5_sel_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTimurSelatanTemp_r' name="crbciTimurSelatanTemp_r"placeholder=""
                          value={data.crbc1_5_sel_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTakeLagging_r' name="crbciTakeLagging_r" placeholder=""
                          value={data.crbc1_6_lagging_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTakeUtaraNoise_r' name="crbciTakeUtaraNoise_r" placeholder=""
                          value={data.crbc1_6_utara_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_6_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciTakeUtaraTemp' name="crbciTakeUtaraTemp" placeholder=""
                          value={data.crbc1_6_utara_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTakeUtaraTemp_r' name="crbciTakeUtaraTemp_r"placeholder=""
                          value={data.crbc1_6_utara_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTakeSelNoise_r' name="crbciTakeSelNoise_r" placeholder=""
                          value={data.crbc1_6_sel_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_6_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciTakeSelTemp' name="crbciTakeSelTemp" placeholder=""
                          value={data.crbc1_6_sel_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTakeSelTemp_r' name="crbciTakeSelTemp_r"placeholder=""
                          value={data.crbc1_6_sel_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTailLagging_r' name="rebciTaicrbciTailLagging_rlLagging_r" placeholder=""
                          value={data.crbc1_7_lagging_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTailVs_r' name="crbciTailVs_r" placeholder=""
                          value={data.crbc1_7_vs_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTailUtaraNoise_r' name="crbciTailUtaraNoise_r" placeholder=""
                          value={data.crbc1_7_utara_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_7_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='crbciTailUtaraTemp' name="crbciTailUtaraTemp" placeholder=""
                          value={data.crbc1_7_utara_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTailUtaraTemp_r' name="crbciTailUtaraTemp_r"placeholder=""
                          value={data.crbc1_7_utara_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTailSelNoise_r' name="crbciTailSelNoise_r" placeholder=""
                          value={data.crbc1_7_sel_noise_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciTailSelTemp_r' name="crbciTailSelTemp_r"placeholder=""
                          value={data.crbc1_7_sel_temp_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciSkirt_r' name="crbciSkirt_r" placeholder=""
                          value={data.crbc1_8_skirt_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciChute_r' name="crbciChute_r" placeholder=""
                          value={data.crbc1_8_chute_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciCondition_r' name="crbciCondition_r" placeholder=""
                          value={data.crbc1_8_condition_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciJoint_r' name="crbciJoint_r" placeholder=""
                          value={data.crbc1_8_joint_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciImpact_r' name="crbciImpact_r" placeholder=""
                          value={data.crbc1_8_impact_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciCarry_r' name="crbciCarry_r" placeholder=""
                          value={data.crbc1_8_carry_rm}
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
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='crbciReturn_r' name="crbciReturn_r" placeholder=""
                          value={data.crbc1_8_return_rm}
                        /></td>
                        <td className='align-middle'><b>{data.crbc1_8_return ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
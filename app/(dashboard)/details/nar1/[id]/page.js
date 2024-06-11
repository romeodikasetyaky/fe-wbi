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
                <h3 className=" fw-bold ls-sm">Crusher Limestone Nar 1</h3>
              </Col>
              <Col md={12} xs={12} xl={12} className="mb-6">
                <Form>
                  <Table responsive bordered className="text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th style={{ backgroundColor: 'var(--bs-gray-100)', width: '7%' }} className='text-center'>No</th>
                        <th style={{ backgroundColor: 'var(--bs-gray-100)' }} className='text-center'>HAC</th>
                        <th style={{ backgroundColor: 'var(--bs-gray-100)' }} className='text-center'>Task</th>
                        <th style={{ backgroundColor: 'var(--bs-gray-100)' }} className='text-center'>Standard</th>
                        <th style={{ backgroundColor: 'var(--bs-gray-100)', width: '10%' }} className='text-center'>Actual Value</th>
                        <th style={{ backgroundColor: 'var(--bs-gray-100)' }} className='text-center'>Remark</th>
                        <th style={{ backgroundColor: 'var(--bs-gray-100)' }} className='text-center'>Status</th>
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
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.wq1_2_temp) > 60 ? 'Tidak Normal': '' }</b></td>
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
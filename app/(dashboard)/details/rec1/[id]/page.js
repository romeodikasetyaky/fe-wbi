'use client';

import { UseEffect, UseState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

const detailsRecSatu = ({ params }) => {
  const recId = params.id;
  const [data, setData] = UseState([]);

  UseEffect(() => {
    const detailRecSatu = async () => {
      const recsatu = await fetch(process.env.NEXT_PUBLIC_API_URL + 'rec1/' + recId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });

      const response = await recsatu.json();
      if (response.data != null) {
        setData(response.data);
      }
    };
    detailRecSatu();
  }, []);

  return (
    <Container fluid className="p-6">
      <Row className="align-items-center">
        <Col xl={12} lg={12} md={12} xs={12}>
          <div className="bg-white rounded smooth-shadow-sm">
            <div className="d-flex flex-column align-items-center pt-4 pb-6 px-4">
              <Col md={12} xs={12} className="mb-6">
                <h3 className=" fw-bold ls-sm">Reclaimer NAR 1</h3>
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
                      {/* RE1 */}
                      <tr>
                        <td rowSpan={35} className='text-center align-middle'>
                          <span>1</span>
                        </td>
                        <td rowSpan={35} className='text-center align-middle rotate-text'>
                          <b>NR.313-RE1</b>
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
                            id='reiSgRotatingParts'
                            name='reiSgRotatingParts'
                            className="large-checkbox"
                            checked={data.re1_1_rotating_part}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiSgRotatingParts_r' name="reiSgRotatingParts_r" placeholder=""
                          value={data.re1_1_rotating_part_rm}
                        /></td>
                        <td className='align-middle'><b>{data.re1_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiSgHSC'
                            name='reiSgHSC'
                            className="large-checkbox"
                            checked={data.re1_1_hsc}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiSgHSC_r' name="reiSgHSC_r" placeholder=""
                          value={data.re1_1_hsc_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiSgLSC'
                            name='reiSgLSC'
                            className="large-checkbox"
                            checked={data.re1_1_lsc}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiSgLSC_r' name="reiSgLSC_r" placeholder=""
                          value={data.re1_1_lsc_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiSgRG'
                            name='reiSgRG'
                            className="large-checkbox"
                            checked={data.re1_1_remaining_guarding}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiSgRG_r' name="reiSgRG_r" placeholder=""
                          value={data.re1_1_remaining_guarding_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      {/* REDUCER */}
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Reducer</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>Reducer Material</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRmNoise'
                            name='reiShRmNoise'
                            className="large-checkbox"
                            checked={data.re1_2_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRmNoise_r' name="reiShRmNoise_r" placeholder=""
                          value={data.re1_2_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_2_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='reiShRmTemp' name="reiShRmTemp" placeholder=""
                          value={data.re1_2_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRmTemp_r' name="reiShRmTemp_r" placeholder=""
                          value={data.re1_2_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_2_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leaking</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRmSeal'
                            name='reiShRmSeal'
                            className="large-checkbox"
                            checked={data.re1_2_seal}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRmSeal_r' name="reiShRmSeal_r" placeholder=""
                          value={data.re1_2_seal_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_2_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRmLevelOli'
                            name='reiShRmLevelOli'
                            className="large-checkbox"
                            checked={data.re1_2_level_oil}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRmLevelOli_r' name="reiShRmLevelOli_r" placeholder=""
                          value={data.re1_2_level_oil_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.wq1_2_level_oil ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRmCoupling'
                            name='reiShRmCoupling'
                            className="large-checkbox"
                            checked={data.re1_2_coupling}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRmCoupling_r' name="reiShRmCoupling_r" placeholder=""
                          value={data.re1_2_coupling_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_2_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur Bearing</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRmTempBearing' name="reiShRmTempBearing"
                            className="large-checkbox"
                            checked={data.re1_2_temp_b}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRmTempBearing_r' name="reiShRmTempBearing_r" placeholder=""
                          value={data.re1_2_temp_b_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_2_temp_b) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>Reducer non Material</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRnNoise'
                            name='reiShRnNoise'
                            className="large-checkbox"
                            checked={data.re1_3_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRnNoise_r' name="reiShRnNoise_r"placeholder=""
                          value={data.re1_3_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_3_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRnTemp' name="reiShRnTemp"
                            className="large-checkbox"
                            checked={data.re1_3_temp}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRnTemp_r' name="reiShRnTemp_r" placeholder=""
                          value={data.re1_3_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_3_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRnSeal'
                            name='reiShRnSeal'
                            className="large-checkbox"
                            checked={data.re1_3_seal}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRnSeal_r' name="reiShRnSeal_r" placeholder=""
                          value={data.re1_3_seal_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_3_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='reiShRnLevelOli'
                          name='reiShRnLevelOli'placeholder=""
                          value={data.re1_3_level_oli}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRnLevelOli_r' name="reiShRnLevelOli_r" placeholder=""
                          value={data.re1_3_level_oli_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_3_level_oli_rm) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (No noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRnCoupling'
                            name='reiShRnCoupling'
                            className="large-checkbox"
                            checked={data.re1_3_coupling}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRnCoupling_r' name="reiShRnCoupling_r" placeholder=""
                          value={data.re1_3_coupling_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_3_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur Bearing</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='reiShRnTempBearing' name="reiShRnTempBearing" placeholder=""
                          value={data.re1_3_temp_b}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiShRnTempBearing' name="reiShRnTempBearing" placeholder=""
                          value={data.re1_3_temp_b_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_3_temp_b) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Sprocket Tail</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Bearing Fix Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiStTempFix' name="reiStTempFix"
                            className="large-checkbox"
                            checked={data.re1_4_temp_fix}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiStTempFix_r' name="reiStTempFix_r" placeholder=""
                          value={data.re1_4_temp_fix_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_4_temp_fix) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Baering Free Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='reiStTempFree' name="reiStTempFree" placeholder=""
                          value={data.re1_4_temp_free}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiStTempFree_r' name="reiStTempFree_r"placeholder=""
                          value={data.re1_4_temp_free_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.wq1_5_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiStNoise'
                            name='reiStNoise'
                            className="large-checkbox"
                            checked={data.re1_4_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiStNoise_r' name="reiStNoise_r" placeholder=""
                          value={data.re1_4_noise_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_4_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>

                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Reducer Boogie Material</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temp Reducer Boogie</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiBmRed' name="reiBmRed"
                            className="large-checkbox"
                            checked={data.re1_5_red_boogie}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiBmRed_r' name="reiBmRed_r" placeholder=""
                          value={data.re1_5_red_boogie_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_5_red_boogie) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                      <td className='align-middle'>Guide Roller Boogie</td>
                      <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiBmGuide'
                            name='reiBmGuide'
                            className="large-checkbox"
                            checked={data.re1_5_guide}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiBmGuide_r' name="reiBmGuide_r" placeholder=""
                          value={data.re1_5_guide_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_5_guide ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Reducer Boogie non Material</b>
                        </td>
                      </tr>
                      <tr>
                      <td className='align-middle'>Temp Reducer Boogie</td>
                      <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiBnRed'
                            name='reiBnRed'
                            className="large-checkbox"
                            checked={data.re1_6_red_boogie}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiBnRed_r' name="reiBnRed_r" placeholder=""
                          value={data.re1_6_red_boogie_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.re1_6_red_boogie) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                      <td className='align-middle'>Guide Roller Boogie</td>
                      <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiBnGuide'
                            name='reiBnGuide'
                            className="large-checkbox"
                            checked={data.re1_6_guide}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiBnGuide_r' name="reiBnGuide_r" placeholder=""
                          value={data.re1_6_guide_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_6_guide ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>7. Link</b>
                        </td>
                      </tr>
                      <tr>
                      <td className='align-middle'>Link Hanger</td>
                      <td className='align-middle'>No Broken</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiLinkHanger'
                            name='reiLinkHanger'
                            className="large-checkbox"
                            checked={data.re1_7_hanger}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiLinkHanger_r' name="reiLinkHanger_r" placeholder=""
                          value={data.re1_7_hanger_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_7_hanger ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                      <td className='align-middle'>Lock Pin</td>
                      <td className='align-middle'>No Broken</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiLinkLock'
                            name='reiLinkLock'
                            className="large-checkbox"
                            checked={data.re1_7_lock}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiLinkLock_r' name="reiLinkLock_r" placeholder=""
                          value={data.re1_7_lock_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_7_lock ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                      <td className='align-middle'>Blade Scrapper</td>
                      <td className='align-middle'>No Broken</td>
                      <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiLinkScrapper'
                            name='reiLinkScrapper'
                            className="large-checkbox"
                            checked={data.re1_7_scrapper}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='reiLinkScrapper_r' name="reiLinkScrapper_r" placeholder=""
                          value={data.re1_7_scrapper_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.re1_7_scrapper ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>

                      {/* BC1 */}
                      <tr>
                        <td rowSpan={73} className='text-center align-middle'>
                          <span>2</span>
                        </td>
                        <td rowSpan={73} className='text-center align-middle rotate-text'>
                          <b>NR.313-BC1</b>
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
                            id='rebciSgRotatingParts'
                            name='rebciSgRotatingParts'
                            className="large-checkbox"
                            checked={data.rebc1_1_rotating_part}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSgRotatingParts_r' name="rebciSgRotatingParts_r" placeholder=""
                          value={data.rebc1_1_rotating_part_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciSgHSC'
                            name='rebciSgHSC'
                            className="large-checkbox"
                            checked={data.rebc1_1_hsc}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSgHSC_r' name="rebciSgHSC_r" placeholder=""
                          value={data.rebc1_1_hsc_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.rebc1_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciSgLSC'
                            name='rebciSgLSC'
                            className="large-checkbox"
                            checked={data.rebc1_1_lsc}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSgLSC_r' name="rebciSgLSC_r" placeholder=""
                          value={data.re1_1_lsc_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.rebc1_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Sepanjang Belt</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciSgCSB'
                            name='rebciSgCSB'
                            className="large-checkbox"
                            checked={data.rebc1_1_csb}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSgCSB_r' name="rebciSgCSB_r" placeholder=""
                          value={data.rebc1_1_csb_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.rebc1_1_csb ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciSgRG'
                            name='rebciSgRG'
                            className="large-checkbox"
                            checked={data.rebc1_1_remaining_guarding}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSgRG_r' name="rebciSgRG_r" placeholder=""
                          value={data.rebc1_1_remaining_guarding_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.rebc1_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciHeadLagging'
                            name='rebciHeadLagging'
                            className="large-checkbox"
                            checked={data.rebc1_2_lagging}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadLagging_r' name="rebciHeadLagging_r" placeholder=""
                          value={data.rebc1_2_lagging_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Primary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciHeadPrimary'
                            name='rebciHeadPrimary'
                            className="large-checkbox"
                            checked={data.rebc1_2_primary}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadPrimary_r' name="rebciHeadPrimary_r" placeholder=""
                          value={data.rebc1_2_primary_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_primary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Secondary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciHeadSecondary'
                            name='rebciHeadSecondary'
                            className="large-checkbox"
                            checked={data.rebc1_2_secondary}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadSecondary_r' name="rebciHeadSecondary_r" placeholder=""
                          value={data.rebc1_2_secondary_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_secondary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciHeadFixNoise'
                            name='rebciHeadFixNoise'
                            className="large-checkbox"
                            checked={data.rebc1_2_fix_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadFixNoise_r' name="rebciHeadFixNoise_r" placeholder=""
                          value={data.rebc1_2_fix_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_fix_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciHeadFixTemp' name="rebciHeadFixTemp" placeholder=""
                          value={data.rebc1_2_fix_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadFixTemp_r' name="rebciHeadFixTemp_r"placeholder=""
                          value={data.rebc1_2_fix_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_2_fix_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciHeadFreeNoise'
                            name='rebciHeadFreeNoise'
                            className="large-checkbox"
                            checked={data.rebc1_2_free_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadFreeNoise_r' name="rebciHeadFreeNoise_r" placeholder=""
                          value={data.rebc1_2_free_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_free_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciHeadFreeTemp' name="rebciHeadFreeTemp" placeholder=""
                          value={data.rebc1_2_free_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadFreeTemp_r' name="rebciHeadFreeTemp_r"placeholder=""
                          value={data.rebc1_2_free_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_2_fix_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciHeadRedNoise'
                            name='rebciHeadRedNoise'
                            className="large-checkbox"
                            checked={data.rebc1_2_red_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadRedNoise_r' name="rebciHeadRedNoise_r" placeholder=""
                          value={data.rebc1_2_red_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_red_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciHeadRedTemp' name="rebciHeadRedTemp" placeholder=""
                          value={data.rebc1_2_red_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadRedTemp_r' name="rebciHeadRedTemp_r"placeholder=""
                          value={data.rebc1_2_red_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_2_red_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciHeadRedSeal'
                            name='rebciHeadRedSeal'
                            className="large-checkbox"
                            checked={data.rebc1_2_red_seal}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadRedSeal_r' name="rebciHeadRedSeal_r" placeholder=""
                          value={data.rebc1_2_red_seal_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_red_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciHeadRedOli'
                            name='rebciHeadRedOli'
                            className="large-checkbox"
                            checked={data.rebc1_2_red_oli}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadRedOli_r' name="rebciHeadRedOli_r" placeholder=""
                          value={data.rebc1_2_red_oli_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_red_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciHeadRedCoupling'
                            name='rebciHeadRedCoupling'
                            className="large-checkbox"
                            checked={data.rebc1_2_red_coupling}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciHeadRedCoupling_r' name="rebciHeadRedCoupling_r" placeholder=""
                          value={data.rebc1_2_red_coupling_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_2_red_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciSnubLagging'
                            name='rebciSnubLagging'
                            className="large-checkbox"
                            checked={data.rebc1_3_lagging}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSnubLagging_r' name="rebciSnubLagging_r" placeholder=""
                          value={data.rebc1_3_lagging_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_3_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciSnubBaratNoise'
                            name='rebciSnubBaratNoise'
                            className="large-checkbox"
                            checked={data.rebc1_3_barat_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSnubBaratNoise_r' name="rebciSnubBaratNoise_r" placeholder=""
                          value={data.rebc1_3_barat_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_3_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciSnubBaratTemp' name="rebciSnubBaratTemp" placeholder=""
                          value={data.rebc1_3_barat_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSnubBaratTemp_r' name="rebciSnubBaratTemp_r"placeholder=""
                          value={data.rebc1_3_barat_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_3_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciSnubTimurNoise'
                            name='rebciSnubTimurNoise'
                            className="large-checkbox"
                            checked={data.rebc1_3_timur_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSnubTimurNoise_r' name="rebciSnubTimurNoise_r" placeholder=""
                          value={data.rebc1_3_timur_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_3_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciSnubTimurTemp' name="rebciSnubTimurTemp" placeholder=""
                          value={data.rebc1_3_timur_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSnubTimurTemp_r' name="rebciSnubTimurTemp_r"placeholder=""
                          value={data.rebc1_3_timur_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_3_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciUtaraLagging'
                            name='rebciUtaraLagging'
                            className="large-checkbox"
                            checked={data.rebc1_4_lagging}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciUtaraLagging_r' name="rebciUtaraLagging_r" placeholder=""
                          value={data.rebc1_4_lagging_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_4_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciUtaraBaratNoise'
                            name='rebciUtaraBaratNoise'
                            className="large-checkbox"
                            checked={data.rebc1_4_barat_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciUtaraBaratNoise_r' name="rebciUtaraBaratNoise_r" placeholder=""
                          value={data.rebc1_4_barat_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_4_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciUtaraBaratTemp' name="rebciUtaraBaratTemp" placeholder=""
                          value={data.rebc1_4_barat_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciUtaraBaratTemp_r' name="rebciUtaraBaratTemp_r"placeholder=""
                          value={data.rebc1_4_barat_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_4_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciUtaraTimurNoise'
                            name='rebciUtaraTimurNoise'
                            className="large-checkbox"
                            checked={data.rebc1_4_timur_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciUtaraTimurNoise_r' name="rebciUtaraTimurNoise_r" placeholder=""
                          value={data.rebc1_4_timur_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_4_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciUtaraTimurTemp' name="rebciUtaraTimurTemp" placeholder=""
                          value={data.rebc1_4_timur_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciUtaraTimurTemp_r' name="rebciUtaraTimurTemp_r"placeholder=""
                          value={data.rebc1_4_timur_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_4_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciSelatanLagging'
                            name='rebciSelatanLagging'
                            className="large-checkbox"
                            checked={data.rebc1_5_lagging}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSelatanLagging_r' name="rebciSelatanLagging_r" placeholder=""
                          value={data.rebc1_5_lagging_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_5_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciSelatanBaratNoise'
                            name='rebciSelatanBaratNoise'
                            className="large-checkbox"
                            checked={data.rebc1_5_barat_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSelatanBaratNoise_r' name="rebciSelatanBaratNoise_r" placeholder=""
                          value={data.rebc1_5_barat_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_5_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciSelatanBaratTemp' name="rebciSelatanBaratTemp" placeholder=""
                          value={data.rebc1_5_barat_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSelatanBaratTemp_r' name="rebciSelatanBaratTemp_r"placeholder=""
                          value={data.rebc1_5_barat_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_5_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciSelatanTimurNoise'
                            name='rebciSelatanTimurNoise'
                            className="large-checkbox"
                            checked={data.rebc1_5_timur_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSelatanTimurNoise_r' name="rebciSelatanTimurNoise_r" placeholder=""
                          value={data.rebc1_5_timur_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_5_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciSelatanTimurTemp' name="rebciSelatanTimurTemp" placeholder=""
                          value={data.rebc1_5_timur_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSelatanTimurTemp_r' name="rebciSelatanTimurTemp_r"placeholder=""
                          value={data.rebc1_5_timur_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_5_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciTakeLagging'
                            name='rebciTakeLagging'
                            className="large-checkbox"
                            checked={data.rebc1_6_lagging}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTakeLagging_r' name="rebciTakeLagging_r" placeholder=""
                          value={data.rebc1_6_lagging_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_6_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciTakeBaratNoise'
                            name='rebciTakeBaratNoise'
                            className="large-checkbox"
                            checked={data.rebc1_6_barat_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTakeBaratNoise_r' name="rebciTakeBaratNoise_r" placeholder=""
                          value={data.rebc1_6_barat_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_6_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciTakeBaratTemp' name="rebciTakeBaratTemp" placeholder=""
                          value={data.rebc1_6_barat_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTakeBaratTemp_r' name="rebciTakeBaratTemp_r"placeholder=""
                          value={data.rebc1_6_barat_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_6_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciTakeTimurNoise'
                            name='rebciTakeTimurNoise'
                            className="large-checkbox"
                            checked={data.rebc1_6_timur_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTakeTimurNoise_r' name="rebciTakeTimurNoise_r" placeholder=""
                          value={data.rebc1_6_timur_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_6_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciTakeTimurTemp' name="rebciTakeTimurTemp" placeholder=""
                          value={data.rebc1_6_timur_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTakeTimurTemp_r' name="rebciTakeTimurTemp_r"placeholder=""
                          value={data.rebc1_6_timur_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_6_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciTailLagging'
                            name='rebciTailLagging'
                            className="large-checkbox"
                            checked={data.rebc1_7_lagging}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTailLagging_r' name="rebciTailLagging_r" placeholder=""
                          value={data.rebc1_7_lagging_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_7_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>V Scrapper</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciTailVs'
                            name='rebciTailVs'
                            className="large-checkbox"
                            checked={data.rebc1_7_vs}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTailVs_r' name="rebciTailVs_r" placeholder=""
                          value={data.rebc1_7_vs_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_7_vs ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciTailBaratNoise'
                            name='rebciTailBaratNoise'
                            className="large-checkbox"
                            checked={data.rebc1_7_barat_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTailBaratNoise_r' name="rebciTailBaratNoise_r" placeholder=""
                          value={data.rebc1_7_barat_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_7_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciTailBaratTemp' name="rebciTailBaratTemp" placeholder=""
                          value={data.rebc1_7_barat_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTailBaratTemp_r' name="rebciTailBaratTemp_r"placeholder=""
                          value={data.rebc1_7_barat_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_7_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciTailTimurNoise'
                            name='rebciTailTimurNoise'
                            className="large-checkbox"
                            checked={data.rebc1_7_timur_noise}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTailTimurNoise_r' name="rebciTailTimurNoise_r" placeholder=""
                          value={data.rebc1_7_timur_noise_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_7_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="number" id='rebciTailTimurTemp' name="rebciTailTimurTemp" placeholder=""
                          value={data.rebc1_7_timur_temp}
                        /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciTailTimurTemp_r' name="rebciTailTimurTemp_r"placeholder=""
                          value={data.rebc1_7_timur_temp_rm}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.rebc1_7_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='rebciSkirt'
                            name='rebciSkirt'
                            className="large-checkbox"
                            checked={data.rebc1_8_skirt}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciSkirt_r' name="rebciSkirt_r" placeholder=""
                          value={data.rebc1_8_skirt_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_8_skirt ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciChute'
                            name='rebciChute'
                            className="large-checkbox"
                            checked={data.rebc1_8_chute}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciChute_r' name="rebciChute_r" placeholder=""
                          value={data.rebc1_8_chute_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_8_chute ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciCondition'
                            name='rebciCondition'
                            className="large-checkbox"
                            checked={data.rebc1_8_condition}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciCondition_r' name="rebciCondition_r" placeholder=""
                          value={data.rebc1_8_condition_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_8_condition ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciJoint'
                            name='rebciJoint'
                            className="large-checkbox"
                            checked={data.rebc1_8_joint}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciJoint_r' name="rebciJoint_r" placeholder=""
                          value={data.rebc1_8_joint_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_8_joint ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Impact Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciImpact'
                            name='rebciImpact'
                            className="large-checkbox"
                            checked={data.rebc1_8_impact}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciImpact_r' name="rebciImpact_r" placeholder=""
                          value={data.rebc1_8_impact_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_8_impact ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carry Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciCarry'
                            name='rebciCarry'
                            className="large-checkbox"
                            checked={data.rebc1_8_carry}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciCarry_r' name="rebciCarry_r" placeholder=""
                          value={data.rebc1_8_carry_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_8_carry ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Return Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciReturn'
                            name='rebciReturn'
                            className="large-checkbox"
                            checked={data.rebc1_8_return}
                          /></td>
                        <td className='p-0'><Form.Control
                          style={{ height: '65px' }} type="text" id='rebciReturn_r' name="rebciReturn_r" placeholder=""
                          value={data.rebc1_8_return_rm}
                        /></td>
                        <td className='align-middle'><b>{data.rebc1_8_return ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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

export default detailsRecSatu;
'use client';

import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

const detailsNarSatuA = ({ params }) => {
  const narAId = params.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const detailNarSatuA = async () => {
      const narsatua = await fetch(process.env.NEXT_PUBLIC_API_URL + 'nar1a/' + narAId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });

      const response = await narsatua.json();
      if (response.data != null) {
        setData(response.data);
      }
    };
    detailNarSatuA();
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
                    <tr>
                      {/* BC3 */}
                        <td rowSpan={79} className='text-center align-middle'>
                          <span>1</span>
                        </td>
                        <td rowSpan={79} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC3</b>
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
                            id='crbciiiSgRotatingParts'
                            name='crbciiiSgRotatingParts'
                            className="large-checkbox"
                            checked={data.crbc3_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.crbc3_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiSgHSC'
                            name='crbciiiSgHSC'
                            className="large-checkbox"
                            checked={data.crbc3_1_hsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiSgLSC'
                            name='crbciiiSgLSC'
                            className="large-checkbox"
                            checked={data.crbc3_1_lsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Sepanjang Belt</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiSgCSB'
                            name='crbciiiSgCSB'
                            className="large-checkbox"
                            checked={data.crbc3_1_csb}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_1_csb ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiSgRG'
                            name='crbciiiSgRG'
                            className="large-checkbox"
                            checked={data.crbc3_1_remaining_guarding}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Reducer Travelling</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTravNoise'
                            name='crbciiiTravNoise'
                            className="large-checkbox"
                            checked={data.crbc3_2_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc3_2_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiTravTemp' name="crbciiiTravTemp" placeholder=""
                          value={data.crbc3_2_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_2_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>Tidak Rembes</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTravSeal'
                            name='crbciiiTravSeal'
                            className="large-checkbox"
                            checked={data.crbc3_2_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_2_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTravOil'
                            name='crbciiiTravOil'
                            className="large-checkbox"
                            checked={data.crbc3_2_level_oli}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_2_level_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Chain Drive</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTravChain'
                            name='crbciiiTravChain'
                            className="large-checkbox"
                            checked={data.crbc3_2_chain}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_2_chain ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Sprocket</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTravSprocket'
                            name='crbciiiTravSprocket'
                            className="large-checkbox"
                            checked={data.crbc3_2_sprocket}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_2_sprocket ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Head Wheel</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Wheel</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiHeadWheel'
                            name='crbciiiHeadWheel'
                            className="large-checkbox"
                            checked={data.crbc3_3_wheel}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_3_wheel ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiHeadNoiseFix'
                            name='crbciiiHeadNoiseFix'
                            className="large-checkbox"
                            checked={data.crbc3_3_noise_fix}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_3_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiHeadTempFix' name="crbciiiHeadTempFix" placeholder=""
                          value={data.crbc3_3_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_3_temp_fix) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiHeadNoiseFree'
                            name='crbciiiHeadNoiseFree'
                            className="large-checkbox"
                            checked={data.crbc3_3_noise_free}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_3_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiHeadTempFree' name="crbciiiHeadTempFree" placeholder=""
                          value={data.crbc3_3_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_3_temp_free) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Intermediate Wheel</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Wheel</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiIntWheel'
                            name='crbciiiIntWheel'
                            className="large-checkbox"
                            checked={data.crbc3_4_wheel}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_4_wheel ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiIntNoiseFix'
                            name='crbciiiIntNoiseFix'
                            className="large-checkbox"
                            checked={data.crbc3_4_noise_fix}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_4_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiIntTempFix' name="crbciiiIntTempFix" placeholder=""
                          value={data.crbc3_4_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_4_temp_fix) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiIntNoiseFree'
                            name='crbciiiIntNoiseFree'
                            className="large-checkbox"
                            checked={data.crbc3_4_noise_free}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_4_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiIntTempFree' name="crbciiiIntTempFree" placeholder=""
                          value={data.crbc3_4_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_4_temp_free) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Tail Wheel</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Wheel</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTailWheel'
                            name='crbciiiTailWheel'
                            className="large-checkbox"
                            checked={data.crbc3_5_wheel}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_5_wheel ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiTailNoiseFix'
                            name='crbciiiTailNoiseFix'
                            className="large-checkbox"
                            checked={data.crbc3_5_noise_fix}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_5_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiTailTempFix' name="crbciiiTailTempFix" placeholder=""
                          value={data.crbc3_5_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_5_temp_fix) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiTailNoiseFree'
                            name='crbciiiTailNoiseFree'
                            className="large-checkbox"
                            checked={data.crbc3_5_noise_free}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_5_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiTailTempFree' name="crbciiiTailTempFree" placeholder=""
                          value={data.crbc3_5_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_5_temp_free) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Reducer BC</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiRedNoise'
                            name='crbciiiRedNoise'
                            className="large-checkbox"
                            checked={data.crbc3_6_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc3_6_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiRedTemp' name="crbciiiRedTemp" placeholder=""
                          value={data.crbc3_6_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_6_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>Tidak Rembes</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiRedSeal'
                            name='crbciiiRedSeal'
                            className="large-checkbox"
                            checked={data.crbc3_6_seal}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_6_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiRedOil'
                            name='crbciiiRedOil'
                            className="large-checkbox"
                            checked={data.crbc3_6_level_oli}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_6_level_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (no Noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiRedCoupling'
                            name='crbciiiRedCoupling'
                            className="large-checkbox"
                            checked={data.crbc3_6_coupling}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_6_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>7. Head Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Legging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiHeadPLegging'
                            name='crbciiiHeadPLegging'
                            className="large-checkbox"
                            checked={data.crbc3_7_legging}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_7_legging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Primary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiHeadPPrimary'
                            name='crbciiiHeadPPrimary'
                            className="large-checkbox"
                            checked={data.crbc3_7_primary}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_7_primary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Secondary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiHeadPSecondary'
                            name='crbciiiHeadPSecondary'
                            className="large-checkbox"
                            checked={data.crbc3_7_secondary}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_7_secondary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiHeadPNoiseFix'
                            name='crbciiiHeadPNoiseFix'
                            className="large-checkbox"
                            checked={data.crbc3_7_noise_fix}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_7_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiHeadPTempFix' name="crbciiiHeadPTempFix" placeholder=""
                          value={data.crbc3_7_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_7_temp_fix) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiHeadPNoiseFree'
                            name='crbciiiHeadPNoiseFree'
                            className="large-checkbox"
                            checked={data.crbc3_7_noise_free}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_7_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiHeadPTempFree' name="crbciiiHeadPTempFree" placeholder=""
                          value={data.crbc3_7_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_7_temp_free) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Snub Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Legging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiSnubLegging'
                            name='crbciiiSnubLegging'
                            className="large-checkbox"
                            checked={data.crbc3_8_legging}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_8_legging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiSnubNoiseFix'
                            name='crbciiiSnubNoiseFix'
                            className="large-checkbox"
                            checked={data.crbc3_8_noise_fix}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_8_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiSnubTempFix' name="crbciiiSnubTempFix" placeholder=""
                          value={data.crbc3_8_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_8_temp_fix) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiSnubNoiseFree'
                            name='crbciiiSnubNoiseFree'
                            className="large-checkbox"
                            checked={data.crbc3_8_noise_free}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_8_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiSnubTempFree' name="crbciiiSnubTempFree" placeholder=""
                          value={data.crbc3_8_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_8_temp_free) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>9. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Legging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvTailLagging'
                            name='crbcvTailLagging'
                            className="large-checkbox"
                            checked={data.crbc5_5_lagging}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc5_5_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiTailPNoiseFix'
                            name='crbciiiTailPNoiseFix'
                            className="large-checkbox"
                            checked={data.crbc3_9_noise_fix}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_9_noise_fix ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiTailPTempFix' name="crbciiiTailPTempFix" placeholder=""
                          value={data.crbc3_9_temp_fix}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_9_temp_fix) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbciiiTailPNoiseFree'
                            name='crbciiiTailPNoiseFree'
                            className="large-checkbox"
                            checked={data.crbc3_9_noise_free}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_9_noise_free ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbciiiTailPTempFree' name="crbciiiTailPTempFree" placeholder=""
                          value={data.crbc3_9_temp_free}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc3_9_temp_free) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>V Scrapper</td>
                        <td className='align-middle'>No wear</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTailPVs'
                            name='crbciiiTailPVs'
                            className="large-checkbox"
                            checked={data.crbc3_9_vs}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_9_vs ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>10. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear/Leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiSkirt'
                            name='crbciiiSkirt'
                            className="large-checkbox"
                            checked={data.crbc3_10_skirt}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_10_skirt ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear/Leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiChute'
                            name='crbciiiChute'
                            className="large-checkbox"
                            checked={data.crbc3_10_chute}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_10_chute ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiCondition'
                            name='crbciiiCondition'
                            className="large-checkbox"
                            checked={data.crbc3_10_condition}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_10_condition ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiJoint'
                            name='crbciiiJoint'
                            className="large-checkbox"
                            checked={data.crbc3_10_joint}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_10_joint ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Impact Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiImpact'
                            name='crbciiiImpact'
                            className="large-checkbox"
                            checked={data.crbc3_10_impact}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_10_impact ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carry Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiCarry'
                            name='crbciiiCarry'
                            className="large-checkbox"
                            checked={data.crbc3_10_carry}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_10_carry ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Return Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiReturn'
                            name='crbciiiReturn'
                            className="large-checkbox"
                            checked={data.crbc3_10_return}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc3_10_return ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='crbciiiRemark' name="crbciiiRemark" placeholder=""
                          value={data.bc3_remark}
                        /></td>
                      </tr>
                      

                      {/* BC4 */}
                      <tr>
                        <td rowSpan={72} className='text-center align-middle'>
                          <span>2</span>
                        </td>
                        <td rowSpan={72} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC4 </b>
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
                            id='crbcivSgRotatingParts'
                            name='crbcivSgRotatingParts'
                            className="large-checkbox"
                            checked={data.crbc4_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivSgHSC'
                            name='crbcivSgHSC'
                            className="large-checkbox"
                            checked={data.crbc4_1_hsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc4_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivSgLSC'
                            name='crbcivSgLSC'
                            className="large-checkbox"
                            checked={data.crbc4_1_lsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc4_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Sepanjang Belt</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivSgCSB'
                            name='crbcivSgCSB'
                            className="large-checkbox"
                            checked={data.crbc4_1_csb}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc4_1_csb ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivSgRG'
                            name='crbcivSgRG'
                            className="large-checkbox"
                            checked={data.crbc4_1_remaining_guarding}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc4_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivHeadLagging'
                            name='crbcivHeadLagging'
                            className="large-checkbox"
                            checked={data.crbc4_2_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Primary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivHeadPrimary'
                            name='crbcivHeadPrimary'
                            className="large-checkbox"
                            checked={data.crbc4_2_primary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_primary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Secondary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivHeadSecondary'
                            name='crbcivHeadSecondary'
                            className="large-checkbox"
                            checked={data.crbc4_2_secondary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_secondary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivHeadFixNoise'
                            name='crbcivHeadFixNoise'
                            className="large-checkbox"
                            checked={data.crbc4_2_fix_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_fix_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivHeadFixTemp' name="crbcivHeadFixTemp" placeholder=""
                          value={data.crbc4_2_fix_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_2_fix_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivHeadFreeNoise'
                            name='crbcivHeadFreeNoise'
                            className="large-checkbox"
                            checked={data.crbc4_2_free_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_free_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivHeadFreeTemp' name="crbcivHeadFreeTemp" placeholder=""
                          value={data.crbc4_2_free_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_2_free_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivHeadRedNoise'
                            name='crbcivHeadRedNoise'
                            className="large-checkbox"
                            checked={data.crbc4_2_red_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_red_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivHeadRedTemp' name="crbcivHeadRedTemp" placeholder=""
                          value={data.crbc4_2_red_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_2_red_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivHeadRedSeal'
                            name='crbcivHeadRedSeal'
                            className="large-checkbox"
                            checked={data.crbc4_2_red_seal}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_red_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivHeadRedOli'
                            name='crbcivHeadRedOli'
                            className="large-checkbox"
                            checked={data.crbc4_2_red_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_red_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (no noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivHeadRedCoupling'
                            name='crbcivHeadRedCoupling'
                            className="large-checkbox"
                            checked={data.crbc4_2_red_coupling}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_2_red_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivSnubLagging'
                            name='crbcivSnubLagging'
                            className="large-checkbox"
                            checked={data.crbc4_3_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_3_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivSnubUtaraNoise'
                            name='crbcivSnubUtaraNoise'
                            className="large-checkbox"
                            checked={data.crbc4_3_utara_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_3_utara_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivSnubUtaraTemp' name="crbcivSnubUtaraTemp" placeholder=""
                          value={data.crbc4_3_utara_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_3_utara_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivSnubSelNoise'
                            name='crbcivSnubSelNoise'
                            className="large-checkbox"
                            checked={data.crbc4_3_sel_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_3_sel_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivSnubSelTemp' name="crbcivSnubSelTemp" placeholder=""
                          value={data.crbc4_3_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_3_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivUtaraLagging'
                            name='crbcivUtaraLagging'
                            className="large-checkbox"
                            checked={data.crbc4_4_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_4_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivUtaraBaratNoise'
                            name='crbcivUtaraBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc4_4_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_4_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivUtaraBaratTemp' name="crbcivUtaraBaratTemp" placeholder=""
                          value={data.crbc4_4_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_4_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivUtaraTimurNoise'
                            name='crbcivUtaraTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc4_4_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_4_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivUtaraTimurTemp' name="crbcivUtaraTimurTemp" placeholder=""
                          value={data.crbc4_4_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_4_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivSelatanLagging'
                            name='crbcivSelatanLagging'
                            className="large-checkbox"
                            checked={data.crbc4_5_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_5_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivSelatanBaratNoise'
                            name='crbcivSelatanBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc4_5_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_5_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivSelatanBaratTemp' name="crbcivSelatanBaratTemp" placeholder=""
                          value={data.crbc4_5_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_5_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivSelatanTimurNoise'
                            name='crbcivSelatanTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc4_5_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_5_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivSelatanTimurTemp' name="crbcivSelatanTimurTemp" placeholder=""
                          value={data.crbc4_5_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_5_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivTakeLagging'
                            name='crbcivTakeLagging'
                            className="large-checkbox"
                            checked={data.crbc4_6_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_6_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivTakeBaratNoise'
                            name='crbcivTakeBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc4_6_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_6_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivTakeBaratTemp' name="crbcivTakeBaratTemp" placeholder=""
                          value={data.crbc4_6_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_6_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivTakeTimurNoise'
                            name='crbcivTakeTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc4_6_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_6_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivTakeTimurTemp' name="crbcivTakeTimurTemp" placeholder=""
                          value={data.crbc4_6_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_6_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivTailLagging'
                            name='crbcivTailLagging'
                            className="large-checkbox"
                            checked={data.crbc4_7_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_7_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>V Scrapper</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivTailVs'
                            name='crbcivTailVs'
                            className="large-checkbox"
                            checked={data.crbc4_7_vs}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_7_vs ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivTailBaratNoise'
                            name='crbcivTailBaratNoise'
                            className="large-checkbox"
                            checked={data.crbc4_7_barat_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_7_barat_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivTailBaratTemp' name="crbcivTailBaratTemp" placeholder=""
                          value={data.crbc4_7_barat_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_7_barat_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivTailTimurNoise'
                            name='crbcivTailTimurNoise'
                            className="large-checkbox"
                            checked={data.crbc4_7_timur_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_7_timur_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcivTailTimurTemp' name="crbcivTailTimurTemp" placeholder=""
                          value={data.crbc4_7_timur_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_7_timur_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcivSkirt'
                            name='crbcivSkirt'
                            className="large-checkbox"
                            checked={data.crbc4_8_skirt}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_8_skirt ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivChute'
                            name='crbcivChute'
                            className="large-checkbox"
                            checked={data.crbc4_8_chute}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_8_chute ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivCondition'
                            name='crbcivCondition'
                            className="large-checkbox"
                            checked={data.crbc4_8_condition}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_8_condition ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivJoint'
                            name='crbcivJoint'
                            className="large-checkbox"
                            checked={data.crbc4_8_joint}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_8_joint ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Impact Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivImpact'
                            name='crbcivImpact'
                            className="large-checkbox"
                            checked={data.crbc4_8_impact}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_8_impact ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carry Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivCarry'
                            name='crbcivCarry'
                            className="large-checkbox"
                            checked={data.crbc4_8_carry}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_8_carry ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Return Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivReturn'
                            name='crbcivReturn'
                            className="large-checkbox"
                            checked={data.crbc4_8_return}
                          /></td>
                        <td className='align-middle'><b>{data.crbc4_8_return ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='crbcivRemark' name="crbcivRemark" placeholder=""
                          value={data.bc4_remark}
                        /></td>
                      </tr>
                      <tr>
                      {/* BC5 */}
                        <td rowSpan={63} className='text-center align-middle'>
                          <span>3</span>
                        </td>
                        <td rowSpan={63} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC5</b>
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
                            id='crbcvSgRotatingParts'
                            name='crbcvSgRotatingParts'
                            className="large-checkbox"
                            checked={data.crbc5_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>High Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSgHSC'
                            name='crbcvSgHSC'
                            className="large-checkbox"
                            checked={data.crbc5_1_hsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc5_1_hsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Low Speed Cover</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSgLSC'
                            name='crbcvSgLSC'
                            className="large-checkbox"
                            checked={data.crbc5_1_lsc}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc5_1_lsc ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cover Sepanjang Belt</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSgCSB'
                            name='crbcvSgCSB'
                            className="large-checkbox"
                            checked={data.crbc5_1_csb}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc5_1_csb ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Remaining guarding</td>
                        <td className='align-middle'>All in place and not loose</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSgRG'
                            name='crbcvSgRG'
                            className="large-checkbox"
                            checked={data.crbc5_1_remaining_guarding}
                          /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{data.crbc5_1_remaining_guarding ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
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
                            id='crbcvHeadLagging'
                            name='crbcvHeadLagging'
                            className="large-checkbox"
                            checked={data.crbc5_2_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Primary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadPrimary'
                            name='crbcvHeadPrimary'
                            className="large-checkbox"
                            checked={data.crbc5_2_primary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_primary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper Secondary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadSecondary'
                            name='crbcvHeadSecondary'
                            className="large-checkbox"
                            checked={data.crbc5_2_secondary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_secondary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kanan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadBearingKananNoise'
                            name='crbcvHeadBearingKananNoise'
                            className="large-checkbox"
                            checked={data.crbc5_2_bearing_kanan_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_bearing_kanan_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvHeadBearingKananTemp' name="crbcvHeadBearingKananTemp" placeholder=""
                          value={data.crbc5_2_bearing_kanan_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_2_bearing_kanan_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kiri</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadBearingKiriNoise'
                            name='crbcvHeadBearingKiriNoise'
                            className="large-checkbox"
                            checked={data.crbc5_2_bearing_kiri_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_bearing_kiri_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvHeadBearingKiriTemp' name="crbcvHeadBearingKiriTemp" placeholder=""
                          value={data.crbc5_2_bearing_kiri_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_2_bearing_kiri_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Reducer Kanan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKananNoise'
                            name='crbcvHeadRedKananNoise'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kanan_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kanan_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvHeadRedKananTemp' name="crbcvHeadRedKananTemp" placeholder=""
                          value={data.crbc4_2_red_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_2_red_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKananSeal'
                            name='crbcvHeadRedKananSeal'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kanan_seal}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kanan_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKananOli'
                            name='crbcvHeadRedKananOli'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kanan_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kanan_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (no noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKananCoupling'
                            name='crbcvHeadRedKananCoupling'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kanan_coupling}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kanan_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Reducer Kiri</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKiriNoise'
                            name='crbcvHeadRedKiriNoise'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kiri_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kiri_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvHeadRedKiriTemp' name="crbcvHeadRedKiriTemp" placeholder=""
                          value={data.crbc5_2_red_kiri_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_2_red_kiri_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKiriSeal'
                            name='crbcvHeadRedKiriSeal'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kiri_seal}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kiri_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKiriOli'
                            name='crbcvHeadRedKiriOli'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kiri_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kiri_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (no noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKiriCoupling'
                            name='crbcvHeadRedKiriCoupling'
                            className="large-checkbox"
                            checked={data.crbc5_2_red_kiri_coupling}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_2_red_kiri_coupling ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Snub Pulley 1</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSnubiLagging'
                            name='crbcvSnubiLagging'
                            className="large-checkbox"
                            checked={data.crbc5_3_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_3_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kanan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSnubiKananNoise'
                            name='crbcvSnubiKananNoise'
                            className="large-checkbox"
                            checked={data.crbc5_3_kanan_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_3_kanan_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvSnubiKananTemp' name="crbcvSnubiKananTemp" placeholder=""
                          value={data.crbc5_3_kanan_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_3_kanan_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kiri</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSnubiKiriNoise'
                            name='crbcvSnubiKiriNoise'
                            className="large-checkbox"
                            checked={data.crbc5_3_kiri_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_3_kiri_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvSnubiKiriTemp' name="crbcvSnubiKiriTemp" placeholder=""
                          value={data.crbc5_3_kiri_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_3_kiri_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Snub Pulley 2</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSnubiiLagging'
                            name='crbcvSnubiiLagging'
                            className="large-checkbox"
                            checked={data.crbc5_4_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_4_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kanan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSnubiiKananNoise'
                            name='crbcvSnubiiKananNoise'
                            className="large-checkbox"
                            checked={data.crbc5_4_kanan_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_4_kanan_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvSnubiiKananTemp' name="crbcvSnubiiKananTemp" placeholder=""
                          value={data.crbc5_4_kanan_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_4_kanan_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kiri</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSnubiiKiriNoise'
                            name='crbcvSnubiiKiriNoise'
                            className="large-checkbox"
                            checked={data.crbc5_4_kiri_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_4_kiri_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvSnubiiKiriTemp' name="crbcvSnubiiKiriTemp" placeholder=""
                          value={data.crbc4_3_sel_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc4_3_sel_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSnubiiLagging'
                            name='crbcvSnubiiLagging'
                            className="large-checkbox"
                            checked={data.crbc5_5_lagging}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_5_lagging ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Primary Scrapper</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvTailPrimary'
                            name='crbcvTailPrimary'
                            className="large-checkbox"
                            checked={data.crbc5_5_primary}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_5_primary ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kanan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvTailKananNoise'
                            name='crbcvTailKananNoise'
                            className="large-checkbox"
                            checked={data.crbc5_5_kanan_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_5_kanan_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvTailKananTemp' name="crbcvTailKananTemp" placeholder=""
                          value={data.crbc5_5_kanan_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_5_kanan_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Kiri</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvTailKiriNoise'
                            name='crbcvTailKiriNoise'
                            className="large-checkbox"
                            checked={data.crbc5_5_kiri_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_5_kiri_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crbcvTailKiriTemp' name="crbcvTailKiriTemp" placeholder=""
                          value={data.crbc5_5_kiri_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crbc5_5_kiri_temp) < 40 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>V-Scrapper</td>
                        <td className='align-middle'>No wear</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvTailKiriVs'
                            name='crbcvTailKiriVs'
                            className="large-checkbox"
                            checked={data.crbc5_5_kiri_vs}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_5_kiri_vs ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear/leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSkirt'
                            name='crbcvSkirt'
                            className="large-checkbox"
                            checked={data.crbc5_6_skirt}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_6_skirt ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear/leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvChute'
                            name='crbcvChute'
                            className="large-checkbox"
                            checked={data.crbc5_6_chute}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_6_chute ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvCondition'
                            name='crbcvCondition'
                            className="large-checkbox"
                            checked={data.crbc5_6_condition}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_6_condition ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Join</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvJoint'
                            name='crbcvJoint'
                            className="large-checkbox"
                            checked={data.crbc5_6_joint}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_6_joint ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Impact Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvImpact'
                            name='crbcvImpact'
                            className="large-checkbox"
                            checked={data.crbc5_6_impact}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_6_impact ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carry Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvCarry'
                            name='crbcvCarry'
                            className="large-checkbox"
                            checked={data.crbc5_6_carry}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_6_carry ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Return Roller</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvReturn'
                            name='crbcvReturn'
                            className="large-checkbox"
                            checked={data.crbc5_6_return}
                          /></td>
                        <td className='align-middle'><b>{data.crbc5_6_return ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='crbcvRemark' name="crbcvRemark" placeholder=""
                          value={data.bc5_remark}
                        /></td>
                      </tr>
                      
                      <tr>
                      {/* St1 */}
                        <td rowSpan={15} className='text-center align-middle'>
                          <span>4</span>
                        </td>
                        <td rowSpan={15} className='text-center align-middle rotate-text'>
                          <b>NR.213-ST1</b>
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
                            id='crstRotParts'
                            name='crstRotParts'
                            className="large-checkbox"
                            checked={data.crst1_1_rotating_part}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_1_rotating_part ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Reducer Kanan</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKananNoise'
                            name='crstKananNoise'
                            className="large-checkbox"
                            checked={data.crst1_2_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_2_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crstKananTemp' name="crstKananTemp" placeholder=""
                          value={data.crst1_2_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crst1_2_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKananSeal'
                            name='crstKananSeal'
                            className="large-checkbox"
                            checked={data.crst1_2_seal}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_2_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKananOli'
                            name='crstKananOli'
                            className="large-checkbox"
                            checked={data.crst1_2_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_2_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cleanliness</td>
                        <td className='align-middle'>Clean</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKananClean'
                            name='crstKananClean'
                            className="large-checkbox"
                            checked={data.crst1_2_cleanliness}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_2_cleanliness ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Reducer Kiri</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>Normal</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKiriNoise'
                            name='crstKiriNoise'
                            className="large-checkbox"
                            checked={data.crst1_3_noise}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_3_noise ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control
                          style={{ height: '50px' }} type="number" id='crstKiriTemp' name="crstKiriTemp" placeholder=""
                          value={data.crst1_3_temp}
                        /></td>
                        <td className='align-middle'><b style={{ color: 'red' }}>{parseInt(data.crst1_3_temp) < 60 ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>No leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKiriSeal'
                            name='crstKiriSeal'
                            className="large-checkbox"
                            checked={data.crst1_3_seal}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_3_seal ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKiriOli'
                            name='crstKiriOli'
                            className="large-checkbox"
                            checked={data.crst1_3_oli}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_3_oli ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Cleanliness</td>
                        <td className='align-middle'>Clean</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKiriClean'
                            name='crstKiriClean'
                            className="large-checkbox"
                            checked={data.crst1_3_cleanliness}
                          /></td>
                        <td className='align-middle'><b>{data.crst1_3_cleanliness ? <span style={{ color: 'green' }}>Normal</span>  : <span style={{ color: 'red' }}>Tidak Normal</span>}</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='align-middle text-center'><b>Remark</b></td>
                        <td colSpan={4} className='p-0'><Form.Control
                          style={{ height: '100px' }} type="text" id='stRemark' name="stRemark" placeholder=""
                          value={data.st1_remark}
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

export default detailsNarSatuA;
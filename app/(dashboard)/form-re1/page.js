'use client'

import { useEffect, useState } from 'react'
import { Col, Row, Container, Table, Form, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const R1 = () => {
  const [hasCookie, setHasCookie] = useState(false);
  console.log(hasCookie);
  const MySwal = withReactContent(Swal);
  const router = useRouter();

  useEffect(() => {
    const user_id = Cookies.get('user_id');

    if (user_id) {
      setHasCookie(true);
      
    } else {
      MySwal.fire({
        title: "Failed",
        text: 'Silahkan Login!',
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        router.push('/authentication/sign-in');
      });
      setHasCookie(false);
      router.push('/login');
    }
  }, [router]);

  // WQ1
  const [reiSgRotatingParts, setreiSgRotatingParts] = useState('');
  const [reiSgRotatingParts_r, setreiSgRotatingParts_r] = useState('');
  const [reiSgHSC, setreiSgHSC] = useState('');
  const [reiSgHSC_r, setreiSgHSC_r] = useState('');
  const [reiSgLSC, setreiSgLSC] = useState('');
  const [reiSgLSC_r, setreiSgLSC_r] = useState('');
  const [reiSgRG, setreiSgRG] = useState('');
  const [reiSgRG_r, setreiSgRG_r] = useState('');
  const [reiShRmNoise, setreiShRmNoise] = useState('');
  const [reiShRmNoise_r, setreiShRmNoise_r] = useState('');
  const [reiShRmTemp, setreiShRmTemp] = useState('');
  const [reiShRmTemp_r, setreiShRmTemp_r] = useState('');
  const [reiShRmSeal, setreiShRmSealSeal] = useState('');
  const [reiShRmSeal_r, setreiShRmSeal_r] = useState('');
  const [reiShRmLevelOli, setreiShRmLevelOli] = useState('');
  const [reiShRmLevelOli_r, setreiShRmLevelOli_r] = useState('');
  const [reiShRmCoupling, setreiShRmCoupling] = useState('');
  const [reiShRmCoupling_r, setreiShRmCoupling_r] = useState('');
  const [reiShRmTempBearing, setreiShRmTempBearing] = useState('');
  const [reiShRmTempBearing_r, setreiShRmTempBearing_r] = useState('');
  const [reiShRnNoise, setreiShRnNoise] = useState('');
  const [reiShRnNoise_r, setreiShRnNoise_r] = useState('');
  const [reiShRnTemp, setreiShRnTemp] = useState('');
  const [reiShRnTemp_r, setreiShRnTemp_r] = useState('');
  const [reiShRnSeal, setreiShRnSeal] = useState('');
  const [reiShRnSeal_r, setreiShRnSeal_r] = useState('');
  const [reiShRnLevelOli, setreiShRnLevelOli] = useState('');
  const [reiShRnLevelOli_r, setreiShRnLevelOli_r] = useState('');
  const [reiShRnCoupling, setreiShRnCoupling] = useState('');
  const [reiShRnCoupling_r, setreiShRnCoupling_r] = useState('');
  const [reiShRnTempBearing, setreiShRnTempBearing] = useState('');
  const [reiShRnTempBearing_r, setreiShRnTempBearing_r] = useState('');
  const [reiStTempFix, setreiStTempFix] = useState('');
  const [reiStTempFix_r, setreiStTempFix_r] = useState('');
  const [reiStTempFree, setreiStTempFree] = useState('');
  const [reiStTempFree_r, setreiStTempFree_r] = useState('');
  const [reiStNoise, setreiStNoise] = useState('');
  const [reiStNoise_r, setreiStNoise_r] = useState('');
  const [reiBmRed, setreiBmRed] = useState('');
  const [reiBmRed_r, setreiBmRed_r] = useState('');
  const [reiBmGuide, setreiBmGuide] = useState('');
  const [reiBmGuide_r, setreiBmGuide_r] = useState('');
  const [reiBnRed, setreiBnRed] = useState('');
  const [reiBnRed_r, setreiBnRed_r] = useState('');
  const [reiBnGuide, setreiBnGuide] = useState('');
  const [reiBnGuide_r, setreiBnGuide_r] = useState('');
  const [reiLinkHanger, setreiLinkHanger] = useState('');
  const [reiLinkHanger_r, setreiLinkHanger_r] = useState('');
  const [reiLinkLock, setreiLinkLock] = useState('');
  const [reiLinkLock_r, setreiLinkLock_r] = useState('');
  const [reiLinkScrapper, setreiLinkScrapper] = useState('');
  const [reiLinkScrapper_r, setreiLinkScrapper_r] = useState('');
  const [hc1BhfreNoise, sethc1BhfreNoise] = useState('');
  const [hc1BhfreNoise_r, sethc1BhfreNoise_r] = useState('');
  const [hc1BhfreSeal, sethc1BhfreSeal] = useState('');
  const [hc1BhfreSeal_r, sethc1BhfreSeal_r] = useState('');
  const [hc1BhfreTemp, sethc1BhfreTemp] = useState('');
  const [hc1BhfreTemp_r, sethc1BhfreTemp_r] = useState('');
  const [hciRbpNoise, sethciRbpNoise] = useState('');
  const [hciRbpNoise_r, sethciRbpNoise_r] = useState('');
  const [hciRbpTemp, sethciRbpTemp] = useState('');
  const [hciRbpTemp_r, sethciRbpTemp_r] = useState('');
  const [hciRbpSeal, sethciRbpSeal] = useState('');
  const [hciRbpSeal_r, sethciRbpSeal_r] = useState('');
  const [hciRbpLevelOli, sethciRbpLevelOli] = useState('');
  const [hciRbpLevelOli_r, sethciRbpLevelOli_r] = useState('');
  const [hciRbpCD, sethciRbpCD] = useState('');
  const [hciRbpCD_r, sethciRbpCD_r] = useState('');
  const [hciRbpDvS, sethciRbpDvS] = useState('');
  const [hciRbpDvS_r, sethciRbpDvS_r] = useState('');
  const [hciRbpDvnS, sethciRbpDvnS] = useState('');
  const [hciRbpDvnS_r, sethciRbpDvnS_r] = useState('');
  const [hciRbpBpNoise, sethciRbpBpNoise] = useState('');
  const [hciRbpBpNoise_r, sethciRbpBpNoise_r] = useState('');
  const [hciRbpBpSeal, sethciRbpBpSeal] = useState('');
  const [hciRbpBpSeal_r, sethciRbpBpSeal_r] = useState('');
  const [hciRbpBpTemp, sethciRbpBpTemp] = useState('');
  const [hciRbpBpTemp_r, sethciRbpBpTemp_r] = useState('');
  const [hci6noise, sethci6noise] = useState('');
  const [hci6noise_r, sethci6noise_r] = useState('');
  const [hci6seal, sethci6seal] = useState('');
  const [hci6seal_r, sethci6seal_r] = useState('');
  const [hci6temp, sethci6temp] = useState('');
  const [hci6temp_r, sethci6temp_r] = useState('');
  const [hci7noise, sethci7noise] = useState('');
  const [hci7noise_r, sethci7noise_r] = useState('');
  const [hci7temp, sethci7temp] = useState('');
  const [hci7temp_r, sethci7temp_r] = useState('');
  const [hci8noise, sethci8noise] = useState('');
  const [hci8noise_r, sethci8noise_r] = useState('');
  const [hci8temp, sethci8temp] = useState('');
  const [hci8temp_r, sethci8temp_r] = useState('');
  const [hci9cesing, sethci9cesing] = useState('');
  const [hci9cesing_r, sethci9cesing_r] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const store = await fetch(process.env.NEXT_PUBLIC_API_URL + 'nar1', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        user_id: Cookies.get('user_id'),
        user_name: Cookies.get('user_name'),
        re1_1_rotating_part: reiSgRotatingParts, // 313-RE1
        re1_1_rotating_part_rm: reiSgRotatingParts_r,
        re1_1_hsc: reiSgHSC,
        re1_1_hsc_rm: reiSgLSC_r,
        re1_1_lsc: reiSgLSC,
        re1_1_lsc_rm: reiSgLSC_r,
        re1_1_remaining_guarding: reiSgRG,
        re1_1_remaining_guarding_rm: reiSgRG_r,
        re1_2_noise: reiShRmNoise,
        re1_2_noise_rm: reiShRmNoise_r,
        re1_2_temp: reiShRmTemp,
        re1_2_temp_rm: reiShRmTemp_r,
        re1_2_seall: reiShRmSeal,
        re1_2_seal_rm: reiShRmSeal_r,
        re1_2_level_oil: reiShRmLevelOli,
        re1_2_level_oil_rm: reiShRmLevelOli_r,
        re1_2_coupling: reiShRmCoupling,
        re1_2_coupling_rm: reiShRmCoupling_r,
        re1_2_temp_b: reiShRmTempBearing,
        re1_2_temp_b_rm: reiShRmTempBearing_r,
        re1_3_noise: reiShRnNoise,
        re1_3_noise_rm: reiShRnNoise_r,
        re1_3_temp: reiShRnTemp,
        re1_3_temp_rm: reiShRnTemp_r,
        re1_3_seal: reiShRnSeal,
        re1_3_seal_rm: reiShRnSeal_r,
        re1_3_level_oli: reiShRnLevelOli,
        re1_3_level_olim: reiShRnLevelOli_r,
        re1_3_coupling: reiShRnCoupling,
        re1_3_coupling_rm: reiShRnCoupling_r,
        re1_3_temp_b: reiShRnTempBearing,
        re1_3_temp_b_rm: reiShRnTempBearing_r,
        re1_4_temp_fix: reiStTempFix,
        re1_4_temp_fix_rm: reiStTempFix_r,
        re1_4_temp_free: reiStTempFree,
        re1_4_temp_free_rm: reiStTempFree_r,
        re1_4_noise: reiStNoise,
        re1_4_noise_rm: reiStNoise_r,
        re1_5_red_boogie: reiBmRed,
        re1_5_red_boogie_rm: reiBmRed_r,
        re1_5_guide: reiBmGuide, // HC1
        re1_5_guide_rm: reiBmGuide_r,
        re1_6_red_boogie: reiBnRed,
        re1_6_red_boogie_rm: reiBnRed_r,
        re1_6_guide: reiBnGuide,
        re1_6_guide_rm: reiBnGuide_r,
        re1_7_hanger: reiLinkHanger,
        re1_7_hanger_rm: reiLinkHanger_r,
        re1_7_lock: reiLinkLock,
        re1_7_lock_rm: reiLinkLock_r,
        re1_7_scrapper: reiLinkScrapper,
        re1_7_scrapper: reiLinkScrapper_r,
      }),
    });

    const response = await store.json();
    console.log(response);
    if (response.status === true) {
      MySwal.fire({
        title: "Success",
        text: response.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        router.push('/');
      });
    }

    if (response.status === false) {
      MySwal.fire({
        title: "Error",
        text: response.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

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
                <Form onSubmit={handleSubmit}>
                  <Table responsive bordered className="text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff', width: '7%'}} className='<text-center'><b>No</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff'}} className='text-center'><b>HAC</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff'}} className='text-center'><b>Task</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff'}} className='text-center'><b>Standard</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff', width: '10%'}} className='text-center'><b>Actual Value</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff'}} className='text-center'><b>Remark</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* WQ1 */}
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
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={reiSgRotatingParts}
                            onChange={(e) => setreiSgRotatingParts(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiSgRotatingParts' name="reiSgRotatingParts_r" placeholder="" 
                          value={reiSgRotatingParts_r}
                          onChange={(e) => setreiSgRotatingParts_r(e.target.value)}
                          /></td>
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
                            checked={reiSgHSC}
                            onChange={(e) => setreiSgHSC(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiSgHSC_r' name="reiSgHSC_r" placeholder="" 
                          value={reiSgHSC_r}
                          onChange={(e) => setreiSgHSC_r(e.target.value)}
                          /></td>
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
                            checked={reiSgLSC}
                            onChange={(e) => setreiSgLSC(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiSgLSC_r' name="reiSgLSC_r" placeholder="" 
                          value={reiSgLSC_r}
                          onChange={(e) => setreiSgLSC_r(e.target.value)}
                          /></td>
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
                            checked={reiSgRG}
                            onChange={(e) => setreiSgRG(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiSgRG_r' name="reiSgRG_r" placeholder="" 
                          value={reiSgRG_r}
                          onChange={(e) => setreiSgRG_r(e.target.value)}
                          /></td>
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
                            checked={reiShRmNoise}
                            onChange={(e) => setreiShRmNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                        style={{ height: '65px'}} type="text" id='reiShRmNoise_r' name="reiShRmNoise_r" placeholder="" 
                          value={reiShRmNoise_r}
                          onChange={(e) => setreiShRmNoise_r(e.target.value)}
                        /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiShRmTemp' name="reiShRmTemp" placeholder="" 
                          value={reiShRmTemp}
                          onChange={(e) => setreiShRmTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRmTemp_r' name="reiShRmTemp_r" placeholder="" 
                          value={reiShRmTemp_r}
                          onChange={(e) => setreiShRmTemp_r(e.target.value)}
                          /></td>
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
                            checked={reiShRmSeal}
                            onChange={(e) => setreiShRmSeal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRmSeal_r' name="reiShRmSeal_r" placeholder="" 
                          value={reiShRmSeal_r}
                          onChange={(e) => setreiShRmSeal_r(e.target.value)}
                          /></td>
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
                            checked={reiShRmLevelOli}
                            onChange={(e) => setreiShRmLevelOli(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRmLevelOli_r' name="reiShRmLevelOli_r" placeholder="" 
                          value={reiShRmLevelOli_r}
                          onChange={(e) => setreiShRmLevelOli_r(e.target.value)}
                          /></td>
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
                            checked={reiShRmCoupling}
                            onChange={(e) => setreiShRmCoupling(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRmCoupling_r' name="reiShRmCoupling_r" placeholder="" 
                          value={reiShRmCoupling_r}
                          onChange={(e) => setreiShRmCoupling_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur Bearing</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiShRmTempBearing' name="reiShRmTempBearing" placeholder="" 
                          value={reiShRmTempBearing}
                          onChange={(e) => setreiShRmTempBearing(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRmTempBearing_r' name="reiShRmTempBearing_r" placeholder="" 
                          value={reiShRmTempBearing_r}
                          onChange={(e) => setwqiRedDVS_r(e.target.value)}
                          /></td>
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
                            checked={reiShRnNoise}
                            onChange={(e) => setreiShRnNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRnNoise_r' name="reiShRnNoise_r" placeholder="" 
                          value={reiShRnNoise_r}
                          onChange={(e) => setreiShRnNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiShRnTemp' name="reiShRnTemp" placeholder="" 
                          value={reiShRnTemp}
                          onChange={(e) => setreiShRnTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRnTemp_r' name="reiShRnTemp_r" placeholder="" 
                          value={reiShRnTemp_r}
                          onChange={(e) => setreiShRnTemp_r(e.target.value)}
                          /></td>
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
                            checked={reiShRnSeal}
                            onChange={(e) => setreiShRnSeal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRnSeal_r' name="reiShRnSeal_r" placeholder="" 
                          value={reiShRnSeal_r}
                          onChange={(e) => setreiShRnSeal_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>&lt; Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRnLevelOli'
                            name='reiShRnLevelOli'
                            className="large-checkbox"
                            checked={reiShRnLevelOli}
                            onChange={(e) => setreiShRnLevelOli(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRnLevelOli_r' name="reiShRnLevelOli_r" placeholder="" 
                          value={reiShRnLevelOli_r}
                          onChange={(e) => setreiShRnLevelOli_r(e.target.value)}
                          /></td>
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
                            checked={reiShRnCoupling}
                            onChange={(e) => setreiShRnCoupling(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRnCoupling_r' name="reiShRnCoupling_r" placeholder="" 
                          value={reiShRnCoupling_r}
                          onChange={(e) => setreiShRnCoupling_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur Bearing</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiShRnTempBearing' name="reiShRnTempBearing" placeholder="" 
                          value={reiShRnTempBearing}
                          onChange={(e) => setreiShRnTempBearing(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiShRnTempBearing_r' name="reiShRnTempBearing_r" placeholder="" 
                          value={reiShRnTempBearing_r}
                          onChange={(e) => setreiShRnTempBearing_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Sprocket Tail</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Bearing Fix Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiStTempFix' name="reiStTempFix" placeholder="" 
                          value={reiStTempFix}
                          onChange={(e) => setreiStTempFix(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiStTempFix_r' name="reiStTempFix_r" placeholder="" 
                          value={reiStTempFix_r}
                          onChange={(e) => setreiStTempFix_r(e.target.value)}
                        /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Bearing Free Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiStTempFree' name="reiStTempFree" placeholder="" 
                          value={reiStTempFree}
                          onChange={(e) => setreiStTempFree(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiStTempFree_r' name="reiStTempFree_r" placeholder="" 
                          value={reiStTempFree_r}
                          onChange={(e) => setreiStTempFree_r(e.target.value)}
                          /></td>
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
                            checked={reiStNoise}
                            onChange={(e) => setreiStNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                        style={{ height: '65px'}} type="text" id='reiStNoise_r' name="reiStNoise_r" placeholder="" 
                          value={reiStNoise_r}
                          onChange={(e) => setreiStNoise_r(e.target.value)}
                        /></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Reducer Boogie Material</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temp Reducer Boogie</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiBmRed' name="reiBmRed" placeholder="" 
                          value={reiBmRed}
                          onChange={(e) => setreiBmRed(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiBmRed_r' name="reiBmRed_r" placeholder="" 
                          value={reiBmRed_r}
                          onChange={(e) => setreiBmRed_r(e.target.value)}
                          /></td>
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
                            checked={reiBmGuide}
                            onChange={(e) => setreiBmGuide(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiBmGuide_r' name="reiBmGuide_r" placeholder="" 
                          value={reiBmGuide_r}
                          onChange={(e) => setreiBmGuide_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={5} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Reducer Boogie non Material</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temp Reducer Boogie</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='reiBnRed' name="reiBnRed" placeholder="" 
                          value={reiBnRed}
                          onChange={(e) => setreiBnRed(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiBnRed_r' name="reiBnRed_r" placeholder="" 
                          value={reiBmRed_r}
                          onChange={(e) => setreiBnRed_r(e.target.value)}
                          /></td>
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
                            checked={reiBnGuide}
                            onChange={(e) => setreiBnGuide(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiBnGuide_r' name="reiBnGuide_r" placeholder="" 
                          value={reiBnGuide_r}
                          onChange={(e) => setreiBnGuide_r(e.target.value)}
                          /></td>
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
                            checked={reiLinkHanger}
                            onChange={(e) => setreiLinkHanger(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiLinkHanger_r' name="reiLinkHanger_r" placeholder="" 
                          value={reiLinkHanger_r}
                          onChange={(e) => setreiLinkHanger_r(e.target.value)}
                          /></td>
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
                            checked={reiLinkLock}
                            onChange={(e) => setreiLinkLock(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiLinkLock_r' name="reiLinkLock_r" placeholder="" 
                          value={reiLinkLock_r}
                          onChange={(e) => setreiLinkLock_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Blade Scrapper</td>
                        <td className='align-middle'>No Broken</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiLinkScrapper'
                            name='reiLinkScrapper'
                            className="reiLinkScrapper"
                            checked={reiLinkScrapper}
                            onChange={(e) => setreiLinkScrapper(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiLinkScrapper_r' name="reiLinkScrapper_r" placeholder="" 
                          value={reiLinkScrapper_r}
                          onChange={(e) => setreiLinkScrapper_r(e.target.value)}
                          /></td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className='mt-5'>
                  <div className="d-grid">
                    <Button variant="primary text-white" type="submit">Submit</Button>
                  </div>
                </div>
                </Form>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default R1;
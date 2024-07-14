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
      router.push('/authentication/sign-in');
    }
  }, [router]);

  // RE1
  const [reiSgRotatingParts, setreiSgRotatingParts] = useState('');
  const [reiSgHSC, setreiSgHSC] = useState('');
  const [reiSgLSC, setreiSgLSC] = useState('');
  const [reiSgRG, setreiSgRG] = useState('');
  const [reiShRmNoise, setreiShRmNoise] = useState('');
  const [reiShRmTemp, setreiShRmTemp] = useState('');
  const [reiShRmSeal, setreiShRmSeal] = useState('');
  const [reiShRmLevelOli, setreiShRmLevelOli] = useState('');
  const [reiShRmCoupling, setreiShRmCoupling] = useState('');
  const [reiShRmTempBearing, setreiShRmTempBearing] = useState('');
  const [reiShRnNoise, setreiShRnNoise] = useState('');
  const [reiShRnTemp, setreiShRnTemp] = useState('');
  const [reiShRnSeal, setreiShRnSeal] = useState('');
  const [reiShRnLevelOli, setreiShRnLevelOli] = useState('');
  const [reiShRnCoupling, setreiShRnCoupling] = useState('');
  const [reiShRnTempBearing, setreiShRnTempBearing] = useState('');
  const [reiStTempFix, setreiStTempFix] = useState('');
  const [reiStTempFree, setreiStTempFree] = useState('');
  const [reiStNoise, setreiStNoise] = useState('');
  const [reiBmRed, setreiBmRed] = useState('');
  const [reiBmGuide, setreiBmGuide] = useState('');
  const [reiBnRed, setreiBnRed] = useState('');
  const [reiBnGuide, setreiBnGuide] = useState('');
  const [reiLinkHanger, setreiLinkHanger] = useState('');
  const [reiLinkLock, setreiLinkLock] = useState('');
  const [reiLinkScrapper, setreiLinkScrapper] = useState('');
  //BC1
  const [rebciSgRotatingParts, setrebciSgRotatingParts] = useState('');
  const [rebciSgHSC, setrebciSgHSC] = useState('');
  const [rebciSgLSC, setrebciSgLSC] = useState('');
  const [rebciSgCSB, setrebciSgCSB] = useState('');
  const [rebciSgRG, setrebciSgRG] = useState('');
  const [rebciHeadLagging, setrebciHeadLagging] = useState('');
  const [rebciHeadPrimary, setrebciHeadPrimary] = useState('');
  const [rebciHeadSecondary, setrebciHeadSecondary] = useState('');
  const [rebciHeadFixNoise, setrebciHeadFixNoise] = useState('');
  const [rebciHeadFixTemp, setrebciHeadFixTemp] = useState('');
  const [rebciHeadFreeNoise, setrebciHeadFreeNoise] = useState('');
  const [rebciHeadFreeTemp, setrebciHeadFreeTemp] = useState('');
  const [rebciHeadRedNoise, setrebciHeadRedNoise] = useState('');
  const [rebciHeadRedTemp, setrebciHeadRedTemp] = useState('');
  const [rebciHeadRedSeal, setrebciHeadRedSeal] = useState('');
  const [rebciHeadRedOli, setrebciHeadRedOli] = useState('');
  const [rebciHeadRedCoupling, setrebciHeadRedCoupling] = useState('');
  const [rebciSnubLagging, setrebciSnubLagging] = useState('');
  const [rebciSnubBaratNoise, setrebciSnubBaratNoise] = useState('');
  const [rebciSnubBaratTemp, setrebciSnubBaratTemp] = useState('');
  const [rebciSnubTimurNoise, setrebciSnubTimurNoise] = useState('');
  const [rebciSnubTimurTemp, setrebciSnubTimurTemp] = useState('');
  const [rebciUtaraLagging, setrebciUtaraLagging] = useState('');
  const [rebciUtaraBaratNoise, setrebciUtaraBaratNoise] = useState('');
  const [rebciUtaraBaratTemp, setrebciUtaraBaratTemp] = useState('');
  const [rebciUtaraTimurNoise, setrebciUtaraTimurNoise] = useState('');
  const [rebciUtaraTimurTemp, setrebciUtaraTimurTemp] = useState('');
  const [rebciSelatanLagging, setrebciSelatanLagging] = useState('');
  const [rebciSelatanBaratNoise, setrebciSelatanBaratNoise] = useState('');
  const [rebciSelatanBaratTemp, setrebciSelatanBaratTemp] = useState('');
  const [rebciSelatanTimurNoise, setrebciSelatanTimurNoise] = useState('');
  const [rebciSelatanTimurTemp, setrebciSelatanTimurTemp] = useState('');
  const [rebciTakeLagging, setrebciTakeLagging] = useState('');
  const [rebciTakeBaratNoise, setrebciTakeBaratNoise] = useState('');
  const [rebciTakeBaratTemp, setrebciTakeBaratTemp] = useState('');
  const [rebciTakeTimurNoise, setrebciTakeTimurNoise] = useState('');
  const [rebciTakeTimurTemp, setrebciTakeTimurTemp] = useState('');
  const [rebciTailLagging, setrebciTailLagging] = useState('');
  const [rebciTailVs, setrebciTailVs] = useState('');
  const [rebciTailBaratNoise, setrebciTailBaratNoise] = useState('');
  const [rebciTailBaratTemp, setrebciTailBaratTemp] = useState('');
  const [rebciTailTimurNoise, setrebciTailTimurNoise] = useState('');
  const [rebciTailTimurTemp, setrebciTailTimurTemp] = useState('');
  const [rebciSkirt, setrebciSkirt] = useState('');
  const [rebciChute, setrebciChute] = useState('');
  const [rebciCondition, setrebciCondition] = useState('');
  const [rebciJoint, setrebciJoint] = useState('');
  const [rebciImpact, setrebciImpact] = useState('');
  const [rebciCarry, setrebciCarry] = useState('');
  const [rebciReturn, setrebciReturn] = useState('');
  
  const [reRemark, setreRemark] = useState('');
  const [rebciRemark, setrebciRemark] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const store = await fetch(process.env.NEXT_PUBLIC_API_URL + 'rec1', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        user_id: Cookies.get('user_id'),
        user_name: Cookies.get('user_name'),
        re1_1_rotating_part: reiSgRotatingParts, // 313-RE1
        re1_1_hsc: reiSgHSC,
        re1_1_lsc: reiSgLSC,
        re1_1_remaining_guarding: reiSgRG,
        re1_2_noise: reiShRmNoise,
        re1_2_temp: reiShRmTemp,
        re1_2_seal: reiShRmSeal,
        re1_2_level_oil: reiShRmLevelOli,
        re1_2_coupling: reiShRmCoupling,
        re1_2_temp_b: reiShRmTempBearing,
        re1_3_noise: reiShRnNoise,
        re1_3_temp: reiShRnTemp,
        re1_3_level_oli: reiShRnLevelOli,
        re1_3_coupling: reiShRnCoupling,
        re1_3_temp_b: reiShRnTempBearing,
        re1_4_temp_fix: reiStTempFix,
        re1_4_temp_free: reiStTempFree,
        re1_4_noise: reiStNoise,
        re1_5_red_boogie: reiBmRed,
        re1_5_guide: reiBmGuide,
        re1_6_red_boogie: reiBnRed,
        re1_6_guide: reiBnGuide,
        re1_7_hanger: reiLinkHanger,
        re1_7_lock: reiLinkLock,
        re1_7_scrapper: reiLinkScrapper,

        rebc1_1_rotating_part: rebciSgRotatingParts, // 313-RE1
        rebc1_1_hsc: rebciSgHSC,
        rebc1_1_lsc: rebciSgLSC,
        rebc1_1_csb: rebciSgCSB,
        rebc1_1_remaining_guarding: rebciSgRG,
        rebc1_2_lagging: rebciHeadLagging,
        rebc1_2_primary: rebciHeadPrimary,
        rebc1_2_secondary: rebciHeadSecondary,
        rebc1_2_fix_noise: rebciHeadFixNoise,
        rebc1_2_fix_temp: rebciHeadFixTemp,
        rebc1_2_free_noise: rebciHeadFreeNoise,
        rebc1_2_free_temp: rebciHeadFreeTemp,
        rebc1_2_red_noise: rebciHeadRedNoise,
        rebc1_2_red_temp: rebciHeadRedTemp,
        rebc1_2_red_seal: rebciHeadRedSeal,
        rebc1_2_red_oli: rebciHeadRedOli,
        rebc1_2_red_coupling: rebciHeadRedCoupling,
        rebc1_3_lagging: rebciSnubLagging,
        rebc1_3_barat_noise: rebciSnubBaratNoise,
        rebc1_3_barat_temp: rebciSnubBaratTemp,
        rebc1_3_timur_noise: rebciSnubTimurNoise,
        rebc1_3_timur_temp: rebciSnubTimurTemp,
        rebc1_4_lagging: rebciUtaraLagging,
        rebc1_4_barat_noise: rebciUtaraBaratNoise,
        rebc1_4_barat_temp: rebciUtaraBaratTemp,
        rebc1_4_timur_noise: rebciUtaraTimurNoise,
        rebc1_4_timur_temp: rebciUtaraTimurTemp,
        rebc1_5_lagging: rebciSelatanLagging,
        rebc1_5_barat_noise: rebciSelatanBaratNoise,
        rebc1_5_barat_temp: rebciSelatanBaratTemp,
        rebc1_5_timur_noise: rebciSelatanTimurNoise,
        rebc1_5_timur_temp: rebciSelatanTimurTemp,
        rebc1_6_lagging: rebciTakeLagging,
        rebc1_6_barat_noise: rebciTakeBaratNoise,
        rebc1_6_barat_temp: rebciTakeBaratTemp,
        rebc1_6_timur_noise: rebciTakeTimurNoise,
        rebc1_6_timur_temp: rebciTakeTimurTemp,
        rebc1_7_lagging: rebciTailLagging,
        rebc1_7_vs: rebciTailVs,
        rebc1_7_barat_noise: rebciTailBaratNoise,
        rebc1_7_barat_temp: rebciTailBaratTemp,
        rebc1_7_timur_noise: rebciTailTimurNoise,
        rebc1_7_timur_temp: rebciTailTimurTemp,
        rebc1_8_skirt: rebciSkirt,
        rebc1_8_chute: rebciChute,
        rebc1_8_condition: rebciCondition,
        rebc1_8_joint: rebciJoint,
        rebc1_8_impact: rebciImpact,
        rebc1_8_carry: rebciCarry,
        rebc1_8_return: rebciReturn,

        re1_remark: reRemark,
        rebc1_remark: rebciRemark,
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
                <h2 className=" fw-bold ls-sm">Reclaimer NAR 1</h2>
              </Col>
              <Col md={12} xs={12} xl={12} className="mb-6">
                <Form onSubmit={handleSubmit}>
                  <Table responsive bordered className="text-nowrap mb-0">
                    <thead>
                    <tr>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff', width: '7%'}} className='text-center'><b>No</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff', width: '7%'}} className='text-center'><b>HAC</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff', width: '42%' }} className='text-center'><b>Task</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff', width: '32%'}} className='text-center'><b>Standard</b></th>
                        <th style={{backgroundColor:  '#F5333C', color: '#ffffff', width: '12%'}} className='text-center'><b>Actual Value</b></th>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='reiShRmTemp' name="reiShRmTemp" placeholder="" 
                          value={reiShRmTemp}
                          onChange={(e) => setreiShRmTemp(e.target.value)}
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur Bearing</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='reiShRmTempBearing' name="reiShRmTempBearing" placeholder="" 
                          value={reiShRmTempBearing}
                          onChange={(e) => setreiShRmTempBearing(e.target.value)}
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='reiShRnTemp' name="reiShRnTemp" placeholder="" 
                          value={reiShRnTemp}
                          onChange={(e) => setreiShRnTemp(e.target.value)}
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='reiShRnLevelOli'
                            name='reiShRnLevelOli'
                            className="large-checkbox"
                            checked={reiShRnLevelOli}
                            onChange={(e) => setreiShRnLevelOli(e.target.checked)}
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur Bearing</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='reiShRnTempBearing' name="reiShRnTempBearing" placeholder="" 
                          value={reiShRnTempBearing}
                          onChange={(e) => setreiShRnTempBearing(e.target.value)}
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
                          style={{ height: '50px'}} type="number" id='reiStTempFix' name="reiStTempFix" placeholder="" 
                          value={reiStTempFix}
                          onChange={(e) => setreiStTempFix(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Bearing Free Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='reiStTempFree' name="reiStTempFree" placeholder="" 
                          value={reiStTempFree}
                          onChange={(e) => setreiStTempFree(e.target.value)}
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
                          style={{ height: '50px'}} type="number" id='reiBmRed' name="reiBmRed" placeholder="" 
                          value={reiBmRed}
                          onChange={(e) => setreiBmRed(e.target.value)}
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
                          style={{ height: '50px'}} type="number" id='reiBnRed' name="reiBnRed" placeholder="" 
                          value={reiBnRed}
                          onChange={(e) => setreiBnRed(e.target.value)}
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
                            checked={reiLinkScrapper}
                            onChange={(e) => setreiLinkScrapper(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='text-center align-middle'>
                          <b>Remark</b>
                        </td>
                      <td colSpan={3} className='p-0'><Form.Control 
                          style={{ height: '100px'}} type="text" id='reRemark' name="reRemark" placeholder="" 
                          value={reRemark}
                          onChange={(e) => setreRemark(e.target.value)}
                          /></td>
                      </tr>
                       {/* BC1 */}
                       <tr>
                        <td rowSpan={72} className='text-center align-middle'>
                          <span>2</span>
                        </td>
                        <td rowSpan={72} className='text-center align-middle rotate-text'>
                          <b>NR.313-BC1</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safety Guard</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rotating Parts</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciSgRotatingParts'
                            name='rebciSgRotatingParts'
                            className="large-checkbox"
                            checked={rebciSgRotatingParts}
                            onChange={(e) => setrebciSgRotatingParts(e.target.checked)}
                          /></td>
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
                            checked={rebciSgHSC}
                            onChange={(e) => setrebciSgHSC(e.target.checked)}
                          /></td>
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
                            checked={rebciSgLSC}
                            onChange={(e) => setrebciSgLSC(e.target.checked)}
                          /></td>
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
                            checked={rebciSgCSB}
                            onChange={(e) => setrebciSgCSB(e.target.checked)}
                          /></td>
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
                            checked={rebciSgRG}
                            onChange={(e) => setrebciSgRG(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciHeadLagging}
                            onChange={(e) => setrebciHeadLagging(e.target.checked)}
                          /></td>
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
                            checked={rebciHeadPrimary}
                            onChange={(e) => setrebciHeadPrimary(e.target.checked)}
                          /></td>
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
                            checked={rebciHeadSecondary}
                            onChange={(e) => setrebciHeadSecondary(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciHeadFixNoise}
                            onChange={(e) => setrebciHeadFixNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciHeadFixTemp' name="rebciHeadFixTemp" placeholder="" 
                          value={rebciHeadFixTemp}
                          onChange={(e) => setrebciHeadFixTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciHeadFreeNoise}
                            onChange={(e) => setrebciHeadFreeNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciHeadFreeTemp' name="rebciHeadFreeTemp" placeholder="" 
                          value={rebciHeadFreeTemp}
                          onChange={(e) => setrebciHeadFreeTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciHeadRedNoise}
                            onChange={(e) => setrebciHeadRedNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciHeadRedTemp' name="rebciHeadRedTemp" placeholder="" 
                          value={rebciHeadRedTemp}
                          onChange={(e) => setrebciHeadRedTemp(e.target.value)}
                          /></td>
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
                            checked={rebciHeadRedSeal}
                            onChange={(e) => setrebciHeadRedSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciHeadRedOli'
                            name='rebciHeadRedOli'
                            className="large-checkbox"
                            checked={rebciHeadRedOli}
                            onChange={(e) => setrebciHeadRedOli(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (No Noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciHeadRedCoupling'
                            name='rebciHeadRedCoupling'
                            className="large-checkbox"
                            checked={rebciHeadRedCoupling}
                            onChange={(e) => setrebciHeadRedCoupling(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciSnubLagging}
                            onChange={(e) => setrebciSnubLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Barat</b>
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
                            checked={rebciSnubBaratNoise}
                            onChange={(e) => setrebciSnubBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciSnubBaratTemp' name="rebciSnubBaratTemp" placeholder="" 
                          value={rebciSnubBaratTemp}
                          onChange={(e) => setrebciSnubBaratTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciSnubTimurNoise}
                            onChange={(e) => setrebciSnubTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciSnubTimurTemp' name="rebciSnubTimurTemp" placeholder="" 
                          value={rebciSnubTimurTemp}
                          onChange={(e) => setrebciSnubTimurTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciUtaraLagging}
                            onChange={(e) => setrebciUtaraLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Barat</b>
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
                            checked={rebciUtaraBaratNoise}
                            onChange={(e) => setrebciUtaraBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciUtaraBaratTemp' name="rebciUtaraBaratTemp" placeholder="" 
                          value={rebciUtaraBaratTemp}
                          onChange={(e) => setrebciUtaraBaratTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciUtaraTimurNoise}
                            onChange={(e) => setrebciUtaraTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciUtaraTimurTemp' name="rebciUtaraTimurTemp" placeholder="" 
                          value={rebciUtaraTimurTemp}
                          onChange={(e) => setrebciUtaraTimurTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciSelatanLagging}
                            onChange={(e) => setrebciSelatanLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Barat</b>
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
                            checked={rebciSelatanBaratNoise}
                            onChange={(e) => setrebciSelatanBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciSelatanBaratTemp' name="rebciSelatanBaratTemp" placeholder="" 
                          value={rebciSelatanBaratTemp}
                          onChange={(e) => setrebciSelatanBaratTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciSelatanTimurNoise}
                            onChange={(e) => setrebciSelatanTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciSelatanTimurTemp' name="rebciSelatanTimurTemp" placeholder="" 
                          value={rebciSelatanTimurTemp}
                          onChange={(e) => setrebciSelatanTimurTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciTakeLagging}
                            onChange={(e) => setrebciTakeLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Barat</b>
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
                            checked={rebciTakeBaratNoise}
                            onChange={(e) => setrebciTakeBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciTakeBaratTemp' name="rebciTakeBaratTemp" placeholder="" 
                          value={rebciTakeBaratTemp}
                          onChange={(e) => setrebciTakeBaratTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciTakeTimurNoise}
                            onChange={(e) => setrebciTakeTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciTakeTimurTemp' name="rebciTakeTimurTemp" placeholder="" 
                          value={rebciTakeTimurTemp}
                          onChange={(e) => setrebciTakeTimurTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciTailLagging}
                            onChange={(e) => setrebciTailLagging(e.target.checked)}
                          /></td>
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
                            checked={rebciTailVs}
                            onChange={(e) => setrebciTailVs(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>  Bearing Barat</b>
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
                            checked={rebciTailBaratNoise}
                            onChange={(e) => setrebciTailBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciTailBaratTemp' name="rebciTailBaratTemp" placeholder="" 
                          value={rebciTailBaratTemp}
                          onChange={(e) => setrebciTailBaratTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={rebciTailTimurNoise}
                            onChange={(e) => setrebciTailTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='rebciTailTimurTemp' name="rebciTailTimurTemp" placeholder="" 
                          value={rebciTailTimurTemp}
                          onChange={(e) => setrebciTailTimurTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear and no leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciSkirt'
                            name='rebciSkirt'
                            className="large-checkbox"
                            checked={rebciSkirt}
                            onChange={(e) => setrebciSkirt(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and no leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='rebciChute'
                            name='rebciChute'
                            className="large-checkbox"
                            checked={rebciChute}
                            onChange={(e) => setrebciChute(e.target.checked)}
                          /></td>
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
                            checked={rebciCondition}
                            onChange={(e) => setrebciCondition(e.target.checked)}
                          /></td>
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
                            checked={rebciJoint}
                            onChange={(e) => setrebciJoint(e.target.checked)}
                          /></td>
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
                            checked={rebciImpact}
                            onChange={(e) => setrebciImpact(e.target.checked)}
                          /></td>
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
                            checked={rebciCarry}
                            onChange={(e) => setrebciCarry(e.target.checked)}
                          /></td>
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
                            checked={rebciReturn}
                            onChange={(e) => setrebciReturn(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='text-center align-middle'>
                          <b>Remark</b>
                        </td>
                      <td colSpan={3} className='p-0'><Form.Control 
                          style={{ height: '100px'}} type="text" id='rebciRemark' name="rebciRemark" placeholder="" 
                          value={rebciRemark}
                          onChange={(e) => setrebciRemark(e.target.value)}
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
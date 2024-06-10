'use client'

import { useEffect, useState } from 'react'
import { Col, Row, Container, Table, Form, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const N1 = () => {
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
  const [wqiSgRotatingParts, setWqiSgRotatingParts] = useState('');
  const [wqiSgRotatingParts_r, setWqiSgRotatingParts_r] = useState('');
  const [wqiSgHSC, setWqiHSC] = useState('');
  const [wqiSgHSC_r, setWqiHSC_r] = useState('');
  const [wqiSgLSC, setWqiLSC] = useState('');
  const [wqiSgLSC_r, setWqiLSC_r] = useState('');
  const [wqiSgCSW, setWqiCSW] = useState('');
  const [wqiSgCSW_r, setWqiCSW_r] = useState('');
  const [wqiSgRG, setWqiRG] = useState('');
  const [wqiSgRG_r, setWqiRG_r] = useState('');
  const [wqiRedNoise, setWqiRedNoise] = useState('');
  const [wqiRedNoise_r, setWqiRedNoise_r] = useState('');
  const [wqiRedTemp, setWqiRedTemp] = useState('');
  const [wqiRedTemp_r, setWqiRedTemp_r] = useState('');
  const [wqiRedSeal, setwqiRedSeal] = useState('');
  const [wqiRedSeal_r, setwqiRedSeal_r] = useState('');
  const [wqiRedLevelOli, setwqiRedLevelOli] = useState('');
  const [wqiRedLevelOli_r, setwqiRedLevelOli_r] = useState('');
  const [wqiRedRS, setwqiRedRS] = useState('');
  const [wqiRedRS_r, setwqiRedRS_r] = useState('');
  const [wqiRedDVS, setwqiRedDVS] = useState('');
  const [wqiRedDVS_r, setwqiRedDVS_r] = useState('');
  const [wqiRedChain, setwqiRedChain] = useState('');
  const [wqiRedChain_r, setwqiRedChain_r] = useState('');
  const [wqiRedCoup, setwqiRedCoup] = useState('');
  const [wqiRedCoup_r, setwqiRedCoup_r] = useState('');
  const [wqiBhfNoise, setwqiBhfNoise] = useState('');
  const [wqiBhfNoise_r, setwqiBhfNoise_r] = useState('');
  const [wqiBhfTemp, setwqiBhfTemp] = useState('');
  const [wqiBhfTemp_r, setwqiBhfTemp_r] = useState('');
  const [wqiBhfrNoise, setwqiBhfrNoise] = useState('');
  const [wqiBhfrNoise_r, setwqiBhfrNoise_r] = useState('');
  const [wqiBhfrTemp, setwqiBhfrTemp] = useState('');
  const [wqiBhfrTemp_r, setwqiBhfrTemp_r] = useState('');
  const [wqiBfNoise, setwqiBfNoise] = useState('');
  const [wqiBfNoise_r, setwqiBfNoise_r] = useState('');
  const [wqiBfTemp, setwqiBfTemp] = useState('');
  const [wqiBfTemp_r, setwqiBfTemp_r] = useState('');
  const [wqiBfTc, setwqiBfTc] = useState('');
  const [wqiBfTc_r, setwqiBfTc_r] = useState('');
  const [wqiCClean, setwqiCClean] = useState('');
  const [wqiCClean_r, setwqiCClean_r] = useState('');

  // HC1
  const [hc1SgRotpart, sethc1SgRotpart] = useState('');
  const [hc1SgRotpart_r, sethc1SgRotpart_r] = useState('');
  const [hc1SgHsc, sethc1SgHsc] = useState('');
  const [hc1SgHsc_r, sethc1SgHsc_r] = useState('');
  const [hc1SgRg, sethc1SgRg] = useState('');
  const [hc1SgRg_r, sethc1SgRg_r] = useState('');
  const [hc1BhfrNoise, sethc1BhfrNoise] = useState('');
  const [hc1BhfrNoise_r, sethc1BhfrNoise_r] = useState('');
  const [hc1BhfrSeal, sethc1BhfrSeal] = useState('');
  const [hc1BhfrSeal_r, sethc1BhfrSeal_r] = useState('');
  const [hc1BhfrTemp, sethc1BhfrTemp] = useState('');
  const [hc1BhfrTemp_r, sethc1BhfrTemp_r] = useState('');
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
        wq1_1_rotating_part: wqiSgRotatingParts, // Mesin WQ1
        wq1_1_rotating_part_rm: wqiSgRotatingParts_r,
        wq1_1_hsc: wqiSgHSC,
        wq1_1_hsc_rm: wqiSgHSC_r,
        wq1_1_lsc: wqiSgLSC,
        wq1_1_lsc_rm: wqiSgLSC_r,
        wq1_1_csw: wqiSgCSW,
        wq1_1_csw_rm: wqiSgCSW_r,
        wq1_1_remaining_guarding: wqiSgRG,
        wq1_1_remaining_guarding_rm: wqiSgRG_r,
        wq1_2_noise: wqiRedNoise,
        wq1_2_noise_rm: wqiRedNoise_r,
        wq1_2_temp: wqiRedTemp,
        wq1_2_temp_rm: wqiRedTemp_r,
        wq1_2_seal: wqiRedSeal,
        wq1_2_seal_rm: wqiRedSeal_r,
        wq1_2_level_oil: wqiRedLevelOli,
        wq1_2_level_oil_rm: wqiRedLevelOli_r,
        wq1_2_drive_s: wqiRedRS,
        wq1_2_drive_s_rm: wqiRedRS_r,
        wq1_2_driven_s: wqiRedDVS,
        wq1_2_driven_s_rm: wqiRedDVS_r,
        wq1_2_chain: wqiRedChain,
        wq1_2_chain_rm: wqiRedChain_r,
        wq1_2_coupling: wqiRedCoup,
        wq1_2_coupling_rm: wqiRedCoup_r,
        wq1_3_noise: wqiBhfNoise,
        wq1_3_noise_rm: wqiBhfNoise_r,
        wq1_3_temp: wqiBhfTemp,
        wq1_3_temp_rm: wqiBhfTemp_r,
        wq1_4_noise: wqiBhfrNoise,
        wq1_4_noise_rm: wqiBhfrNoise_r,
        wq1_4_temp: wqiBhfrTemp,
        wq1_4_temp_rm: wqiBhfrTemp_r,
        wq1_5_noise: wqiBfNoise,
        wq1_5_noise_rm: wqiBfNoise_r,
        wq1_5_temp: wqiBfTemp,
        wq1_5_temp_rm: wqiBfTemp_r,
        wq1_5_tc: wqiBfTc,
        wq1_5_tc_rm: wqiBfTc_r,
        wq1_6_cleanliness: wqiCClean,
        wq1_6_cleanliness_rm: wqiCClean_r,
        hc1_1_rotating_part: hc1SgRotpart, // HC1
        hc1_1_rotating_part_rm: hc1SgRotpart_r,
        hc1_1_hsc: hc1SgHsc,
        hc1_1_hsc_rm: hc1SgHsc_r,
        hc1_1_remaining_guarding: hc1SgRg,
        hc1_1_remaining_guarding_rm: hc1SgRg_r,
        hc1_2_noise: hc1BhfrNoise,
        hc1_2_noise_rm: hc1BhfrNoise_r,
        hc1_2_seal: hc1BhfrSeal,
        hc1_2_seal_rm: hc1BhfrSeal_r,
        hc1_2_temp: hc1BhfrTemp,
        hc1_2_temp_rm: hc1BhfrTemp_r,
        hc1_3_noise: hc1BhfreNoise,
        hc1_3_noise_rm: hc1BhfreNoise_r,
        hc1_3_seal: hc1BhfreSeal,
        hc1_3_seal_rm: hc1BhfreSeal_r,
        hc1_3_temp: hc1BhfreTemp,
        hc1_3_temp_rm: hc1BhfreTemp_r,
        hc1_4_noise: hciRbpNoise,
        hc1_4_noise_rm: hciRbpNoise_r,
        hc1_4_temp: hciRbpTemp,
        hc1_4_temp_rm: hciRbpTemp_r,
        hc1_4_seal: hciRbpSeal,
        hc1_4_seal_rm: hciRbpSeal_r,
        hc1_4_level_oil: hciRbpLevelOli,
        hc1_4_level_oil_rm: hciRbpLevelOli_r,
        hc1_4_cd: hciRbpCD,
        hc1_4_cd_rm: hciRbpCD_r,
        hc1_4_drive_s: hciRbpDvS,
        hc1_4_drive_s_rm: hciRbpDvS_r,
        hc1_4_driven_s: hciRbpDvnS,
        hc1_4_driven_s_rm: hciRbpDvnS_r,
        hc1_5_noise: hciRbpBpNoise,
        hc1_5_noise_rm: hciRbpBpNoise_r,
        hc1_5_seal: hciRbpBpSeal,
        hc1_5_seal_rm: hciRbpBpSeal_r,
        hc1_5_temp: hciRbpBpTemp,
        hc1_5_temp_rm: hciRbpBpTemp_r,
        hc1_6_noise: hci6noise,
        hc1_6_noise_rm: hci6noise_r,
        hc1_6_seal: hci6seal,
        hc1_6_seal_rm: hci6seal_r,
        hc1_6_temp: hci6temp,
        hc1_6_temp_rm: hci6temp_r,
        hc1_7_noise: hci7noise,
        hc1_7_noise_rm: hci7noise_r,
        hc1_7_temp: hci7temp,
        hc1_7_temp_rm: hci7temp_r,
        hc1_8_noise: hci8noise,
        hc1_8_noise_rm: hci8noise_r,
        hc1_8_temp: hci8temp,
        hc1_8_temp_rm: hci8temp_r,
        hc1_9_cleanliness: hci9cesing,
        hc1_9_cleanliness_rm: hci9cesing_r,
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
                <h3 className=" fw-bold ls-sm">Crusher Limestone Nar 1</h3>
              </Col>
              <Col md={12} xs={12} xl={12} className="mb-6">
                <Form onSubmit={handleSubmit}>
                  <Table responsive bordered className="text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th style={{backgroundColor: 'var(--bs-gray-100)', width: '7%'}} className='text-center'>No</th>
                        <th style={{backgroundColor: 'var(--bs-gray-100)'}} className='text-center'>HAC</th>
                        <th style={{backgroundColor: 'var(--bs-gray-100)'}} className='text-center'>Task</th>
                        <th style={{backgroundColor: 'var(--bs-gray-100)'}} className='text-center'>Standard</th>
                        <th style={{backgroundColor: 'var(--bs-gray-100)', width: '10%'}} className='text-center'>Actual Value</th>
                        <th style={{backgroundColor: 'var(--bs-gray-100)'}} className='text-center'>Remark</th>
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
                            checked={wqiSgRotatingParts}
                            onChange={(e) => setWqiSgRotatingParts(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiSgRotatingParts_r' name="wqiSgRotatingParts_r" placeholder="" 
                          value={wqiSgRotatingParts_r}
                          onChange={(e) => setWqiSgRotatingParts_r(e.target.value)}
                          /></td>
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
                            checked={wqiSgHSC}
                            onChange={(e) => setWqiHSC(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiSgHSC_r' name="wqiSgHSC_r" placeholder="" 
                          value={wqiSgHSC_r}
                          onChange={(e) => setWqiHSC_r(e.target.value)}
                          /></td>
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
                            checked={wqiSgLSC}
                            onChange={(e) => setWqiLSC(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiSgLSC_r' name="wqiSgLSC_r" placeholder="" 
                          value={wqiSgLSC_r}
                          onChange={(e) => setWqiLSC_r(e.target.value)}
                          /></td>
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
                            checked={wqiSgCSW}
                            onChange={(e) => setWqiCSW(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiSgCSW_r' name="wqiSgCSW_r" placeholder="" 
                          value={wqiSgCSW_r}
                          onChange={(e) => setWqiCSW_r(e.target.value)}
                          /></td>
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
                            checked={wqiSgRG}
                            onChange={(e) => setWqiRG(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiSgRG_r' name="wqiSgRG_r" placeholder="" 
                          value={wqiSgRG_r}
                          onChange={(e) => setWqiRG_r(e.target.value)}
                          /></td>
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
                            checked={wqiRedNoise}
                            onChange={(e) => setWqiRedNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                        style={{ height: '65px'}} type="text" id='wqiRedNoise_r' name="wqiRedNoise_r" placeholder="" 
                          value={wqiRedNoise_r}
                          onChange={(e) => setWqiRedNoise_r(e.target.value)}
                        /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='wqiRedTemp' name="wqiRedTemp" placeholder="" 
                          value={wqiRedTemp}
                          onChange={(e) => setWqiRedTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiRedTemp_r' name="wqiRedTemp_r" placeholder="" 
                          value={wqiRedTemp_r}
                          onChange={(e) => setWqiRedTemp_r(e.target.value)}
                          /></td>
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
                            checked={wqiRedSeal}
                            onChange={(e) => setwqiRedSeal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiRedSeal_r' name="wqiRedSeal_r" placeholder="" 
                          value={wqiRedSeal_r}
                          onChange={(e) => setwqiRedSeal_r(e.target.value)}
                          /></td>
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
                            checked={wqiRedLevelOli}
                            onChange={(e) => setwqiRedLevelOli(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiRedLevelOli_r' name="wqiRedLevelOli_r" placeholder="" 
                          value={wqiRedLevelOli_r}
                          onChange={(e) => setwqiRedLevelOli_r(e.target.value)}
                          /></td>
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
                            checked={wqiRedRS}
                            onChange={(e) => setwqiRedRS(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiRedRS_r' name="wqiRedRS_r" placeholder="" 
                          value={wqiRedRS_r}
                          onChange={(e) => setwqiRedRS_r(e.target.value)}
                          /></td>
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
                            checked={wqiRedDVS}
                            onChange={(e) => setwqiRedDVS(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiRedDVS_r' name="wqiRedDVS_r" placeholder="" 
                          value={wqiRedDVS_r}
                          onChange={(e) => setwqiRedDVS_r(e.target.value)}
                          /></td>
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
                            checked={wqiRedChain}
                            onChange={(e) => setwqiRedChain(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiRedChain_r' name="wqiRedChain_r" placeholder="" 
                          value={wqiRedChain_r}
                          onChange={(e) => setwqiRedChain_r(e.target.value)}
                          /></td>
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
                            checked={wqiRedCoup}
                            onChange={(e) => setwqiRedCoup(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiRedCoup_r' name="wqiRedCoup_r" placeholder="" 
                          value={wqiRedCoup_r}
                          onChange={(e) => setwqiRedCoup_r(e.target.value)}
                          /></td>
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
                            checked={wqiBhfNoise}
                            onChange={(e) => setwqiBhfNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiBhfNoise_r' name="wqiBhfNoise_r" placeholder="" 
                          value={wqiBhfNoise_r}
                          onChange={(e) => setwqiBhfNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='wqiBhfTemp' name="wqiBhfTemp" placeholder="" 
                          value={wqiBhfTemp}
                          onChange={(e) => setwqiBhfTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiBhfTemp_r' name="wqiBhfTemp_r" placeholder="" 
                          value={wqiBhfTemp_r}
                          onChange={(e) => setwqiBhfTemp_r(e.target.value)}
                          /></td>
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
                            checked={wqiBhfrNoise}
                            onChange={(e) => setwqiBhfrNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiBhfrNoise_r' name="wqiBhfrNoise_r" placeholder="" 
                          value={wqiBhfrNoise_r}
                          onChange={(e) => setwqiBhfrNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='wqiBhfrTemp' name="wqiBhfrTemp" placeholder="" 
                          value={wqiBhfrTemp}
                          onChange={(e) => setwqiBhfrTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiBhfrTemp_r' name="wqiBhfrTemp_r" placeholder="" 
                          value={wqiBhfrTemp_r}
                          onChange={(e) => setwqiBhfrTemp_r(e.target.value)}
                          /></td>
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
                            checked={wqiBfNoise}
                            onChange={(e) => setwqiBfNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiBfNoise_r' name="wqiBfNoise_r" placeholder="" 
                          value={wqiBfNoise_r}
                          onChange={(e) => setwqiBfNoise_r(e.target.value)}
                        /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='wqiBfTemp' name="wqiBfTemp" placeholder="" 
                          value={wqiBfTemp}
                          onChange={(e) => setwqiBfTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiBfTemp_r' name="wqiBfTemp_r" placeholder="" 
                          value={wqiBfTemp_r}
                          onChange={(e) => setwqiBfTemp_r(e.target.value)}
                          /></td>
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
                            checked={wqiBfTc}
                            onChange={(e) => setwqiBfTc(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                        style={{ height: '65px'}} type="text" id='wqiBfTc_r' name="wqiBfTc_r" placeholder="" 
                          value={wqiBfTc_r}
                          onChange={(e) => setwqiBfTc_r(e.target.value)}
                        /></td>
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
                            checked={wqiCClean}
                            onChange={(e) => setwqiCClean(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='wqiCClean_r' name="wqiCClean_r" placeholder="" 
                          value={wqiCClean_r}
                          onChange={(e) => setwqiCClean_r(e.target.value)}
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
                            checked={hc1SgRotpart}
                            onChange={(e) => sethc1SgRotpart(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1SgRotpart_r' name="hc1SgRotpart_r" placeholder="" 
                          value={hc1SgRotpart_r}
                          onChange={(e) => sethc1SgRotpart_r(e.target.value)}
                          /></td>
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
                            checked={hc1SgHsc}
                            onChange={(e) => sethc1SgHsc(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1SgHsc_r' name="hc1SgHsc_r" placeholder="" 
                          value={hc1SgHsc_r}
                          onChange={(e) => sethc1SgHsc_r(e.target.value)}
                          /></td>
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
                            checked={hc1SgRg}
                            onChange={(e) => sethc1SgRg(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1SgRg_r' name="hc1SgRg_r" placeholder="" 
                          value={hc1SgRg_r}
                          onChange={(e) => sethc1SgRg_r(e.target.value)}
                          /></td>
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
                            checked={hc1BhfrNoise}
                            onChange={(e) => sethc1BhfrNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1BhfrNoise_r' name="hc1BhfrNoise_r" placeholder="" 
                          value={hc1BhfrNoise_r}
                          onChange={(e) => sethc1BhfrNoise_r(e.target.value)}
                          /></td>
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
                            checked={hc1BhfrSeal}
                            onChange={(e) => sethc1BhfrSeal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1BhfrSeal_r' name="hc1BhfrSeal_r" placeholder="" 
                          value={hc1BhfrSeal_r}
                          onChange={(e) => sethc1BhfrSeal_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='hc1BhfrTemp' name="hc1BhfrTemp" placeholder="" 
                          value={hc1BhfrTemp}
                          onChange={(e) => sethc1BhfrTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1BhfrTemp_r' name="hc1BhfrTemp_r" placeholder="" 
                          value={hc1BhfrTemp_r}
                          onChange={(e) => sethc1BhfrTemp_r(e.target.value)}
                          /></td>
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
                            checked={hc1BhfreNoise}
                            onChange={(e) => sethc1BhfreNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1BhfreNoise_r' name="hc1BhfreNoise_r" placeholder="" 
                          value={hc1BhfreNoise_r}
                          onChange={(e) => sethc1BhfreNoise_r(e.target.value)}
                          /></td>
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
                            checked={hc1BhfreSeal}
                            onChange={(e) => sethc1BhfreSeal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1BhfreSeal_r' name="hc1BhfreSeal_r" placeholder="" 
                          value={hc1BhfreSeal_r}
                          onChange={(e) => sethc1BhfreSeal_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='hc1BhfreTemp' name="hc1BhfreTemp" placeholder="" 
                          value={hc1BhfreTemp}
                          onChange={(e) => sethc1BhfreTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hc1BhfreTemp_r' name="hc1BhfreTemp_r" placeholder="" 
                          value={hc1BhfreTemp_r}
                          onChange={(e) => sethc1BhfreTemp_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpNoise}
                            onChange={(e) => sethciRbpNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpNoise_r' name="hciRbpNoise_r" placeholder="" 
                          value={hciRbpNoise_r}
                          onChange={(e) => sethciRbpNoise_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpSeal}
                            onChange={(e) => sethciRbpSeal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpSeal_r' name="hciRbpSeal_r" placeholder="" 
                          value={hciRbpSeal_r}
                          onChange={(e) => sethciRbpSeal_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='hciRbpTemp' name="hciRbpTemp" placeholder="" 
                          value={hciRbpTemp}
                          onChange={(e) => sethciRbpTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpTemp_r' name="hciRbpTemp_r" placeholder="" 
                          value={hciRbpTemp_r}
                          onChange={(e) => sethciRbpTemp_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpLevelOli}
                            onChange={(e) => sethciRbpLevelOli(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpLevelOli_r' name="hciRbpLevelOli_r" placeholder="" 
                          value={hciRbpLevelOli_r}
                          onChange={(e) => sethciRbpLevelOli_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpCD}
                            onChange={(e) => sethciRbpCD(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpCD_r' name="hciRbpCD_r" placeholder="" 
                          value={hciRbpCD_r}
                          onChange={(e) => sethciRbpCD_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpDvS}
                            onChange={(e) => sethciRbpDvS(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpDvS_r' name="hciRbpDvS_r" placeholder="" 
                          value={hciRbpDvS_r}
                          onChange={(e) => sethciRbpDvS_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpDvnS}
                            onChange={(e) => sethciRbpDvnS(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpDvnS_r' name="hciRbpDvnS_r" placeholder="" 
                          value={hciRbpDvnS_r}
                          onChange={(e) => sethciRbpDvnS_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpBpNoise}
                            onChange={(e) => sethciRbpBpNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpBpNoise_r' name="hciRbpBpNoise_r" placeholder="" 
                          value={hciRbpBpNoise_r}
                          onChange={(e) => sethciRbpBpNoise_r(e.target.value)}
                          /></td>
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
                            checked={hciRbpBpSeal}
                            onChange={(e) => sethciRbpBpSeal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpBpSeal_r' name="hciRbpBpSeal_r" placeholder="" 
                          value={hciRbpBpSeal_r}
                          onChange={(e) => sethciRbpBpSeal_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='hciRbpBpTemp' name="hciRbpBpTemp" placeholder="" 
                          value={hciRbpBpTemp}
                          onChange={(e) => sethciRbpBpTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hciRbpBpTemp_r' name="hciRbpBpTemp_r" placeholder="" 
                          value={hciRbpBpTemp_r}
                          onChange={(e) => sethciRbpBpTemp_r(e.target.value)}
                          /></td>
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
                            checked={hci6noise}
                            onChange={(e) => sethci6noise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci6noise_r' name="hci6noise_r" placeholder="" 
                          value={hci6noise_r}
                          onChange={(e) => sethci6noise_r(e.target.value)}
                          /></td>
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
                            checked={hci6seal}
                            onChange={(e) => sethci6seal(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci6seal_r' name="hci6seal_r" placeholder="" 
                          value={hci6seal_r}
                          onChange={(e) => sethci6seal_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='hci6temp' name="hci6temp" placeholder="" 
                          value={hci6temp}
                          onChange={(e) => sethci6temp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci6temp_r' name="hci6temp_r" placeholder="" 
                          value={hci6temp_r}
                          onChange={(e) => sethci6temp_r(e.target.value)}
                          /></td>
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
                            checked={hci7noise}
                            onChange={(e) => sethci7noise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci7noise_r' name="hci7noise_r" placeholder="" 
                          value={hci7noise_r}
                          onChange={(e) => sethci7noise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='hci7temp' name="hci7temp" placeholder="" 
                          value={hci7temp}
                          onChange={(e) => sethci7temp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci7temp_r' name="hci7temp_r" placeholder="" 
                          value={hci7temp_r}
                          onChange={(e) => sethci7temp_r(e.target.value)}
                          /></td>
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
                            checked={hci8noise}
                            onChange={(e) => sethci8noise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci8noise_r' name="hci8noise_r" placeholder="" 
                          value={hci8noise_r}
                          onChange={(e) => sethci8noise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='hci8temp' name="hci8temp" placeholder="" 
                          value={hci8temp}
                          onChange={(e) => sethci8temp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci8temp_r' name="hci8temp_r" placeholder="" 
                          value={hci8temp_r}
                          onChange={(e) => sethci8temp_r(e.target.value)}
                          /></td>
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
                            checked={hci9cesing}
                            onChange={(e) => sethci9cesing(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='hci9cesing_r' name="hci9cesing_r" placeholder="" 
                          value={hci9cesing_r}
                          onChange={(e) => sethci9cesing_r(e.target.value)}
                          /></td>
                      </tr>
                      {/* END HC1 */}
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

export default N1;
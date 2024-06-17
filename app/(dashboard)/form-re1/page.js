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

  // RE1
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
  const [reiShRmSeal, setreiShRmSeal] = useState('');
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
  //BC1
  const [rebciSgRotatingParts, setrebciSgRotatingParts] = useState('');
  const [rebciSgRotatingParts_r, setrebciSgRotatingParts_r] = useState('');
  const [rebciSgHSC, setrebciSgHSC] = useState('');
  const [rebciSgHSC_r, setrebciSgHSC_r] = useState('');
  const [rebciSgLSC, setrebciSgLSC] = useState('');
  const [rebciSgLSC_r, setrebciSgLSC_r] = useState('');
  const [rebciSgCSB, setrebciSgCSB] = useState('');
  const [rebciSgCSB_r, setrebciSgCSB_r] = useState('');
  const [rebciSgRG, setrebciSgRG] = useState('');
  const [rebciSgRG_r, setrebciSgRG_r] = useState('');
  const [rebciHeadLagging, setrebciHeadLagging] = useState('');
  const [rebciHeadLagging_r, setrebciHeadLagging_r] = useState('');
  const [rebciHeadPrimary, setrebciHeadPrimary] = useState('');
  const [rebciHeadPrimary_r, setrebciHeadPrimary_r] = useState('');
  const [rebciHeadSecondary, setrebciHeadSecondary] = useState('');
  const [rebciHeadSecondary_r, setrebciHeadSecondary_r] = useState('');
  const [rebciHeadFixNoise, setrebciHeadFixNoise] = useState('');
  const [rebciHeadFixNoise_r, setrebciHeadFixNoise_r] = useState('');
  const [rebciHeadFixTemp, setrebciHeadFixTemp] = useState('');
  const [rebciHeadFixTemp_r, setrebciHeadFixTemp_r] = useState('');
  const [rebciHeadFreeNoise, setrebciHeadFreeNoise] = useState('');
  const [rebciHeadFreeNoise_r, setrebciHeadFreeNoise_r] = useState('');
  const [rebciHeadFreeTemp, setrebciHeadFreeTemp] = useState('');
  const [rebciHeadFreeTemp_r, setrebciHeadFreeTemp_r] = useState('');
  const [rebciHeadRedNoise, setrebciHeadRedNoise] = useState('');
  const [rebciHeadRedNoise_r, setrebciHeadRedNoise_r] = useState('');
  const [rebciHeadRedTemp, setrebciHeadRedTemp] = useState('');
  const [rebciHeadRedTemp_r, setrebciHeadRedTemp_r] = useState('');
  const [rebciHeadRedSeal, setrebciHeadRedSeal] = useState('');
  const [rebciHeadRedSeal_r, setrebciHeadRedSeal_r] = useState('');
  const [rebciHeadRedOli, setrebciHeadRedOli] = useState('');
  const [rebciHeadRedOli_r, setrebciHeadRedOli_r] = useState('');
  const [rebciHeadRedCoupling, setrebciHeadRedCoupling] = useState('');
  const [rebciHeadRedCoupling_r, setrebciHeadRedCoupling_r] = useState('');
  const [rebciSnubLagging, setrebciSnubLagging] = useState('');
  const [rebciSnubLagging_r, setrebciSnubLagging_r] = useState('');
  const [rebciSnubBaratNoise, setrebciSnubBaratNoise] = useState('');
  const [rebciSnubBaratNoise_r, setrebciSnubBaratNoise_r] = useState('');
  const [rebciSnubBaratTemp, setrebciSnubBaratTemp] = useState('');
  const [rebciSnubBaratTemp_r, setrebciSnubBaratTemp_r] = useState('');
  const [rebciSnubTimurNoise, setrebciSnubTimurNoise] = useState('');
  const [rebciSnubTimurNoise_r, setrebciSnubTimurNoise_r] = useState('');
  const [rebciSnubTimurTemp, setrebciSnubTimurTemp] = useState('');
  const [rebciSnubTimurTemp_r, setrebciSnubTimurTemp_r] = useState('');
  const [rebciUtaraLagging, setrebciUtaraLagging] = useState('');
  const [rebciUtaraLagging_r, setrebciUtaraLagging_r] = useState('');
  const [rebciUtaraBaratNoise, setrebciUtaraBaratNoise] = useState('');
  const [rebciUtaraBaratNoise_r, setrebciUtaraBaratNoise_r] = useState('');
  const [rebciUtaraBaratTemp, setrebciUtaraBaratTemp] = useState('');
  const [rebciUtaraBaratTemp_r, setrebciUtaraBaratTemp_r] = useState('');
  const [rebciUtaraTimurNoise, setrebciUtaraTimurNoise] = useState('');
  const [rebciUtaraTimurNoise_r, setrebciUtaraTimurNoise_r] = useState('');
  const [rebciUtaraTimurTemp, setrebciUtaraTimurTemp] = useState('');
  const [rebciUtaraTimurTemp_r, setrebciUtaraTimurTemp_r] = useState('');
  const [rebciSelatanLagging, setrebciSelatanLagging] = useState('');
  const [rebciSelatanLagging_r, setrebciSelatanLagging_r] = useState('');
  const [rebciSelatanBaratNoise, setrebciSelatanBaratNoise] = useState('');
  const [rebciSelatanBaratNoise_r, setrebciSelatanBaratNoise_r] = useState('');
  const [rebciSelatanBaratTemp, setrebciSelatanBaratTemp] = useState('');
  const [rebciSelatanBaratTemp_r, setrebciSelatanBaratTemp_r] = useState('');
  const [rebciSelatanTimurNoise, setrebciSelatanTimurNoise] = useState('');
  const [rebciSelatanTimurNoise_r, setrebciSelatanTimurNoise_r] = useState('');
  const [rebciSelatanTimurTemp, setrebciSelatanTimurTemp] = useState('');
  const [rebciSelatanTimurTemp_r, setrebciSelatanTimurTemp_r] = useState('');
  const [rebciTakeLagging, setrebciTakeLagging] = useState('');
  const [rebciTakeLagging_r, setrebciTakeLagging_r] = useState('');
  const [rebciTakeBaratNoise, setrebciTakeBaratNoise] = useState('');
  const [rebciTakeBaratNoise_r, setrebciTakeBaratNoise_r] = useState('');
  const [rebciTakeBaratTemp, setrebciTakeBaratTemp] = useState('');
  const [rebciTakeBaratTemp_r, setrebciTakeBaratTemp_r] = useState('');
  const [rebciTakeTimurNoise, setrebciTakeTimurNoise] = useState('');
  const [rebciTakeTimurNoise_r, setrebciTakeTimurNoise_r] = useState('');
  const [rebciTakeTimurTemp, setrebciTakeTimurTemp] = useState('');
  const [rebciTakeTimurTemp_r, setrebciTakeTimurTemp_r] = useState('');
  const [rebciTailLagging, setrebciTailLagging] = useState('');
  const [rebciTailLagging_r, setrebciTailLagging_r] = useState('');
  const [rebciTailVs, setrebciTailVs] = useState('');
  const [rebciTailVs_r, setrebciTailVs_r] = useState('');
  const [rebciTailBaratNoise, setrebciTailBaratNoise] = useState('');
  const [rebciTailBaratNoise_r, setrebciTailBaratNoise_r] = useState('');
  const [rebciTailBaratTemp, setrebciTailBaratTemp] = useState('');
  const [rebciTailBaratTemp_r, setrebciTailBaratTemp_r] = useState('');
  const [rebciTailTimurNoise, setrebciTailTimurNoise] = useState('');
  const [rebciTailTimurNoise_r, setrebciTailTimurNoise_r] = useState('');
  const [rebciTailTimurTemp, setrebciTailTimurTemp] = useState('');
  const [rebciTailTimurTemp_r, setrebciTailTimurTemp_r] = useState('');
  const [rebciSkirt, setrebciSkirt] = useState('');
  const [rebciSkirt_r, setrebciSkirt_r] = useState('');
  const [rebciChute, setrebciChute] = useState('');
  const [rebciChute_r, setrebciChute_r] = useState('');
  const [rebciCondition, setrebciCondition] = useState('');
  const [rebciCondition_r, setrebciCondition_r] = useState('');
  const [rebciJoint, setrebciJoint] = useState('');
  const [rebciJoint_r, setrebciJoint_r] = useState('');
  const [rebciImpact, setrebciImpact] = useState('');
  const [rebciImpact_r, setrebciImpact_r] = useState('');
  const [rebciCarry, setrebciCarry] = useState('');
  const [rebciCarry_r, setrebciCarry_r] = useState('');
  const [rebciReturn, setrebciReturn] = useState('');
  const [rebciReturn_r, setrebciReturn_r] = useState('');
  
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
        re1_2_seal: reiShRmSeal,
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
        re1_3_level_oli_rm: reiShRnLevelOli_r,
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
        re1_5_guide: reiBmGuide,
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
        re1_7_scrapper_rm: reiLinkScrapper_r,

        rebc1_1_rotating_part: rebciSgRotatingParts, // 313-RE1
        rebc1_1_rotating_part_rm: rebciSgRotatingParts_r,
        rebc1_1_hsc: rebciSgHSC,
        rebc1_1_hsc_rm: rebciSgHSC_r,
        rebc1_1_lsc: rebciSgLSC,
        rebc1_1_lsc_rm: rebciSgLSC_r,
        rebc1_1_csb: rebciSgCSB,
        rebc1_1_csb_rm: rebciSgCSB_r,
        rebc1_1_remaining_guarding: rebciSgRG,
        rebc1_1_remaining_guarding_rm: rebciSgRG_r,
        rebc1_2_lagging: rebciHeadLagging,
        rebc1_2_lagging_rm: rebciHeadLagging_r,
        rebc1_2_primary: rebciHeadPrimary,
        rebc1_2_primary_rm: rebciHeadPrimary_r,
        rebc1_2_secondary: rebciHeadSecondary,
        rebc1_2_secondary_rm: rebciHeadSecondary_r,
        rebc1_2_fix_noise: rebciHeadFixNoise,
        rebc1_2_fix_noise_rm: rebciHeadFixNoise_r,
        rebc1_2_fix_temp: rebciHeadFixTemp,
        rebc1_2_fix_temp_rm: rebciHeadFixTemp_r,
        rebc1_2_free_noise: rebciHeadFreeNoise,
        rebc1_2_free_noise_rm: rebciHeadFreeNoise_r,
        rebc1_2_free_temp: rebciHeadFreeTemp,
        rebc1_2_free_temp_rm: rebciHeadFreeTemp_r,
        rebc1_2_red_noise: rebciHeadRedNoise,
        rebc1_2_red_noise_rm: rebciHeadRedNoise_r,
        rebc1_2_red_temp: rebciHeadRedTemp,
        rebc1_2_red_temp_rm: rebciHeadRedTemp_r,
        rebc1_2_red_seal: rebciHeadRedSeal,
        rebc1_2_red_seal_rm: rebciHeadRedSeal_r,
        rebc1_2_red_oli: rebciHeadRedOli,
        rebc1_2_red_oli_rm: rebciHeadRedOli_r,
        rebc1_2_red_coupling: rebciHeadRedCoupling,
        rebc1_2_red_coupling_rm: rebciHeadRedCoupling_r,
        rebc1_3_lagging: rebciSnubLagging,
        rebc1_3_lagging_rm: rebciSnubLagging_r,
        rebc1_3_barat_noise: rebciSnubBaratNoise,
        rebc1_3_barat_noise_rm: rebciSnubBaratNoise_r,
        rebc1_3_barat_temp: rebciSnubBaratTemp,
        rebc1_3_barat_temp_rm: rebciSnubBaratTemp_r,
        rebc1_3_timur_noise: rebciSnubTimurNoise,
        rebc1_3_timur_noise_rm: rebciSnubTimurNoise_r,
        rebc1_3_timur_temp: rebciSnubTimurTemp,
        rebc1_3_timur_temp_rm: rebciSnubTimurTemp_r,
        rebc1_4_lagging: rebciUtaraLagging,
        rebc1_4_lagging_rm: rebciUtaraLagging_r,
        rebc1_4_barat_noise: rebciUtaraBaratNoise,
        rebc1_4_barat_noise_rm: rebciUtaraBaratNoise_r,
        rebc1_4_barat_temp: rebciUtaraBaratTemp,
        rebc1_4_barat_temp_rm: rebciUtaraBaratTemp_r,
        rebc1_4_timur_noise: rebciUtaraTimurNoise,
        rebc1_4_timur_noise_rm: rebciUtaraTimurNoise_r,
        rebc1_4_timur_temp: rebciUtaraTimurTemp,
        rebc1_4_timur_temp_rm: rebciUtaraTimurTemp_r,
        rebc1_5_lagging: rebciSelatanLagging,
        rebc1_5_lagging_rm: rebciSelatanLagging_r,
        rebc1_5_barat_noise: rebciSelatanBaratNoise,
        rebc1_5_barat_noise_rm: rebciSelatanBaratNoise_r,
        rebc1_5_barat_temp: rebciSelatanBaratTemp,
        rebc1_5_barat_temp_rm: rebciSelatanBaratTemp_r,
        rebc1_5_timur_noise: rebciSelatanTimurNoise,
        rebc1_5_timur_noise_rm: rebciSelatanTimurNoise_r,
        rebc1_5_timur_temp: rebciSelatanTimurTemp,
        rebc1_5_timur_temp_rm: rebciSelatanTimurTemp_r,
        rebc1_6_lagging: rebciTakeLagging,
        rebc1_6_lagging_rm: rebciTakeLagging_r,
        rebc1_6_barat_noise: rebciTakeBaratNoise,
        rebc1_6_barat_noise_rm: rebciTakeBaratNoise_r,
        rebc1_6_barat_temp: rebciTakeBaratTemp,
        rebc1_6_barat_temp_rm: rebciTakeBaratTemp_r,
        rebc1_6_timur_noise: rebciTakeTimurNoise,
        rebc1_6_timur_noise_rm: rebciTakeTimurNoise_r,
        rebc1_6_timur_temp: rebciTakeTimurTemp,
        rebc1_6_timur_temp_rm: rebciTakeTimurTemp_r,
        rebc1_7_lagging: rebciTailLagging,
        rebc1_7_lagging_rm: rebciTailLagging_r,
        rebc1_7_vs: rebciTailVs,
        rebc1_7_vs_rm: rebciTailVs_r,
        rebc1_7_barat_noise: rebciTailBaratNoise,
        rebc1_7_barat_noise_rm: rebciTailBaratNoise_r,
        rebc1_7_barat_temp: rebciTailBaratTemp,
        rebc1_7_barat_temp_rm: rebciTailBaratTemp_r,
        rebc1_7_timur_noise: rebciTailTimurNoise,
        rebc1_7_timur_noise_rm: rebciTailTimurNoise_r,
        rebc1_7_timur_temp: rebciTailTimurTemp,
        rebc1_7_timur_temp_rm: rebciTailTimurTemp_r,
        rebc1_8_skirt: rebciSkirt,
        rebc1_8_skirt_rm: rebciSkirt_r,
        rebc1_8_chute: rebciChute,
        rebc1_8_chute_rm: rebciChute_r,
        rebc1_8_condition: rebciCondition,
        rebc1_8_condition_rm: rebciCondition_r,
        rebc1_8_joint: rebciJoint,
        rebc1_8_joint_rm: rebciJoint_r,
        rebc1_8_impact: rebciImpact,
        rebc1_8_impact_rm: rebciImpact_r,
        rebc1_8_carry: rebciCarry,
        rebc1_8_carry_rm: rebciCarry_r,
        rebc1_8_return: rebciReturn,
        rebc1_8_return_rm: rebciReturn_r,
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
                          onChange={(e) => setreiShRmTempBearing_r(e.target.value)}
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
                            className="large-checkbox"
                            checked={reiLinkScrapper}
                            onChange={(e) => setreiLinkScrapper(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='reiLinkScrapper_r' name="reiLinkScrapper_r" placeholder="" 
                          value={reiLinkScrapper_r}
                          onChange={(e) => setreiLinkScrapper_r(e.target.value)}
                          /></td>
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSgRotatingParts_r' name="rebciSgRotatingParts_r" placeholder="" 
                          value={rebciSgRotatingParts_r}
                          onChange={(e) => setrebciSgRotatingParts_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSgHSC_r' name="rebciSgHSC_r" placeholder="" 
                          value={rebciSgHSC_r}
                          onChange={(e) => setrebciSgHSC_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSgLSC_r' name="rebciSgLSC_r" placeholder="" 
                          value={rebciSgLSC_r}
                          onChange={(e) => setrebciSgLSC_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSgCSB_r' name="rebciSgCSB_r" placeholder="" 
                          value={rebciSgCSB_r}
                          onChange={(e) => setrebciSgCSB_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSgRG_r' name="rebciSgRG_r" placeholder="" 
                          value={rebciSgRG_r}
                          onChange={(e) => setrebciSgRG_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadLagging_r' name="rebciHeadLagging_r" placeholder="" 
                          value={rebciHeadLagging_r}
                          onChange={(e) => setrebciHeadLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadPrimary_r' name="rebciHeadPrimary_r" placeholder="" 
                          value={rebciHeadPrimary_r}
                          onChange={(e) => setrebciHeadPrimary_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadSecondary_r' name="rebciHeadSecondary_r" placeholder="" 
                          value={rebciHeadSecondary_r}
                          onChange={(e) => setrebciHeadSecondary_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadFixNoise_r' name="rebciHeadFixNoise_r" placeholder="" 
                          value={rebciHeadFixNoise_r}
                          onChange={(e) => setrebciHeadFixNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciHeadFixTemp' name="rebciHeadFixTemp" placeholder="" 
                          value={rebciHeadFixTemp}
                          onChange={(e) => setrebciHeadFixTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadFixTemp_r' name="rebciHeadFixTemp_r" placeholder="" 
                          value={rebciHeadFixTemp_r}
                          onChange={(e) => setrebciHeadFixTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadFreeNoise_r' name="rebciHeadFreeNoise_r" placeholder="" 
                          value={rebciHeadFreeNoise_r}
                          onChange={(e) => setrebciHeadFreeNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciHeadFreeTemp' name="rebciHeadFreeTemp" placeholder="" 
                          value={rebciHeadFreeTemp}
                          onChange={(e) => setrebciHeadFreeTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadFreeTemp_r' name="rebciHeadFreeTemp_r" placeholder="" 
                          value={rebciHeadFreeTemp_r}
                          onChange={(e) => setrebciHeadFreeTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadRedNoise_r' name="rebciHeadRedNoise_r" placeholder="" 
                          value={rebciHeadRedNoise_r}
                          onChange={(e) => setrebciHeadRedNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciHeadRedTemp' name="rebciHeadRedTemp" placeholder="" 
                          value={rebciHeadRedTemp}
                          onChange={(e) => setrebciHeadRedTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadRedTemp_r' name="rebciHeadRedTemp_r" placeholder="" 
                          value={rebciHeadRedTemp_r}
                          onChange={(e) => setrebciHeadRedTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadRedSeal_r' name="rebciHeadRedSeal_r" placeholder="" 
                          value={rebciHeadRedSeal_r}
                          onChange={(e) => setrebciHeadRedSeal_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadRedOli_r' name="rebciHeadRedOli_r" placeholder="" 
                          value={rebciHeadRedOli_r}
                          onChange={(e) => setrebciHeadRedOli_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciHeadRedCoupling_r' name="rebciHeadRedCoupling_r" placeholder="" 
                          value={rebciHeadRedCoupling_r}
                          onChange={(e) => setrebciHeadRedCoupling_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSnubLagging_r' name="rebciSnubLagging_r" placeholder="" 
                          value={rebciSnubLagging_r}
                          onChange={(e) => setrebciSnubLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSnubBaratNoise_r' name="rebciSnubBaratNoise_r" placeholder="" 
                          value={rebciSnubBaratNoise_r}
                          onChange={(e) => setrebciSnubBaratNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciSnubBaratTemp' name="rebciSnubBaratTemp" placeholder="" 
                          value={rebciSnubBaratTemp}
                          onChange={(e) => setrebciSnubBaratTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSnubBaratTemp_r' name="rebciSnubBaratTemp_r" placeholder="" 
                          value={rebciSnubBaratTemp_r}
                          onChange={(e) => setrebciSnubBaratTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSnubTimurNoise_r' name="rebciSnubTimurNoise_r" placeholder="" 
                          value={rebciSnubTimurNoise_r}
                          onChange={(e) => setrebciSnubTimurNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciSnubTimurTemp' name="rebciSnubTimurTemp" placeholder="" 
                          value={rebciSnubTimurTemp}
                          onChange={(e) => setrebciSnubTimurTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSnubTimurTemp_r' name="rebciSnubTimurTemp_r" placeholder="" 
                          value={rebciSnubTimurTemp_r}
                          onChange={(e) => setrebciSnubTimurTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciUtaraLagging_r' name="rebciUtaraLagging_r" placeholder="" 
                          value={rebciUtaraLagging_r}
                          onChange={(e) => setrebciUtaraLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciUtaraBaratNoise_r' name="rebciUtaraBaratNoise_r" placeholder="" 
                          value={rebciUtaraBaratNoise_r}
                          onChange={(e) => setrebciUtaraBaratNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciUtaraBaratTemp' name="rebciUtaraBaratTemp" placeholder="" 
                          value={rebciUtaraBaratTemp}
                          onChange={(e) => setrebciUtaraBaratTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciUtaraBaratTemp_r' name="rebciUtaraBaratTemp_r" placeholder="" 
                          value={rebciUtaraBaratTemp_r}
                          onChange={(e) => setrebciUtaraBaratTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciUtaraTimurNoise_r' name="rebciUtaraTimurNoise_r" placeholder="" 
                          value={rebciUtaraTimurNoise_r}
                          onChange={(e) => setrebciUtaraTimurNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciUtaraTimurTemp' name="rebciUtaraTimurTemp" placeholder="" 
                          value={rebciUtaraTimurTemp}
                          onChange={(e) => setrebciUtaraTimurTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciUtaraTimurTemp_r' name="rebciUtaraTimurTemp_r" placeholder="" 
                          value={rebciUtaraTimurTemp_r}
                          onChange={(e) => setrebciUtaraTimurTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSelatanLagging_r' name="rebciSelatanLagging_r" placeholder="" 
                          value={rebciSelatanLagging_r}
                          onChange={(e) => setrebciSelatanLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSelatanBaratNoise_r' name="rebciSelatanBaratNoise_r" placeholder="" 
                          value={rebciSelatanBaratNoise_r}
                          onChange={(e) => setrebciSelatanBaratNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciSelatanBaratTemp' name="rebciSelatanBaratTemp" placeholder="" 
                          value={rebciSelatanBaratTemp}
                          onChange={(e) => setrebciSelatanBaratTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSelatanBaratTemp_r' name="rebciSelatanBaratTemp_r" placeholder="" 
                          value={rebciSelatanBaratTemp_r}
                          onChange={(e) => setrebciSelatanBaratTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSelatanTimurNoise_r' name="rebciSelatanTimurNoise_r" placeholder="" 
                          value={rebciSelatanTimurNoise_r}
                          onChange={(e) => setrebciSelatanTimurNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciSelatanTimurTemp' name="rebciSelatanTimurTemp" placeholder="" 
                          value={rebciSelatanTimurTemp}
                          onChange={(e) => setrebciSelatanTimurTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSelatanTimurTemp_r' name="rebciSelatanTimurTemp_r" placeholder="" 
                          value={rebciSelatanTimurTemp_r}
                          onChange={(e) => setrebciSelatanTimurTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTakeLagging_r' name="rebciTakeLagging_r" placeholder="" 
                          value={rebciTakeLagging_r}
                          onChange={(e) => setrebciTakeLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTakeBaratNoise_r' name="rebciTakeBaratNoise_r" placeholder="" 
                          value={rebciTakeBaratNoise_r}
                          onChange={(e) => setrebciTakeBaratNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciTakeBaratTemp' name="rebciTakeBaratTemp" placeholder="" 
                          value={rebciTakeBaratTemp}
                          onChange={(e) => setrebciTakeBaratTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTakeBaratTemp_r' name="rebciTakeBaratTemp_r" placeholder="" 
                          value={rebciTakeBaratTemp_r}
                          onChange={(e) => setrebciTakeBaratTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTakeTimurNoise_r' name="rebciTakeTimurNoise_r" placeholder="" 
                          value={rebciTakeTimurNoise_r}
                          onChange={(e) => setrebciTakeTimurNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciTakeTimurTemp' name="rebciTakeTimurTemp" placeholder="" 
                          value={rebciTakeTimurTemp}
                          onChange={(e) => setrebciTakeTimurTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTakeTimurTemp_r' name="rebciTakeTimurTemp_r" placeholder="" 
                          value={rebciTakeTimurTemp_r}
                          onChange={(e) => setrebciTakeTimurTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTailLagging_r' name="rebciTailLagging_r" placeholder="" 
                          value={rebciTailLagging_r}
                          onChange={(e) => setrebciTailLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTailVs_r' name="rebciTailVs_r" placeholder="" 
                          value={rebciTailVs_r}
                          onChange={(e) => setrebciTailVs_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTailBaratNoise_r' name="rebciTailBaratNoise_r" placeholder="" 
                          value={rebciTailBaratNoise_r}
                          onChange={(e) => setrebciTailBaratNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciTailBaratTemp' name="rebciTailBaratTemp" placeholder="" 
                          value={rebciTailBaratTemp}
                          onChange={(e) => setrebciTailBaratTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTailBaratTemp_r' name="rebciTailBaratTemp_r" placeholder="" 
                          value={rebciTailBaratTemp_r}
                          onChange={(e) => setrebciTailBaratTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTailTimurNoise_r' name="rebciTailTimurNoise_r" placeholder="" 
                          value={rebciTailTimurNoise_r}
                          onChange={(e) => setrebciTailTimurNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='rebciTailTimurTemp' name="rebciTailTimurTemp" placeholder="" 
                          value={rebciTailTimurTemp}
                          onChange={(e) => setrebciTailTimurTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciTailTimurTemp_r' name="rebciTailTimurTemp_r" placeholder="" 
                          value={rebciTailTimurTemp_r}
                          onChange={(e) => setrebciTailTimurTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciSkirt_r' name="rebciSkirt_r" placeholder="" 
                          value={rebciSkirt_r}
                          onChange={(e) => setrebciSkirt_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciChute_r' name="rebciChute_r" placeholder="" 
                          value={rebciChute_r}
                          onChange={(e) => setrebciChute_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciCondition_r' name="rebciCondition_r" placeholder="" 
                          value={rebciCondition_r}
                          onChange={(e) => setrebciCondition_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciJoint_r' name="rebciJoint_r" placeholder="" 
                          value={rebciJoint_r}
                          onChange={(e) => setrebciJoint_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciImpact_r' name="rebciImpact_r" placeholder="" 
                          value={rebciImpact_r}
                          onChange={(e) => setrebciImpact_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciCarry_r' name="rebciCarry_r" placeholder="" 
                          value={rebciCarry_r}
                          onChange={(e) => setrebciCarry_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='rebciReturn_r' name="rebciReturn_r" placeholder="" 
                          value={rebciReturn_r}
                          onChange={(e) => setrebciReturn_r(e.target.value)}
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
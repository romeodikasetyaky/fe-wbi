'use client'

import { useEffect, useState } from 'react'
import { Col, Row, Container, Table, Form, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const N1a = () => {
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

  // BC3
  const [crbciiiSgRotatingParts, setcrbciiiSgRotatingParts] = useState('');
  const [crbciiiSgHSC, setcrbciiiSgHSC] = useState('');
  const [crbciiiSgLSC, setcrbciiiSgLSC] = useState('');
  const [crbciiiSgCSB, setcrbciiiSgCSB] = useState('');
  const [crbciiiSgRG, setcrbciiiSgRG] = useState('');
  const [crbciiiTravNoise, setcrbciiiTravNoise] = useState('');
  const [crbciiiTravTemp, setcrbciiiTravTemp] = useState('');
  const [crbciiiTravSeal, setcrbciiiTravSeal] = useState('');
  const [crbciiiTravOil, setcrbciiiTravOil] = useState('');
  const [crbciiiTravChain, setcrbciiiTravChain] = useState('');
  const [crbciiiTravSprocket, setcrbciiiTravSprocket] = useState('');
  const [crbciiiHeadWheel, setcrbciiiHeadWheel] = useState('');
  const [crbciiiHeadNoiseFix, setcrbciiiHeadNoiseFix] = useState('');
  const [crbciiiHeadTempFix, setcrbciiiHeadTempFix] = useState('');
  const [crbciiiHeadNoiseFree, setcrbciiiHeadNoiseFree] = useState('');
  const [crbciiiHeadTempFree, setcrbciiiHeadTempFree] = useState('');
  const [crbciiiIntWheel, setcrbciiiIntWheel] = useState('');
  const [crbciiiIntNoiseFix, setcrbciiiIntNoiseFix] = useState('');
  const [crbciiiIntTempFix, setcrbciiiIntTempFix] = useState('');
  const [crbciiiIntNoiseFree, setcrbciiiIntNoiseFree] = useState('');
  const [crbciiiIntTempFree, setcrbciiiIntTempFree] = useState('');
  const [crbciiiTailWheel, setcrbciiiTailWheel] = useState('');
  const [crbciiiTailNoiseFix, setcrbciiiTailNoiseFix] = useState('');
  const [crbciiiTailTempFix, setcrbciiiTailTempFix] = useState('');
  const [crbciiiTailNoiseFree, setcrbciiiTailNoiseFree] = useState('');
  const [crbciiiTailTempFree, setcrbciiiTailTempFree] = useState('');
  const [crbciiiRedNoise, setcrbciiiRedNoise] = useState('');
  const [crbciiiRedTemp, setcrbciiiRedTemp] = useState('');
  const [crbciiiRedSeal, setcrbciiiRedSeal] = useState('');
  const [crbciiiRedOil, setcrbciiiRedOil] = useState('');
  const [crbciiiRedCoupling, setcrbciiiRedCoupling] = useState('');
  const [crbciiiHeadPLegging, setcrbciiiHeadPLegging] = useState('');
  const [crbciiiHeadPPrimary, setcrbciiiHeadPPrimary] = useState('');
  const [crbciiiHeadPSecondary, setcrbciiiHeadPSecondary] = useState('');
  const [crbciiiHeadPNoiseFix, setcrbciiiHeadPNoiseFix] = useState('');
  const [crbciiiHeadPTempFix, setcrbciiiHeadPTempFix] = useState('');
  const [crbciiiHeadPNoiseFree, setcrbciiiHeadPNoiseFree] = useState('');
  const [crbciiiHeadPTempFree, setcrbciiiHeadPTempFree] = useState('');
  const [crbciiiSnubLegging, setcrbciiiSnubLegging] = useState('');
  const [crbciiiSnubNoiseFix, setcrbciiiSnubNoiseFix] = useState('');
  const [crbciiiSnubTempFix, setcrbciiiSnubTempFix] = useState('');
  const [crbciiiSnubNoiseFree, setcrbciiiSnubNoiseFree] = useState('');
  const [crbciiiSnubTempFree, setcrbciiiSnubTempFree] = useState('');
  const [crbciiiTailPLegging, setcrbciiiTailPLegging] = useState('');
  const [crbciiiTailPNoiseFix, setcrbciiiTailPNoiseFix] = useState('');
  const [crbciiiTailPTempFix, setcrbciiiTailPTempFix] = useState('');
  const [crbciiiTailPNoiseFree, setcrbciiiTailPNoiseFree] = useState('');
  const [crbciiiTailPTempFree, setcrbciiiTailPTempFree] = useState('');
  const [crbciiiTailPVs, setcrbciiiTailPVs] = useState('');
  const [crbciiiSkirt, setcrbciiiSkirt] = useState('');
  const [crbciiiChute, setcrbciiiChute] = useState('');
  const [crbciiiCondition, setcrbciiiCondition] = useState('');
  const [crbciiiJoint, setcrbciiiJoint] = useState('');
  const [crbciiiImpact, setcrbciiiImpact] = useState('');
  const [crbciiiCarry, setcrbciiiCarry] = useState('');
  const [crbciiiReturn, setcrbciiiReturn] = useState('');

  // BC4
  const [crbcivSgRotatingParts, setcrbcivSgRotatingParts] = useState('');
  const [crbcivSgHSC, setcrbcivSgHSC] = useState('');
  const [crbcivSgLSC, setcrbcivSgLSC] = useState('');
  const [crbcivSgCSB, setcrbcivSgCSB] = useState('');
  const [crbcivSgRG, setcrbcivSgRG] = useState('');
  const [crbcivHeadLagging, setcrbcivHeadLagging] = useState('');
  const [crbcivHeadPrimary, setcrbcivHeadPrimary] = useState('');
  const [crbcivHeadSecondary, setcrbcivHeadSecondary] = useState('');
  const [crbcivHeadFixNoise, setcrbcivHeadFixNoise] = useState('');
  const [crbcivHeadFixTemp, setcrbcivHeadFixTemp] = useState('');
  const [crbcivHeadFreeNoise, setcrbcivHeadFreeNoise] = useState('');
  const [crbcivHeadFreeTemp, setcrbcivHeadFreeTemp] = useState('');
  const [crbcivHeadRedNoise, setcrbcivHeadRedNoise] = useState('');
  const [crbcivHeadRedTemp, setcrbcivHeadRedTemp] = useState('');
  const [crbcivHeadRedSeal, setcrbcivHeadRedSeal] = useState('');
  const [crbcivHeadRedOli, setcrbcivHeadRedOli] = useState('');
  const [crbcivHeadRedCoupling, setcrbcivHeadRedCoupling] = useState('');
  const [crbcivSnubLagging, setcrbcivSnubLagging] = useState('');
  const [crbcivSnubUtaraNoise, setcrbcivSnubUtaraNoise] = useState('');
  const [crbcivSnubUtaraTemp, setcrbcivSnubUtaraTemp] = useState('');
  const [crbcivSnubSelNoise, setcrbcivSnubSelNoise] = useState('');
  const [crbcivSnubSelTemp, setcrbcivSnubSelTemp] = useState('');
  const [crbcivUtaraLagging, setcrbcivUtaraLagging] = useState('');
  const [crbcivUtaraBaratNoise, setcrbcivUtaraBaratNoise] = useState('');
  const [crbcivUtaraBaratTemp, setcrbcivUtaraBaratTemp] = useState('');
  const [crbcivUtaraTimurNoise, setcrbcivUtaraTimurNoise] = useState('');
  const [crbcivUtaraTimurTemp, setcrbcivUtaraTimurTemp] = useState('');
  const [crbcivSelatanLagging, setcrbcivSelatanLagging] = useState('');
  const [crbcivSelatanBaratNoise, setcrbcivSelatanBaratNoise] = useState('');
  const [crbcivSelatanBaratTemp, setcrbcivSelatanBaratTemp] = useState('');
  const [crbcivSelatanTimurNoise, setcrbcivSelatanTimurNoise] = useState('');
  const [crbcivSelatanTimurTemp, setcrbcivSelatanTimurTemp] = useState('');
  const [crbcivTakeLagging, setcrbcivTakeLagging] = useState('');
  const [crbcivTakeBaratNoise, setcrbcivTakeBaratNoise] = useState('');
  const [crbcivTakeBaratTemp, setcrbcivTakeBaratTemp] = useState('');
  const [crbcivTakeTimurNoise, setcrbcivTakeTimurNoise] = useState('');
  const [crbcivTakeTimurTemp, setcrbcivTakeTimurTemp] = useState('');
  const [crbcivTailLagging, setcrbcivTailLagging] = useState('');
  const [crbcivTailVs, setcrbcivTailVs] = useState('');
  const [crbcivTailBaratNoise, setcrbcivTailBaratNoise] = useState('');
  const [crbcivTailBaratTemp, setcrbcivTailBaratTemp] = useState('');
  const [crbcivTailTimurNoise, setcrbcivTailTimurNoise] = useState('');
  const [crbcivTailTimurTemp, setcrbcivTailTimurTemp] = useState('');
  const [crbcivSkirt, setcrbcivSkirt] = useState('');
  const [crbcivChute, setcrbcivChute] = useState('');
  const [crbcivCondition, setcrbcivCondition] = useState('');
  const [crbcivJoint, setcrbcivJoint] = useState('');
  const [crbcivImpact, setcrbcivImpact] = useState('');
  const [crbcivCarry, setcrbcivCarry] = useState('');
  const [crbcivReturn, setcrbcivReturn] = useState('');

  // BC5
  const [crbcvSgRotatingParts, setcrbcvSgRotatingParts] = useState('');
  const [crbcvSgHSC, setcrbcvSgHSC] = useState('');
  const [crbcvSgLSC, setcrbcvSgLSC] = useState('');
  const [crbcvSgCSB, setcrbcvSgCSB] = useState('');
  const [crbcvSgRG, setcrbcvSgRG] = useState('');
  const [crbcvHeadLagging, setcrbcvHeadLagging] = useState('');
  const [crbcvHeadPrimary, setcrbcvHeadPrimary] = useState('');
  const [crbcvHeadSecondary, setcrbcvHeadSecondary] = useState('');
  const [crbcvHeadBearingKananNoise, setcrbcvHeadBearingKananNoise] = useState('');
  const [crbcvHeadBearingKananTemp, setcrbcvHeadBearingKananTemp] = useState('');
  const [crbcvHeadBearingKiriNoise, setcrbcvHeadBearingKiriNoise] = useState('');
  const [crbcvHeadBearingKiriTemp, setcrbcvHeadBearingKiriTemp] = useState('');
  const [crbcvHeadRedKananNoise, setcrbcvHeadRedKananNoise] = useState('');
  const [crbcvHeadRedKananTemp, setcrbcvHeadRedKananTemp] = useState('');
  const [crbcvHeadRedKananSeal, setcrbcvHeadRedKananSeal] = useState('');
  const [crbcvHeadRedKananOli, setcrbcvHeadRedKananOli] = useState('');
  const [crbcvHeadRedKananCoupling, setcrbcvHeadRedKananCoupling] = useState('');
  const [crbcvHeadRedKiriNoise, setcrbcvHeadRedKiriNoise] = useState('');
  const [crbcvHeadRedKiriTemp, setcrbcvHeadRedKiriTemp] = useState('');
  const [crbcvHeadRedKiriSeal, setcrbcvHeadRedKiriSeal] = useState('');
  const [crbcvHeadRedKiriOli, setcrbcvHeadRedKiriOli] = useState('');
  const [crbcvHeadRedKiriCoupling, setcrbcvHeadRedKiriCoupling] = useState('');
  const [crbcvSnubiLagging, setcrbcvSnubiLagging] = useState('');
  const [crbcvSnubiKananNoise, setcrbcvSnubiKananNoise] = useState('');
  const [crbcvSnubiKananTemp, setcrbcvSnubiKananTemp] = useState('');
  const [crbcvSnubiKiriNoise, setcrbcvSnubiKiriNoise] = useState('');
  const [crbcvSnubiKiriTemp, setcrbcvSnubiKiriTemp] = useState('');
  const [crbcvSnubiiLagging, setcrbcvSnubiiLagging] = useState('');
  const [crbcvSnubiiKananNoise, setcrbcvSnubiiKananNoise] = useState('');
  const [crbcvSnubiiKananTemp, setcrbcvSnubiiKananTemp] = useState('');
  const [crbcvSnubiiKiriNoise, setcrbcvSnubiiKiriNoise] = useState('');
  const [crbcvSnubiiKiriTemp, setcrbcvSnubiiKiriTemp] = useState('');
  const [crbcvTailLagging, setcrbcvTailLagging] = useState('');
  const [crbcvTailPrimary, setcrbcvTailPrimary] = useState('');
  const [crbcvTailKananNoise, setcrbcvTailKananNoise] = useState('');
  const [crbcvTailKananTemp, setcrbcvTailKananTemp] = useState('');
  const [crbcvTailKiriNoise, setcrbcvTailKiriNoise] = useState('');
  const [crbcvTailKiriTemp, setcrbcvTailKiriTemp] = useState('');
  const [crbcvTailKiriVs, setcrbcvTailKiriVs] = useState('');
  const [crbcvSkirt, setcrbcvSkirt] = useState('');
  const [crbcvChute, setcrbcvChute] = useState('');
  const [crbcvCondition, setcrbcvCondition] = useState('');
  const [crbcvJoint, setcrbcvJoint] = useState('');
  const [crbcvImpact, setcrbcvImpact] = useState('');
  const [crbcvCarry, setcrbcvCarry] = useState('');
  const [crbcvReturn, setcrbcvReturn] = useState('');

  //213-ST1
  const [crstRotParts, setcrstRotParts] = useState('');
  const [crstKananNoise, setcrstKananNoise] = useState('');
  const [crstKananTemp, setcrstKananTemp] = useState('');
  const [crstKananSeal, setcrstKananSeal] = useState('');
  const [crstKananOli, setcrstKananOli] = useState('');
  const [crstKananClean, setcrstKananClean] = useState('');
  const [crstKiriNoise, setcrstKiriNoise] = useState('');
  const [crstKiriTemp, setcrstKiriTemp] = useState('');
  const [crstKiriSeal, setcrstKiriSeal] = useState('');
  const [crstKiriOli, setcrstKiriOli] = useState('');
  const [crstKiriClean, setcrstKiriClean] = useState('');
  // Remark
  const [stRemark, setstRemark] = useState('');
  const [crbcvRemark, setcrbcvRemark] = useState('');
  const [crbcivRemark, setcrbcivRemark] = useState('');
  const [crbciiiRemark, setcrbciiiRemark] = useState('');

   
  const handleSubmit = async (e) => {
    e.preventDefault();

    const store = await fetch(process.env.NEXT_PUBLIC_API_URL + 'nar1a', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        user_id: Cookies.get('user_id'),
        user_name: Cookies.get('user_name'),

        //213-BC3
        crbc3_1_rotating_part: crbciiiSgRotatingParts,
        crbc3_1_hsc: crbciiiSgHSC,
        crbc3_1_lsc: crbciiiSgLSC,
        crbc3_1_csb: crbciiiSgCSB,
        crbc3_1_remaining_guarding: crbciiiSgRG,
        crbc3_2_noise: crbciiiTravNoise,
        crbc3_2_temp: crbciiiTravTemp,
        crbc3_2_seal: crbciiiTravSeal,
        crbc3_2_level_oli: crbciiiTravOil,
        crbc3_2_chain: crbciiiTravChain,
        crbc3_2_sprocket: crbciiiTravSprocket,
        crbc3_3_wheel: crbciiiHeadWheel,
        crbc3_3_noise_fix: crbciiiHeadNoiseFix,
        crbc3_3_temp_fix: crbciiiHeadTempFix,
        crbc3_3_noise_free: crbciiiHeadNoiseFree,
        crbc3_3_temp_free: crbciiiHeadTempFree,
        crbc3_4_wheel: crbciiiIntWheel,
        crbc3_4_noise_fix: crbciiiIntNoiseFix,
        crbc3_4_temp_fix: crbciiiIntTempFix,
        crbc3_4_noise_free: crbciiiIntNoiseFree,
        crbc3_4_temp_free: crbciiiIntTempFree,
        crbc3_5_wheel: crbciiiTailWheel,
        crbc3_5_noise_fix: crbciiiTailNoiseFix,
        crbc3_5_temp_fix: crbciiiTailTempFix,
        crbc3_5_noise_free: crbciiiTailNoiseFree,
        crbc3_5_temp_free: crbciiiTailTempFree,
        crbc3_6_noise: crbciiiRedNoise,
        crbc3_6_temp: crbciiiRedTemp,
        crbc3_6_seal: crbciiiRedSeal,
        crbc3_6_level_oli: crbciiiRedOil,
        crbc3_6_coupling: crbciiiRedCoupling,
        crbc3_7_legging: crbciiiHeadPLegging,
        crbc3_7_primary: crbciiiHeadPPrimary,
        crbc3_7_secondary: crbciiiHeadPSecondary,
        crbc3_7_noise_fix: crbciiiHeadPNoiseFix,
        crbc3_7_temp_fix: crbciiiHeadPTempFix,
        crbc3_7_noise_free: crbciiiHeadPNoiseFree,
        crbc3_7_temp_free: crbciiiHeadPTempFree,
        crbc3_8_legging: crbciiiSnubLegging,
        crbc3_8_noise_fix: crbciiiSnubNoiseFix,
        crbc3_8_temp_fix: crbciiiSnubTempFix,
        crbc3_8_noise_free: crbciiiSnubNoiseFree,
        crbc3_8_temp_free: crbciiiSnubTempFree,
        crbc3_9_legging: crbciiiTailPLegging,
        crbc3_9_noise_fix: crbciiiTailPNoiseFix,
        crbc3_9_temp_fix: crbciiiTailPTempFix,
        crbc3_9_noise_free: crbciiiTailPNoiseFree, 
        crbc3_9_temp_free: crbciiiTailPTempFree,
        crbc3_9_vs: crbciiiTailPVs,
        crbc3_10_skirt: crbciiiSkirt,
        crbc3_10_chute: crbciiiChute,
        crbc3_10_condition: crbciiiCondition,
        crbc3_10_joint: crbciiiJoint,
        crbc3_10_impact: crbciiiImpact,
        crbc3_10_carry: crbciiiCarry,
        crbc3_10_return: crbciiiReturn,
        bc3_remark: crbciiiRemark,

        // 213-BC4
        crbc4_1_rotating_part: crbcivSgRotatingParts,
        crbc4_1_hsc: crbcivSgHSC,
        crbc4_1_lsc: crbcivSgLSC,
        crbc4_1_csb: crbcivSgCSB,
        crbc4_1_remaining_guarding: crbcivSgRG,
        crbc4_2_lagging: crbcivHeadLagging,
        crbc4_2_primary: crbcivHeadPrimary,
        crbc4_2_secondary: crbcivHeadSecondary,
        crbc4_2_fix_noise: crbcivHeadFixNoise,
        crbc4_2_fix_temp: crbcivHeadFixTemp,
        crbc4_2_free_noise: crbcivHeadFreeNoise,
        crbc4_2_free_temp: crbcivHeadFreeTemp,
        crbc4_2_red_noise: crbcivHeadRedNoise,
        crbc4_2_red_temp: crbcivHeadRedTemp,
        crbc4_2_red_seal: crbcivHeadRedSeal,
        crbc4_2_red_oli: crbcivHeadRedOli,
        crbc4_2_red_coupling: crbcivHeadRedCoupling,
        crbc4_3_lagging: crbcivSnubLagging,
        crbc4_3_utara_noise: crbcivSnubUtaraNoise,
        crbc4_3_utara_temp: crbcivSnubUtaraTemp,
        crbc4_3_sel_noise: crbcivSnubSelNoise,
        crbc4_3_sel_temp: crbcivSnubSelTemp,
        crbc4_4_lagging: crbcivUtaraLagging,
        crbc4_4_barat_noise: crbcivUtaraBaratNoise,
        crbc4_4_barat_temp: crbcivUtaraBaratTemp,
        crbc4_4_timur_noise: crbcivUtaraTimurNoise,
        crbc4_4_timur_temp: crbcivUtaraTimurTemp,
        crbc4_5_lagging: crbcivSelatanLagging,
        crbc4_5_barat_noise: crbcivSelatanBaratNoise,
        crbc4_5_barat_temp: crbcivSelatanBaratTemp,
        crbc4_5_timur_noise: crbcivSelatanTimurNoise,
        crbc4_5_timur_temp: crbcivSelatanTimurTemp,
        crbc4_6_lagging: crbcivTakeLagging,
        crbc4_6_barat_noise: crbcivTakeBaratNoise,
        crbc4_6_barat_temp: crbcivTakeBaratTemp,
        crbc4_6_timur_noise: crbcivTakeTimurNoise,
        crbc4_6_timur_temp: crbcivTakeTimurTemp,
        crbc4_7_lagging: crbcivTailLagging,
        crbc4_7_vs: crbcivTailVs,
        crbc4_7_barat_noise: crbcivTailBaratNoise,
        crbc4_7_barat_temp: crbcivTailBaratTemp,
        crbc4_7_timur_noise: crbcivTailTimurNoise,
        crbc4_7_timur_temp: crbcivTailTimurTemp,
        crbc4_8_skirt: crbcivSkirt,
        crbc4_8_chute: crbcivChute,
        crbc4_8_condition: crbcivCondition,
        crbc4_8_joint: crbcivJoint,
        crbc4_8_impact: crbcivImpact,
        crbc4_8_carry: crbcivCarry,
        crbc4_8_return: crbcivReturn,
        bc4_remark: crbcivRemark,

        // 213-BC5
        crbc5_1_rotating_part: crbcvSgRotatingParts,
        crbc5_1_hsc: crbcvSgHSC,
        crbc5_1_lsc: crbcvSgLSC,
        crbc5_1_csb: crbcvSgCSB,
        crbc5_1_remaining_guarding: crbcvSgRG,
        crbc5_2_lagging: crbcvHeadLagging,
        crbc5_2_primary: crbcvHeadPrimary,
        crbc5_2_secondary: crbcvHeadSecondary,
        crbc5_2_bearing_kanan_noise: crbcvHeadBearingKananNoise,
        crbc5_2_bearing_kanan_temp: crbcvHeadBearingKananTemp,
        crbc5_2_bearing_kiri_noise: crbcvHeadBearingKiriNoise,
        crbc5_2_bearing_kiri_temp: crbcvHeadBearingKiriTemp,
        crbc5_2_red_kanan_noise: crbcvHeadRedKananNoise,
        crbc5_2_red_kanan_temp: crbcvHeadRedKananTemp,
        crbc5_2_red_kanan_seal: crbcvHeadRedKananSeal,
        crbc5_2_red_kanan_oli: crbcvHeadRedKananOli,
        crbc5_2_red_kanan_coupling: crbcvHeadRedKananCoupling,
        crbc5_2_red_kiri_noise: crbcvHeadRedKiriNoise,
        crbc5_2_red_kiri_temp: crbcvHeadRedKiriTemp,
        crbc5_2_red_kiri_seal: crbcvHeadRedKiriSeal,
        crbc5_2_red_kiri_oli: crbcvHeadRedKiriOli,
        crbc5_2_red_kiri_coupling: crbcvHeadRedKiriCoupling,
        crbc5_3_lagging: crbcvSnubiLagging,
        crbc5_3_kanan_noise: crbcvSnubiKananNoise,
        crbc5_3_kanan_temp: crbcvSnubiKananTemp,
        crbc5_3_kiri_noise: crbcvSnubiKiriNoise,
        crbc5_3_kiri_temp: crbcvSnubiKiriTemp,
        crbc5_4_lagging: crbcvSnubiiLagging,
        crbc5_4_kanan_noise: crbcvSnubiiKananNoise,
        crbc5_4_kanan_temp: crbcvSnubiiKananTemp,
        crbc5_4_kiri_noise: crbcvSnubiiKiriNoise,
        crbc5_4_kiri_temp: crbcvSnubiiKiriTemp,
        crbc5_5_lagging: crbcvTailLagging,
        crbc5_5_primary: crbcvTailPrimary,
        crbc5_5_kanan_noise: crbcvTailKananNoise,
        crbc5_5_kanan_temp: crbcvTailKananTemp,
        crbc5_5_kiri_noise: crbcvTailKiriNoise,
        crbc5_5_kiri_temp: crbcvTailKiriTemp,
        crbc5_5_kiri_vs: crbcvTailKiriVs,
        crbc5_6_skirt: crbcvSkirt,
        crbc5_6_chute: crbcvChute,
        crbc5_6_condition: crbcvCondition,
        crbc5_6_joint: crbcvJoint,
        crbc5_6_impact: crbcvImpact,
        crbc5_6_carry: crbcvCarry,
        crbc5_6_return: crbcvReturn,
        bc5_remark: crbcvRemark,

        //213-ST1
        crst1_1_rotating_part: crstRotParts,
        crst1_2_noise: crstKananNoise,
        crst1_2_temp: crstKananTemp,
        crst1_2_seal: crstKananSeal,
        crst1_2_oli: crstKananOli,
        crst1_2_cleanliness: crstKananClean,
        crst1_3_noise: crstKiriNoise,
        crst1_3_temp: crstKiriTemp,
        crst1_3_seal: crstKiriSeal,
        crst1_3_oli: crstKiriOli,
        crst1_3_cleanliness: crstKiriClean,
        st1_remark: stRemark,
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
              <h2 className=" fw-bold ls-sm">Crusher Limestone NAR 1</h2>
              <h5 className=" fw-bold ls-sm">Page 2 of 2</h5>
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
                    <tr>
                        <td rowSpan={79} className='text-center align-middle'>
                          <span>1</span>
                        </td>
                        <td rowSpan={79} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC3</b>
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
                            id='crbciiiSgRotatingParts'
                            name='crbciiiSgRotatingParts'
                            className="large-checkbox"
                            checked={crbciiiSgRotatingParts}
                            onChange={(e) => setcrbciiiSgRotatingParts(e.target.checked)}
                          /></td>
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
                            checked={crbciiiSgHSC}
                            onChange={(e) => setcrbciiiSgHSC(e.target.checked)}
                          /></td>
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
                            checked={crbciiiSgLSC}
                            onChange={(e) => setcrbciiiSgLSC(e.target.checked)}
                          /></td>
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
                            checked={crbciiiSgCSB}
                            onChange={(e) => setcrbciiiSgCSB(e.target.checked)}
                          /></td>
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
                            checked={crbciiiSgRG}
                            onChange={(e) => setcrbciiiSgRG(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciiiTravNoise}
                            onChange={(e) => setcrbciiiTravNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiTravTemp' name="crbciiiTravTemp" placeholder="" 
                          value={crbciiiTravTemp}
                          onChange={(e) => setcrbciiiTravTemp(e.target.value)}
                          /></td>
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
                            checked={crbciiiTravSeal}
                            onChange={(e) => setcrbciiiTravSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTravOil'
                            name='crbciiiTravOil'
                            className="large-checkbox"
                            checked={crbciiiTravOil}
                            onChange={(e) => setcrbciiiTravOil(e.target.checked)}
                          /></td>
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
                            checked={crbciiiTravChain}
                            onChange={(e) => setcrbciiiTravChain(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Sprocket</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTravSprocket'
                            name='crbciiiTravSprocket'
                            className="large-checkbox"
                            checked={crbciiiTravSprocket}
                            onChange={(e) => setcrbciiiTravSprocket(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciiiHeadWheel}
                            onChange={(e) => setcrbciiiHeadWheel(e.target.checked)}
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
                            id='crbciiiHeadNoiseFix'
                            name='crbciiiHeadNoiseFix'
                            className="large-checkbox"
                            checked={crbciiiHeadNoiseFix}
                            onChange={(e) => setcrbciiiHeadNoiseFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiHeadTempFix' name="crbciiiHeadTempFix" placeholder="" 
                          value={crbciiiHeadTempFix}
                          onChange={(e) => setcrbciiiHeadTempFix(e.target.value)}
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
                            id='crbciiiHeadNoiseFree'
                            name='crbciiiHeadNoiseFree'
                            className="large-checkbox"
                            checked={crbciiiHeadNoiseFree}
                            onChange={(e) => setcrbciiiHeadNoiseFree(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiHeadTempFree' name="crbciiiHeadTempFree" placeholder="" 
                          value={crbciiiHeadTempFree}
                          onChange={(e) => setcrbciiiHeadTempFree(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciiiIntWheel}
                            onChange={(e) => setcrbciiiIntWheel(e.target.checked)}
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
                            id='crbciiiIntNoiseFix'
                            name='crbciiiIntNoiseFix'
                            className="large-checkbox"
                            checked={crbciiiIntNoiseFix}
                            onChange={(e) => setcrbciiiIntNoiseFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiIntTempFix' name="crbciiiIntTempFix" placeholder="" 
                          value={crbciiiIntTempFix}
                          onChange={(e) => setcrbciiiIntTempFix(e.target.value)}
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
                            id='crbciiiIntNoiseFree'
                            name='crbciiiIntNoiseFree'
                            className="large-checkbox"
                            checked={crbciiiIntNoiseFree}
                            onChange={(e) => setcrbciiiIntNoiseFree(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiIntTempFree' name="crbciiiIntTempFree" placeholder="" 
                          value={crbciiiIntTempFree}
                          onChange={(e) => setcrbciiiIntTempFree(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciiiTailWheel}
                            onChange={(e) => setcrbciiiTailWheel(e.target.checked)}
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
                            id='crbciiiTailNoiseFix'
                            name='crbciiiTailNoiseFix'
                            className="large-checkbox"
                            checked={crbciiiTailNoiseFix}
                            onChange={(e) => setcrbciiiTailNoiseFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiTailTempFix' name="crbciiiTailTempFix" placeholder="" 
                          value={crbciiiTailTempFix}
                          onChange={(e) => setcrbciiiTailTempFix(e.target.value)}
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
                            id='crbciiiTailNoiseFree'
                            name='crbciiiTailNoiseFree'
                            className="large-checkbox"
                            checked={crbciiiTailNoiseFree}
                            onChange={(e) => setcrbciiiTailNoiseFree(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiTailTempFree' name="crbciiiTailTempFree" placeholder="" 
                          value={crbciiiTailTempFree}
                          onChange={(e) => setcrbciiiTailTempFree(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciiiRedNoise}
                            onChange={(e) => setcrbciiiRedNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiRedTemp' name="crbciiiRedTemp" placeholder="" 
                          value={crbciiiRedTemp}
                          onChange={(e) => setcrbciiiRedTemp(e.target.value)}
                          /></td>
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
                            checked={crbciiiRedSeal}
                            onChange={(e) => setcrbciiiRedSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiRedOil'
                            name='crbciiiRedOil'
                            className="large-checkbox"
                            checked={crbciiiRedOil}
                            onChange={(e) => setcrbciiiRedOil(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (No noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiRedCoupling'
                            name='crbciiiRedCoupling'
                            className="large-checkbox"
                            checked={crbciiiRedCoupling}
                            onChange={(e) => setcrbciiiRedCoupling(e.target.checked)}
                          /></td>
                      </tr><tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciiiHeadPLegging}
                            onChange={(e) => setcrbciiiHeadPLegging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Scrapper  Primary</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiHeadPPrimary'
                            name='crbciiiHeadPPrimary'
                            className="large-checkbox"
                            checked={crbciiiHeadPPrimary}
                            onChange={(e) => setcrbciiiHeadPPrimary(e.target.checked)}
                          /></td>
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
                            checked={crbciiiHeadPSecondary}
                            onChange={(e) => setcrbciiiHeadPSecondary(e.target.checked)}
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
                            id='crbciiiHeadPNoiseFix'
                            name='crbciiiHeadPNoiseFix'
                            className="large-checkbox"
                            checked={crbciiiHeadPNoiseFix}
                            onChange={(e) => setcrbciiiHeadPNoiseFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiHeadPTempFix' name="crbciiiHeadPTempFix" placeholder="" 
                          value={crbciiiHeadPTempFix}
                          onChange={(e) => setcrbciiiHeadPTempFix(e.target.value)}
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
                            id='crbciiiHeadPNoiseFree'
                            name='crbciiiHeadPNoiseFree'
                            className="large-checkbox"
                            checked={crbciiiHeadPNoiseFree}
                            onChange={(e) => setcrbciiiHeadPNoiseFree(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiHeadPTempFree' name="crbciiiHeadPTempFree" placeholder="" 
                          value={crbciiiHeadPTempFree}
                          onChange={(e) => setcrbciiiHeadPTempFree(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciiiSnubLegging}
                            onChange={(e) => setcrbciiiSnubLegging(e.target.checked)}
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
                            id='crbciiiSnubNoiseFix'
                            name='crbciiiSnubNoiseFix'
                            className="large-checkbox"
                            checked={crbciiiSnubNoiseFix}
                            onChange={(e) => setcrbciiiSnubNoiseFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiSnubTempFix' name="crbciiiSnubTempFix" placeholder="" 
                          value={crbciiiSnubTempFix}
                          onChange={(e) => setcrbciiiSnubTempFix(e.target.value)}
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
                            id='crbciiiSnubNoiseFree'
                            name='crbciiiSnubNoiseFree'
                            className="large-checkbox"
                            checked={crbciiiSnubNoiseFree}
                            onChange={(e) => setcrbciiiSnubNoiseFree(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiSnubTempFree' name="crbciiiSnubTempFree" placeholder="" 
                          value={crbciiiSnubTempFree}
                          onChange={(e) => setcrbciiiSnubTempFree(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>9. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Legging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiTailPLegging'
                            name='crbciiiTailPLegging'
                            className="large-checkbox"
                            checked={crbciiiTailPLegging}
                            onChange={(e) => setcrbciiiTailPLegging(e.target.checked)}
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
                            id='crbciiiTailPNoiseFix'
                            name='crbciiiTailPNoiseFix'
                            className="large-checkbox"
                            checked={crbciiiTailPNoiseFix}
                            onChange={(e) => setcrbciiiTailPNoiseFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiTailPTempFix' name="crbciiiTailPTempFix" placeholder="" 
                          value={crbciiiTailPTempFix}
                          onChange={(e) => setcrbciiiTailPTempFix(e.target.value)}
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
                            id='crbciiiTailPNoiseFree'
                            name='crbciiiTailPNoiseFree'
                            className="large-checkbox"
                            checked={crbciiiTailPNoiseFree}
                            onChange={(e) => setcrbciiiTailPNoiseFree(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiiTailPTempFree' name="crbciiiTailPTempFree" placeholder="" 
                          value={crbciiiTailPTempFree}
                          onChange={(e) => setcrbciiiTailPTempFree(e.target.value)}
                          /></td>
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
                            checked={crbciiiTailPVs}
                            onChange={(e) => setcrbciiiTailPVs(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>10. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear/leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiSkirt'
                            name='crbciiiSkirt'
                            className="large-checkbox"
                            checked={crbciiiSkirt}
                            onChange={(e) => setcrbciiiSkirt(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear/leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiiChute'
                            name='crbciiiChute'
                            className="large-checkbox"
                            checked={crbciiiChute}
                            onChange={(e) => setcrbciiiChute(e.target.checked)}
                          /></td>
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
                            checked={crbciiiCondition}
                            onChange={(e) => setcrbciiiCondition(e.target.checked)}
                          /></td>
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
                            checked={crbciiiJoint}
                            onChange={(e) => setcrbciiiJoint(e.target.checked)}
                          /></td>
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
                            checked={crbciiiImpact}
                            onChange={(e) => setcrbciiiImpact(e.target.checked)}
                          /></td>
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
                            checked={crbciiiCarry}
                            onChange={(e) => setcrbciiiCarry(e.target.checked)}
                          /></td>
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
                            checked={crbciiiReturn}
                            onChange={(e) => setcrbciiiReturn(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='text-center align-middle'>
                          <b>Remark</b>
                        </td>
                        <td colSpan={3} className='p-0'><Form.Control 
                          style={{ height: '100px'}} type="text" id='crbciiiRemark' name="crbciiiRemark" placeholder="" 
                          value={crbciiiRemark}
                          onChange={(e) => setcrbciiiRemark(e.target.value)}
                          /></td>
                      </tr>
                      
                    <tr>
                        <td rowSpan={72} className='text-center align-middle'>
                          <span>2</span>
                        </td>
                        <td rowSpan={72} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC4</b>
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
                            id='crbcivSgRotatingParts'
                            name='crbcivSgRotatingParts'
                            className="large-checkbox"
                            checked={crbcivSgRotatingParts}
                            onChange={(e) => setcrbcivSgRotatingParts(e.target.checked)}
                          /></td>
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
                            checked={crbcivSgHSC}
                            onChange={(e) => setcrbcivSgHSC(e.target.checked)}
                          /></td>
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
                            checked={crbcivSgLSC}
                            onChange={(e) => setcrbcivSgLSC(e.target.checked)}
                          /></td>
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
                            checked={crbcivSgCSB}
                            onChange={(e) => setcrbcivSgCSB(e.target.checked)}
                          /></td>
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
                            checked={crbcivSgRG}
                            onChange={(e) => setcrbcivSgRG(e.target.checked)}
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
                            id='crbcivHeadLagging'
                            name='crbcivHeadLagging'
                            className="large-checkbox"
                            checked={crbcivHeadLagging}
                            onChange={(e) => setcrbcivHeadLagging(e.target.checked)}
                          /></td>
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
                            checked={crbcivHeadPrimary}
                            onChange={(e) => setcrbcivHeadPrimary(e.target.checked)}
                          /></td>
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
                            checked={crbcivHeadSecondary}
                            onChange={(e) => setcrbcivHeadSecondary(e.target.checked)}
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
                            id='crbcivHeadFixNoise'
                            name='crbcivHeadFixNoise'
                            className="large-checkbox"
                            checked={crbcivHeadFixNoise}
                            onChange={(e) => setcrbcivHeadFixNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivHeadFixTemp' name="crbcivHeadFixTemp" placeholder="" 
                          value={crbcivHeadFixTemp}
                          onChange={(e) => setcrbcivHeadFixTemp(e.target.value)}
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
                            id='crbcivHeadFreeNoise'
                            name='crbcivHeadFreeNoise'
                            className="large-checkbox"
                            checked={crbcivHeadFreeNoise}
                            onChange={(e) => setcrbcivHeadFreeNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivHeadFreeTemp' name="crbcivHeadFreeTemp" placeholder="" 
                          value={crbcivHeadFreeTemp}
                          onChange={(e) => setcrbcivHeadFreeTemp(e.target.value)}
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
                            id='crbcivHeadRedNoise'
                            name='crbcivHeadRedNoise'
                            className="large-checkbox"
                            checked={crbcivHeadRedNoise}
                            onChange={(e) => setcrbcivHeadRedNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivHeadRedTemp' name="crbcivHeadRedTemp" placeholder="" 
                          value={crbcivHeadRedTemp}
                          onChange={(e) => setcrbcivHeadRedTemp(e.target.value)}
                          /></td>
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
                            checked={crbcivHeadRedSeal}
                            onChange={(e) => setcrbcivHeadRedSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivHeadRedOli'
                            name='crbcivHeadRedOli'
                            className="large-checkbox"
                            checked={crbcivHeadRedOli}
                            onChange={(e) => setcrbcivHeadRedOli(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (No Noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivHeadRedCoupling'
                            name='crbcivHeadRedCoupling'
                            className="large-checkbox"
                            checked={crbcivHeadRedCoupling}
                            onChange={(e) => setcrbcivHeadRedCoupling(e.target.checked)}
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
                            id='crbcivSnubLagging'
                            name='crbcivSnubLagging'
                            className="large-checkbox"
                            checked={crbcivSnubLagging}
                            onChange={(e) => setcrbcivSnubLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbcivSnubUtaraNoise}
                            onChange={(e) => setcrbcivSnubUtaraNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivSnubUtaraTemp' name="crbcivSnubUtaraTemp" placeholder="" 
                          value={crbcivSnubUtaraTemp}
                          onChange={(e) => setcrbcivSnubUtaraTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbcivSnubSelNoise}
                            onChange={(e) => setcrbcivSnubSelNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivSnubSelTemp' name="crbcivSnubSelTemp" placeholder="" 
                          value={crbcivSnubSelTemp}
                          onChange={(e) => setcrbcivSnubSelTemp(e.target.value)}
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
                            id='crbcivUtaraLagging'
                            name='crbcivUtaraLagging'
                            className="large-checkbox"
                            checked={crbcivUtaraLagging}
                            onChange={(e) => setcrbcivUtaraLagging(e.target.checked)}
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
                            id='crbcivUtaraBaratNoise'
                            name='crbcivUtaraBaratNoise'
                            className="large-checkbox"
                            checked={crbcivUtaraBaratNoise}
                            onChange={(e) => setcrbcivUtaraBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivUtaraBaratTemp' name="crbcivUtaraBaratTemp" placeholder="" 
                          value={crbcivUtaraBaratTemp}
                          onChange={(e) => setcrbcivUtaraBaratTemp(e.target.value)}
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
                            id='crbcivUtaraTimurNoise'
                            name='crbcivUtaraTimurNoise'
                            className="large-checkbox"
                            checked={crbcivUtaraTimurNoise}
                            onChange={(e) => setcrbcivUtaraTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivUtaraTimurTemp' name="crbcivUtaraTimurTemp" placeholder="" 
                          value={crbcivUtaraTimurTemp}
                          onChange={(e) => setcrbcivUtaraTimurTemp(e.target.value)}
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
                            id='crbcivSelatanLagging'
                            name='crbcivSelatanLagging'
                            className="large-checkbox"
                            checked={crbcivSelatanLagging}
                            onChange={(e) => setcrbcivSelatanLagging(e.target.checked)}
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
                            id='crbcivSelatanBaratNoise'
                            name='crbcivSelatanBaratNoise'
                            className="large-checkbox"
                            checked={crbcivSelatanBaratNoise}
                            onChange={(e) => setcrbcivSelatanBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivSelatanBaratTemp' name="crbcivSelatanBaratTemp" placeholder="" 
                          value={crbcivSelatanBaratTemp}
                          onChange={(e) => setcrbcivSelatanBaratTemp(e.target.value)}
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
                            id='crbcivSelatanTimurNoise'
                            name='crbcivSelatanTimurNoise'
                            className="large-checkbox"
                            checked={crbcivSelatanTimurNoise}
                            onChange={(e) => setcrbcivSelatanTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivSelatanTimurTemp' name="crbcivSelatanTimurTemp" placeholder="" 
                          value={crbcivSelatanTimurTemp}
                          onChange={(e) => setcrbcivSelatanTimurTemp(e.target.value)}
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
                            id='crbcivTakeLagging'
                            name='crbcivTakeLagging'
                            className="large-checkbox"
                            checked={crbcivTakeLagging}
                            onChange={(e) => setcrbcivTakeLagging(e.target.checked)}
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
                            id='crbcivTakeBaratNoise'
                            name='crbcivTakeBaratNoise'
                            className="large-checkbox"
                            checked={crbcivTakeBaratNoise}
                            onChange={(e) => setcrbcivTakeBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivTakeBaratTemp' name="crbcivTakeBaratTemp" placeholder="" 
                          value={crbcivTakeBaratTemp}
                          onChange={(e) => setcrbcivTakeBaratTemp(e.target.value)}
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
                            id='crbcivTakeTimurNoise'
                            name='crbcivTakeTimurNoise'
                            className="large-checkbox"
                            checked={crbcivTakeTimurNoise}
                            onChange={(e) => setcrbcivTakeTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivTakeTimurTemp' name="crbcivTakeTimurTemp" placeholder="" 
                          value={crbcivTakeTimurTemp}
                          onChange={(e) => setcrbcivTakeTimurTemp(e.target.value)}
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
                            id='crbcivTailLagging'
                            name='crbcivTailLagging'
                            className="large-checkbox"
                            checked={crbcivTailLagging}
                            onChange={(e) => setcrbcivTailLagging(e.target.checked)}
                          /></td>
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
                            checked={crbcivTailVs}
                            onChange={(e) => setcrbcivTailVs(e.target.checked)}
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
                            id='crbcivTailBaratNoise'
                            name='crbcivTailBaratNoise'
                            className="large-checkbox"
                            checked={crbcivTailBaratNoise}
                            onChange={(e) => setcrbcivTailBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivTailBaratTemp' name="crbcivTailBaratTemp" placeholder="" 
                          value={crbcivTailBaratTemp}
                          onChange={(e) => setcrbcivTailBaratTemp(e.target.value)}
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
                            id='crbcivTailTimurNoise'
                            name='crbcivTailTimurNoise'
                            className="large-checkbox"
                            checked={crbcivTailTimurNoise}
                            onChange={(e) => setcrbcivTailTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcivTailTimurTemp' name="crbcivTailTimurTemp" placeholder="" 
                          value={crbcivTailTimurTemp}
                          onChange={(e) => setcrbcivTailTimurTemp(e.target.value)}
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
                            id='crbcivSkirt'
                            name='crbcivSkirt'
                            className="large-checkbox"
                            checked={crbcivSkirt}
                            onChange={(e) => setcrbcivSkirt(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and no leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcivChute'
                            name='crbcivChute'
                            className="large-checkbox"
                            checked={crbcivChute}
                            onChange={(e) => setcrbcivChute(e.target.checked)}
                          /></td>
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
                            checked={crbcivCondition}
                            onChange={(e) => setcrbcivCondition(e.target.checked)}
                          /></td>
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
                            checked={crbcivJoint}
                            onChange={(e) => setcrbcivJoint(e.target.checked)}
                          /></td>
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
                            checked={crbcivImpact}
                            onChange={(e) => setcrbcivImpact(e.target.checked)}
                          /></td>
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
                            checked={crbcivCarry}
                            onChange={(e) => setcrbcivCarry(e.target.checked)}
                          /></td>
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
                            checked={crbcivReturn}
                            onChange={(e) => setcrbcivReturn(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='text-center align-middle'>
                          <b>Remark</b>
                        </td>
                        <td colSpan={3} className='p-0'><Form.Control 
                          style={{ height: '100px'}} type="text" id='crbcivRemark' name="crbcivRemark" placeholder="" 
                          value={crbcivRemark}
                          onChange={(e) => setcrbcivRemark(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td rowSpan={63} className='text-center align-middle'>
                          <span>3</span>
                        </td>
                        <td rowSpan={63} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC5</b>
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
                            id='crbcvSgRotatingParts'
                            name='crbcvSgRotatingParts'
                            className="large-checkbox"
                            checked={crbcvSgRotatingParts}
                            onChange={(e) => setcrbcvSgRotatingParts(e.target.checked)}
                          /></td>
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
                            checked={crbcvSgHSC}
                            onChange={(e) => setcrbcvSgHSC(e.target.checked)}
                          /></td>
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
                            checked={crbcvSgLSC}
                            onChange={(e) => setcrbcvSgLSC(e.target.checked)}
                          /></td>
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
                            checked={crbcvSgCSB}
                            onChange={(e) => setcrbcvSgCSB(e.target.checked)}
                          /></td>
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
                            checked={crbcvSgRG}
                            onChange={(e) => setcrbcvSgRG(e.target.checked)}
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
                            id='crbcvHeadLagging'
                            name='crbcvHeadLagging'
                            className="large-checkbox"
                            checked={crbcvHeadLagging}
                            onChange={(e) => setcrbcvHeadLagging(e.target.checked)}
                          /></td>
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
                            checked={crbcvHeadPrimary}
                            onChange={(e) => setcrbcvHeadPrimary(e.target.checked)}
                          /></td>
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
                            checked={crbcvHeadSecondary}
                            onChange={(e) => setcrbcvHeadSecondary(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kanan</b>
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
                            checked={crbcvHeadBearingKananNoise}
                            onChange={(e) => setcrbcvHeadBearingKananNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvHeadBearingKananTemp' name="crbcvHeadBearingKananTemp" placeholder="" 
                          value={crbcvHeadBearingKananTemp}
                          onChange={(e) => setcrbcvHeadBearingKananTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kiri</b>
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
                            checked={crbcvHeadBearingKiriNoise}
                            onChange={(e) => setcrbcvHeadBearingKiriNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvHeadBearingKiriTemp' name="crbcvHeadBearingKiriTemp" placeholder="" 
                          value={crbcvHeadBearingKiriTemp}
                          onChange={(e) => setcrbcvHeadBearingKiriTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Reducer Kanan</b>
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
                            checked={crbcvHeadRedKananNoise}
                            onChange={(e) => setcrbcvHeadRedKananNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvHeadRedKananTemp' name="crbcvHeadRedKananTemp" placeholder="" 
                          value={crbcvHeadRedKananTemp}
                          onChange={(e) => setcrbcvHeadRedKananTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>Tidak Rembes</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKananSeal'
                            name='crbcvHeadRedKananSeal'
                            className="large-checkbox"
                            checked={crbcvHeadRedKananSeal}
                            onChange={(e) => setcrbcvHeadRedKananSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKananOli'
                            name='crbcvHeadRedKananOli'
                            className="large-checkbox"
                            checked={crbcvHeadRedKananOli}
                            onChange={(e) => setcrbcvHeadRedKananOli(e.target.checked)}
                          /></td>
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
                            checked={crbcvHeadRedKananCoupling}
                            onChange={(e) => setcrbcvHeadRedKananCoupling(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Reducer Kiri</b>
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
                            checked={crbcvHeadRedKiriNoise}
                            onChange={(e) => setcrbcvHeadRedKiriNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvHeadRedKiriTemp' name="crbcvHeadRedKiriTemp" placeholder="" 
                          value={crbcvHeadRedKiriTemp}
                          onChange={(e) => setcrbcvHeadRedKiriTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>Tidak Rembes</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKiriSeal'
                            name='crbcvHeadRedKiriSeal'
                            className="large-checkbox"
                            checked={crbcvHeadRedKiriSeal}
                            onChange={(e) => setcrbcvHeadRedKiriSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvHeadRedKiriOli'
                            name='crbcvHeadRedKiriOli'
                            className="large-checkbox"
                            checked={crbcvHeadRedKiriOli}
                            onChange={(e) => setcrbcvHeadRedKiriOli(e.target.checked)}
                          /></td>
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
                            checked={crbcvHeadRedKiriCoupling}
                            onChange={(e) => setcrbcvHeadRedKiriCoupling(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbcvSnubiLagging}
                            onChange={(e) => setcrbcvSnubiLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kanan</b>
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
                            checked={crbcvSnubiKananNoise}
                            onChange={(e) => setcrbcvSnubiKananNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvSnubiKananTemp' name="crbcvSnubiKananTemp" placeholder="" 
                          value={crbcvSnubiKananTemp}
                          onChange={(e) => setcrbcvSnubiKananTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kiri</b>
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
                            checked={crbcvSnubiKiriNoise}
                            onChange={(e) => setcrbcvSnubiKiriNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvSnubiKiriTemp' name="crbcvSnubiKiriTemp" placeholder="" 
                          value={crbcvSnubiKiriTemp}
                          onChange={(e) => setcrbcvSnubiKiriTemp(e.target.value)}
                          /></td>
                          </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbcvSnubiiLagging}
                            onChange={(e) => setcrbcvSnubiiLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kanan</b>
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
                            checked={crbcvSnubiiKananNoise}
                            onChange={(e) => setcrbcvSnubiiKananNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvSnubiiKananTemp' name="crbcvSnubiiKananTemp" placeholder="" 
                          value={crbcvSnubiiKananTemp}
                          onChange={(e) => setcrbcvSnubiiKananTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kiri</b>
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
                            checked={crbcvSnubiiKiriNoise}
                            onChange={(e) => setcrbcvSnubiiKiriNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvSnubiiKiriTemp' name="crbcvSnubiiKiriTemp" placeholder="" 
                          value={crbcvSnubiiKiriTemp}
                          onChange={(e) => setcrbcvSnubiiKiriTemp(e.target.value)}
                          /></td>
                          </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Lagging</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvTailLagging'
                            name='crbcvTailLagging'
                            className="large-checkbox"
                            checked={crbcvTailLagging}
                            onChange={(e) => setcrbcvTailLagging(e.target.checked)}
                          /></td>
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
                            checked={crbcvTailPrimary}
                            onChange={(e) => setcrbcvTailPrimary(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kanan</b>
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
                            checked={crbcvTailKananNoise}
                            onChange={(e) => setcrbcvTailKananNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvTailKananTemp' name="crbcvTailKananTemp" placeholder="" 
                          value={crbcvTailKananTemp}
                          onChange={(e) => setcrbcvTailKananTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Bearing Kiri</b>
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
                            checked={crbcvTailKiriNoise}
                            onChange={(e) => setcrbcvTailKiriNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbcvTailKiriTemp' name="crbcvTailKiriTemp" placeholder="" 
                          value={crbcvTailKiriTemp}
                          onChange={(e) => setcrbcvTailKiriTemp(e.target.value)}
                          /></td>
                          </tr>
                          <tr>
                        <td className='align-middle'>V-scrapper</td>
                        <td className='align-middle'>No wear</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvTailKiriVs'
                            name='crbcvTailKiriVs'
                            className="large-checkbox"
                            checked={crbcvTailKiriVs}
                            onChange={(e) => setcrbcvTailKiriVs(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvSkirt'
                            name='crbcvSkirt'
                            className="large-checkbox"
                            checked={crbcvSkirt}
                            onChange={(e) => setcrbcvSkirt(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvChute'
                            name='crbcvChute'
                            className="large-checkbox"
                            checked={crbcvChute}
                            onChange={(e) => setcrbcvChute(e.target.checked)}
                          /></td>
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
                            checked={crbcvCondition}
                            onChange={(e) => setcrbcvCondition(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvJoint'
                            name='crbcvJoint'
                            className="large-checkbox"
                            checked={crbcvJoint}
                            onChange={(e) => setcrbcvJoint(e.target.checked)}
                          /></td>
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
                            checked={crbcvImpact}
                            onChange={(e) => setcrbcvImpact(e.target.checked)}
                          /></td>
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
                            checked={crbcvCarry}
                            onChange={(e) => setcrbcvCarry(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Return Roller</td>
                        <td className='align-middle'>No wear</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbcvReturn'
                            name='crbcvReturn'
                            className="large-checkbox"
                            checked={crbcvReturn}
                            onChange={(e) => setcrbcvReturn(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='text-center align-middle'>
                          <b>Remark</b>
                        </td>
                        <td colSpan={3} className='p-0'><Form.Control 
                          style={{ height: '100px'}} type="text" id='crbcvRemark' name="crbcvRemark" placeholder="" 
                          value={crbcvRemark}
                          onChange={(e) => setcrbcvRemark(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td rowSpan={15} className='text-center align-middle'>
                          <span>4</span>
                        </td>
                        <td rowSpan={15} className='text-center align-middle rotate-text'>
                          <b>NR.213-ST1</b>
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
                            id='crstRotParts'
                            name='crstRotParts'
                            className="large-checkbox"
                            checked={crstRotParts}
                            onChange={(e) => setcrstRotParts(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>2. Reducer Kanan</b>
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
                            checked={crstKananNoise}
                            onChange={(e) => setcrstKananNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crstKananTemp' name="crstKananTemp" placeholder="" 
                          value={crstKananTemp}
                          onChange={(e) => setcrstKananTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>Tidak Rembes</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKananSeal'
                            name='crstKananSeal'
                            className="large-checkbox"
                            checked={crstKananSeal}
                            onChange={(e) => setcrstKananSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKananOli'
                            name='crstKananOli'
                            className="large-checkbox"
                            checked={crstKananOli}
                            onChange={(e) => setcrstKananOli(e.target.checked)}
                          /></td>
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
                            checked={crstKananClean}
                            onChange={(e) => setcrstKananClean(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>   Reducer Kiri</b>
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
                            checked={crstKiriNoise}
                            onChange={(e) => setcrstKiriNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crstKiriTemp' name="crstKiriTemp" placeholder="" 
                          value={crstKiriTemp}
                          onChange={(e) => setcrstKiriTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal</td>
                        <td className='align-middle'>Tidak Rembes</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKiriSeal'
                            name='crstKiriSeal'
                            className="large-checkbox"
                            checked={crstKiriSeal}
                            onChange={(e) => setcrstKiriSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level Oli</td>
                        <td className='align-middle'>Cukup</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crstKiriOli'
                            name='crstKiriOli'
                            className="large-checkbox"
                            checked={crstKiriOli}
                            onChange={(e) => setcrstKiriOli(e.target.checked)}
                          /></td>
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
                            checked={crstKiriClean}
                            onChange={(e) => setcrstKiriClean(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='text-center align-middle'>
                          <b>Remark</b>
                        </td>
                        <td colSpan={3} className='p-0'><Form.Control 
                          style={{ height: '100px'}} type="text" id='stRemark' name="stRemark" placeholder="" 
                          value={stRemark}
                          onChange={(e) => setstRemark(e.target.value)}
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

export default N1a;
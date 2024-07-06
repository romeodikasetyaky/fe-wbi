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
      router.push('/authentication/sign-in');
    }
  }, [router]);

  // WQ1
  const [wqiSgRotatingParts, setWqiSgRotatingParts] = useState('');
  const [wqiSgHSC, setWqiHSC] = useState('');
  const [wqiSgLSC, setWqiLSC] = useState('');
  const [wqiSgCSW, setWqiCSW] = useState('');
  const [wqiSgRG, setWqiRG] = useState('');
  const [wqiRedNoise, setWqiRedNoise] = useState('');
  const [wqiRedTemp, setWqiRedTemp] = useState('');
  const [wqiRedSeal, setwqiRedSeal] = useState('');
  const [wqiRedLevelOli, setwqiRedLevelOli] = useState('');
  const [wqiRedRS, setwqiRedRS] = useState('');
  const [wqiRedDVS, setwqiRedDVS] = useState('');
  const [wqiRedChain, setwqiRedChain] = useState('');
  const [wqiRedCoup, setwqiRedCoup] = useState('');
  const [wqiBhfNoise, setwqiBhfNoise] = useState('');
  const [wqiBhfTemp, setwqiBhfTemp] = useState('');
  const [wqiBhfrNoise, setwqiBhfrNoise] = useState('');
  const [wqiBhfrTemp, setwqiBhfrTemp] = useState('');
  const [wqiBfNoise, setwqiBfNoise] = useState('');
  const [wqiBfTemp, setwqiBfTemp] = useState('');
  const [wqiBfTc, setwqiBfTc] = useState('');
  const [wqiCClean, setwqiCClean] = useState('');
  
  // HC1
  const [hc1SgRotpart, sethc1SgRotpart] = useState('');
  const [hc1SgHsc, sethc1SgHsc] = useState('');
  const [hc1SgRg, sethc1SgRg] = useState('');
  const [hc1BhfrNoise, sethc1BhfrNoise] = useState('');
  const [hc1BhfrSeal, sethc1BhfrSeal] = useState('');
  const [hc1BhfrTemp, sethc1BhfrTemp] = useState('');
  const [hc1BhfreNoise, sethc1BhfreNoise] = useState('');
  const [hc1BhfreSeal, sethc1BhfreSeal] = useState('');
  const [hc1BhfreTemp, sethc1BhfreTemp] = useState('');
  const [hciRbpNoise, sethciRbpNoise] = useState('');
  const [hciRbpTemp, sethciRbpTemp] = useState('');
  const [hciRbpSeal, sethciRbpSeal] = useState('');
  const [hciRbpLevelOli, sethciRbpLevelOli] = useState('');
  const [hciRbpCD, sethciRbpCD] = useState('');
  const [hciRbpDvS, sethciRbpDvS] = useState('');
  const [hciRbpDvnS, sethciRbpDvnS] = useState('');
  const [hciRbpBpNoise, sethciRbpBpNoise] = useState('');
  const [hciRbpBpSeal, sethciRbpBpSeal] = useState('');
  const [hciRbpBpTemp, sethciRbpBpTemp] = useState('');
  const [hci6noise, sethci6noise] = useState('');
  const [hci6seal, sethci6seal] = useState('');
  const [hci6temp, sethci6temp] = useState('');
  const [hci7noise, sethci7noise] = useState('');
  const [hci7temp, sethci7temp] = useState('');
  const [hci8noise, sethci8noise] = useState('');
  const [hci8temp, sethci8temp] = useState('');
  const [hci9cesing, sethci9cesing] = useState('');
  
  //BC1
  const [crbciSgRotatingParts, setcrbciSgRotatingParts] = useState('');
  const [crbciSgHSC, setcrbciSgHSC] = useState('');
  const [crbciSgLSC, setcrbciSgLSC] = useState('');
  const [crbciSgCSB, setcrbciSgCSB] = useState('');
  const [crbciSgRG, setcrbciSgRG] = useState('');
  const [crbciHeadLagging, setcrbciHeadLagging] = useState('');
  const [crbciHeadPrimary, setcrbciHeadPrimary] = useState('');
  const [crbciHeadSecondary, setcrbciHeadSecondary] = useState('');
  const [crbciHeadFixNoise, setcrbciHeadFixNoise] = useState('');
  const [crbciHeadFixTemp, setcrbciHeadFixTemp] = useState('');
  const [crbciHeadFreeNoise, setcrbciHeadFreeNoise] = useState('');
  const [crbciHeadFreeTemp, setcrbciHeadFreeTemp] = useState('');
  const [crbciHeadRedNoise, setcrbciHeadRedNoise] = useState('');
  const [crbciHeadRedTemp, setcrbciHeadRedTemp] = useState('');
  const [crbciHeadRedSeal, setcrbciHeadRedSeal] = useState('');
  const [crbciHeadRedOli, setcrbciHeadRedOli] = useState('');
  const [crbciHeadRedCoupling, setcrbciHeadRedCoupling] = useState('');
  const [crbciSnubLagging, setcrbciSnubLagging] = useState('');
  const [crbciSnubUtaraNoise, setcrbciSnubUtaraNoise] = useState('');
  const [crbciSnubUtaraTemp, setcrbciSnubUtaraTemp] = useState('');
  const [crbciSnubSelNoise, setcrbciSnubSelNoise] = useState('');
  const [crbciSnubSelTemp, setcrbciSnubSelTemp] = useState('');
  const [crbciBaratLagging, setcrbciBaratLagging] = useState('');``
  const [crbciBaratUtaraNoise, setcrbciBaratUtaraNoise] = useState('');
  const [crbciBaratUtaraTemp, setcrbciBaratUtaraTemp] = useState('');
  const [crbciBaratSelatanNoise, setcrbciBaratSelatanNoise] = useState('');
  const [crbciBaratSelatanTemp, setcrbciBaratSelatanTemp] = useState('');
  const [crbciTimurLagging, setcrbciTimurLagging] = useState('');
  const [crbciTimurUtaraNoise, setcrbciTimurUtaraNoise] = useState('');
  const [crbciTimurUtaraTemp, setcrbciTimurUtaraTemp] = useState('');
  const [crbciTimurSelatanNoise, setcrbciTimurSelatanNoise] = useState('');
  const [crbciTimurSelatanTemp, setcrbciTimurSelatanTemp] = useState('');
  const [crbciTakeLagging, setcrbciTakeLagging] = useState('');
  const [crbciTakeUtaraNoise, setcrbciTakeUtaraNoise] = useState('');
  const [crbciTakeUtaraTemp, setcrbciTakeUtaraTemp] = useState('');
  const [crbciTakeSelNoise, setcrbciTakeSelNoise] = useState('');
  const [crbciTakeSelTemp, setcrbciTakeSelTemp] = useState('');
  const [crbciTailLagging, setcrbciTailLagging] = useState('');
  const [crbciTailVs, setcrbciTailVs] = useState('');
  const [crbciTailUtaraNoise, setcrbciTailUtaraNoise] = useState('');
  const [crbciTailUtaraTemp, setcrbciTailUtaraTemp] = useState('');
  const [crbciTailSelNoise, setcrbciTailSelNoise] = useState('');
  const [crbciTailSelTemp, setcrbciTailSelTemp] = useState('');
  const [crbciSkirt, setcrbciSkirt] = useState('');
  const [crbciChute, setcrbciChute] = useState('');
  const [crbciCondition, setcrbciCondition] = useState('');
  const [crbciJoint, setcrbciJoint] = useState('');
  const [crbciImpact, setcrbciImpact] = useState('');
  const [crbciCarry, setcrbciCarry] = useState('');
  const [crbciReturn, setcrbciReturn] = useState('');

  // 213-MS1
  const [crmsiSgRot, setcrmsiSgRot] = useState('');
  const [crmsiSgCTP, setcrmsiSgCTP] = useState('');
  const [crmsiSgCHP, setcrmsiSgCHP] = useState('');
  const [crmsiSgCAB, setcrmsiSgCAB] = useState('');
  const [crmsiMotorFound, setcrmsiMotorFound] = useState('');
  const [crmsiMotorTempLS, setcrmsiMotorTempLS] = useState('');
  const [crmsiMotorTempFS, setcrmsiMotorTempFS] = useState('');
  const [crmsiVBelt, setcrmsiVBelt] = useState('');
  const [crmsiVCover, setcrmsiVCover] = useState('');
  const [crmsiRedTemp, setcrmsiRedTemp] = useState('');
  const [crmsiRedOli, setcrmsiRedOli] = useState('');
  const [crmsiRedSealHS, setcrmsiRedSealHS] = useState('');
  const [crmsiRedSealLS, setcrmsiRedSealLS] = useState('');
  const [crmsiRedNoise, setcrmsiRedNoise] = useState('');
  const [crmsiRedFound, setcrmsiRedFound] = useState('');
  const [crmsiHeadTempFix, setcrmsiHeadTempFix] = useState('');
  const [crmsiHeadNoiseFix, setcrmsiHeadNoiseFix] = useState('');
  const [crmsiHeadTempFree, setcrmsiHeadTempFree] = useState('');
  const [crmsiHeadNoiseFree, setcrmsiHeadNoiseFree] = useState('');
  const [crmsiHeadLegging, setcrmsiHeadLegging] = useState('');
  const [crmsiTailTempFix, setcrmsiTailTempFix] = useState('');
  const [crmsiTaiNoiselFix, setcrmsiTaiNoiselFix] = useState('');
  const [crmsiTailTempFree, setcrmsiTailTempFree] = useState('');``
  const [crmsiTailNoiseFree, setcrmsiTailNoiseFree] = useState('');
  const [crmsiTailLegging, setcrmsiTailLegging] = useState('');
  const [crmsiSupportRoller, setcrmsiSupportRoller] = useState('');
  const [crmsiSupportClean, setcrmsiSupportClean] = useState('');
  const [crmsiBeltCondition, setcrmsiBeltCondition] = useState('');
  const [crmsiBeltjoint, setcrmsiBeltjoint] = useState('');
  const [crmsiBeltCleanliness, setcrmsiBeltCleanliness] = useState('');
  
  //213-BC2
  
  const [crbciiSgRotatingParts, setcrbciiSgRotatingParts] = useState('');
  const [crbciiSgHSC, setcrbciiSgHSC] = useState('');
  const [crbciiSgLSC, setcrbciiSgLSC] = useState('');
  const [crbciiSgCSB, setcrbciiSgCSB] = useState('');
  const [crbciiSgRG, setcrbciiSgRG] = useState('');
  const [crbciiHeadLagging, setcrbciiHeadLagging] = useState('');
  const [crbciiHeadPrimary, setcrbciiHeadPrimary] = useState('');
  const [crbciiHeadSecondary, setcrbciiHeadSecondary] = useState('');
  const [crbciiHeadFixNoise, setcrbciiHeadFixNoise] = useState('');
  const [crbciiHeadFixTemp, setcrbciiHeadFixTemp] = useState('');
  const [crbciiHeadFreeNoise, setcrbciiHeadFreeNoise] = useState('');
  const [crbciiHeadFreeTemp, setcrbciiHeadFreeTemp] = useState('');
  const [crbciiHeadRedNoise, setcrbciiHeadRedNoise] = useState('');
  const [crbciiHeadRedTemp, setcrbciiHeadRedTemp] = useState('');
  const [crbciiHeadRedSeal, setcrbciiHeadRedSeal] = useState('');
  const [crbciiHeadRedOli, setcrbciiHeadRedOli] = useState('');
  const [crbciiHeadRedCoupling, setcrbciiHeadRedCoupling] = useState('');
  const [crbciiSnubLagging, setcrbciiSnubLagging] = useState('');
  const [crbciiSnubUtaraNoise, setcrbciiSnubUtaraNoise] = useState('');
  const [crbciiSnubUtaraTemp, setcrbciiSnubUtaraTemp] = useState('');
  const [crbciiSnubSelNoise, setcrbciiSnubSelNoise] = useState('');
  const [crbciiSnubSelTemp, setcrbciiSnubSelTemp] = useState('');
  const [crbciiUtaraLagging, setcrbciiUtaraLagging] = useState('');
  const [crbciiUtaraBaratNoise, setcrbciiUtaraBaratNoise] = useState('');
  const [crbciiUtaraBaratTemp, setcrbciiUtaraBaratTemp] = useState('');
  const [crbciiUtaraTimurNoise, setcrbciiUtaraTimurNoise] = useState('');
  const [crbciiUtaraTimurTemp, setcrbciiUtaraTimurTemp] = useState('');
  const [crbciiSelatanLagging, setcrbciiSelatanLagging] = useState('');
  const [crbciiSelatanBaratNoise, setcrbciiSelatanBaratNoise] = useState('');
  const [crbciiSelatanBaratTemp, setcrbciiSelatanBaratTemp] = useState('');
  const [crbciiSelatanTimurNoise, setcrbciiSelatanTimurNoise] = useState('');
  const [crbciiSelatanTimurTemp, setcrbciiSelatanTimurTemp] = useState('');
  const [crbciiTakeLagging, setcrbciiTakeLagging] = useState('');
  const [crbciiTakeBaratNoise, setcrbciiTakeBaratNoise] = useState('');
  const [crbciiTakeBaratTemp, setcrbciiTakeBaratTemp] = useState('');
  const [crbciiTakeTimurNoise, setcrbciiTakeTimurNoise] = useState('');
  const [crbciiTakeTimurTemp, setcrbciiTakeTimurTemp] = useState('');
  const [crbciiTailLagging, setcrbciiTailLagging] = useState('');
  const [crbciiTailVs, setcrbciiTailVs] = useState('');
  const [crbciiTailBaratNoise, setcrbciiTailBaratNoise] = useState('');
  const [crbciiTailBaratTemp, setcrbciiTailBaratTemp] = useState('');
  const [crbciiTailTimurNoise, setcrbciiTailTimurNoise] = useState('');
  const [crbciiTailTimurTemp, setcrbciiTailTimurTemp] = useState('');
  const [crbciiSkirt, setcrbciiSkirt] = useState('');
  const [crbciiChute, setcrbciiChute] = useState('');
  const [crbciiCondition, setcrbciiCondition] = useState('');
  const [crbciiJoint, setcrbciiJoint] = useState('');
  const [crbciiImpact, setcrbciiImpact] = useState('');
  const [crbciiCarry, setcrbciiCarry] = useState('');
  const [crbciiReturn, setcrbciiReturn] = useState('');
  // Remark
  const [crRemark, setcrRemark] = useState('');
  
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
        wq1_1_hsc: wqiSgHSC,
        wq1_1_lsc: wqiSgLSC,
        wq1_1_csw: wqiSgCSW,
        wq1_1_remaining_guarding: wqiSgRG,
        wq1_2_noise: wqiRedNoise,
        wq1_2_temp: wqiRedTemp,
        wq1_2_seal: wqiRedSeal,
        wq1_2_level_oil: wqiRedLevelOli,
        wq1_2_drive_s: wqiRedRS,
        wq1_2_driven_s: wqiRedDVS,
        wq1_2_chain: wqiRedChain,
        wq1_2_coupling: wqiRedCoup,
        wq1_3_noise: wqiBhfNoise,
        wq1_3_temp: wqiBhfTemp,
        wq1_4_noise: wqiBhfrNoise,
        wq1_4_temp: wqiBhfrTemp,
        wq1_5_noise: wqiBfNoise,
        wq1_5_temp: wqiBfTemp,
        wq1_5_tc: wqiBfTc,
        wq1_6_cleanliness: wqiCClean,
        
        hc1_1_rotating_part: hc1SgRotpart, // HC1
        hc1_1_hsc: hc1SgHsc,
        hc1_1_remaining_guarding: hc1SgRg,
        hc1_2_noise: hc1BhfrNoise,
        hc1_2_seal: hc1BhfrSeal,
        hc1_2_temp: hc1BhfrTemp,
        hc1_3_noise: hc1BhfreNoise,
        hc1_3_seal: hc1BhfreSeal,
        hc1_3_temp: hc1BhfreTemp,
        hc1_4_noise: hciRbpNoise,
        hc1_4_temp: hciRbpTemp,
        hc1_4_seal: hciRbpSeal,
        hc1_4_level_oil: hciRbpLevelOli,
        hc1_4_cd: hciRbpCD,
        hc1_4_drive_s: hciRbpDvS,
        hc1_4_driven_s: hciRbpDvnS,
        hc1_5_noise: hciRbpBpNoise,
        hc1_5_seal: hciRbpBpSeal,
        hc1_5_temp: hciRbpBpTemp,
        hc1_6_noise: hci6noise,
        hc1_6_seal: hci6seal,
        hc1_6_temp: hci6temp,
        hc1_7_noise: hci7noise,
        hc1_7_temp: hci7temp,
        hc1_8_noise: hci8noise,
        hc1_8_temp: hci8temp,
        hc1_9_cleanliness: hci9cesing,

        // 213-BC1
        crbc1_1_rotating_part: crbciSgRotatingParts, 
        crbc1_1_hsc: crbciSgHSC,
        crbc1_1_lsc: crbciSgLSC,
        crbc1_1_csb: crbciSgCSB,
        crbc1_1_remaining_guarding: crbciSgRG,
        crbc1_2_lagging: crbciHeadLagging,
        crbc1_2_primary: crbciHeadPrimary,
        crbc1_2_secondary: crbciHeadSecondary,
        crbc1_2_fix_noise: crbciHeadFixNoise,
        crbc1_2_fix_temp: crbciHeadFixTemp,
        crbc1_2_free_noise: crbciHeadFreeNoise,
        crbc1_2_free_temp: crbciHeadFreeTemp,
        crbc1_2_red_noise: crbciHeadRedNoise,
        crbc1_2_red_temp: crbciHeadRedTemp,
        crbc1_2_red_seal: crbciHeadRedSeal,
        crbc1_2_red_oli: crbciHeadRedOli,
        crbc1_2_red_coupling: crbciHeadRedCoupling,
        crbc1_3_lagging: crbciSnubLagging,
        crbc1_3_utara_noise: crbciSnubUtaraNoise,
        crbc1_3_utara_temp: crbciSnubUtaraTemp,
        crbc1_3_sel_noise: crbciSnubSelNoise,
        crbc1_3_sel_temp: crbciSnubSelTemp,
        crbc1_4_lagging: crbciBaratLagging,
        crbc1_4_utara_noise: crbciBaratUtaraNoise,
        crbc1_4_utara_temp: crbciBaratUtaraTemp,
        crbc1_4_sel_noise: crbciBaratSelatanNoise,
        crbc1_4_sel_temp: crbciBaratSelatanTemp,
        crbc1_5_lagging: crbciTimurLagging,
        crbc1_5_utara_noise: crbciTimurUtaraNoise,
        crbc1_5_utara_temp: crbciTimurUtaraTemp,
        crbc1_5_sel_noise: crbciTimurSelatanNoise,
        crbc1_5_sel_temp: crbciTimurSelatanTemp,
        crbc1_6_lagging: crbciTakeLagging,
        crbc1_6_utara_noise: crbciTakeUtaraNoise,
        crbc1_6_utara_temp: crbciTakeUtaraTemp,
        crbc1_6_sel_noise: crbciTakeSelNoise,
        crbc1_6_sel_temp: crbciTakeSelTemp,
        crbc1_7_lagging: crbciTailLagging,
        crbc1_7_vs: crbciTailVs,
        crbc1_7_utara_noise: crbciTailUtaraNoise,
        crbc1_7_utara_temp: crbciTailUtaraTemp,
        crbc1_7_sel_noise: crbciTailSelNoise,
        crbc1_7_sel_temp: crbciTailSelTemp,
        crbc1_8_skirt: crbciSkirt,
        crbc1_8_chute: crbciChute,
        crbc1_8_condition: crbciCondition,
        crbc1_8_joint: crbciJoint,
        crbc1_8_impact: crbciImpact,
        crbc1_8_carry: crbciCarry,
        crbc1_8_return: crbciReturn,

        // 213-MS1
        crms1_1_rotating_part: crmsiSgRot, 
        crms1_1_ctp: crmsiSgCTP,
        crms1_1_chp: crmsiSgCHP,
        crms1_1_cab: crmsiSgCAB,
        crms1_2_foundation: crmsiMotorFound,
        crms1_2_temp_ls: crmsiMotorTempLS,
        crms1_2_temp_fs: crmsiMotorTempFS,
        crms1_3_vbelt: crmsiVBelt,
        crms1_3_cover: crmsiVCover,
        crms1_4_temp: crmsiRedTemp,
        crms1_4_level_oli: crmsiRedOli,
        crms1_4_seal_hs: crmsiRedSealHS,
        crms1_4_seal_ls: crmsiRedSealLS,
        crms1_4_noise: crmsiRedNoise,
        crms1_4_foundation: crmsiRedFound,
        crms1_5_temp_fix: crmsiHeadTempFix,
        crms1_5_noise_fix: crmsiHeadNoiseFix,
        crms1_5_temp_free: crmsiHeadTempFree,
        crms1_5_noise_free: crmsiHeadNoiseFree,
        crms1_5_legging: crmsiHeadLegging,
        crms1_6_temp_fix: crmsiTailTempFix,
        crms1_6_noise_fix: crmsiTaiNoiselFix,
        crms1_6_temp_free: crmsiTailTempFree,
        crms1_6_noise_free: crmsiTailNoiseFree,
        crms1_6_legging: crmsiTailLegging,
        crms1_7_roller: crmsiSupportRoller,
        crms1_7_clean: crmsiSupportClean,
        crms1_8_condition: crmsiBeltCondition,
        crms1_8_joint: crmsiBeltjoint,
        crms1_8_cleanliness: crmsiBeltCleanliness,

        // 213-BC2
        crbc2_1_rotating_part: crbciiSgRotatingParts,
        crbc2_1_hsc: crbciiSgHSC,
        crbc2_1_lsc: crbciiSgLSC,
        crbc2_1_csb: crbciiSgCSB,
        crbc2_1_remaining_guarding: crbciiSgRG,
        crbc2_2_lagging: crbciiHeadLagging,
        crbc2_2_primary: crbciiHeadPrimary,
        crbc2_2_secondary: crbciiHeadSecondary,
        crbc2_2_fix_noise: crbciiHeadFixNoise,
        crbc2_2_fix_temp: crbciiHeadFixTemp,
        crbc2_2_free_noise: crbciiHeadFreeNoise,
        crbc2_2_free_temp: crbciiHeadFreeTemp,
        crbc2_2_red_noise: crbciiHeadRedNoise,
        crbc2_2_red_temp: crbciiHeadRedTemp,
        crbc2_2_red_seal: crbciiHeadRedSeal,
        crbc2_2_red_oli: crbciiHeadRedOli,
        crbc2_2_red_coupling: crbciiHeadRedCoupling,
        crbc2_3_lagging: crbciiSnubLagging,
        crbc2_3_utara_noise: crbciiSnubUtaraNoise,
        crbc2_3_utara_temp: crbciiSnubUtaraTemp,
        crbc2_3_sel_noise: crbciiSnubSelNoise,
        crbc2_3_sel_temp: crbciiSnubSelTemp,
        crbc2_4_lagging: crbciiUtaraLagging,
        crbc2_4_barat_noise: crbciiUtaraBaratNoise,
        crbc2_4_barat_temp: crbciiUtaraBaratTemp,
        crbc2_4_timur_noise: crbciiUtaraTimurNoise,
        crbc2_4_timur_temp: crbciiUtaraTimurTemp,
        crbc2_5_lagging: crbciiSelatanLagging,
        crbc2_5_barat_noise: crbciiSelatanBaratNoise,
        crbc2_5_barat_temp: crbciiSelatanBaratTemp,
        crbc2_5_timur_noise: crbciiSelatanTimurNoise,
        crbc2_5_timur_temp: crbciiSelatanTimurTemp,
        crbc2_6_lagging: crbciiTakeLagging,
        crbc2_6_barat_noise: crbciiTakeBaratNoise,
        crbc2_6_barat_temp: crbciiTakeBaratTemp,
        crbc2_6_timur_noise: crbciiTakeTimurNoise,
        crbc2_6_timur_temp: crbciiTakeTimurTemp,
        crbc2_7_lagging: crbciiTailLagging,
        crbc2_7_vs: crbciiTailVs,
        crbc2_7_barat_noise: crbciiTailBaratNoise,
        crbc2_7_barat_temp: crbciiTailBaratTemp,
        crbc2_7_timur_noise: crbciiTailTimurNoise,
        crbc2_7_timur_temp: crbciiTailTimurTemp,
        crbc2_8_skirt: crbciiSkirt,
        crbc2_8_chute: crbciiChute,
        crbc2_8_condition: crbciiCondition,
        crbc2_8_joint: crbciiJoint,
        crbc2_8_impact: crbciiImpact,
        crbc2_8_carry: crbciiCarry,
        crbc2_8_return: crbciiReturn,
        cr_remark: crRemark,
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
        router.push('/form-cr-n1-a');
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
                <h5 className=" fw-bold ls-sm">Page 1 of 2</h5>
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
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      {/* REDUCER */}
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='wqiRedTemp' name="wqiRedTemp" placeholder="" 
                          value={wqiRedTemp}
                          onChange={(e) => setWqiRedTemp(e.target.value)}
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
                      </tr>
                      {/* BEARING HEAD FIX */}
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Bearing head fix</b>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='wqiBhfTemp' name="wqiBhfTemp" placeholder="" 
                          value={wqiBhfTemp}
                          onChange={(e) => setwqiBhfTemp(e.target.value)}
                          /></td>
                      </tr>
                      {/* 4. Bearing head free */}
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='wqiBhfrTemp' name="wqiBhfrTemp" placeholder="" 
                          value={wqiBhfrTemp}
                          onChange={(e) => setwqiBhfrTemp(e.target.value)}
                          /></td>
                      </tr>
                      {/* 5. Bearing Free (other wobler) */}
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='wqiBfTemp' name="wqiBfTemp" placeholder="" 
                          value={wqiBfTemp}
                          onChange={(e) => setwqiBfTemp(e.target.value)}
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
                      </tr>
                      {/* 6. Casing */}
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='hc1BhfrTemp' name="hc1BhfrTemp" placeholder="" 
                          value={hc1BhfrTemp}
                          onChange={(e) => sethc1BhfrTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='hc1BhfreTemp' name="hc1BhfreTemp" placeholder="" 
                          value={hc1BhfreTemp}
                          onChange={(e) => sethc1BhfreTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='hciRbpTemp' name="hciRbpTemp" placeholder="" 
                          value={hciRbpTemp}
                          onChange={(e) => sethciRbpTemp(e.target.value)}
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
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='hciRbpBpTemp' name="hciRbpBpTemp" placeholder="" 
                          value={hciRbpBpTemp}
                          onChange={(e) => sethciRbpBpTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='hci6temp' name="hci6temp" placeholder="" 
                          value={hci6temp}
                          onChange={(e) => sethci6temp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='hci7temp' name="hci7temp" placeholder="" 
                          value={hci7temp}
                          onChange={(e) => sethci7temp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='hci8temp' name="hci8temp" placeholder="" 
                          value={hci8temp}
                          onChange={(e) => sethci8temp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                      </tr>
                      {/* END HC1 */}

                       {/* BC1 */}
                       <tr>
                        <td rowSpan={72} className='text-center align-middle'>
                          <span>3</span>
                        </td>
                        <td rowSpan={72} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC1</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safety Guard</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rotating Parts</td>
                        <td className='align-middle'>Secured, Tight</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSgRotatingParts'
                            name='crbciSgRotatingParts'
                            className="large-checkbox"
                            checked={crbciSgRotatingParts}
                            onChange={(e) => setcrbciSgRotatingParts(e.target.checked)}
                          /></td>
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
                            checked={crbciSgHSC}
                            onChange={(e) => setcrbciSgHSC(e.target.checked)}
                          /></td>
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
                            checked={crbciSgLSC}
                            onChange={(e) => setcrbciSgLSC(e.target.checked)}
                          /></td>
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
                            checked={crbciSgCSB}
                            onChange={(e) => setcrbciSgCSB(e.target.checked)}
                          /></td>
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
                            checked={crbciSgRG}
                            onChange={(e) => setcrbciSgRG(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciHeadLagging}
                            onChange={(e) => setcrbciHeadLagging(e.target.checked)}
                          /></td>
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
                            checked={crbciHeadPrimary}
                            onChange={(e) => setcrbciHeadPrimary(e.target.checked)}
                          /></td>
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
                            checked={crbciHeadSecondary}
                            onChange={(e) => setcrbciHeadSecondary(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciHeadFixNoise}
                            onChange={(e) => setcrbciHeadFixNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciHeadFixTemp' name="crbciHeadFixTemp" placeholder="" 
                          value={crbciHeadFixTemp}
                          onChange={(e) => setcrbciHeadFixTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciHeadFreeNoise}
                            onChange={(e) => setcrbciHeadFreeNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciHeadFreeTemp' name="crbciHeadFreeTemp" placeholder="" 
                          value={crbciHeadFreeTemp}
                          onChange={(e) => setcrbciHeadFreeTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciHeadRedNoise}
                            onChange={(e) => setcrbciHeadRedNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciHeadRedTemp' name="crbciHeadRedTemp" placeholder="" 
                          value={crbciHeadRedTemp}
                          onChange={(e) => setcrbciHeadRedTemp(e.target.value)}
                          /></td>
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
                            checked={crbciHeadRedSeal}
                            onChange={(e) => setcrbciHeadRedSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadRedOli'
                            name='crbciHeadRedOli'
                            className="large-checkbox"
                            checked={crbciHeadRedOli}
                            onChange={(e) => setcrbciHeadRedOli(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (No Noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciHeadRedCoupling'
                            name='crbciHeadRedCoupling'
                            className="large-checkbox"
                            checked={crbciHeadRedCoupling}
                            onChange={(e) => setcrbciHeadRedCoupling(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciSnubLagging}
                            onChange={(e) => setcrbciSnubLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciSnubUtaraNoise}
                            onChange={(e) => setcrbciSnubUtaraNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciSnubUtaraTemp' name="crbciSnubUtaraTemp" placeholder="" 
                          value={crbciSnubUtaraTemp}
                          onChange={(e) => setcrbciSnubUtaraTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciSnubSelNoise}
                            onChange={(e) => setcrbciSnubSelNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciSnubSelTemp' name="crbciSnubSelTemp" placeholder="" 
                          value={crbciSnubSelTemp}
                          onChange={(e) => setcrbciSnubSelTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Bend Pulley Barat</b>
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
                            checked={crbciBaratLagging}
                            onChange={(e) => setcrbciBaratLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciBaratUtaraNoise}
                            onChange={(e) => setcrbciBaratUtaraNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciBaratUtaraTemp' name="crbciBaratUtaraTemp" placeholder="" 
                          value={crbciBaratUtaraTemp}
                          onChange={(e) => setcrbciBaratUtaraTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciBaratSelatanNoise}
                            onChange={(e) => setcrbciBaratSelatanNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciBaratSelatanTemp' name="crbciBaratSelatanTemp" placeholder="" 
                          value={crbciBaratSelatanTemp}
                          onChange={(e) => setcrbciBaratSelatanTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTimurLagging}
                            onChange={(e) => setcrbciTimurLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTimurUtaraNoise}
                            onChange={(e) => setcrbciTimurUtaraNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciTimurUtaraTemp' name="crbciTimurUtaraTemp" placeholder="" 
                          value={crbciTimurUtaraTemp}
                          onChange={(e) => setcrbciTimurUtaraTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTimurSelatanNoise}
                            onChange={(e) => setcrbciTimurSelatanNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciTimurSelatanTemp' name="crbciTimurSelatanTemp" placeholder="" 
                          value={crbciTimurSelatanTemp}
                          onChange={(e) => setcrbciTimurSelatanTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTakeLagging}
                            onChange={(e) => setcrbciTakeLagging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTakeUtaraNoise}
                            onChange={(e) => setcrbciTakeUtaraNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciTakeUtaraTemp' name="crbciTakeUtaraTemp" placeholder="" 
                          value={crbciTakeUtaraTemp}
                          onChange={(e) => setcrbciTakeUtaraTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTakeSelNoise}
                            onChange={(e) => setcrbciTakeSelNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciTakeSelTemp' name="crbciTakeSelTemp" placeholder="" 
                          value={crbciTakeSelTemp}
                          onChange={(e) => setcrbciTakeSelTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTailLagging}
                            onChange={(e) => setcrbciTailLagging(e.target.checked)}
                          /></td>
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
                            checked={crbciTailVs}
                            onChange={(e) => setcrbciTailVs(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTailUtaraNoise}
                            onChange={(e) => setcrbciTailUtaraNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciTailUtaraTemp' name="crbciTailUtaraTemp" placeholder="" 
                          value={crbciTailUtaraTemp}
                          onChange={(e) => setcrbciTailUtaraTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crbciTailSelNoise}
                            onChange={(e) => setcrbciTailSelNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciTailSelTemp' name="crbciTailSelTemp" placeholder="" 
                          value={crbciTailSelTemp}
                          onChange={(e) => setcrbciTailSelTemp(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Rubber Skirt</td>
                        <td className='align-middle'>No wear and no leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciSkirt'
                            name='crbciSkirt'
                            className="large-checkbox"
                            checked={crbciSkirt}
                            onChange={(e) => setcrbciSkirt(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and no leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciChute'
                            name='crbciChute'
                            className="large-checkbox"
                            checked={crbciChute}
                            onChange={(e) => setcrbciChute(e.target.checked)}
                          /></td>
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
                            checked={crbciCondition}
                            onChange={(e) => setcrbciCondition(e.target.checked)}
                          /></td>
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
                            checked={crbciJoint}
                            onChange={(e) => setcrbciJoint(e.target.checked)}
                          /></td>
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
                            checked={crbciImpact}
                            onChange={(e) => setcrbciImpact(e.target.checked)}
                          /></td>
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
                            checked={crbciCarry}
                            onChange={(e) => setcrbciCarry(e.target.checked)}
                          /></td>
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
                            checked={crbciReturn}
                            onChange={(e) => setcrbciReturn(e.target.checked)}
                          /></td>
                      </tr>
                      
                       {/* BC1 */}
                       <tr>
                        <td rowSpan={39} className='text-center align-middle'>
                          <span>4</span>
                        </td>
                        <td rowSpan={39} className='text-center align-middle rotate-text'>
                          <b>NR.213-MS1</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>1. Safety Guard</b>
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
                            checked={crmsiSgRot}
                            onChange={(e) => setcrmsiSgRot(e.target.checked)}
                          /></td>
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
                            checked={crmsiSgCTP}
                            onChange={(e) => setcrmsiSgCTP(e.target.checked)}
                          /></td>
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
                            checked={crmsiSgCHP}
                            onChange={(e) => setcrmsiSgCHP(e.target.checked)}
                          /></td>
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
                            checked={crmsiSgCAB}
                            onChange={(e) => setcrmsiSgCAB(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                            checked={crmsiMotorFound}
                            onChange={(e) => setcrmsiMotorFound(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing LS</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crmsiMotorTempLS' name="crmsiMotorTempLS" placeholder="" 
                          value={crmsiMotorTempLS}
                          onChange={(e) => setcrmsiMotorTempLS(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing FS</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crmsiMotorTempFS' name="crmsiMotorTempFS" placeholder="" 
                          value={crmsiMotorTempFS}
                          onChange={(e) => setcrmsiMotorTempFS(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>3. Transmission Belt</b>
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
                            checked={crmsiVBelt}
                            onChange={(e) => setcrmsiVBelt(e.target.checked)}
                          /></td>
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
                            checked={crmsiVCover}
                            onChange={(e) => setcrmsiVCover(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>4. Reducer</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crmsiRedTemp' name="crmsiRedTemp" placeholder="" 
                          value={crmsiRedTemp}
                          onChange={(e) => setcrmsiRedTemp(e.target.value)}
                          /></td>
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
                            checked={crmsiRedOli}
                            onChange={(e) => setcrmsiRedOli(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal High Speed</td>
                        <td className='align-middle'>No Leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedSealHS'
                            name='crmsiRedSealHS'
                            className="large-checkbox"
                            checked={crmsiRedSealHS}
                            onChange={(e) => setcrmsiRedSealHS(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Seal Low Speed</td>
                        <td className='align-middle'>No Leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedSealLS'
                            name='crmsiRedSealLS'
                            className="large-checkbox"
                            checked={crmsiRedSealLS}
                            onChange={(e) => setcrmsiRedSealLS(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Noise</td>
                        <td className='align-middle'>No noise</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiRedNoise'
                            name='crmsiRedNoise'
                            className="large-checkbox"
                            checked={crmsiRedNoise}
                            onChange={(e) => setcrmsiRedNoise(e.target.checked)}
                          /></td>
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
                            checked={crmsiRedFound}
                            onChange={(e) => setcrmsiRedFound(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>5. Head Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Fix</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crmsiHeadTempFix' name="crmsiHeadTempFix" placeholder="" 
                          value={crmsiHeadTempFix}
                          onChange={(e) => setcrmsiHeadTempFix(e.target.value)}
                          /></td>
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
                            checked={crmsiHeadNoiseFix}
                            onChange={(e) => setcrmsiHeadNoiseFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Free</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crmsiHeadTempFree' name="crmsiHeadTempFree" placeholder="" 
                          value={crmsiHeadTempFree}
                          onChange={(e) => setcrmsiHeadTempFree(e.target.value)}
                          /></td>
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
                            checked={crmsiHeadNoiseFree}
                            onChange={(e) => setcrmsiHeadNoiseFree(e.target.checked)}
                          /></td>
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
                            checked={crmsiHeadLegging}
                            onChange={(e) => setcrmsiHeadLegging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>6. Tail Pulley</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Fix</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crmsiTailTempFix' name="crmsiTailTempFix" placeholder="" 
                          value={crmsiTailTempFix}
                          onChange={(e) => setcrmsiTailTempFix(e.target.value)}
                          /></td>
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
                            checked={crmsiTaiNoiselFix}
                            onChange={(e) => setcrmsiTaiNoiselFix(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperature Bearing Free</td>
                        <td className='align-middle'>&lt; 65⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crmsiTailTempFree' name="crmsiTailTempFree" placeholder="" 
                          value={crmsiTailTempFree}
                          onChange={(e) => setcrmsiTailTempFree(e.target.value)}
                          /></td>
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
                            checked={crmsiTailNoiseFree}
                            onChange={(e) => setcrmsiTailNoiseFree(e.target.checked)}
                          /></td>
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
                            checked={crmsiTailLegging}
                            onChange={(e) => setcrmsiTailLegging(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>7. Support Roller</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Carrier Roller</td>
                        <td className='align-middle'>No Stuck, No Worn out</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSupportRoller'
                            name='crmsiSupportRoller'
                            className="large-checkbox"
                            checked={crmsiSupportRoller}
                            onChange={(e) => setcrmsiSupportRoller(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Clean Lines</td>
                        <td className='align-middle'>Clean</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiSupportClean'
                            name='crmsiSupportClean'
                            className="large-checkbox"
                            checked={crmsiSupportClean}
                            onChange={(e) => setcrmsiSupportClean(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
                          <b>8. Belt Conveyor</b>
                        </td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Condition</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiBeltCondition'
                            name='crmsiBeltCondition'
                            className="large-checkbox"
                            checked={crmsiBeltCondition}
                            onChange={(e) => setcrmsiBeltCondition(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Belt Joint</td>
                        <td className='align-middle'>Good</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crmsiBeltjoint'
                            name='crmsiBeltjoint'
                            className="large-checkbox"
                            checked={crmsiBeltjoint}
                            onChange={(e) => setcrmsiBeltjoint(e.target.checked)}
                          /></td>
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
                            checked={crmsiBeltCleanliness}
                            onChange={(e) => setcrmsiBeltCleanliness(e.target.checked)}
                          /></td>
                        </tr>
                        <tr>
                        <td rowSpan={72} className='text-center align-middle'>
                          <span>5</span>
                        </td>
                        <td rowSpan={72} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC2</b>
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
                            id='crbciiSgRotatingParts'
                            name='crbciiSgRotatingParts'
                            className="large-checkbox"
                            checked={crbciiSgRotatingParts}
                            onChange={(e) => setcrbciiSgRotatingParts(e.target.checked)}
                          /></td>
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
                            checked={crbciiSgHSC}
                            onChange={(e) => setcrbciiSgHSC(e.target.checked)}
                          /></td>
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
                            checked={crbciiSgLSC}
                            onChange={(e) => setcrbciiSgLSC(e.target.checked)}
                          /></td>
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
                            checked={crbciiSgCSB}
                            onChange={(e) => setcrbciiSgCSB(e.target.checked)}
                          /></td>
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
                            checked={crbciiSgRG}
                            onChange={(e) => setcrbciiSgRG(e.target.checked)}
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
                            id='crbciiHeadLagging'
                            name='crbciiHeadLagging'
                            className="large-checkbox"
                            checked={crbciiHeadLagging}
                            onChange={(e) => setcrbciiHeadLagging(e.target.checked)}
                          /></td>
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
                            checked={crbciiHeadPrimary}
                            onChange={(e) => setcrbciiHeadPrimary(e.target.checked)}
                          /></td>
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
                            checked={crbciiHeadSecondary}
                            onChange={(e) => setcrbciiHeadSecondary(e.target.checked)}
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
                            id='crbciiHeadFixNoise'
                            name='crbciiHeadFixNoise'
                            className="large-checkbox"
                            checked={crbciiHeadFixNoise}
                            onChange={(e) => setcrbciiHeadFixNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiHeadFixTemp' name="crbciiHeadFixTemp" placeholder="" 
                          value={crbciiHeadFixTemp}
                          onChange={(e) => setcrbciiHeadFixTemp(e.target.value)}
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
                            id='crbciiHeadFreeNoise'
                            name='crbciiHeadFreeNoise'
                            className="large-checkbox"
                            checked={crbciiHeadFreeNoise}
                            onChange={(e) => setcrbciiHeadFreeNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiHeadFreeTemp' name="crbciiHeadFreeTemp" placeholder="" 
                          value={crbciiHeadFreeTemp}
                          onChange={(e) => setcrbciiHeadFreeTemp(e.target.value)}
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
                            id='crbciiHeadRedNoise'
                            name='crbciiHeadRedNoise'
                            className="large-checkbox"
                            checked={crbciiHeadRedNoise}
                            onChange={(e) => setcrbciiHeadRedNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiHeadRedTemp' name="crbciiHeadRedTemp" placeholder="" 
                          value={crbciiHeadRedTemp}
                          onChange={(e) => setcrbciiHeadRedTemp(e.target.value)}
                          /></td>
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
                            checked={crbciiHeadRedSeal}
                            onChange={(e) => setcrbciiHeadRedSeal(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Level oli</td>
                        <td className='align-middle'>Cukup (Normal)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadRedOli'
                            name='crbciiHeadRedOli'
                            className="large-checkbox"
                            checked={crbciiHeadRedOli}
                            onChange={(e) => setcrbciiHeadRedOli(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Coupling</td>
                        <td className='align-middle'>Good (No Noise)</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiHeadRedCoupling'
                            name='crbciiHeadRedCoupling'
                            className="large-checkbox"
                            checked={crbciiHeadRedCoupling}
                            onChange={(e) => setcrbciiHeadRedCoupling(e.target.checked)}
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
                            id='crbciiSnubLagging'
                            name='crbciiSnubLagging'
                            className="large-checkbox"
                            checked={crbciiSnubLagging}
                            onChange={(e) => setcrbciiSnubLagging(e.target.checked)}
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
                            id='crbciiSnubUtaraNoise'
                            name='crbciiSnubUtaraNoise'
                            className="large-checkbox"
                            checked={crbciiSnubUtaraNoise}
                            onChange={(e) => setcrbciiSnubUtaraNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiSnubUtaraTemp' name="crbciiSnubUtaraTemp" placeholder="" 
                          value={crbciiSnubUtaraTemp}
                          onChange={(e) => setcrbciiSnubUtaraTemp(e.target.value)}
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
                            id='crbciiSnubSelNoise'
                            name='crbciiSnubSelNoise'
                            className="large-checkbox"
                            checked={crbciiSnubSelNoise}
                            onChange={(e) => setcrbciiSnubSelNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiSnubSelTemp' name="crbciiSnubSelTemp" placeholder="" 
                          value={crbciiSnubSelTemp}
                          onChange={(e) => setcrbciiSnubSelTemp(e.target.value)}
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
                            id='crbciiUtaraLagging'
                            name='crbciiUtaraLagging'
                            className="large-checkbox"
                            checked={crbciiUtaraLagging}
                            onChange={(e) => setcrbciiUtaraLagging(e.target.checked)}
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
                            id='crbciiUtaraBaratNoise'
                            name='crbciiUtaraBaratNoise'
                            className="large-checkbox"
                            checked={crbciiUtaraBaratNoise}
                            onChange={(e) => setcrbciiUtaraBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiUtaraBaratTemp' name="crbciiUtaraBaratTemp" placeholder="" 
                          value={crbciiUtaraBaratTemp}
                          onChange={(e) => setcrbciiUtaraBaratTemp(e.target.value)}
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
                            id='crbciiUtaraTimurNoise'
                            name='crbciiUtaraTimurNoise'
                            className="large-checkbox"
                            checked={crbciiUtaraTimurNoise}
                            onChange={(e) => setcrbciiUtaraTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiUtaraTimurTemp' name="crbciiUtaraTimurTemp" placeholder="" 
                          value={crbciiUtaraTimurTemp}
                          onChange={(e) => setcrbciiUtaraTimurTemp(e.target.value)}
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
                            id='crbciiSelatanLagging'
                            name='crbciiSelatanLagging'
                            className="large-checkbox"
                            checked={crbciiSelatanLagging}
                            onChange={(e) => setcrbciiSelatanLagging(e.target.checked)}
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
                            id='crbciiSelatanBaratNoise'
                            name='crbciiSelatanBaratNoise'
                            className="large-checkbox"
                            checked={crbciiSelatanBaratNoise}
                            onChange={(e) => setcrbciiSelatanBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiSelatanBaratTemp' name="crbciiSelatanBaratTemp" placeholder="" 
                          value={crbciiSelatanBaratTemp}
                          onChange={(e) => setcrbciiSelatanBaratTemp(e.target.value)}
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
                            id='crbciiSelatanTimurNoise'
                            name='crbciiSelatanTimurNoise'
                            className="large-checkbox"
                            checked={crbciiSelatanTimurNoise}
                            onChange={(e) => setcrbciiSelatanTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiSelatanTimurTemp' name="crbciiSelatanTimurTemp" placeholder="" 
                          value={crbciiSelatanTimurTemp}
                          onChange={(e) => setcrbciiSelatanTimurTemp(e.target.value)}
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
                            id='crbciiTakeLagging'
                            name='crbciiTakeLagging'
                            className="large-checkbox"
                            checked={crbciiTakeLagging}
                            onChange={(e) => setcrbciiTakeLagging(e.target.checked)}
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
                            id='crbciiTakeBaratNoise'
                            name='crbciiTakeBaratNoise'
                            className="large-checkbox"
                            checked={crbciiTakeBaratNoise}
                            onChange={(e) => setcrbciiTakeBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiTakeBaratTemp' name="crbciiTakeBaratTemp" placeholder="" 
                          value={crbciiTakeBaratTemp}
                          onChange={(e) => setcrbciiTakeBaratTemp(e.target.value)}
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
                            id='crbciiTakeTimurNoise'
                            name='crbciiTakeTimurNoise'
                            className="large-checkbox"
                            checked={crbciiTakeTimurNoise}
                            onChange={(e) => setcrbciiTakeTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiTakeTimurTemp' name="crbciiTakeTimurTemp" placeholder="" 
                          value={crbciiTakeTimurTemp}
                          onChange={(e) => setcrbciiTakeTimurTemp(e.target.value)}
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
                            id='crbciiTailLagging'
                            name='crbciiTailLagging'
                            className="large-checkbox"
                            checked={crbciiTailLagging}
                            onChange={(e) => setcrbciiTailLagging(e.target.checked)}
                          /></td>
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
                            checked={crbciiTailVs}
                            onChange={(e) => setcrbciiTailVs(e.target.checked)}
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
                            id='crbciiTailBaratNoise'
                            name='crbciiTailBaratNoise'
                            className="large-checkbox"
                            checked={crbciiTailBaratNoise}
                            onChange={(e) => setcrbciiTailBaratNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiTailBaratTemp' name="crbciiTailBaratTemp" placeholder="" 
                          value={crbciiTailBaratTemp}
                          onChange={(e) => setcrbciiTailBaratTemp(e.target.value)}
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
                            id='crbciiTailTimurNoise'
                            name='crbciiTailTimurNoise'
                            className="large-checkbox"
                            checked={crbciiTailTimurNoise}
                            onChange={(e) => setcrbciiTailTimurNoise(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '50px'}} type="number" id='crbciiTailTimurTemp' name="crbciiTailTimurTemp" placeholder="" 
                          value={crbciiTailTimurTemp}
                          onChange={(e) => setcrbciiTailTimurTemp(e.target.value)}
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
                            id='crbciiSkirt'
                            name='crbciiSkirt'
                            className="large-checkbox"
                            checked={crbciiSkirt}
                            onChange={(e) => setcrbciiSkirt(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Inlet Chute</td>
                        <td className='align-middle'>No wear and no leakage</td>
                        <td className='p-0 align-middle text-center'>
                          <Form.Check
                            type="checkbox"
                            id='crbciiChute'
                            name='crbciiChute'
                            className="large-checkbox"
                            checked={crbciiChute}
                            onChange={(e) => setcrbciiChute(e.target.checked)}
                          /></td>
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
                            checked={crbciiCondition}
                            onChange={(e) => setcrbciiCondition(e.target.checked)}
                          /></td>
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
                            checked={crbciiJoint}
                            onChange={(e) => setcrbciiJoint(e.target.checked)}
                          /></td>
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
                            checked={crbciiImpact}
                            onChange={(e) => setcrbciiImpact(e.target.checked)}
                          /></td>
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
                            checked={crbciiCarry}
                            onChange={(e) => setcrbciiCarry(e.target.checked)}
                          /></td>
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
                            checked={crbciiReturn}
                            onChange={(e) => setcrbciiReturn(e.target.checked)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className='text-center align-middle'>
                          <b>Remark</b>
                        </td>
                        <td colSpan={3} className='p-0'><Form.Control 
                          style={{ height: '100px'}} type="text" id='crRemark' name="crRemark" placeholder="" 
                          value={crRemark}
                          onChange={(e) => setcrRemark(e.target.value)}
                          /></td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className='mt-5'>
                  <div className="d-grid">
                    <Button  variant="primary text-white" type="submit">Submit</Button>
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
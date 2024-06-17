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

  //BC1
  const [crbciSgRotatingParts, setcrbciSgRotatingParts] = useState('');
  const [crbciSgRotatingParts_r, setcrbciSgRotatingParts_r] = useState('');
  const [crbciSgHSC, setcrbciSgHSC] = useState('');
  const [crbciSgHSC_r, setcrbciSgHSC_r] = useState('');
  const [crbciSgLSC, setcrbciSgLSC] = useState('');
  const [crbciSgLSC_r, setcrbciSgLSC_r] = useState('');
  const [crbciSgCSB, setcrbciSgCSB] = useState('');
  const [crbciSgCSB_r, setcrbciSgCSB_r] = useState('');
  const [crbciSgRG, setcrbciSgRG] = useState('');
  const [crbciSgRG_r, setcrbciSgRG_r] = useState('');
  const [crbciHeadLagging, setcrbciHeadLagging] = useState('');
  const [crbciHeadLagging_r, setcrbciHeadLagging_r] = useState('');
  const [crbciHeadPrimary, setcrbciHeadPrimary] = useState('');
  const [crbciHeadPrimary_r, setcrbciHeadPrimary_r] = useState('');
  const [crbciHeadSecondary, setcrbciHeadSecondary] = useState('');
  const [crbciHeadSecondary_r, setcrbciHeadSecondary_r] = useState('');
  const [crbciHeadFixNoise, setcrbciHeadFixNoise] = useState('');
  const [crbciHeadFixNoise_r, setcrbciHeadFixNoise_r] = useState('');
  const [crbciHeadFixTemp, setcrbciHeadFixTemp] = useState('');
  const [crbciHeadFixTemp_r, setcrbciHeadFixTemp_r] = useState('');
  const [crbciHeadFreeNoise, setcrbciHeadFreeNoise] = useState('');
  const [crbciHeadFreeNoise_r, setcrbciHeadFreeNoise_r] = useState('');
  const [crbciHeadFreeTemp, setcrbciHeadFreeTemp] = useState('');
  const [crbciHeadFreeTemp_r, setcrbciHeadFreeTemp_r] = useState('');
  const [crbciHeadRedNoise, setcrbciHeadRedNoise] = useState('');
  const [crbciHeadRedNoise_r, setcrbciHeadRedNoise_r] = useState('');
  const [crbciHeadRedTemp, setcrbciHeadRedTemp] = useState('');
  const [crbciHeadRedTemp_r, setcrbciHeadRedTemp_r] = useState('');
  const [crbciHeadRedSeal, setcrbciHeadRedSeal] = useState('');
  const [crbciHeadRedSeal_r, setcrbciHeadRedSeal_r] = useState('');
  const [crbciHeadRedOli, setcrbciHeadRedOli] = useState('');
  const [crbciHeadRedOli_r, setcrbciHeadRedOli_r] = useState('');
  const [crbciHeadRedCoupling, setcrbciHeadRedCoupling] = useState('');
  const [crbciHeadRedCoupling_r, setcrbciHeadRedCoupling_r] = useState('');
  const [crbciSnubLagging, setcrbciSnubLagging] = useState('');
  const [crbciSnubLagging_r, setcrbciSnubLagging_r] = useState('');
  const [crbciSnubUtaraNoise, setcrbciSnubUtaraNoise] = useState('');
  const [crbciSnubUtaraNoise_r, setcrbciSnubUtaraNoise_r] = useState('');
  const [crbciSnubUtaraTemp, setcrbciSnubUtaraTemp] = useState('');
  const [crbciSnubUtaraTemp_r, setcrbciSnubUtaraTemp_r] = useState('');
  const [crbciSnubSelNoise, setcrbciSnubSelNoise] = useState('');
  const [crbciSnubSelNoise_r, setcrbciSnubSelNoise_r] = useState('');
  const [crbciSnubSelTemp, setcrbciSnubSelTemp] = useState('');
  const [crbciSnubSelTemp_r, setcrbciSnubSelTemp_r] = useState('');
  const [crbciBaratLagging, setcrbciBaratLagging] = useState('');``
  const [crbciBaratLagging_r, setcrbciBaratLagging_r] = useState('');
  const [crbciBaratUtaraNoise, setcrbciBaratUtaraNoise] = useState('');
  const [crbciBaratUtaraNoise_r, setcrbciBaratUtaraNoise_r] = useState('');
  const [crbciBaratUtaraTemp, setcrbciBaratUtaraTemp] = useState('');
  const [crbciBaratUtaraTemp_r, setcrbciBaratUtaraTemp_r] = useState('');
  const [crbciBaratSelatanNoise, setcrbciBaratSelatanNoise] = useState('');
  const [crbciBaratSelatanNoise_r, setcrbciBaratSelatanNoise_r] = useState('');
  const [crbciBaratSelatanTemp, setcrbciBaratSelatanTemp] = useState('');
  const [crbciBaratSelatanTemp_r, setcrbciBaratSelatanTemp_r] = useState('');
  const [crbciTimurLagging, setcrbciTimurLagging] = useState('');
  const [crbciTimurLagging_r, setcrbciTimurLagging_r] = useState('');
  const [crbciTimurUtaraNoise, setcrbciTimurUtaraNoise] = useState('');
  const [crbciTimurUtaraNoise_r, setcrbciTimurUtaraNoise_r] = useState('');
  const [crbciTimurUtaraTemp, setcrbciTimurUtaraTemp] = useState('');
  const [crbciTimurUtaraTemp_r, setcrbciTimurUtaraTemp_r] = useState('');
  const [crbciTimurSelatanNoise, setcrbciTimurSelatanNoise] = useState('');
  const [crbciTimurSelatanNoise_r, setcrbciTimurSelatanNoise_r] = useState('');
  const [crbciTimurSelatanTemp, setcrbciTimurSelatanTemp] = useState('');
  const [crbciTimurSelatanTemp_r, setcrbciTimurSelatanTemp_r] = useState('');
  const [crbciTakeLagging, setcrbciTakeLagging] = useState('');
  const [crbciTakeLagging_r, setcrbciTakeLagging_r] = useState('');
  const [crbciTakeUtaraNoise, setcrbciTakeUtaraNoise] = useState('');
  const [crbciTakeUtaraNoise_r, setcrbciTakeUtaraNoise_r] = useState('');
  const [crbciTakeUtaraTemp, setcrbciTakeUtaraTemp] = useState('');
  const [crbciTakeUtaraTemp_r, setcrbciTakeUtaraTemp_r] = useState('');
  const [crbciTakeSelNoise, setcrbciTakeSelNoise] = useState('');
  const [crbciTakeSelNoise_r, setcrbciTakeSelNoise_r] = useState('');
  const [crbciTakeSelTemp, setcrbciTakeSelTemp] = useState('');
  const [crbciTakeSelTemp_r, setcrbciTakeSelTemp_r] = useState('');
  const [crbciTailLagging, setcrbciTailLagging] = useState('');
  const [crbciTailLagging_r, setcrbciTailLagging_r] = useState('');
  const [crbciTailVs, setcrbciTailVs] = useState('');
  const [crbciTailVs_r, setcrbciTailVs_r] = useState('');
  const [crbciTailUtaraNoise, setcrbciTailUtaraNoise] = useState('');
  const [crbciTailUtaraNoise_r, setcrbciTailUtaraNoise_r] = useState('');
  const [crbciTailUtaraTemp, setcrbciTailUtaraTemp] = useState('');
  const [crbciTailUtaraTemp_r, setcrbciTailUtaraTemp_r] = useState('');
  const [crbciTailSelNoise, setcrbciTailSelNoise] = useState('');
  const [crbciTailSelNoise_r, setcrbciTailSelNoise_r] = useState('');
  const [crbciTailSelTemp, setcrbciTailSelTemp] = useState('');
  const [crbciTailSelTemp_r, setcrbciTailSelTemp_r] = useState('');
  const [crbciSkirt, setcrbciSkirt] = useState('');
  const [crbciSkirt_r, setcrbciSkirt_r] = useState('');
  const [crbciChute, setcrbciChute] = useState('');
  const [crbciChute_r, setcrbciChute_r] = useState('');
  const [crbciCondition, setcrbciCondition] = useState('');
  const [crbciCondition_r, setcrbciCondition_r] = useState('');
  const [crbciJoint, setcrbciJoint] = useState('');
  const [crbciJoint_r, setcrbciJoint_r] = useState('');
  const [crbciImpact, setcrbciImpact] = useState('');
  const [crbciImpact_r, setcrbciImpact_r] = useState('');
  const [crbciCarry, setcrbciCarry] = useState('');
  const [crbciCarry_r, setcrbciCarry_r] = useState('');
  const [crbciReturn, setcrbciReturn] = useState('');
  
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

        // 213-BC1
        crbc1_1_rotating_part: crbciSgRotatingParts, 
        crbc1_1_rotating_part_rm: crbciSgRotatingParts_r,
        crbc1_1_hsc: crbciSgHSC,
        crbc1_1_hsc_rm: crbciSgHSC_r,
        crbc1_1_lsc: crbciSgLSC,
        crbc1_1_lsc_rm: crbciSgLSC_r,
        crbc1_1_csb: crbciSgCSB,
        crbc1_1_csb_rm: crbciSgCSB_r,
        crbc1_1_remaining_guarding: crbciSgRG,
        crbc1_1_remaining_guarding_rm: crbciSgRG_r,
        crbc1_2_lagging: crbciHeadLagging,
        crbc1_2_lagging_rm: crbciHeadLagging_r,
        crbc1_2_primary: crbciHeadPrimary,
        crbc1_2_primary_rm: crbciHeadPrimary_r,
        crbc1_2_secondary: crbciHeadSecondary,
        crbc1_2_secondary_rm: crbciHeadSecondary_r,
        crbc1_2_fix_noise: crbciHeadFixNoise,
        crbc1_2_fix_noise_rm: crbciHeadFixNoise_r,
        crbc1_2_fix_temp: crbciHeadFixTemp,
        crbc1_2_fix_temp_rm: crbciHeadFixTemp_r,
        crbc1_2_free_noise: crbciHeadFreeNoise,
        crbc1_2_free_noise_rm: crbciHeadFreeNoise_r,
        crbc1_2_free_temp: crbciHeadFreeTemp,
        crbc1_2_free_temp_rm: crbciHeadFreeTemp_r,
        crbc1_2_red_noise: crbciHeadRedNoise,
        crbc1_2_red_noise_rm: crbciHeadRedNoise_r,
        crbc1_2_red_temp: crbciHeadRedTemp,
        crbc1_2_red_temp_rm: crbciHeadRedTemp_r,
        crbc1_2_red_seal: crbciHeadRedSeal,
        crbc1_2_red_seal_rm: crbciHeadRedSeal_r,
        crbc1_2_red_oli: crbciHeadRedOli,
        crbc1_2_red_oli_rm: crbciHeadRedOli_r,
        crbc1_2_red_coupling: crbciHeadRedCoupling,
        crbc1_2_red_coupling_rm: crbciHeadRedCoupling_r,
        crbc1_3_lagging: crbciSnubLagging,
        crbc1_3_lagging_rm: crbciSnubLagging_r,
        crbc1_3_utara_noise: crbciSnubUtaraNoise,
        crbc1_3_utara_noise_rm: crbciSnubUtaraNoise_r,
        crbc1_3_utara_temp: crbciSnubUtaraTemp,
        crbc1_3_utara_temp_rm: crbciSnubUtaraTemp_r,
        crbc1_3_sel_noise: crbciSnubSelNoise,
        crbc1_3_sel_noise_rm: crbciSnubSelNoise_r,
        crbc1_3_sel_temp: crbciSnubSelTemp,
        crbc1_3_sel_temp_rm: crbciSnubSelTemp_r,
        crbc1_4_lagging: crbciBaratLagging,
        crbc1_4_lagging_rm: crbciBaratLagging_r,
        crbc1_4_utara_noise: crbciBaratUtaraNoise,
        crbc1_4_utara_noise_rm: crbciBaratUtaraNoise_r,
        crbc1_4_utara_temp: crbciBaratUtaraTemp,
        crbc1_4_utara_temp_rm: crbciBaratUtaraTemp_r,
        crbc1_4_sel_noise: crbciBaratSelatanNoise,
        crbc1_4_sel_noise_rm: crbciBaratSelatanNoise_r,
        crbc1_4_sel_temp: crbciBaratSelatanTemp,
        crbc1_4_sel_temp_rm: crbciBaratSelatanTemp_r,
        crbc1_5_lagging: crbciTimurLagging,
        crbc1_5_lagging_rm: crbciTimurLagging_r,
        crbc1_5_utara_noise: crbciTimurUtaraNoise,
        crbc1_5_utara_noise_rm: crbciTimurUtaraNoise_r,
        crbc1_5_utara_temp: crbciTimurUtaraTemp,
        crbc1_5_utara_temp_rm: crbciTimurUtaraTemp_r,
        crbc1_5_sel_noise: crbciTimurSelatanNoise,
        crbc1_5_sel_noise_rm: crbciTimurSelatanNoise_r,
        crbc1_5_sel_temp: crbciTimurSelatanTemp,
        crbc1_5_sel_temp_rm: crbciTimurSelatanTemp_r,
        crbc1_6_lagging: crbciTakeLagging,
        crbc1_6_lagging_rm: crbciTakeLagging_r,
        crbc1_6_utara_noise: crbciTakeUtaraNoise,
        crbc1_6_utara_noise_rm: crbciTakeUtaraNoise_r,
        crbc1_6_utara_temp: crbciTakeUtaraTemp,
        crbc1_6_utara_temp_rm: crbciTakeUtaraTemp_r,
        crbc1_6_sel_noise: crbciTakeSelNoise,
        crbc1_6_sel_noise_rm: crbciTakeSelNoise_r,
        crbc1_6_sel_temp: crbciTakeSelTemp,
        crbc1_6_sel_temp_rm: crbciTakeSelTemp_r,
        crbc1_7_lagging: crbciTailLagging,
        crbc1_7_lagging_rm: crbciTailLagging_r,
        crbc1_7_vs: crbciTailVs,
        crbc1_7_vs_rm: crbciTailVs_r,
        crbc1_7_utara_noise: crbciTailUtaraNoise,
        crbc1_7_utara_noise_rm: crbciTailUtaraNoise_r,
        crbc1_7_utara_temp: crbciTailUtaraTemp,
        crbc1_7_utara_temp_rm: crbciTailUtaraTemp_r,
        crbc1_7_sel_noise: crbciTailSelNoise,
        crbc1_7_sel_noise_rm: crbciTailSelNoise_r,
        crbc1_7_sel_temp: crbciTailSelTemp,
        crbc1_7_sel_temp_rm: crbciTailSelTemp_r,
        crbc1_8_skirt: crbciSkirt,
        crbc1_8_skirt_rm: crbciSkirt_r,
        crbc1_8_chute: crbciChute,
        crbc1_8_chute_rm: crbciChute_r,
        crbc1_8_condition: crbciCondition,
        crbc1_8_condition_rm: crbciCondition_r,
        crbc1_8_joint: crbciJoint,
        crbc1_8_joint_rm: crbciJoint_r,
        crbc1_8_impact: crbciImpact,
        crbc1_8_impact_rm: crbciImpact_r,
        crbc1_8_carry: crbciCarry,
        crbc1_8_carry_rm: crbciCarry_r,
        crbc1_8_return: crbciReturn,
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
                <h3 className=" fw-bold ls-sm">Crusher Limestone NAR 1</h3>
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

                       {/* BC1 */}
                       <tr>
                        <td rowSpan={73} className='text-center align-middle'>
                          <span>3</span>
                        </td>
                        <td rowSpan={73} className='text-center align-middle rotate-text'>
                          <b>NR.213-BC1</b>
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
                            id='crbciSgRotatingParts'
                            name='crbciSgRotatingParts'
                            className="large-checkbox"
                            checked={crbciSgRotatingParts}
                            onChange={(e) => setcrbciSgRotatingParts(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSgRotatingParts_r' name="crbciSgRotatingParts_r" placeholder="" 
                          value={crbciSgRotatingParts_r}
                          onChange={(e) => setcrbciSgRotatingParts_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSgHSC_r' name="crbciSgHSC_r" placeholder="" 
                          value={crbciSgHSC_r}
                          onChange={(e) => setcrbciSgHSC_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSgLSC_r' name="crbciSgLSC_r" placeholder="" 
                          value={crbciSgLSC_r}
                          onChange={(e) => setcrbciSgLSC_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSgCSB_r' name="crbciSgCSB_r" placeholder="" 
                          value={crbciSgCSB_r}
                          onChange={(e) => setcrbciSgCSB_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSgRG_r' name="crbciSgRG_r" placeholder="" 
                          value={crbciSgRG_r}
                          onChange={(e) => setcrbciSgRG_r(e.target.value)}
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
                            id='crbciHeadLagging'
                            name='crbciHeadLagging'
                            className="large-checkbox"
                            checked={crbciHeadLagging}
                            onChange={(e) => setcrbciHeadLagging(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadLagging_r' name="crbciHeadLagging_r" placeholder="" 
                          value={crbciHeadLagging_r}
                          onChange={(e) => setcrbciHeadLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadPrimary_r' name="crbciHeadPrimary_r" placeholder="" 
                          value={crbciHeadPrimary_r}
                          onChange={(e) => setcrbciHeadPrimary_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadSecondary_r' name="crbciHeadSecondary_r" placeholder="" 
                          value={crbciHeadSecondary_r}
                          onChange={(e) => setcrbciHeadSecondary_r(e.target.value)}
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
                            id='crbciHeadFixNoise'
                            name='crbciHeadFixNoise'
                            className="large-checkbox"
                            checked={crbciHeadFixNoise}
                            onChange={(e) => setcrbciHeadFixNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadFixNoise_r' name="crbciHeadFixNoise_r" placeholder="" 
                          value={crbciHeadFixNoise_r}
                          onChange={(e) => setcrbciHeadFixNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciHeadFixTemp' name="crbciHeadFixTemp" placeholder="" 
                          value={crbciHeadFixTemp}
                          onChange={(e) => setcrbciHeadFixTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadFixTemp_r' name="crbciHeadFixTemp_r" placeholder="" 
                          value={crbciHeadFixTemp_r}
                          onChange={(e) => setcrbciHeadFixTemp_r(e.target.value)}
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
                            id='crbciHeadFreeNoise'
                            name='crbciHeadFreeNoise'
                            className="large-checkbox"
                            checked={crbciHeadFreeNoise}
                            onChange={(e) => setcrbciHeadFreeNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadFreeNoise_r' name="crbciHeadFreeNoise_r" placeholder="" 
                          value={crbciHeadFreeNoise_r}
                          onChange={(e) => setcrbciHeadFreeNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciHeadFreeTemp' name="crbciHeadFreeTemp" placeholder="" 
                          value={crbciHeadFreeTemp}
                          onChange={(e) => setcrbciHeadFreeTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadFreeTemp_r' name="crbciHeadFreeTemp_r" placeholder="" 
                          value={crbciHeadFreeTemp_r}
                          onChange={(e) => setcrbciHeadFreeTemp_r(e.target.value)}
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
                            id='crbciHeadRedNoise'
                            name='crbciHeadRedNoise'
                            className="large-checkbox"
                            checked={crbciHeadRedNoise}
                            onChange={(e) => setcrbciHeadRedNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadRedNoise_r' name="crbciHeadRedNoise_r" placeholder="" 
                          value={crbciHeadRedNoise_r}
                          onChange={(e) => setcrbciHeadRedNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 60⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciHeadRedTemp' name="crbciHeadRedTemp" placeholder="" 
                          value={crbciHeadRedTemp}
                          onChange={(e) => setcrbciHeadRedTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadRedTemp_r' name="crbciHeadRedTemp_r" placeholder="" 
                          value={crbciHeadRedTemp_r}
                          onChange={(e) => setcrbciHeadRedTemp_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadRedSeal_r' name="crbciHeadRedSeal_r" placeholder="" 
                          value={crbciHeadRedSeal_r}
                          onChange={(e) => setcrbciHeadRedSeal_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadRedOli_r' name="crbciHeadRedOli_r" placeholder="" 
                          value={crbciHeadRedOli_r}
                          onChange={(e) => setcrbciHeadRedOli_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciHeadRedCoupling_r' name="crbciHeadRedCoupling_r" placeholder="" 
                          value={crbciHeadRedCoupling_r}
                          onChange={(e) => setcrbciHeadRedCoupling_r(e.target.value)}
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
                            id='crbciSnubLagging'
                            name='crbciSnubLagging'
                            className="large-checkbox"
                            checked={crbciSnubLagging}
                            onChange={(e) => setcrbciSnubLagging(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSnubLagging_r' name="crbciSnubLagging_r" placeholder="" 
                          value={crbciSnubLagging_r}
                          onChange={(e) => setcrbciSnubLagging_r(e.target.value)}
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
                            id='crbciSnubUtaraNoise'
                            name='crbciSnubUtaraNoise'
                            className="large-checkbox"
                            checked={crbciSnubUtaraNoise}
                            onChange={(e) => setcrbciSnubUtaraNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSnubUtaraNoise_r' name="crbciSnubUtaraNoise_r" placeholder="" 
                          value={crbciSnubUtaraNoise_r}
                          onChange={(e) => setcrbciSnubUtaraNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciSnubUtaraTemp' name="crbciSnubUtaraTemp" placeholder="" 
                          value={crbciSnubUtaraTemp}
                          onChange={(e) => setcrbciSnubUtaraTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSnubUtaraTemp_r' name="crbciSnubUtaraTemp_r" placeholder="" 
                          value={crbciSnubUtaraTemp_r}
                          onChange={(e) => setcrbciSnubUtaraTemp_r(e.target.value)}
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
                            id='crbciSnubSelNoise'
                            name='crbciSnubSelNoise'
                            className="large-checkbox"
                            checked={crbciSnubSelNoise}
                            onChange={(e) => setcrbciSnubSelNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSnubSelNoise_r' name="crbciSnubSelNoise_r" placeholder="" 
                          value={crbciSnubSelNoise_r}
                          onChange={(e) => setcrbciSnubSelNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciSnubSelTemp' name="crbciSnubSelTemp" placeholder="" 
                          value={crbciSnubSelTemp}
                          onChange={(e) => setcrbciSnubSelTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSnubSelTemp_r' name="crbciSnubSelTemp_r" placeholder="" 
                          value={crbciSnubSelTemp_r}
                          onChange={(e) => setcrbciSnubSelTemp_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciLagging_r' name="crbciBaratLagging_r" placeholder="" 
                          value={crbciBaratLagging_r}
                          onChange={(e) => setcrbciBaratLagging_r(e.target.value)}
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
                            id='crbciBaratUtaraNoise'
                            name='crbciBaratUtaraNoise'
                            className="large-checkbox"
                            checked={crbciBaratUtaraNoise}
                            onChange={(e) => setcrbciBaratUtaraNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciBaratUtaraNoise_r' name="crbciBaratUtaraNoise_r" placeholder="" 
                          value={crbciBaratUtaraNoise_r}
                          onChange={(e) => setcrbciBaratUtaraNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciBaratUtaraTemp' name="crbciBaratUtaraTemp" placeholder="" 
                          value={crbciBaratUtaraTemp}
                          onChange={(e) => setcrbciBaratUtaraTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciBaratUtaraTemp_r' name="crbciBaratUtaraTemp_r" placeholder="" 
                          value={crbciBaratUtaraTemp_r}
                          onChange={(e) => setcrbciBaratUtaraTemp_r(e.target.value)}
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
                            id='crbciBaratSelatanNoise'
                            name='crbciBaratSelatanNoise'
                            className="large-checkbox"
                            checked={crbciBaratSelatanNoise}
                            onChange={(e) => setcrbciBaratSelatanNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciBaratSelatanNoise_r' name="crbciBaratSelatanNoise_r" placeholder="" 
                          value={crbciBaratSelatanNoise_r}
                          onChange={(e) => setcrbciBaratSelatanNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciBaratSelatanTemp' name="crbciBaratSelatanTemp" placeholder="" 
                          value={crbciBaratSelatanTemp}
                          onChange={(e) => setcrbciBaratSelatanTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciBaratSelatanTemp_r' name="crbciBaratSelatanTemp_r" placeholder="" 
                          value={crbciBaratSelatanTemp_r}
                          onChange={(e) => setcrbciBaratSelatanTemp_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ backgroundColor: 'var(--bs-gray-100)' }}>
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTimurLagging_r' name="crbciTimurLagging_r" placeholder="" 
                          value={crbciTimurLagging_r}
                          onChange={(e) => setcrbciTimurLagging_r(e.target.value)}
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
                            id='crbciTimurUtaraNoise'
                            name='crbciTimurUtaraNoise'
                            className="large-checkbox"
                            checked={crbciTimurUtaraNoise}
                            onChange={(e) => setcrbciTimurUtaraNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTimurUtaraNoise_r' name="crbciTimurUtaraNoise_r" placeholder="" 
                          value={crbciTimurUtaraNoise_r}
                          onChange={(e) => setcrbciTimurUtaraNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciTimurUtaraTemp' name="crbciTimurUtaraTemp" placeholder="" 
                          value={crbciTimurUtaraTemp}
                          onChange={(e) => setcrbciTimurUtaraTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTimurUtaraTemp_r' name="crbciTimurUtaraTemp_r" placeholder="" 
                          value={crbciTimurUtaraTemp_r}
                          onChange={(e) => setcrbciTimurUtaraTemp_r(e.target.value)}
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
                            id='crbciTimurSelatanNoise'
                            name='crbciTimurSelatanNoise'
                            className="large-checkbox"
                            checked={crbciTimurSelatanNoise}
                            onChange={(e) => setcrbciTimurSelatanNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTimurSelatanNoise_r' name="crbciTimurSelatanNoise_r" placeholder="" 
                          value={crbciTimurSelatanNoise_r}
                          onChange={(e) => setcrbciTimurSelatanNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciTimurSelatanTemp' name="crbciTimurSelatanTemp" placeholder="" 
                          value={crbciTimurSelatanTemp}
                          onChange={(e) => setcrbciTimurSelatanTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTimurSelatanTemp_r' name="crbciTimurSelatanTemp_r" placeholder="" 
                          value={crbciTimurSelatanTemp_r}
                          onChange={(e) => setcrbciTimurSelatanTemp_r(e.target.value)}
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
                            id='crbciTakeLagging'
                            name='crbciTakeLagging'
                            className="large-checkbox"
                            checked={crbciTakeLagging}
                            onChange={(e) => setcrbciTakeLagging(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTakeLagging_r' name="crbciTakeLagging_r" placeholder="" 
                          value={crbciTakeLagging_r}
                          onChange={(e) => setcrbciTakeLagging_r(e.target.value)}
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
                            id='crbciTakeUtaraNoise'
                            name='crbciTakeUtaraNoise'
                            className="large-checkbox"
                            checked={crbciTakeUtaraNoise}
                            onChange={(e) => setcrbciTakeUtaraNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTakeUtaraNoise_r' name="crbciTakeUtaraNoise_r" placeholder="" 
                          value={crbciTakeUtaraNoise_r}
                          onChange={(e) => setcrbciTakeUtaraNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciTakeUtaraTemp' name="crbciTakeUtaraTemp" placeholder="" 
                          value={crbciTakeUtaraTemp}
                          onChange={(e) => setcrbciTakeUtaraTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTakeUtaraTemp_r' name="crbciTakeUtaraTemp_r" placeholder="" 
                          value={crbciTakeUtaraTemp_r}
                          onChange={(e) => setcrbciTakeUtaraTemp_r(e.target.value)}
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
                            id='crbciTakeSelNoise'
                            name='crbciTakeSelNoise'
                            className="large-checkbox"
                            checked={crbciTakeSelNoise}
                            onChange={(e) => setcrbciTakeSelNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTakeSelNoise_r' name="crbciTakeSelNoise_r" placeholder="" 
                          value={crbciTakeSelNoise_r}
                          onChange={(e) => setcrbciTakeSelNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciTakeSelTemp' name="crbciTakeSelTemp" placeholder="" 
                          value={crbciTakeSelTemp}
                          onChange={(e) => setcrbciTakeSelTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTakeSelTemp_r' name="crbciTakeSelTemp_r" placeholder="" 
                          value={crbciTakeSelTemp_r}
                          onChange={(e) => setcrbciTakeSelTemp_r(e.target.value)}
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
                            id='crbciTailLagging'
                            name='crbciTailLagging'
                            className="large-checkbox"
                            checked={crbciTailLagging}
                            onChange={(e) => setcrbciTailLagging(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTailLagging_r' name="crbciTailLagging_r" placeholder="" 
                          value={crbciTailLagging_r}
                          onChange={(e) => setcrbciTailLagging_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTailVs_r' name="crbciTailVs_r" placeholder="" 
                          value={crbciTailVs_r}
                          onChange={(e) => setcrbciTailVs_r(e.target.value)}
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
                            id='crbciTailUtaraNoise'
                            name='crbciTailUtaraNoise'
                            className="large-checkbox"
                            checked={crbciTailUtaraNoise}
                            onChange={(e) => setcrbciTailUtaraNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTailUtaraNoise_r' name="crbciTailUtaraNoise_r" placeholder="" 
                          value={crbciTailUtaraNoise_r}
                          onChange={(e) => setcrbciTailUtaraNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciTailUtaraTemp' name="crbciTailUtaraTemp" placeholder="" 
                          value={crbciTailUtaraTemp}
                          onChange={(e) => setcrbciTailUtaraTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTailUtaraTemp_r' name="crbciTailUtaraTemp_r" placeholder="" 
                          value={crbciTailUtaraTemp_r}
                          onChange={(e) => setcrbciTailUtaraTemp_r(e.target.value)}
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
                            id='crbciTailSelNoise'
                            name='crbciTailSelNoise'
                            className="large-checkbox"
                            checked={crbciTailSelNoise}
                            onChange={(e) => setcrbciTailSelNoise(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTailSelNoise_r' name="crbciTailSelNoise_r" placeholder="" 
                          value={crbciTailSelNoise_r}
                          onChange={(e) => setcrbciTailSelNoise_r(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                        <td className='align-middle'>Temperatur</td>
                        <td className='align-middle'>&lt; 40⁰</td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="number" id='crbciTailSelTemp' name="crbciTailSelTemp" placeholder="" 
                          value={crbciTailSelTemp}
                          onChange={(e) => setcrbciTailSelTemp(e.target.value)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciTailSelTemp_r' name="crbciTailSelTemp_r" placeholder="" 
                          value={crbciTailSelTemp_r}
                          onChange={(e) => setcrbciTailSelTemp_r(e.target.value)}
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
                            id='crbciSkirt'
                            name='crbciSkirt'
                            className="large-checkbox"
                            checked={crbciSkirt}
                            onChange={(e) => setcrbciSkirt(e.target.checked)}
                          /></td>
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciSkirt_r' name="crbciSkirt_r" placeholder="" 
                          value={crbciSkirt_r}
                          onChange={(e) => setcrbciSkirt_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciChute_r' name="crbciChute_r" placeholder="" 
                          value={crbciChute_r}
                          onChange={(e) => setcrbciChute_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciCondition_r' name="crbciCondition_r" placeholder="" 
                          value={crbciCondition_r}
                          onChange={(e) => setcrbciCondition_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciJoint_r' name="crbciJoint_r" placeholder="" 
                          value={crbciJoint_r}
                          onChange={(e) => setcrbciJoint_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciImpact_r' name="crbciImpact_r" placeholder="" 
                          value={crbciImpact_r}
                          onChange={(e) => setcrbciImpact_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciCarry_r' name="crbciCarry_r" placeholder="" 
                          value={crbciCarry_r}
                          onChange={(e) => setcrbciCarry_r(e.target.value)}
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
                        <td className='p-0'><Form.Control 
                          style={{ height: '65px'}} type="text" id='crbciReturn' name="crbciReturn" placeholder="" 
                          value={crbciReturn}
                          onChange={(e) => setcrbciReturn(e.target.value)}
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

export default N1;
import ngSvg from "../assets/svg/Nigeria (NG).svg";
import checkCircle from "../assets/svg/check-circle-purple.svg";
import removeCircle from "../assets/svg/remove-circle.svg";

const IndividualPlansTable = () => {
  const plans = [
    {
      name: "GOLD",
      regionOfCover: "Nigeria",
      hospitalCategory: "D",
      totalBenefit: "₦1,062,500",
      premium: "₦75,600",
      outPatientBenefits: "up to limit of ₦250,000",
      inPatientBenefits: "up to limit of ₦350,000",
      admissionFeediing: "General Ward",
      surgicalProcedures: "Up to limit of ₦200,000",
      familyPlanningService: "IUCD, pills and Injectables",
      infertilityTreatments: "Consultation, Counselling, (Up to ₦20,000 limit)",
      maternalBenefits: "up to limit of ₦200,000",
      neonatalIntensiveCare: "Up to limit of 2 days per annum",
      zeroToFiveImmunization: false,
      accidentAndEmergencyBenefit: "₦150,000",
      icu: "48 Hours",
      opticalCareBenefit: "up to limit of ₦12,500",
      primarySecondaryCare: "Up to limit of ₦20,000 per annum",
      physiotherapy: "5 sessions",
      diagnosticServices: "up to limit of ₦350000",
      advancedComplexInvestigation: false,
      preexistingChronicConditions: "up to limit of ₦350000",
      otherServices: "up to limit of ₦350000",
      annualHealthScreening:
        "Physical Examination, Urinalysis, PCV, Blood pressure, Blood Sugar ",
      psychiatricTreatment: "1 month",
      reimbursementDeliveryOverseas: false,
      reimbursementSurgeryOverseas: false,
    },
    {
      name: "PEARL",
      regionOfCover: "Nigeria",
      hospitalCategory: "C-D",
      totalBenefit: "₦1,218,500",
      premium: "₦125,600",
      outPatientBenefits: "up to limit of ₦300,000",
      inPatientBenefits: "up to limit of ₦500,000",
      admissionFeediing: "Semi private Ward",
      surgicalProcedures: "Up to limit of ₦300,000",
      familyPlanningService: "IUCD, pills and Injectables",
      infertilityTreatments:
        "Consultation, Counselling, SFA, USS (Up to ₦30,000 limit)",
      maternalBenefits: "up to limit of ₦300,000",
      neonatalIntensiveCare: "Up to limit of 3 days per annum",
      zeroToFiveImmunization: false,
      accidentAndEmergencyBenefit: "₦300,000",
      icu: "3 Days",
      opticalCareBenefit: "up to limit of ₦15,000",
      primarySecondaryCare: "Up to limit of ₦30,000 per annum",
      physiotherapy: "7 sessions",
      diagnosticServices: "up to limit of ₦500000",
      advancedComplexInvestigation: "Emergency Only (1 Per Annum)",
      preexistingChronicConditions: "up to limit of ₦500000",
      otherServices: "up to limit of ₦500000",
      annualHealthScreening:
        "Physical Examination, Urinalysis, PCV, Blood pressure, Blood Sugar, Chest X-ray, Serum Cholesterol",
      psychiatricTreatment: "1 month",
      reimbursementDeliveryOverseas: false,
      reimbursementSurgeryOverseas: false,
    },
    {
      name: "RUBY",
      regionOfCover: "Nigeria",
      hospitalCategory: "B-D",
      totalBenefit: "₦2,440,000",
      premium: "₦205,600",
      outPatientBenefits: "up to limit of ₦400,000",
      inPatientBenefits: "up to limit of ₦1,000,000",
      admissionFeediing: "Private Ward ",
      surgicalProcedures: "Up to limit of ₦450,000",
      familyPlanningService: "Including Norplant or Implanon",
      infertilityTreatments:
        "Consultation, Counselling, SFA, USS, HSG (Up to ₦40,000 limit)",
      maternalBenefits: "up to limit of ₦300,000",
      neonatalIntensiveCare: "Up to limit of 5 days per annum",
      zeroToFiveImmunization: true,
      accidentAndEmergencyBenefit: "₦400,000",
      icu: "5 Days",
      opticalCareBenefit: "up to limit of ₦25,000",
      primarySecondaryCare: "Up to limit of ₦40,000 per annum",
      physiotherapy: "10 sessions",
      diagnosticServices: "up to limit of ₦1000000",
      advancedComplexInvestigation: "1 Session per annum",
      preexistingChronicConditions: "up to limit of ₦1000000",
      otherServices: "up to limit of ₦1000000",
      annualHealthScreening:
        "Physical Examination, Urinalysis, PCV, Blood Pressure, Blood Sugar, Chest x-ray, ECG, Serum Cholesterol, LFT, FBC,  Cervical Smears every 2 years for Women > 30 years and above, PSA for Men above 40 yrs",
      psychiatricTreatment: "2 months",
      reimbursementDeliveryOverseas: "₦200,000",
      reimbursementSurgeryOverseas: "Subject to Surgical Limit",
    },
    {
      name: "RUBY PLUS",
      regionOfCover: "Nigeria",
      hospitalCategory: "A-D",
      totalBenefit: "₦4,560,000",
      premium: "₦457,600",
      outPatientBenefits: "up to limit of ₦500,000",
      inPatientBenefits: "up to limit of ₦2,000,000",
      admissionFeediing: "Private Ward",
      surgicalProcedures: "Up to limit of ₦1,000,000",
      familyPlanningService: "Including Norplant or Implanon",
      infertilityTreatments:
        "Consultation, Counselling, SFA, USS (Up to ₦80,000 limit)",
      maternalBenefits: "up to limit of ₦750,000",
      neonatalIntensiveCare: "Up to limit of 5 days per annum",
      zeroToFiveImmunization: true,
      accidentAndEmergencyBenefit: "₦500,000",
      icu: "5 Days",
      opticalCareBenefit: "up to limit of ₦40,000",
      primarySecondaryCare: "Up to limit of ₦70,000 per annum",
      physiotherapy: "15 sessions",
      diagnosticServices: "up to limit of ₦2000000",
      advancedComplexInvestigation: "2 Sessions per annum",
      preexistingChronicConditions: "up to limit of ₦2000000",
      otherServices: "up to limit of ₦2000000",
      annualHealthScreening:
        "Physical Examination, Urinalysis, PCV, Blood Pressure, Blood Sugar, Chest x-ray, ECG, Serum Cholesterol, LFT, FBC, Electrolyte, Urea, & Creatinine, Mammogram, Cervical Smears every 2 years for Women > 30 years and above, PSA for Men above 40 yrs",
      psychiatricTreatment: "2 months",
      reimbursementDeliveryOverseas: "₦200,000",
      reimbursementSurgeryOverseas: "Subject to Surgical Limit",
    },
  ];

  const generalExclusions = [
    "Psychiatric Institutionalization",
    "Infertility Investigation other than listed or treatment such as IVF, ICSI, G.I.F.T, etc Virility enhancing drugs",
    "Organ Surgery and Transplant",
    "Cosmetic and Plastic Treatment",
    "Drug and Alcohol Abuse and Rehabilitation",
    "Supply of Prosthesis (Artificial Limbs, Dental Prosthesis)",
    "Hormonal Replacement Therapy",
    "Treatment of Obesity",
    "Treatment of Epidemic and Pandemic Home Care, Domiciliary Care",
    "Herbal Drugs, Non-prescription Drugs",
    "Dental Care not listed in covered services",
    "Comprehensive Health Screening outside the scope of benefit",
    "Treatment for New Born not registered under the plan",
    "Congenital Abnormalities & Conditions (e.g., sickle cell anemia)",
    "Neonatal Care not listed under Neonatal Services",
    "Speech Disorders, Learning Difficulties, Behavioral and Developmental problem",
    "Consultation with unrecognized Consultants, Hospitals, Family Doctors, Therapist, Dental Practitioners or Complimentary/Traditional Medicine Practitioners Elective Caesarean Section",
    "Self-inflicted injuries",
  ];

  return (
    <div className="w-full text-ghmGrey-500 p-4">
      <div className="overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-ghmGrey-400">
              <th className="text-left text-nowrap max-w-lg font-medium ghm-table-row">
                BENEFIT SUB-CATEGORIES
              </th>
              {plans.map(plan => (
                <th
                  key={plan.name}
                  className="text-left font-medium ghm-table-row"
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* region of cover row */}
            <tr>
              <td className="ghm-table-row">Region of Cover</td>
              {plans.map(plan => (
                <td key={plan.name} className="ghm-table-row">
                  <div className="flex items-center gap-2">
                    <span>
                      <img src={ngSvg} alt="" />
                    </span>
                    <span>Nigeria</span>
                  </div>
                </td>
              ))}
            </tr>
            {/* hospital category  */}
            <tr>
              <td className="ghm-table-row">Hospital Category</td>
              {plans.map(plan => (
                <td className="ghm-table-row">
                  <p>{plan.hospitalCategory}</p>
                </td>
              ))}
            </tr>
            {/* Total Plan Benefit  */}
            <tr>
              <td className="ghm-table-row">Total Plan Benefit</td>
              {plans.map(plan => (
                <td className="ghm-table-row">
                  <p>{plan.totalBenefit}</p>
                </td>
              ))}
            </tr>
            {/* premium table header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium"
              >
                PREMIUM
              </td>
            </tr>
            {/* Premium per person / annum  */}
            <tr>
              <td className="ghm-table-row">Premium per person / annum</td>
              {plans.map(plan => (
                <td className="ghm-table-row">
                  <p>{plan.premium}</p>
                </td>
              ))}
            </tr>
            {/* age limit table header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium"
              >
                AGE LIMIT
              </td>
            </tr>
            {/* Principal / Spouse  */}
            <tr>
              <td className="ghm-table-row">Principal / Spouse</td>
              <td colSpan={4} className="ghm-table-row text-center">
                18 - 65 years
              </td>
            </tr>
            {/* Dependents  */}
            <tr>
              <td className="ghm-table-row">Dependents</td>
              <td colSpan={4} className="ghm-table-row text-center">
                0 - 18 years
              </td>
            </tr>
            {/* out-patient benefits header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                OUT-PATIENT BENEFITS
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.outPatientBenefits.toUpperCase()}
                </th>
              ))}
            </tr>
            {/* general consultation */}
            <tr>
              <td className="ghm-table-row ">
                General Consultation, Specialist Consultation, Out Patient Care
                including Laboratory Investigations, Basic Imaging (X-Ray & USS)
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* Prescribed medications and drugs */}
            <tr>
              <td className="ghm-table-row ">
                Prescribed medications and drugs
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* in-patient benefits header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                IN-PATIENT BENEFITS
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.inPatientBenefits.toUpperCase()}
                </th>
              ))}
            </tr>
            {/* Admission & Feeding */}
            <tr>
              <td className="ghm-table-row max-w-lg">Admission & Feeding</td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.admissionFeediing}</td>
              ))}
            </tr>
            {/* Laboratory investigations, */}
            <tr>
              <td className="ghm-table-row ">
                Laboratory investigations, Nursing Care, Dressing & Prescribed
                Medications
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* Intensive care services */}
            <tr>
              <td className="ghm-table-row ">Intensive care services</td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* MAJOR DISEASE CONDITION BENEFITS header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium"
              >
                MAJOR DISEASE CONDITION BENEFITS (AFTER 6 MONTHS WAITING PERIOD)
              </td>
            </tr>
            {/* Surgical Procedures */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Surgical Procedures (Minor, Intermediate & Major)- including
                anaesthesia, surgical supplies, blood/blood Products
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.surgicalProcedures}</td>
              ))}
            </tr>
            {/* REPRODUCTIVE HEALTH BENEFIT header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium"
              >
                REPRODUCTIVE HEALTH BENEFIT (AFTER 12 MONTHS WAITING PERIOD){" "}
              </td>
            </tr>
            {/* Family Planning Service */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Family Planning Service including IUDS, Injectables, Pills,
                Tubal Ligation
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.familyPlanningService}</td>
              ))}
            </tr>
            {/*  Infertility Treatments  Service */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Infertility Treatments (Subject to outpatient limit)
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.infertilityTreatments}</td>
              ))}
            </tr>
            {/*  MATERNAL BENEFITS header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                MATERNAL BENEFITS (AFTER 12 MONTHS WAITING PERIOD)
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.maternalBenefits.toUpperCase()}
                </th>
              ))}
            </tr>
            {/*  Ante-Natal Care */}
            <tr>
              <td className="ghm-table-row ">
                Ante-Natal Care at Registered Network Provider
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* Normal Delivery including Post-partum Care */}
            <tr>
              <td className="ghm-table-row ">
                Normal Delivery including Post-partum Care
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* Operative and Assisted Delivery including Post-partum Care */}
            <tr>
              <td className="ghm-table-row ">
                Operative and Assisted Delivery including Post-partum Care
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/*  Surgical Delivery (As part of Maternal limit) */}
            <tr>
              <td className="ghm-table-row ">
                Surgical Delivery (As part of Maternal limit)
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/*  Medical Conditions during Pregnancy */}
            <tr>
              <td className="ghm-table-row ">
                Medical Conditions during Pregnancy
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* NEONATAL & PEADIATRIC CARE header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium"
              >
                NEONATAL & PEADIATRIC CARE (FOR BABIES REGISTERED ON THE PLAN)
              </td>
            </tr>
            {/*  Male Circumcision, Ear Piercing and Routine Immunization */}
            <tr>
              <td className="ghm-table-row ">
                Male Circumcision, Ear Piercing and Routine Immunization, (NPI)
                0 - 5 Years - DPT, Hepatitis B, HiB (Pentavalent), BCG, Measles,
                Oral Polio, Vitamin A -As part of outpatient limit.
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/*  Exchange Blood Transfusion */}
            <tr>
              <td className="ghm-table-row ">
                Exchange Blood Transfusion (0 -6 weeks-As part of inpatient
                limit)
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/*  Neonatal Intensive Care */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Neonatal Intensive Care (Photo therapy, Incubator Care, Special
                Care Baby Unit, Treatment of Mild /Moderate Neonatal Sepsis) -
                As part of in-patient limit
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.neonatalIntensiveCare}</td>
              ))}
            </tr>
            {/*   0 - 5 Years Immunizations */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                0 - 5 Years Immunizations (Chickenpox, Rota-virus, MMR,
                Pneumococcal, Yellow Fever, Hepatitis B, HIB, Typhoid Fever,
                Meningitis,) -at designated centres- As part of outpatient limit
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">
                  {plan.zeroToFiveImmunization ? (
                    plan.name === "RUBY" ? (
                      "Up to limit of 5 days per annum"
                    ) : (
                      <img src={checkCircle} alt="" />
                    )
                  ) : (
                    <img src={removeCircle} alt="" />
                  )}
                </td>
              ))}
            </tr>
            {/*   ACCIDENTS & EMERGENCY BENEFIT header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                ACCIDENTS & EMERGENCY BENEFIT (PART OF IN-PATIENT LIMIT)
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.accidentAndEmergencyBenefit.toUpperCase()}
                </th>
              ))}
            </tr>
            {/* Emergency Evacuation, Investigations, Life Saving Interventions */}
            <tr>
              <td className="ghm-table-row ">
                Emergency Evacuation, Investigations, Life Saving Interventions
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/*  Intensive Care Unit */}
            <tr>
              <td className="ghm-table-row max-w-lg">Intensive Care Unit</td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.icu}</td>
              ))}
            </tr>
            {/*    OPTICAL CARE BENEFIT header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                OPTICAL CARE BENEFIT (AFTER 6 MONTHS WAITING PERIOD)
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.opticalCareBenefit.toUpperCase()}
                </th>
              ))}
            </tr>
            {/* Consultation, Examination, Simple Eye Test and Medications, Optical Lenses and Frames (every 2 years), Optical Surgeries */}
            <tr>
              <td className="ghm-table-row ">
                Consultation, Examination, Simple Eye Test and Medications,
                Optical Lenses and Frames (every 2 years), Optical Surgeries
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* DENTAL CARE BENEFIT  header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium"
              >
                DENTAL CARE BENEFIT (AFTER 6 MONTHS WAITING PERIOD)
              </td>
            </tr>
            {/*  Primary and Secondary care */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Primary and Secondary care
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.primarySecondaryCare}</td>
              ))}
            </tr>
            {/* PHYSIOTHERAPY SERVICES  header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium"
              >
                PHYSIOTHERAPY SERVICES (AFTER 6 MONTHS WAITING PERIOD)
              </td>
            </tr>
            {/*  Physiotherapy- As part of in-patient limit */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Physiotherapy- As part of in-patient limit
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.physiotherapy}</td>
              ))}
            </tr>
            {/*  DIAGNOSTIC SERVICES header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                DIAGNOSTIC SERVICES- AS PART OF OUTPATIEND / IN-PATIENT LIMIT
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.diagnosticServices.toUpperCase()}
                </th>
              ))}
            </tr>
            {/* Basic Radio-logical Investigations (xrays, scans) and  Laboratory Test */}
            <tr>
              <td className="ghm-table-row ">
                Basic Radio-logical Investigations (xrays, scans) and Laboratory
                Test
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/*   Advanced and Complex Investigation */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Advanced and Complex Investigation
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">
                  {plan.advancedComplexInvestigation ? (
                    <p>{plan.advancedComplexInvestigation}</p>
                  ) : (
                    <img src={removeCircle} alt="" />
                  )}
                </td>
              ))}
            </tr>
            {/*  PRE EXISTING/ CHRONIC CONDITION header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                PRE EXISTING/ CHRONIC CONDITION
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.preexistingChronicConditions.toUpperCase()}
                </th>
              ))}
            </tr>
            {/* Preexisting/Chronic conditions (After 12 months waiting period) */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Preexisting/Chronic conditions (After 12 months waiting period)
              </td>
              <td
                colSpan={4}
                className="ghm-table-row text-center text-ghmPurple-300"
              >
                AS PART OF OUT-PATIENT
              </td>
            </tr>
            {/*  OTHER SERVICES/BENEFITS header */}
            <tr className="bg-ghmGrey-400">
              <th className="text-left font-medium ghm-table-row">
                OTHER SERVICES/BENEFITS
              </th>
              {plans.map(plan => (
                <th className=" text-left text-nowrap  font-medium ghm-table-row">
                  {plan.otherServices.toUpperCase()}
                </th>
              ))}
            </tr>
            {/*  Annual Health Screening at Designated Centres */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Annual Health Screening at Designated Centres
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.annualHealthScreening}</td>
              ))}
            </tr>
            {/* Psychiatric Treatment (Outpatient Only) */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Psychiatric Treatment (Outpatient Only)
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">{plan.psychiatricTreatment}</td>
              ))}
            </tr>
            {/* HIV/AIDS Care and Treatment at Designated Specialist Centres */}
            <tr>
              <td className="ghm-table-row ">
                HIV/AIDS Care and Treatment at Designated Specialist Centres
              </td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* Second Opinion Services */}
            <tr>
              <td className="ghm-table-row ">Second Opinion Services</td>
              {plans.map(() => (
                <td className="ghm-table-row">
                  <img src={checkCircle} alt="" />
                </td>
              ))}
            </tr>
            {/* Reimbursement for Delivery Overseas */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Reimbursement for Delivery Overseas
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">
                  {plan.reimbursementDeliveryOverseas ? (
                    <p>{plan.reimbursementDeliveryOverseas}</p>
                  ) : (
                    <img src={removeCircle} alt="" />
                  )}
                </td>
              ))}
            </tr>
            {/* Reimbursement for Surgery Overseas */}
            <tr>
              <td className="ghm-table-row max-w-lg">
                Reimbursement for Surgery Overseas
              </td>
              {plans.map(plan => (
                <td className="ghm-table-row">
                  {plan.reimbursementSurgeryOverseas ? (
                    <p>{plan.reimbursementSurgeryOverseas}</p>
                  ) : (
                    <img src={removeCircle} alt="" />
                  )}
                </td>
              ))}
            </tr>
            {/* General exclusions header */}
            <tr>
              <td
                colSpan={5}
                className="ghm-table-row bg-ghmGrey-400 font-medium text-ghmPurple-700"
              >
                GENERAL EXCLUSIONS
              </td>
            </tr>
            {generalExclusions.map(exclusion => (
              <tr>
                <td colSpan={5} className="ghm-table-row ">
                  {exclusion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndividualPlansTable;

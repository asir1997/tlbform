import { useState } from "react";
import FormWrap from "./wrap";
import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";
import FormSubmit from "./submit";
import FormSuccess from "./success";

export default function MultiStepForm() {
  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () => setFormStep((formStep) => formStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <FormWrap currentStep={formStep}>
        <StepOne
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
        />
        <StepTwo
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
        />
        <StepThree
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
        />
        <FormSubmit
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
        />

        <FormSuccess formStep={formStep} />
      </FormWrap>
    </div>
  );
}

import { useForm } from "react-hook-form";
import { useFormData } from "@/context";
import { Select } from "../ui/select";
import { Input } from "../ui/input";

export default function StepThree({ formStep, nextFormStep, prevFormStep }) {
  const { setFormValues } = useFormData();
  // console.log(formStep);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  const statesArray = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <div className={formStep === 3 ? "block" : "hidden"}>
      <div className="border-b border-gray-200 pb-5 ">
        <h2 className="font-heading text-lg font-bold">
          Financial Information
        </h2>
        <p className="text-gray-600 text-sm">
          Please add your financial Information
        </p>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-7">
            <Select
              label="Entity Type"
              name="entity_type"
              options={["Corporation", "LLC"]}
              register={register}
              errors={errors}
              validations={{
                required: "Entity Type is required",
              }}
            />
            <Input
              label="Business EIN / IRS Tax ID Number"
              name="ein_tax_id"
              placeholder="12-3456789"
              register={register}
              errors={errors}
              validations={{
                required: "Business EIN is required",
                maxLength: 10,
              }}
            />
            <Select
              label="State of Incorporation"
              name="incorp_state"
              options={statesArray}
              register={register}
              errors={errors}
              validations={{
                required: "State is required",
              }}
            />
            <Input
              label="Established Date"
              type="date"
              name="established"
              register={register}
              errors={errors}
              validations={{
                required: "Enter your Established Date",
              }}
            />
            <Input
              label="Number of US Employees"
              type="number"
              name="employees"
              register={register}
              errors={errors}
              validations={{
                required: "Number of Employees is required",
              }}
            />
            <div className="grid md:grid-cols-2 gap-10">
              <Input
                label="Annual Gross Income"
                prependText="$"
                appendText="USD"
                placeholder="0.00"
                name="gross_income"
                inputMode="numeric"
                register={register}
                errors={errors}
                validations={{
                  required: "Annual Gross Income is required",
                  pattern: {
                    valueAsNumber: true,
                    message: "Please enter a valid number",
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
                }}
              />
              <Input
                label="Annual Net Income"
                name="net_income"
                inputMode="numeric"
                prependText="$"
                appendText="USD"
                placeholder="0.00"
                register={register}
                errors={errors}
                validations={{
                  required: "Annual Net Income is required",
                  pattern: {
                    valueAsNumber: true,
                    message: "Please enter a valid number",
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
                }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-600  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              onClick={prevFormStep}>
              Go Back
            </button>
            <button
              type="submit"
              className="text-white bg-primary hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

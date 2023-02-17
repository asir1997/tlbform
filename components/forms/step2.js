import { useForm } from "react-hook-form";
import { useFormData } from "@/context";
import { Select } from "../ui/select";
import { Input } from "../ui/input";

export default function StepTwo({ formStep, nextFormStep, prevFormStep }) {
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
    <div className={formStep === 2 ? "block" : "hidden"}>
      <div className="border-b border-gray-200 pb-5 ">
        <h2 className="font-heading text-lg font-bold">Company Information</h2>
        <p className="text-gray-600 text-sm">
          Please add your company Information
        </p>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-7">
            <Input
              label="Company Name"
              name="company"
              register={register}
              errors={errors}
              validations={{
                required: "Company name is required",
                maxLength: 80,
              }}
            />
            <Input
              label="Legal Entity Name"
              name="entity_name"
              register={register}
            />
            <Input
              label="Website URL"
              type="url"
              name="website"
              placeholder="https://"
              register={register}
              errors={errors}
              validations={{
                required: "Enter your website URL",
                pattern: {
                  value:
                    /^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,8}([:0-9]{1,5})?(\/.*)?$/,
                  message: "Please enter a valid URL",
                },
              }}
            />
            <Input
              label="Company Phone Number"
              name="company_phone"
              placeholder="+1 (123) 456 7890"
              register={register}
              errors={errors}
              validations={{
                required: "Phone Number is required",
                pattern: {
                  value: /^\+?1?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  message: "Enter a valid US Phone number",
                },
              }}
            />
            <div className="md:col-span-2 border border-gray-100  "></div>

            <Input
              label="Street Address"
              name="street"
              register={register}
              placeholder="123 Main St."
              errors={errors}
              validations={{
                required: "Street Address is required",
              }}
            />

            <div className="grid md:grid-cols-2 gap-10">
              <Input
                label="Apartment, suite, or floor number"
                name="apt_suite"
                placeholder="Apt. 4B"
                register={register}
              />
              <Input
                label="City"
                name="city"
                register={register}
                errors={errors}
                validations={{
                  required: "City is required",
                }}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <Select
                label="State"
                name="state"
                options={statesArray}
                register={register}
                errors={errors}
                validations={{
                  required: "State is required",
                }}
              />
              <Input
                label="Zip Code"
                type="number"
                name="zip"
                placeholder="11001"
                register={register}
                errors={errors}
                validations={{
                  required: "Zip Code is required",
                  maxLength: 80,
                }}
              />
            </div>
            <Select
              label="Country"
              name="country"
              options={["United States"]}
              defaultValue="United States"
              register={register}
              errors={errors}
              validations={{
                required: "Country is required",
              }}
            />
          </div>
          <div className="flex justify-between mt-10">
            <button
              type="button"
              className="  bg-gray-200 hover:bg-gray-300 text-gray-600  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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

import { useForm } from "react-hook-form";
import { useFormData } from "@/context";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

export default function StepOne({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  //   console.log(formStep);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? "block" : "hidden"}>
      <div className="border-b border-gray-200 pb-5 ">
        <h2 className="font-heading text-lg font-bold">Personal Information</h2>
        <p className="text-gray-600 text-sm">
          Please add your Personal Information
        </p>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-7">
            <Input
              label="First Name"
              name="first_name"
              register={register}
              errors={errors}
              validations={{
                required: "First name is required",
                maxLength: 80,
              }}
            />
            <Input
              label="Last Name"
              name="last_name"
              register={register}
              errors={errors}
              validations={{
                required: "Last name is required",
                maxLength: 80,
              }}
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              register={register}
              errors={errors}
              validations={{
                required: "Enter your email address",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              }}
            />
            <Input
              label="Phone Number"
              name="phone"
              placeholder="+1 (123) 456 7890"
              register={register}
              errors={errors}
              validations={{
                required: "Phone Number is required",
                pattern: {
                  value: /^\+?1?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  message: "Enter a valid US phone number",
                },
              }}
            />
          </div>
          <div className="flex justify-end mt-10">
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

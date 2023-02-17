import { useFormData } from "@/context";

export default function FormSubmit({ formStep, nextFormStep, prevFormStep }) {
  const { data } = useFormData();
  // console.log(formStep);

  const submitForm = () => {
    console.log(data);
    // alert("Form Submitted Successfully! ");
    nextFormStep();
  };

  return (
    <div className={formStep === 4 ? "block" : "hidden"}>
      <h2 className="text-start text-xl font-heading">
        Please confirm the details below!
      </h2>
      <p className="text-gray-600 text-sm">
        Before submitting, please confirm the data. If you need any changes,
        click on the "Go Back" button.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-8">
        {Object.entries(data).map(([key, value]) => (
          <div className="flex gap-1 flex-col capitalize" key={key}>
            <span className="text-sm text-gray-500">{key}</span>
            <p className="">{value || "-"}</p>
          </div>
        ))}
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
          onClick={submitForm}
          className="text-white bg-primary hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}

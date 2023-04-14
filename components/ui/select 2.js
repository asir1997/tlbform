export function Select({
  label,
  register,
  options,
  name,
  errors,
  validations,
  ...rest
}) {
  return (
    <div>
      {label && <label>{label}</label>}
      <select
        defaultValue=""
        className={`"block w-full mt-1 rounded-md  shadow-sm   focus:ring " ${
          errors[name]
            ? "border-red-600 focus:border-red-600 focus:ring-red-100"
            : "border-gray-300 focus:border-violet-300 focus:ring-violet-200"
        }`}
        {...register(name, validations)}
        {...rest}>
        <option value="" disabled>
          Choose one...
        </option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      {errors[name] && (
        <div className="mt-1 text-red-600">
          <small>{errors[name].message}</small>
        </div>
      )}
    </div>
  );
}

export function Input({
  label,
  type = "text",
  register,
  name,
  prependText,
  appendText,
  errors = {},
  validations,
  ...rest
}) {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm text-gray-600">{label}</label>
      )}
      <div className="relative">
        {prependText && (
          <span className="absolute top-0 left-0 h-full flex items-center px-3 text-gray-400">
            {prependText}
          </span>
        )}
        <input
          type={type}
          {...register(name, validations)}
          {...rest}
          className={`mt-1 block w-full rounded-md  shadow-sm  focus:ring placeholder:text-gray-400  ${
            prependText ? "pl-6" : ""
          } ${appendText ? "pr-14" : ""} ${
            errors[name]
              ? "border-red-600 focus:border-red-600 focus:ring-red-100"
              : "border-gray-300 focus:border-violet-300 focus:ring-violet-200 focus:ring-opacity-50"
          }`}
        />
        {appendText && (
          <span className="absolute right-0 top-0 h-full flex items-center px-3 text-gray-400">
            {appendText}
          </span>
        )}
      </div>
      {errors[name] && (
        <div className="mt-1 text-red-600">
          <small>{errors[name].message}</small>
        </div>
      )}
    </div>
  );
}

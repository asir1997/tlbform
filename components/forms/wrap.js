export default function FormWrap({ children, currentStep, prevFormStep }) {
  const steps = [
    {
      id: 1,
      title: "Personal Information",
      desc: "Provide your basic information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Company Information",
      desc: "Provide basic company information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>

      ),
    },
    {
      id: 3,
      title: "Financial Information",
      desc: "Company's financial information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>

      ),
    },
    {
      id: 4,
      title: "Review & Confirm",
      desc: "Review your details and submit ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>

      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row mb-10">
      <div className="w-full sm:w-72 lg:w-96  hidden  md:block">
        <ol className="flex flex-col gap-10 relative text-gray-800 border-l border-gray-200 mb-10 ml-5">
          {steps.map((item) => (
            <li className=" ml-6" key={item.id}>
              <span
                className={`absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white  ${
                  currentStep === item.id
                    ? "bg-violet-100"
                    : currentStep > item.id
                    ? "bg-green-100"
                    : "bg-gray-100"
                } `}>
                {currentStep > item.id ? (
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-emerald-500  "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <span
                    className={`${
                      currentStep >= item.id
                        ? "text-violet-500 "
                        : "text-gray-500 "
                    }`}>
                    {item.icon}
                  </span>
                )}
              </span>
              <h3 className="font-heading font-medium leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

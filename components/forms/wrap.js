export default function FormWrap({ children, currentStep, prevFormStep }) {
  const steps = [
    {
      id: 1,
      title: "Personal Information",
      desc: "Provide your basic information",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Company Information",
      desc: "Provide basic company information",
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Financial Information",
      desc: "Company's financial information",
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Review & Confirm",
      desc: "Review your details and submit ",
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"></path>
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

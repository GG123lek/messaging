import React from "react";

function PageWrapper({ children }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full max-w-[1440px] mx-auto">
      {children}
    </div>
  );
}

export default PageWrapper;

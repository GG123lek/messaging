import React from "react";

function PageHeader({ title, children }) {
  return (
    <div
      className="bg-white shadow-sm flex items-center justify-between"
      style={{
        height: 60,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        gap: 12,
      }}
    >
      <h1 className="text-xl font-semibold pl-6">{title}</h1> {/* optional padding left here */}
      <div className="pr-6">{children}</div> {/* optional padding right here */}
    </div>
  );
}

export default PageHeader;

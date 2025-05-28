import React from "react";

function PageHeader({ title, children }) {
    return (
      <div
        className="bg-white shadow-sm"
        style={{
          paddingLeft: 24,
          paddingRight: 24,
          height: 60,
          display: "flex",
          alignItems: "center",
          gap: 12, // Optional: better spacing
          justifyContent: "space-between"
        }}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        {children}
      </div>
    );
  }

  export default PageHeader
import React from "react";
import ContactText from "./ContactTextInfo/ContactText";
import ContactSocial from "./ContactSocial/ContactSocial";

const ContextTextInfo = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
      <ContactText />
      <ContactSocial></ContactSocial>
    </div>
  );
};

export default ContextTextInfo;

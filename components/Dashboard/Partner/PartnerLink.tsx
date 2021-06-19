import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../../context/Auth";

const PartnerLink = () => {
  const linkRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const {
    user: { partnerID },
  } = useContext(AuthContext);

  const copyToClipboard = () => {
    if (!copied) {
      const el = document.createElement("textarea");
      el.value = linkRef.current.value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    }
  };

  return (
    <div className="partner__link">
      <h2>
        Enlace de invitacion <span>10% Descuento</span>
      </h2>
      <h3>https://redtraderacademy.com/{partnerID || "-"}</h3>
      <input
        type="hidden"
        ref={linkRef}
        value={`https://redtraderacademy.com/${partnerID}`}
      />
      <button
        className={copied ? "copy__btn copied" : "copy__btn"}
        onClick={copyToClipboard}
      >
        {copied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
};

export default PartnerLink;

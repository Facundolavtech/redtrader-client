import React from "react";
import { useRef } from "react";
import { useState } from "react";

const PartnerLink = ({ partner }) => {
  const linkRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const { link } = partner;

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
      <h2>Enlace de invitacion </h2>
      {partner.special_discount !== 0 && (
        <span className="special__discount">
          {partner.special_discount}% de Descuento
        </span>
      )}
      <h3>https://redtraderacademy.com/{link || "-"}</h3>
      <input
        type="hidden"
        ref={linkRef}
        value={`https://redtraderacademy.com/${link}`}
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

import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/Auth";
import { getPartnerInfo } from "../services/partners";

const usePartner = () => {
  const [partnerInfo, setPartnerInfo] = useState(null);
  const { token } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      getPartnerInfoFunction();
    }
  }, [token]);

  const getPartnerInfoFunction = async () => {
    const response = await getPartnerInfo(token);

    if (response.status === 200) {
      setPartnerInfo(response.partner_info);
    } else {
      router.push("/dashboard");
    }
  };

  return { partnerInfo };
};

export default usePartner;

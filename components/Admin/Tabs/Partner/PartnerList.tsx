import { ListItem, List, CircularProgress } from "@material-ui/core";
import { Check, HowToReg, PersonAdd } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../../../context/Auth";

const PartnerList = ({ partners, getPartners }) => {
  const { token } = useContext(AuthContext);

  useEffect((): any => {
    if (token) {
      getPartners();
    }
  }, [token]);

  return (
    <div className="partner-list__container">
      {token && partners !== null ? (
        <>
          {partners && partners.length === 0 ? (
            <h2 className="empty-partners">¡No hay partners activos!</h2>
          ) : (
            <>
              <h2 className="partner-list__title">Lista de partners</h2>
              <List>
                {partners.map(({ _id, email, name, partner_stats }) => (
                  <ListItem className="list__item" key={_id}>
                    <h3 className="partner__name">
                      {name} <br /> {email}
                    </h3>
                    <div className="partner__stats">
                      <div className="registers">
                        <PersonAdd />
                        <span>
                          Registrados <strong>{partner_stats.registers}</strong>
                        </span>
                      </div>
                      <div className="pays">
                        <HowToReg />
                        <span>
                          Pagaron <strong>{partner_stats.pays}</strong>
                        </span>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </>
      ) : (
        <div
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={40} color="primary" />
        </div>
      )}
    </div>
  );
};

export default PartnerList;

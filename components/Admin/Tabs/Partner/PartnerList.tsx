import { ListItem, List, CircularProgress } from "@material-ui/core";
import { HowToReg, PersonAdd } from "@material-ui/icons";
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
                {partners.map(
                  ({ _id, email, name, stats, special_discount }) => (
                    <ListItem className="list__item" key={_id}>
                      <h3 className="partner__name">
                        {name} <br /> {email}
                      </h3>
                      {special_discount !== 0 && (
                        <h3 className="special__discount">
                          <strong>&#10003;</strong> Descuento especial:{" "}
                          <span>{special_discount}%</span>
                        </h3>
                      )}
                      <div className="partner__stats">
                        <div className="registers">
                          <PersonAdd />
                          <span>
                            Registrados <strong>{stats.registers}</strong>
                          </span>
                        </div>
                        <div className="pays">
                          <HowToReg />
                          <span>
                            Pagaron <strong>{stats.pays}</strong>
                          </span>
                        </div>
                      </div>
                    </ListItem>
                  )
                )}
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

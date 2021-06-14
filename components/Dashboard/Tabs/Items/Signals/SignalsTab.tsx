import { useContext } from "react";
import AuthContext from "../../../../../context/Auth";
import LockContent from "../../../LockContent/LockContent";

const SignalsTab = () => {
  const {
    user: { plan },
  } = useContext(AuthContext);

  return (
    <>
      {plan.active ? (
        <div className="signals__tab__container">
          <div className="signals__tab">
            <div className="signals__tab-img">
              <img src="/assets/img/signals-tab.png" />
            </div>
            <div className="signals__tab-info">
              <h2>
                Descarga <span>Red Trade</span> desde las tiendas y comienza a
                generar ingresos con nuestras señales
              </h2>
              <div className="signals__tab-info__buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.facuh1999.redtradermobile&hl=es_AR&gl=US"
                  target="_blank"
                >
                  <img
                    src="/assets/img/playstore-btn.png"
                    alt="playstore button"
                  />
                </a>
                {/* <a>
                  <small>(Proximamente)</small>
                  <img
                    src="/assets/img/appstore-btn.png"
                    alt="appstore button"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LockContent />
      )}
    </>
  );
};

export default SignalsTab;

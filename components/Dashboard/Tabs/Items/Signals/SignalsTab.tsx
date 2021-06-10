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
                <a>
                  <img
                    src="/assets/img/appstore-btn.png"
                    alt="appstore button"
                  />
                </a>
                <a>
                  <img
                    src="/assets/img/playstore-btn.png"
                    alt="playstore button"
                  />
                </a>
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

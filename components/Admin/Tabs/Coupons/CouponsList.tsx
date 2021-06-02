import React, { useContext, useEffect } from "react";
import {
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete, LocalOffer } from "@material-ui/icons";
import AuthContext from "../../../../context/Auth";
import {
  deleteCouponAction,
  getCouponsAction,
} from "../../../../redux/actions/Admin/Coupons";
import { useDispatch, useSelector } from "react-redux";

const CouponsList = () => {
  const { token } = useContext(AuthContext);

  const dispatch = useDispatch();

  const { loadingCoupons, coupons } = useSelector(
    (state: any) => state.coupons
  );

  useEffect(() => {
    getCoupons();
  }, []);

  const getCoupons = () => {
    dispatch(getCouponsAction(token));
  };

  const deleteCoupon = (id) => {
    dispatch(deleteCouponAction(token, id));
  };

  return (
    <>
      <div className="coupon__list">
        {loadingCoupons ? (
          <CircularProgress
            size={23}
            color="primary"
            style={{ margin: "auto" }}
          />
        ) : (
          <>
            {coupons.length === 0 ? (
              <h2>No hay cupones</h2>
            ) : (
              <>
                <h2>Cupones</h2>
                <hr />
                <List style={{ overflowY: "auto", maxHeight: "350px" }}>
                  {coupons.map((coupon) => (
                    <ListItem key={coupon._id}>
                      <ListItemAvatar>
                        <LocalOffer color="primary" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={coupon.coupon_name}
                        secondary={`${coupon.discount}%`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          color="primary"
                          onClick={() => deleteCoupon(coupon._id)}
                        >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CouponsList;

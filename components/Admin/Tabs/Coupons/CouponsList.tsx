import React, { useEffect, useState } from "react";
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
import { getAllCoupons, deleteCoupon } from "../../../../services/coupon";
import { toast } from "react-toastify";

const CouponsList = ({ token, getCoupons, id }) => {
  const [coupons, setCoupons] = useState([]);
  const [loadingCoupons, setLoadingCoupons] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getAllCoupons(token);

      if (response.status === 200) {
        setCoupons(response.data.coupons);
        setLoadingCoupons(false);
      }
    })();
  }, [getCoupons]);

  const deleteCouponFunction = async (couponId, id) => {
    const response = await deleteCoupon(couponId, id);

    toast.success(response.msg);

    let newArr = coupons.filter((coupon) => coupon._id !== couponId);
    setCoupons(newArr);
  };

  {
    return loadingCoupons ? (
      <div className="coupon__list">
        <CircularProgress
          size={23}
          color="primary"
          style={{ margin: "auto" }}
        />
      </div>
    ) : (
      <div className="coupon__list">
        {coupons.length === 0 ? (
          <h2>No hay cupones</h2>
        ) : (
          <>
            <h2>Cupones</h2>
            <hr />
            <List style={{ overflowY: "auto", maxHeight: "350px" }}>
              <>
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
                        onClick={() => deleteCouponFunction(coupon._id, id)}
                      >
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </>
            </List>
          </>
        )}
      </div>
    );
  }
};

export default CouponsList;

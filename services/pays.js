import axiosClient from "../config/axiosClient";

export async function createPay(amount, currency, token) {
  try {
    const newPay = await axiosClient.post(
      "/pays/create",
      { amount, currency },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (newPay.status !== 200) {
      return newPay.data;
    }

    const response = {
      payUrl: newPay.data.checkout_url,
      status: newPay.status,
    };

    return response;
  } catch (error) {
    return error;
  }
}

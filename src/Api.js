import fetchRequests from "./Fetch";
const Api = {
  getProduct: () => {
    return fetchRequests.secured("product/get",'GET');
  },
  getViewProducts: (id) => {
    return fetchRequests.get(`product/view?ID=${id}`);
  },
  getSearchProducts: (search) => {
    return fetchRequests.get(`product/search?type=${search}`);
  },
  postOtp: (data) => {
    return fetchRequests.post(`otp/send`,data);
  },
  verifyOtp: (data) => {
    return fetchRequests.post(`otp/verify`,data);
  },
  getCartProduct: () => {
    return fetchRequests.secured(`cart/get`,'GET');
    // return fetchRequests.secured(`cart/get?ID=${id}`,'GET');
  },
  postCart: (data) => {
    return fetchRequests.secured("cart/create",'POST',data);
  },
  postAddQuantity: (data) => {
    return fetchRequests.secured("cart/addQuantity",'POST',data);
  },
  };
export default Api;

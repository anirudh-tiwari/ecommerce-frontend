import fetchRequests from "./Fetch";
const Api = {
  getProduct: () => {
    return fetchRequests.get("product/get");
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
};
export default Api;

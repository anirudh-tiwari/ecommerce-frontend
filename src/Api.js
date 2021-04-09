import fetchRequests from "./Fetch";
const Api = {
  getProduct: () => {
    return fetchRequests.get("product/get");
  },
  getViewProducts: (name) => {
    return fetchRequests.get(`/GetViewProducts/?name=${name}`);
  },
  getSearchProducts: (name) => {
    return fetchRequests.get(`/GetSearchProducts/?types=${name}`);
  },
};
export default Api;

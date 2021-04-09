import fetchRequests from "./Fetch";
const Api = {
  getProduct: () => {
    return fetchRequests.get("product/get");
  },
  getViewProducts: (name) => {
    return fetchRequests.get(`product/view?Name=${name}`);
  },
  getSearchProducts: (search) => {
    return fetchRequests.get(`product/search?type=${search}`);
  },
};
export default Api;

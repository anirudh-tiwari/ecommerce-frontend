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
};
export default Api;

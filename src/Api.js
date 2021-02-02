import fetchRequests from "./Fetch";
const Api = {
  getProduct: () => {
    return fetchRequests.get("/GetProducts/");
  },
  getViewProducts: (name) => {
    return fetchRequests.get(`/GetViewProducts/?name=${name}`);
  },
  getSearchProducts: (name) => {
    return fetchRequests.get(`/GetSearchProducts/?types=${name}`);
  },
};
export default Api;

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4fcfe2ae12344d73b0ee297fee817bb9",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1007c9db4d394be5914a4a8bcd6dacf8",
  },
});

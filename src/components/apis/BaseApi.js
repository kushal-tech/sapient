import Axios from "axios";

class BaseApi {
  async get(url, onSuccess, onError) {
    let response = await Axios({
      url: url,
      method: "get"
    });
    if (response.status == 200) {
      onSuccess(response.data);
    } else {
      onError();
    }
  }
}

export default new BaseApi();

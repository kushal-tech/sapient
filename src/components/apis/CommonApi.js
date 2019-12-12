import BaseApi from "./BaseApi";
import { LINK } from "../constants/Constants";

class CommonApi {
  get(onSuccess) {
    BaseApi.get(LINK.CHARACTER, onSuccess);
  }
}

export default new CommonApi();

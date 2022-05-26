import {environment} from "../../environments/environment";

let {baseURL} = environment;

export const urls = {
  auth: `${baseURL}/auth`,
  users: `${baseURL}/users`,
  cars: `${baseURL}/cars`
}

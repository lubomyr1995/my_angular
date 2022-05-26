import {environment} from "../../environments/environment";

let {API} = environment;

export const urls = {
  auth: `${API}/auth`,
  users: `${API}/users`,
  cars: `${API}/cars`
}

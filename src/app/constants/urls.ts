import {environment} from "../../environments/environment";

let {API: dataURL} = environment;

export const urls = {
  users: `${dataURL}/users`,
  posts: `${dataURL}/posts`,
  comments: `${dataURL}/comments`
}

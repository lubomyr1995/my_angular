import {environment} from "../../environments/environment";

let {API: baseURL} = environment;

export const urls = {
  users: `${baseURL}/users`,
  posts: `${baseURL}/posts`,
  comments: `${baseURL}/comments`
}

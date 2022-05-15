import {environment} from "../../environments/environment";

let {API: baseURL} = environment;

const urls = {
  users: `${baseURL}/users`,
  posts: `${baseURL}/posts`,
  comments: `${baseURL}/comments`
}

export {urls}

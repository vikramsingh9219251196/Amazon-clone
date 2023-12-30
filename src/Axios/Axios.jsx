import axios from "axios";
//THE API (cloud function) URL
 const instance=axios.create({
    baseURL:"http://127.0.0.1:5001/clone-88808/us-central1/api"
 });

export default instance;

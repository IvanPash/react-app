import * as axios from "axios";

const instanse = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "aab4ec87-517c-4147-bd01-5917f102b9c8",
  },
});

const API = {
	setFollow(id){
		return instanse.post("follow/" + id).then(response => {
			return response.data
		})
	}
}

export default API
const initState = {
  posts: [
    { id: 1, comment: "Первый коммент", name: "IvPas", likeCount: "3" },
    {
      id: 2,
      comment: "Второй большой коммент. Он растягивается на весь блок и он просто тестовый",
      name: "Дмитрый Дыров",
      likeCount: "5",
    },
    {
      id: 3,
      comment: "Третий и так и сяк",
      name: "Алексей Юдин",
      likeCount: "0",
    },
    {
      id: 4,
      comment: "А четвертый случайно сюда попал",
      name: "Anonimus",
      likeCount: "13",
    },
  ],
  actualValueTextarea: "",
  profile: null,
};

let reducerProfile = (state = initState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case ADD_POST:
      if (!state.actualValueTextarea) return state;
      let NewPost = {
        id: state.posts.length + 1,
        comment: stateCopy.actualValueTextarea,
        name: "IvPas",
        likeCount: "0",
      };
      stateCopy = {
        posts: [...state.posts, NewPost],
        actualValueTextarea: "",
      };
      return stateCopy;

    case UPDATE_VALUE_TEXTAREA:
      stateCopy.actualValueTextarea = action.text;
      return stateCopy;
    case SET_PROFILE:
      stateCopy.profile = action.profile;
      return stateCopy;

    default:
      return state;
  }
};

const ADD_POST = "ADD_POST";
const UPDATE_VALUE_TEXTAREA = "UPDATE_VALUE_TEXTAREA";
const SET_PROFILE = "SET_PROFILE";

export const AddPostAC = () => ({ type: ADD_POST });
export const UpdateValueTextareaAC = (data) => ({ type: UPDATE_VALUE_TEXTAREA, text: data });
export const setProfile = (profile) => ({ type: SET_PROFILE,  profile });

export default reducerProfile;

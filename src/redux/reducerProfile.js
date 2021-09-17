const ADD_POST = "ADD-POST";
const UPDATE_VALUE_TEXTAREA = "UPDATE-VALUE-TEXTAREA";

const initState = {
  posts: [
    { comment: "Первый коммент", name: "IvPas", likeCount: "3" },
    {
      comment: "Второй большой коммент. Он растягивается на весь блок и он просто тестовый",
      name: "Дмитрый Дыров",
      likeCount: "5",
    },
    { comment: "Третий и так и сяк", name: "Алексей Юдин", likeCount: "0" },
    { comment: "А четвертый случайно сюда попал", name: "Anonimus", likeCount: "13" },
  ],
  actualValueTextarea: "",
};

let reducerProfile = (state = initState, action) => {
  debugger
  switch (action.type) {
    case ADD_POST:
      if (!state.actualValueTextarea) return;
      let NewPost = {
        comment: state.actualValueTextarea,
        name: "IvPas",
        likeCount: "0",
      };
      state.posts.push(NewPost);
      state.actualValueTextarea = "";
      return state;

    case UPDATE_VALUE_TEXTAREA:
      state.actualValueTextarea = action.text;
      return state;

    default:
      return state;
  }
};

export const AddPostAC = () => ({ type: ADD_POST });
export const UpdateValueTextareaAC = (data) => ({ type: UPDATE_VALUE_TEXTAREA, text: data });

export default reducerProfile;

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src:
            "https://post-phinf.pstatic.net/MjAxOTA5MDRfMjUg/MDAxNTY3NTgwODA0Mzc0.iHFgFwO3GUlDesyEQEyws63O1K5lV8FjL2PYXpwq01wg.VAMN6z_M8siRvYOnyWwIgGQdqWfpVxdtTmZYm9zREQUg.JPEG/GettyImages-1135693651.jpg?type=w1200",
        },
        {
          src:
            "https://lh3.googleusercontent.com/proxy/_wqjZdFe97qFpvWnvI6M72UZERJjBfLx80mIZ-alZM7e492Lc-elP-JVQZa3j5JfxHKK46GVT_oRiCNKmC4V6nxBPNp_zaSAPTKcePq_zWo3UnCNCVBosQlGKoz2R1Q7uWYDvrM",
        },
        {
          src:
            "http://cdn.kormedi.com/wp-content/uploads/2019/09/shutterstock_790110841.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hero",
          },
          content: "안녕하세요",
        },
        {
          User: {
            nickname: "james",
          },
          content: "사진이 너무 좋네요",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "제로초",
  },
  content: "더미 데이터입니다.",
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;

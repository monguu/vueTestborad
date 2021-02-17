export default {
  user: [
    {
      user_id: 1,
      name: "홍길동",
      created_at: "2021-02 02:17:11",
    },
    {
      user_id: 2,
      name: "백두산",
      created_at: "2021-02 02:17:11",
    },
    {
      user_id: 3,
      name: "김두식",
      created_at: "2021-02 02:17:11",
    },
  ],
  Content: [
    {
      content_id: 1,
      user_id: 1,
      title: "안녕하세요.",
      context: "example",
      created_at: "2021-02-17 02:17:15",
      updated_at: null,
    },
    {
      content_id: 2,
      user_id: 3,
      title: "반갑습니다.",
      context: "example1",
      created_at: "2021-05-17 02:17:15",
      updated_at: null,
    },
    {
      content_id: 3,
      user_id: 2,
      title: "잘부탁드립니다.",
      context: "example10",
      created_at: "2021-03-17 02:17:15",
      updated_at: null,
    },
  ],
  Comment: [
    {
      comment_id: 1,
      user_id: 1,
      content_id: 3,
      context: "GoGo!",
      created_at: "2021-05-17 02:17:15",
      updated_at: null,
    },
    {
      comment_id: 2,
      user_id: 3,
      content_id: 2,
      context: "GoGoGo! back!!",
      created_at: "2021-06-17 02:17:15",
      updated_at: null,
    },
    {
      comment_id: 3,
      user_id: 2,
      content_id: 2,
      context: "back!",
      created_at: "2021-04-17 02:17:15",
      updated_at: null,
    },
  ],
  Subcomment: [
    {
      subcomment_id: 1,
      comment_id: 3,
      user_id: 2,
      context: "oh my god!",
      created_at: "2021-07-17 02:17:15",
      updated_at: null,
    },
  ],
};

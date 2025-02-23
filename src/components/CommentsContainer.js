import React from "react";
const commentsData = [
  {
    name: "balKrishna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "balKrishna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "balKrishna",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "balKrishna",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "balKrishna",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "balKrishna",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "balKrishna",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "balKrishna",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "balKrishna",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "balKrishna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "balKrishna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "balKrishna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "balKrishna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-3 rounded-lg my-3 w-full xs:w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] mx-auto shadow-sm">
      <img
        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOW34PFNB2wJ1Hf5AP88UYB4d-LDcOsC7i4g&s"
      />
      <div className="ml-3">
        <p className="font-semibold text-sm sm:text-base">{name}</p>
        <p className="text-xs sm:text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="ml-2 xs:ml-3 sm:ml-5 md:ml-7 lg:ml-10">
      <Comment data={comment} />
      <div className="pl-3 sm:pl-5 border-l-2 border-gray-300">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-3 xs:m-4 xs:p-4 sm:m-5 sm:p-5">
      <h1 className="text-lg xs:text-xl sm:text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

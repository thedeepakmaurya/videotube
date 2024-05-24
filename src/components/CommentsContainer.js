import React from 'react'
import Comment from './Comment';

function CommentsContainer() {


    const commentsData = [
        {
            name: "Deepak Maurya",
            text: "He is software engineer",
            replies: [
                {
                    name: "Deepak Maurya",
                    text: "He is software engineer",
                    replies: []
                },
                {
                    name: "Deepak Maurya",
                    text: "He is software engineer",
                    replies: []
                },
                {
                    name: "Deepak Maurya",
                    text: "He is software engineer",
                    replies: []
                }
            ]
        },
        {
            name: "Deepak Maurya",
            text: "He is software engineer",
            replies: [
                {
                    name: "Deepak Maurya",
                    text: "He is software engineer",
                    replies: [
                        {
                            name: "Deepak Maurya",
                            text: "He is software engineer",
                            replies: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Deepak Maurya",
            text: "He is software engineer",
            replies: []
        },
        {
            name: "Deepak Maurya",
            text: "He is software engineer",
            replies: []
        }
    ]


    const CommentList = ({ comments }) => {
        return comments.map((comment, index) => (
            <div>
                <Comment key={index} data={comment} />
                <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies}/>
                </div>
            </div>
        ))
    }

    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;
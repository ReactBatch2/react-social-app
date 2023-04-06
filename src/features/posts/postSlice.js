import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
    { 
        id: 'p-1', 
        title: 'How about me ?',
        content: 'My Name is MgMg.I am a funny man.',
        date : sub(new Date(),{minutes : 20}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    },
    { 
        id: 'p-2', 
        title: 'Totally Happiness',
        content: 'I got a gaming laptop today.yayy.....',
        date : sub(new Date(),{minutes : 15}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    },
    { 
        id: 'p-3', 
        title: 'Who do you think?',
        content: 'This man is laying on th ground.What happened to him!',
        date : sub(new Date(),{minutes : 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    },
];

const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        addPost : {
            reducer(state,action) {
                state.push(action.payload)
            },
            prepare(title,content,author){
              return {
                payload : {
                    id : nanoid(),
                    title,
                    content,
                    author,
                    date : new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    },
                }
              }
            }
        },
        addReaction : (state,action) => {
            const {postId,reaction} = action.payload
            const existedPost = state.find(post => post.id === postId)
            existedPost.reactions[reaction]++
        }
    }
})

export const selectAllPosts = (state)=>state.posts
export const { addPost,addReaction } = postSlice.actions
export default postSlice.reducer

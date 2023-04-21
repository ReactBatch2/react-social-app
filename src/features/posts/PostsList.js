import { useSelector,useDispatch } from "react-redux"
import { selectAllPosts,getAllPosts,getPostStatus,getPostError} from "./postSlice"
import PostItem from "./PostItem"
import { useEffect } from "react"

const PostsList = ()=>{
    const dispatch = useDispatch()

    const status = useSelector(getPostStatus)
    const error = useSelector(getPostError)
    const posts = useSelector(selectAllPosts)

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(getAllPosts())
        }
    },[status,dispatch])

    let content;

    if(status === 'loading'){
        content = (<p>Loading.....</p>)
    }else if(status === 'success'){
        const orderedPostByDate = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

        content = orderedPostByDate.map((post) => {
            return (
                <PostItem post={post} />
            )
        })
    }else if(status === 'fail'){
        content = (<p>{error}</p>)
        console.log(error)
    }
    return content
}

export default PostsList
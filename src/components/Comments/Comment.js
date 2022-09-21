import {commentService} from "../../services/comment-api/comment.service";

export default function Comment({comment,setComments}) {
    const {postId,id,name,email,body} = comment;

    const deletePost = async () =>{
        await commentService.deleteById(id);
        setComments(comments =>{
            const index = comments.findIndex(value => value.id===id);
            if(index !== -1){comments.splice(index,1);}
            return [...comments]
        });
    }

    return(
        <div>
            <hr/>
            <div>
                <p>postId: {postId}</p>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>email: {email}</p>
                <p>body: {body}</p>
            </div>
            <div>
                <button onClick={() => deletePost()}>Delete current comment</button>
            </div>
            <hr/>
        </div>
    )

}
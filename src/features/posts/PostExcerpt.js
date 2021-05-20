import React from 'react';
import { useSelector} from "react-redux";
import {PostAuthor} from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {Link} from "react-router-dom";
import {ReactionButtons} from "./ReactionButtons";
import {selectPostById} from "./postsSlice";

let PostExcerptInner = ({postId}) => {
    const post = useSelector(state => selectPostById(state, postId));

    return (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <PostAuthor userId={post.user}/>
            <TimeAgo timestamp={post.date}/>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
            <ReactionButtons post={post}/>
        </article>
    );
};

export const PostExcerpt = React.memo(PostExcerptInner);

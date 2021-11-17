import React, {useEffect, Fragment} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getAllPosts} from '../actions/postActions';


const Test = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    const postReducer = useSelector(state => state.postReducer.posts);
    console.log(postReducer)
    return (
        <div>
            {postReducer.map((post, index) => (
                <Fragment>
                    <p key={index}> {post.title} : {post.description}</p>
                    <img  src={process.env.PUBLIC_URL + `/images/${post.photo}`}  />

                </Fragment>
            ))}
        </div>
    )
}

export default Test

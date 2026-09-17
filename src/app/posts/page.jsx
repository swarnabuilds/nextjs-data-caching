import React from 'react';

//data fetch option-1
// const postPromise = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if(!res.ok){
//         throw new Error('Failed to fetch posts')
//     }
//     return res.json()
// }


//data fetch option-2
const postPromise = async() => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        return res.json()
    }
    catch(error) {
        throw new Error('Failed to fetch posts')
    }
}

const PostPage = async() => {
    const posts = await postPromise()
    return (
        <div>
            <h2>al posts page {posts.length}</h2>
        </div>
    );
};

export default PostPage;
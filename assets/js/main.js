// main.js
const posts = async () => {
    const a = await fetch('https://jsonplaceholder.typicode.com/posts');
    return a;
}


export {posts};
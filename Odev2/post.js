const posts = [
    {postHeader: "Shopping"},
    {postHeader: "Reading"},
    {postHeader: "Watching"},
];

const addPost = (newPost) => {

    const promise = new Promise( (resolve, reject) => {
        posts.push(newPost);
        resolve('New post added.');
        //reject("Error acquired!")
    });
    return promise;
};

const listPosts = () => {
    posts.map( post => {
        console.log(post.postHeader);
    });
}

console.log("Before adding a new post:");
listPosts();

new_Post = {postHeader: "Traveling"};

//With PROMISE:

/* addPost(new_Post)
    .then( () => {
       console.log("\nAfter adding a new post:");
       listPosts();
    }).catch( error => {
        console.log(error);
    });  */

//With ASYNC - AWAIT

async function showPosts() {
    try 
    {
        await addPost(new_Post);
        console.log("\nAfter adding a new post:");
        listPosts();
    }
    catch(error)
    {
        console.log(error);
    }
}

showPosts();

type post = {
    id:string,
title:string,
desc:string,
date:Date
}

let posts :post[] = [];



export const getposts = () => posts;

export const addposts = (post: post ) =>{
posts.push(post);
};

export const deletepost = (id: string ) =>{
posts =posts.filter((post)=>post.id!==id);
};


export const updateposts = (id:string,title:string,desc:string)=>{
const post = posts.find((post)=>post.id===id);
if(post){
    post.title = title;
    post.desc = desc;
}
else{
    throw new Error("Invalid post")
}
}

export const getbyid = (id:string)=>{
    return posts.find((post)=>post.id===id);
};
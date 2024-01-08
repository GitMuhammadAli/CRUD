import {addposts, getposts,deletepost} from "@/lib/data"
import {NextResponse} from "next/server"
 

export const GET = async(req:Request, res:Response )=>{
    try {
        const posts = getposts();
        return NextResponse.json({message:" successfully retrieved posts " , posts},{status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500});
    }
};
export const POST = async (req:Request , res:Response ) => {
const {title, desc} =  await req.json();
try {
    const post = {title, desc,date:new Date(),id:Date.now().toString()};
    addposts(post);
    return NextResponse.json({message:" posts " , post},{status: 200});
    
} catch (error) {
    return NextResponse.json({message:"Error",error},{status:500});
}
}


export const DELETE = async (req:Request , res:Response ) => {
    
    try {
       const id = req.url.split('blogs/')[1];
      deletepost (id); 
      return NextResponse.json({message:"deleted"},{status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500});
    }
    }
    
    
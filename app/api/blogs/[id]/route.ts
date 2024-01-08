
import { getbyid,updateposts } from "@/lib/data";
import {NextResponse}from "next/server";


export const GET = async(req:Request, res:Response )=>{
    try {
const id = req.url.split( 'blogs/' )[1];
const post = await getbyid(id);
if(!post){
    return NextResponse.json({message:"Could not find blog "},{ status:404 });
    }
    return NextResponse.json({message:"OK", post},{status:200});
}
     catch (error) {
        return NextResponse.json({message:"Error",error},{status:500});
    }
};

export const PUT = async (req: Request, res: Response)=>{
    try {
        const{title, desc} =  await req.json();
const id = req.url.split( 'blogs/' )[1];
const updated = await updateposts(id,title,desc);
return NextResponse.json({message:"ok",updated},{status:200});
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500});
    }
    }
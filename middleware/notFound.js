export const notFoundPage= (req , res)=>{
    res.status(404).json({
        message:"Not Found  Page"
    })
}
let asyncWrapperFunc=(func)=>
{
    return async(req,res,next)=>
    {
        try{
            await func(req,res);
        }catch(err){
            next(err);
        }
    }
}

module.exports=asyncWrapperFunc
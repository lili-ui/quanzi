let list=require('./src/data/list.json')
let user=require('./src/data/user.json')
const bodyParser=require('body-parser')
module.exports={
    devServer:{
        open:true,
        before(app){
            app.get('/listdata',(req,res)=>{
                res.send({list:list})
            }),
            app.post('/login',bodyParser.json(),(req,res)=>{
               let {username,userpwd}=req.body
               let obj=user.find(item=>item.name===username)
               if(!obj){
                   res.send({code:0,msg:'用户不存在'})
               }else{
                   if(obj.pwd===userpwd){
                       res.send({code:1,msg:'登录成功',data:obj})
                   }else{
                       res.send({code:0,msg:'密码错误'})
                   }
               }
            })
        }
    }
}
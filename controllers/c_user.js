
const mysql= require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'news'
});
 
connection.connect();
exports.login=(req,res)=>{
   res.render('signin.html');
}
exports.msg=(req,res) =>{
    const body=req.body;
    // console.log(body.email);
    const sql='select * from `users` where email=?';
    connection.query(sql,body.email,(error,result)=>{
        if(error) throw error
        if(result.length===0){
            res.send({
                code:1,
                msg:'邮箱不存在！！！'
            })
        }
        if(result[0].password!=body.password){
            res.send({
                code:2,
                msg:'密码不正确！！！'
            })
        }
        res.send({
            code:3,
            msg:'正确你可以登陆了'
        })
    })

}

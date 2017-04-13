userRoute.post('/', function(req, res){
    newUser = new User(req,res){
        newUser.save(function(err,savedUser){
            res.send(savedUser)
        })
    }
})
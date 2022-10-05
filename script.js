const mongoose = require('mongoose')
const User = require('./user')
mongoose.connect(
    'mongodb://localhost/testdb',
    ()=>console.log("Connected to db"),
    (e)=>console.log(e.message)
)
async function run(){
    try{
        const user = await User.create({
            name:"karnew",
            age:29,
            email:'soMethingFJK@mail.in',
            hobbies:["Coding"],
            address:{
                street:"gandhinagar",
                city:'Anantapur'
            }
        })
        // user.name="nuke"
        // await user.save()
        console.log(user)
    }catch (e){
        console.log(e.message)
    }
    // const user = new User({name:"kickuu",age:21})
    // await user.save()
}
run()
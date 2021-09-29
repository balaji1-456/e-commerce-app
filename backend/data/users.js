import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin user',
        email:"admin@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Kobe",
        email:"kobe@gmail.com",
        password:bcrypt.hashSync('123456',10),
    }
    ,{
        name:"Jane",
        email:"jane@gmail.com",
        password:bcrypt.hashSync('123456',10)
    }
]

export default users
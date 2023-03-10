const { resolve } = require("path")

const users=[
    {
        email:'user1@gmail.com'
    },
    {
        email:'user2@gmail.com'
    },
    {
        email:'user3@gmail.com'
    }
]
const posts=[
    {
        id:1,
        contenu:'post 1',
        user:'user1@gmail.com'
    },
    {
        id:2,
        contenu:'post 2',
        user:'user1@gmail.com'
    },
    {
        id:3,
        contenu:'post 3',
        user:'user2@gmail.com'
    }
]
const notes=[
    {
        id:1,
        note:'10',
        matiere:'maths',
        user:'user1@gmail.com'
    },
    {
        id:2,
        note:'15',
        matiere:'arabe',
        user:'user1@gmail.com'
    }
]

const login=(email)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user=users.find(element=> element.email==email);
            if(user)
                resolve(user)
            else    
                reject('introuvable')
            },2000);
        })
}
const getPosts=(email)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const postsUser=posts.filter(element=>element.user==email);
            resolve({
                email:email,
                posts:postsUser
            })
        },2000);
    })
}
const getNotes=(email)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const notesUser=notes.filter(element=>element.user==email);
            resolve({
                email:email,
                notes:notesUser
            })
        },2000);
    })
}
login('user2@gmail.com')
.then(data=>{
            console.log('success:',data);
            return getPosts(data.email)
            })
.then(data=>{
            console.table(data.posts);
            return getNotes(data.email);
            })
.then(data=>{console.table(data.notes);
    console.log("1")})
//.then(({posts})=>console.table(posts)) // object destructing
.catch(err=>console.log(err))

//const res  = await Promise.race([])

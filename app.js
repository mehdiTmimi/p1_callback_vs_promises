// callback hell
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
// on doit se connecter 
// si reussi => liste des posts
// liste des notes
const login=(email,success,echec)=>{
    // une requete
    setTimeout(()=>{
     const user=   users.find(element=> element.email==email);
     if(user)
        success(email)
     else
        echec("user don't exist")
    },2000)
    
}
let res = login('user1@gmail.coom',(e)=>{
    console.log("reussi email : ",e)
    //liste des posts
},(error)=>console.log(error))

import {SiOpenaigym} from 'react-icons/si'

export const links = [
    {
        name:"Home",
        path:'/'
    },
    {
        name:"About",
        path:'/about'
    },
    {
        name:"Gallery",
        path:'/gallery'
    },
    {
        name:"Plans",
        path:'/plans'
    },
    {
        name:"Trainers",
        path:'/trainers'
    },
    {
        name:"Contact",
        path:'/contact'
    },
]

export const programs = [
    {
        id:1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info:"This is the day the lord has made, we will rejoice",
        path: "programs/111"
    },

    {
        id:2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info:"This is the day the lord has made, we will rejoice",
        path: "programs/222"
    },

    {
        id:3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info:"This is the day the lord has made, we will rejoice",
        path: "programs/333"
    },

    {
        id:4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info:"This is the day the lord has made, we will rejoice",
        path: "programs/444"
    },
]
 
export const values = [
    {
        
            id:1,
            icon: <SiOpenaigym/>,
            title: "value One",
            desc:" maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!"
        
    },

    {
        
        id:2,
        icon: <SiOpenaigym/>,
        title: "value Two",
        desc:" maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!"
    
},

{
        
    id:3,
    icon: <SiOpenaigym/>,
    title: "value Three",
    desc:" maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!"

},
{
        
    id:4,
    icon: <SiOpenaigym/>,
    title: "value Four",
    desc:"  maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!"

},
]

export const faqs = [
    {
        
        
            id:1,
            question:"How often should i exercise",
            answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!"
        
    },

    {
        
        
        id:2,
        question:"How often should i exercise",
        answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!"
    
},

{
        
        
    id:3,
    question:"How often should i exercise",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!"

},
    
{
        
        
    id:4,
    question:"How often should i exercise",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!",

},

]
export const testimonials = [
  {
    id:1,
    name:"Adewoye Adewole",
    quote:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!",
    job:"student",
    avatar:require("./assests/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg")
  },
  {
    id:2,
    name:"Oluwapelumi Adewole",
    quote:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!",
    job:"student",
    avatar:require("./assests/august-phlieger-CREqtqgBFcU-unsplash-removebg.png")
  },
  {
    id:3,
    name:"Adewoye Fidelis",
    quote:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!",
    job:"Web Developer",
    avatar:require("./assests/cathy-pham-3jAN9InapQI-unsplash.jpg")
  },
  {
    id:4,
    name:"Adewoye Adewole",
    quote:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda! ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor sed nam aspernatur, numquam qui non veritatis porro ad? Sequi sed maxime temporibus obcaecati assumenda!",
    job:"Sofware Engineer",
    avatar:require("./assests/founder.jpg")
  }
]

export const plans = [
    {
    id:1,
    name:'Silver package',
    desc:'This package is perfecr for beginners who needs conastant help',
    price: 29,
    features: [
        {feature: "First Feature", available:true},
        {feature: "Second Feature", available:true},
        {feature: "Third Feature", available:true},
        {feature: "Fourth Feature", available:true},
        {feature: "Fifth Feature", available:true},
        {feature: "Sixth Feature", available:false},
        {feature: "Seventh Feature", available:false},
        {feature: "Eight Feature", available:false},
        {feature: "Ninth Feature", available:false},
        {feature: "Tenth Feature", available:false},
        {feature: "Eleventh Feature", available:false},
    
    ]
},
{
    id:2,
    name:'Gold package',
    desc:'This package is perfecr for beginners who needs conastant help',
    price: 30,
    features: [
        {feature: "First Feature", available:true},
        {feature: "Second Feature", available:true},
        {feature: "Third Feature", available:true},
        {feature: "Fourth Feature", available:true},
        {feature: "Fifth Feature", available:true},
        {feature: "Sixth Feature", available:true},
        {feature: "Seventh Feature", available:true},
        {feature: "Eight Feature", available:false},
        {feature: "Ninth Feature", available:false},
        {feature: "Tenth Feature", available:false},
        {feature: "Eleventh Feature", available:false},
    
    ]
},
{
    id:3,
    name:'Platinum package',
    desc:'This package is perfecr for beginners who needs conastant help',
    price: 39,
    features: [
        {feature: "First Feature", available:true},
        {feature: "Second Feature", available:true},
        {feature: "Third Feature", available:true},
        {feature: "Fourth Feature", available:true},
        {feature: "Fifth Feature", available:true},
        {feature: "Sixth Feature", available:true},
        {feature: "Seventh Feature", available:true},
        {feature: "Eight Feature", available:true},
        {feature: "Ninth Feature", available:true},
        {feature: "Tenth Feature", available:true},
        {feature: "Eleventh Feature", available:true},
    
    ]
}
]
const Trainer1 = require('./assests/founder.jpg')
const Trainer2 = require('./assests/founder.jpg')
const Trainer3 = require('./assests/founder.jpg')
const Trainer4 = require('./assests/founder.jpg')
const Trainer5 = require('./assests/founder.jpg')
const Trainer6 = require('./assests/founder.jpg')

export const trainers = [
    {
        id:1,
        image: Trainer1,
        name:"Fidel Wole",
        job: "Aerobic Trainer",
        socials:['https://instagram.com/', 'https://twitter.com/', '/https://facebook.com/']
    },
    {
        id:2,
        image:Trainer2,
        name:"Fidel Wole",
        job: "Aerobic Trainer",
        socials:['https://instagram.com/', 'https://twitter.com/', '/https://facebook.com/']
    },
    {
        id:3,
        image:Trainer3,
        name:"Fidel Wole",
        job: "Aerobic Trainer",
        socials:['https://instagram.com/', 'https://twitter.com/', '/https://facebook.com/']
    },
        {
        id:4,
        image:Trainer4,
        name:"Fidel Wole",
        job: "Aerobic Trainer",
        socials:['https://instagram.com/', 'https://twitter.com/', '/https://facebook.com/']
    },
        {
        id:5,
        image:Trainer5,
        name:"Fidel Wole",
        job: "Aerobic Trainer",
        socials:['https://instagram.com/', 'https://twitter.com/', '/https://facebook.com/']
    },
        {
        id:6,
        image:Trainer6,
        name:"Fidel Wole",
        job: "Aerobic Trainer",
        socials:['https://instagram.com/', 'https://twitter.com/', '/https://facebook.com/']
    }

]
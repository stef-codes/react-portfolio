export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        // name :'stef.',
        headerTagline: [//Line 1 For Header
                        'Hi 👋🏾 ! I am Stefanie Davis',
                        //Line 2 For Header
                        'Software Engineer && Data Consultant ',
                        //Line 3 For Header
                        'from Los Angeles'
    ],
        //Contact Email
        contactEmail:'stefcodes@gmail.com',
        // Add Your About Text Here
        abouttext: "Former Data Consultant turned Full Stack Software Engineer. Passion for music and building with technology.",
        aboutImage:'',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Music Journal (Sonica)', //Project Title - Add Your Project Title Here
             service:'React | Redux | iTunes API | Rails API | Postgres', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://images.unsplash.com/photo-1543026433-f8a2c59360cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
             //Project URL - Add Your Project Url Here
             url:'https://sonica.netlify.app/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Book Collection (BookTap)',
                service: 'Vanilla Javascript | Rails API | Postgres',
                imageSrc: "https://images.unsplash.com/photo-1529158062015-cad636e205a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                url: 'https://booktap.netlify.app/'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Quote Collection (Enquote)',
                service: 'Rails | Postgres',
                imageSrc: "https://images.unsplash.com/photo-1544210163-257effe9399e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                url: 'https://enquote-rails.herokuapp.com/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Book Collection (Beale)',
                service: 'Sinatra | Ruby',
                imageSrc: "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/31/1501694475-baldwin.jpg",
                url: 'https://github.com/stef-codes'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/stef-codes'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/stefbuilds/'
            },
            {
                name: 'YouTube',
                url: 'https://www.youtube.com/channel/UCwFnoxQ1ivQjKmvAHfyYUXQ?view_as=subscriber/'
            }

        ]
    }
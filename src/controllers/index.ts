type Description = {
    name: string,
    Title: string,
    description: string,
    start_date?: string,
    end_date?: string
}
// 'experience': [Description, Description]
// 'education': [Description, Description]
// 'skills': [string, string]
// 'projects': [Description, Description]
// 'contact': [string, string]
// type Data = {
//     [key: string]: unknown
// }
type Contact = {
    email: string,
    linkedin: string,
    github: string,
    location: string,
    twitter: string,
    phone: string
}
type User = {
    name: string
    role: string
}
type Data = {
    experience: Description[],
    education: Description[],
    skills: string[],
    contact: Contact,
    projects: Description[],
    description: User
}
type Controller = {
    data: Data,
    get: () => Data,
    set: (category: keyof Data, update: {[key: string ]: string} | string[])=> void,
}

const controller: Controller = {
    data: {
        description:{
            name: 'Oliver Kipkemei',
            role: 'Software Developer',
        },
        experience: [
            {
                name: 'Cognizant',
                Title: 'Software Engineer',
                description: 'Worked on a project for a client in the healthcare industry. The project was to build a web application for the client to manage their patients and their medical records. The application was built using React, Node.js, Express, and MongoDB. I was responsible for building the backend of the application using Node.js and Express. I also worked on the frontend of the application using React.',
                start_date: '06/2020',
                end_date: 'Present'
            },
            {
                name: 'Cognizant',
                Title: 'Software Engineer Intern',
                description: 'Worked on a project for a client in the healthcare industry. The project was to build a web application for the client to manage their patients and their medical records. The application was built using React, Node.js, Express, and MongoDB. I was responsible for building the backend of the application using Node.js and Express. I also worked on the frontend of the application using React.',
                start_date: '05/2019',
                end_date: '04/2020'
            }
        ],
        education: [
            {
                name: 'University of Texas at Dallas',
                Title: 'Bachelor of Science in Computer Science',
                description: 'Graduated with a 3.8 GPA. I was a member of the Honors College and the Computer Science Honors Society. I was also a member of the UTD Honors College Student Advisory Board.',
                start_date: 'August 2016',
                end_date: 'May 2020'
            },
        ],
        skills: [
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express',
            'React',
            'MongoDB',
            'HTML',
            'CSS',
            'NextJS',
            'Bootstrap',
            'Git',
            'GitHub',
            'Jest',
            'Mocha',
            'Chai',
            'Postman',
            'Docker',
            'Linux',
        ],
        projects: [
            {
                name: 'Portfolio',
                Title: 'Personal Portfolio',
                description: 'This is my personal portfolio website. It was built using Node.js, Express, and EJS. I used Bootstrap for the styling of the website. I also used Docker to containerize the application. The website is hosted on AWS using Elastic Beanstalk.',
                start_date: 'June 2020',
                end_date: 'Present'
            },
            {
                name: 'Cognizant',
                Title: 'Web Application',
                description: 'Worked on a project for a client in the healthcare industry. The project was to build a web application for the client to manage their patients and their medical records. The application was built using React, Node.js, Express, and MongoDB. I was responsible for building the backend of the application using Node.js and Express. I also worked on the frontend of the application using React.',
                start_date: 'June 2019',
                end_date: 'August 2019'
            }
        ],
        contact: {
            email:'oliverkemei2000@gmail.com',
            linkedin: 'https://www.linkedin.com/in/oliver-arsenal',
            github: 'https://github.com/OliverMengich',
            location: 'Nairobi, Kenya',
            twitter: 'https://www.twitter.com/OllieKem7',
            phone: '+254741954425'
        }
    },  
    get: function(){
        return this.data;
    },
    set: function(category: keyof Data, update: {[key: string ]: string} | string[]){
        const categoryData = this.data[category];
        if (typeof update ==='string') {
            console.log(update);
        }else if (typeof update=== 'object') {
            console.log(update);
        }
    }
}
export default controller;
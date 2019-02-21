var section = {
    id: ['#about', '#education', '#projects', '#skills', '#contact'],
    title: ['About', 'Education', 'Projects', 'Skills', 'Contact']
}

var educationData = {
    edu: [{
            period: 'Jul/2011 - Dec/2015',
            location: 'Location: Croatia, Zagreb',
            role: 'Bachelor of Electrical Engineering - Communication and Computer technology',
            facility: 'Zagreb University of Applied Sciences',
            description: 'I have opted for the course Communication and Computer Technology since of interests in computer systems and scientific principles they are based on. Courses gave me insight to Programming, Computer Systems, Networking, Embedded Electronics, Telecommunications, etc.'
        },
        {
            period: 'Feb/2014 - Jun/2014',
            location: 'Location: Croatia, Zagreb',
            role: 'Professional Practice',
            facility: 'Zagreb University of Applied Sciences',
            description: 'I have worked on the laboratory system project "Sunflower", where I have programmed, tested and optimized a microcontroller (MBED) built-in in control module for solar system navigation towards the Sun.'
        },
        {
            period: 'Nov/2012 - Nov/2012',
            location: 'Location: Croatia, Zagreb',
            role: 'Instructor of rocketry modeling (certificate)',
            facility: 'Croatian astronautical and rocketry association (HARS)',
            description: 'This certificate qualified me to teach people how to build a rocket model.'
        },
        {
            period: 'Sep/2007 - Jun/2011',
            location: 'Location: Croatia, Kutina',
            role: 'Computer Technician',
            facility: 'Technical school Kutina',
            description: 'I have obtained skills for maintaining and service of a PC. Here is where I had my first touch with programming in C language.'
        },
    ],
    exp: [
        {
            period: 'Aug/2018 - Present',
            location: 'Location: Denmark, Copenhagen',
            role: 'Software Engineer',
            facility: 'Motorola Solutions A/S',
            description: 'Software development and integration for mission critical individual and group communication, where technologies and programming languages such as C++, Linux, Virtualization, IP networking are used.'
        },
        {
            period: 'Feb/2017 - Jan/2018',
            location: 'Location: Denmark, Køge',
            role: 'Software Developer - Android',
            facility: 'Intrabilis d.o.o.',
            description: 'Developed full Android (Java) application together with PHP interface which sends data as JSON to app from MySQL database (REST). Developed the same app for iOS while learning platform and Swift language.'
        },
        {
            period: 'Jul/2015 - Dec/2015',
            location: 'Location: Croatia, Zagreb',
            role: 'Software Developer - Intership',
            facility: 'Ericsson Nikola Tesla d.d.',
            description: 'I have developed Liferay Enterprise Portal with J2EE technologys in team implementing SCRUM methodology. Development included portlets development and modifications (Java, MVC, Servlets, JSP, XML), integration and configuration of existing applications, database intergration (Oracle SQL).'
        },
        {
            period: 'Feb/2015 - Apr/2015',
            location: 'Location: Croatia, Zagreb',
            role: 'Software Tester - Student',
            facility: 'Croatian Telecom Inc.',
            description: 'UX testing of Android, Windows, iOS and Mac OS X business users applications - "HT BusinessConnect".'
        },
        {
            period: 'Feb/2014 - Jun/2014',
            location: 'Location: Croatia, Zagreb',
            role: 'Marketing Helper - Student',
            facility: 'Zagreb University of Applied Sciences',
            description: 'I was doing web portal administration, data-mining, preparation and production of promotional materials and other marketing activities.'
        },
        {
            period: 'Sep/2013 - Feb/2014',
            location: 'Location: Croatia, Zagreb',
            role: 'Teaching fellow in subject "Electrical measurements',
            facility: 'Zagreb University of Applied Sciences, LifeLong Learning Department',
            description: 'I have helped students during laboratory exercises.'
        },
    ]
}

Vue.component('element-info', {
    props: ['edu_data'],
    template: '<div class="row content">' +
        '<div class="col-md-4 col-md-offset-2">' +
        '<p class="detail">{{edu_data.period}} </p>' +
        '<p>{{edu_data.location}}</p>' +
        '</div>' +
        '<div class="col-md-6">' +
        '<p class="detail">{{edu_data.role}}</p>' +
        '<p class="detail-2">{{edu_data.facility}}</p>' +
        '<p>{{edu_data.description}}</p>' +
        '</div>' +
        '</div>',
});

var sectionEducation = new Vue({
    el: '#training',
    data: () => {
        return educationData
    }
});
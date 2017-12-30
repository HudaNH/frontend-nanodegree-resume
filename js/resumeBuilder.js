var data = '%data%'
var bio = {
    "name": "Huda",
    "role": "Web Developer",
    "contacts": {
        "mobile": "050 123 456",
        "email": "Huda@gmail.com",
        "github": "HudaNH",
        "location": "Riyadh"
    },
    "welcomeMessage": "keep going!!",
    "skills": ["Java", "HTML", "CSS", "C#", "MySQL", "Javascript"],
    "biopic": "images/pic.jpg"
};

var education = {
    "schools": [{
            "name": "Princess Nora Bint Abdulrahman University",
            "location": "Al Imam Abdullah Ibn Saud Ibn Abdul Aziz Road،"
                         +"King Khalid International Airport, Riyadh",
            "degree": "Bachelor of Computer",
            "majors": ["Computer Science"],
            "dates": "2015 - 2019",
            "url":"http://www.pnu.edu.sa/arr/Pages/default.aspx"
        },
    ],
    "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "November 2017",
            "url": "https://sa.udacity.com"
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Google",
            "title": "Web Developer",
            "location": "Block 1, DivyaSree Omega, Survey No. 13, Kondapur Village,, Kothaguda, Hyderabad, Telangana 500032, India",
            "dates": "in progress",
            "description": "Web Developer"
        }]
};

var projects = {
    "projects": [{
            "title": "Animal Trading Cards",
            "dates": "2017",
            "description": "This is a web page for Animal Trading Cards",
            "url": "https://github.com",
            "images": ["images/Animal Trading Cards.jpg","images/Animal Trading Cards.jpg"]
        }
    ]
};

bio.display= function(){
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);
      if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace(data,skill);
        $("#skills").append(formattedSkill);
        });
    }
};

education.display = function(){
    var i = 0;
    var formattedDates = "";
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace(data,school.name);
        formattedName = formattedName.replace('#',school.url);
        formattedName += HTMLschoolDegree.replace(data,school.degree);
        formattedDates = HTMLschoolDates.replace(data,school.dates);
        var formattedLocation = HTMLschoolLocation.replace(data,school.location);
        $(".education-entry:last").append(formattedName,formattedDates,formattedLocation);

        for(var j = 0; j < school.majors.length; j++){
            var formattedMajor = HTMLschoolMajor.replace(data,school.majors[j]);
            $(".education-entry:last").append(formattedMajor);
        }
    });
    $("#education").append(HTMLonlineClasses);
    for(i = 0; i < education.onlineCourses.length; i++){
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace(data,education.onlineCourses[i].title);
        formattedTitle = formattedTitle.replace('#',education.onlineCourses[i].url);
        formattedTitle += HTMLonlineSchool.replace(data,education.onlineCourses[i].school);
        formattedDates = HTMLonlineDates.replace(data,education.onlineCourses[i].dates);
        var formattedUrl = HTMLonlineURL.replace(data,education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedTitle,formattedDates,formattedUrl);
    }
};
    
work.display=function(){
    work.jobs.forEach(function(job){
       $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data,job.employer);
        formattedEmployer += HTMLworkTitle.replace(data,job.title);
        var formattedDates = HTMLworkDates.replace(data,job.dates);
        var formattedLocation = HTMLworkLocation.replace(data,job.location);
        var formattedDescription = HTMLworkDescription.replace(data,job.description);

        $(".work-entry:last").append(formattedEmployer,formattedDates,formattedLocation,formattedDescription);
    });
};

projects.display = function(){
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = $(HTMLprojectTitle);
        formattedTitle.text(project.title);
        formattedTitle.attr("href",project.url);
        var formattedDates = HTMLprojectDates.replace(data,project.dates);
        var formattedDescription = HTMLprojectDescription.replace(data,project.description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        if(project.images.length > 0){
           for(var j = 0; j < project.images.length; j++){
                var formattedImage = HTMLprojectImage.replace(data,project.images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    });
};

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

function inName(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
};

bio.display();
work.display();
projects.display();
education.display();
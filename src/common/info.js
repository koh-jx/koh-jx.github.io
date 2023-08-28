const Info = (title, subtitle, date, ...descriptions) => {
    return {
        title: title,
        subtitle: subtitle,
        date: date,
        descriptionArray: descriptions
    }
}

const Project = (title, subtitle, stack, imgLink, links={}) => {
    return {
        title: title,
        subtitle: subtitle,
        stack: stack,
        imgSrc: imgLink,
        links: links
    }
}

const Skill = (title, svgLink) => {
    return {
        title: title,
        svgSrc: svgLink
    }
}

const OTHER_WORK = (title="", imgLink="pixel/invalid.png") => {
    return {
        title: title,
        imgLink: imgLink + ".png",
        webpLink: title === "" ? imgLink : imgLink + ".webp"
    }
}

export const EDUCATION = [
    Info("National University of Singapore",
        "Bachelor of Computing (Honours) in Computer Science",
        "Aug 2020 - May 2024",
        "Specialisation in Graphics and Game Development",
        "Specialisation in Databases",
        "CAP: 4.3/5.0"
    ),
]
export const WORK_EXPERIENCE = [
    Info("Seagate Technology", 
        "Test Systems Automation Engineer Intern", 
        "May 2023 - Jul 2023", 
        "Implemented an interactive shell for Seagate’s in-house hardware-testing framework built on Pytest.", 
        "Constructed processes to automatically generate documentation HTML files using Python, Sphinx and batch scripting."
    ),
    Info("Dedoco Pte Ltd",
        "Software Engineering Intern",
        "May 2022 - Aug 2022",
        "Implemented frontend and backend architecture using ReactJS, NestJS and Socket.IO.",
        "Developed app plugins for Microsoft Word and Webex to facilitate contract management and signing."
    )
]

export const PROJECTS = [
    Project("Wishbound", 
        "Grid-based Role-Playing Game. Showcased in 22nd NUS STePS.", 
        "Unreal Engine 4, C++",
        "https://i.imgur.com/MGW3HVq.png", 
        // "https://i.imgur.com/mBXBc3p.png",
        {Github: "https://github.com/ryantanlien/cs3247-wishbound", 
        Link: "https://uvents.nus.edu.sg/event/22nd-steps/module/CS3247/project/8"}
    ),
    Project("Anka", 
        "Flashcard management web application, utilising spaced repetition algorithms for optimised language learning.", 
        "React, NestJS, MongoDB",
        "https://anka-koh-jx.vercel.app/static/media/logo.2791cad962b087e13b36.png", 
        {Github: "https://github.com/koh-jx/Anka"}
    ),
    Project("Study Planner",
        "Timetabling web application integrating NUSMods API.",
        "React, Firebase",
        "https://i.imgur.com/U7Ad53X.png",
        {Link: "https://orbital-f53dc.firebaseapp.com"}
    ),
    Project("NUSe",
        "Telegram bot facilitating mutual exchange of unneeded items within NUS hostels.",
        "Python, AWS S3",
        "https://i.imgur.com/I7xufE2.png",
        {Github: "https://github.com/koh-jx/GEQ19C"}
    )

    // Graphics Project
    // tP
    // Portfolio website
]

export const SKILLS = {
    "Web Development": [
        Skill("React", "./skills/react.svg"),
        Skill("NestJS", "./skills/nestjs.svg"),
    ],
    "Languages": [
        Skill("TypeScript", "./skills/typescript.svg"),
        Skill("C++", "./skills/cpp.svg"),
        Skill("Python", "./skills/python.svg"),
        Skill("Java", "./skills/java-icon.svg"),
        Skill("HTML", "./skills/html.svg"),
        Skill("CSS", "./skills/css.svg"),
        Skill("PostGreSQL", "./skills/postgresql.svg"),
    ],
    "Tools": [
        Skill("Unreal Engine 4", "./skills/unreal.svg"),
        Skill("Krita", "./skills/krita.svg"),
        Skill("Photoshop", "./skills/photoshop.svg"),
    ]
}

export const DETAILS_LIST = [
    OTHER_WORK("League of Legends fanart", "graphics-works/ezreal"),
    OTHER_WORK("Overwatch fanart", "graphics-works/kiriko"),
    OTHER_WORK("Marvel fanart", "graphics-works/kamala"),
    OTHER_WORK("NUS Computing Club Merchandise E-Store launch promotion", "graphics-works/Launch"),
    OTHER_WORK("NUS Computing Club T-shirt design", "graphics-works/tshirt"),
    OTHER_WORK("NUS SoC eFreshman Orientation Programme 1st logo design", "graphics-works/ad_meliora_initial_logo"),
    OTHER_WORK("NUS Computing Club E-Sports Night promotional poster", "graphics-works/esportsnight"),
    OTHER_WORK("NUS Computing Club Spotify playlist promotion", "graphics-works/Youtube"),
    OTHER_WORK("NUS LifeHack event poster", "graphics-works/lifehack"),

    OTHER_WORK("Fifty fifty reference study", "graphics-works/5050"),
    OTHER_WORK("Reference art", "graphics-works/reference"),
    OTHER_WORK("NUS Freshman Orientation Projects Instagram logo", "graphics-works/socfop_logo"),
    OTHER_WORK("X-men fanart", "graphics-works/jean_grey"),
    OTHER_WORK("NUS SoC Soccat fanart", "graphics-works/cat"),
    OTHER_WORK("NUS Piano Ensemble Concertino concert promotion", "graphics-works/birdcage"),
    OTHER_WORK("NUS Computing Club 23rd Management Committee Namecard", "graphics-works/namecard"),
    OTHER_WORK("NUS Computing Club Finals 'Good Luck' poster", "graphics-works/finals_goodluck"),
    OTHER_WORK("NUS SoC eFreshman Orientation Programme final logo design", "graphics-works/admeliora_logo"),
    OTHER_WORK("NUS SoC eFreshman Orientation Programme promotional poster", "graphics-works/Recruitment"),
    
    OTHER_WORK("NUS Piano Ensemble Melodias concert promotion", "graphics-works/melodias"),

    
    
    
    
    
    
]


// Pad with empty OTHER_WORK objects until multiple of 9 is reached
if (DETAILS_LIST.length % 9 !== 0) {
    const amountToInsert = 9 - DETAILS_LIST.length % 9;
    for (let i = 0; i < amountToInsert; i++) {
        DETAILS_LIST.push(OTHER_WORK())
    }
}

console.log(DETAILS_LIST)
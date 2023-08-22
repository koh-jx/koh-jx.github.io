const Info = (title, subtitle, date, ...descriptions) => {
    return {
        title: title,
        subtitle: subtitle,
        date: date,
        descriptionArray: descriptions
    }
}

export const EDUCATION = [
    Info("National University of Singapore",
        "Bachelor of Computing (Honours) in Computer Science",
        "Aug 2020 - May 2024",
        "Specialisation in Graphics and Game Development, Databases",
        "CAP: 4.3/5.0",
        "Minor in Management"
    ),
]
export const WORK_EXPERIENCE = [
    Info("Seagate Technology", 
        "Test Systems Automation Engineer", 
        "May 2023 - Jul 2023", 
        "Implemented an interactive shell for Seagate’s in-house hardware-testing framework built on Pytest.", 
        "Constructed processes to automatically generate documentation HTML files using Python, Sphinx and batch scripting, by extracting docstrings/test information from Python files/Word documents respectively"
    ),
    Info("Dedoco Pte Ltd",
        "Software Engineering Intern",
        "May 2022 - Aug 2022",
        "Implemented frontend and backend architecture using ReactJS, NestJS and Socket.IO.",
        "Developed app plugins for Microsoft Word and Webex to facilitate contract management and signing."
    )
]






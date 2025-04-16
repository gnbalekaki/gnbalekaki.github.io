function load_research_assistants() {
    const assistants = [
        {
            name: '<a href="https://catalog.iit.edu/undergraduate/courses/cs/">CS 115 Object-Oriented Programming I</a>',
            role: 'This course introduces object-oriented programming as a problem-solving tool, covering basic data structures, algorithms, programming techniques, and software documentation.',
            //focus: 'Database Optimizations',
            //linkedin: 'https://linkedin.com/in/arupchauhan'
        },
        {
            name: '<a href="https://catalog.iit.edu/undergraduate/courses/cs/">CS 116 Object-Oriented Programming II</a>',
            role: 'This course introduces advanced concepts of object-oriented programming, including dynamic data structures, recursion, searching and sorting algorithms, and advanced object-oriented techniques.',
           //focus: 'Machine Learning in Security',
            //linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        },
        {
            name: '<a href="https://catalog.iit.edu/undergraduate/courses/cs/">CS 201 Accelerated Introduction to Computer Science</a>',
            role: 'PhD Problem-solving and design using an object-oriented programming language. Introduces a variety of problem-solving techniques, algorithms, and data structures in object-oriented programming.',
            //focus: 'Big Data Optimization',
            //linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        },   {
            name: '<a href="https://catalog.iit.edu/undergraduate/courses/cs/">CS 422 Data Mining</a>',
            role: 'This course offers an introduction to the fundamental concepts and techniques in data mining. It begins with an overview of key terminologies, then explores methods for discovering meaningful patterns in large datasets, including market basket analysis, nearest neighbor, decision trees, and clustering.',
            //focus: 'Big Data Optimization',
            //linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        },   {
            name: '<a href="https://catalog.iit.edu/undergraduate/courses/cs/">CS 425 Database Organization</a>',
            role: 'Overview of database architectures, including the Relational, Hierarchical, Network, and Object Models. Database interfaces, including the SQL query language. Database design using the Entity-Relationship Model. Issues such as security, integrity, and query optimization.',
            //focus: 'Big Data Optimization',
            //linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        },
        {
            name: '<a href="https://catalog.iit.edu/undergraduate/courses/cs/">CS 525 Advanced Database Organization</a>',
            role: 'This course provides comprehensive coverage of the challenges in database system implementation, along with an in-depth exploration of modern structures and techniques used in database management systems. It equips students with advanced skills suitable for DBMS architects, developers, database specialists, and designers of client/server and distributed systems. Key topics include transaction management, database structures, and distributed processing.',
            //focus: 'Big Data Optimization',
            //linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        },
        {
            name: '<a href="https://catalog.iit.edu/undergraduate/courses/cs/">CS 597 Reading and Special Problems</a>',
            role: 'This course focuses on guided reading and research tailored to specialized problems or topics of interest.',
            //focus: 'Big Data Optimization',
            //linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        }
    ];


    const assistants_html = assistants.map(assistant => `
        <div class="assistant-card">
            <h3>${assistant.name}</h3>
            <p><strong>Description:</strong> ${assistant.role}</p>
            
        </div>
    `).join("");

    $('#assistants-list').html(assistants_html);
}

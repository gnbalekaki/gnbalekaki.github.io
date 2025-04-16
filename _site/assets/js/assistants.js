function load_research_assistants() {
    const assistants = [
        {
            name: 'Arup Chauhan',
            role: 'Software Engineer',
            focus: 'Database Optimizations',
            linkedin: 'https://linkedin.com/in/arupchauhan'
        },
        {
            name: 'Jane Smith',
            role: 'Undergraduate Research Assistant',
            focus: 'Machine Learning in Security',
            linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        },
        {
            name: 'Robert Johnson',
            role: 'PhD Researcher',
            focus: 'Big Data Optimization',
            linkedin: 'https://linkedin.com/in/templatelinkedinprofile'
        }
    ];

    const assistants_html = assistants.map(assistant => `
        <div class="assistant-card">
            <h3>${assistant.name}</h3>
            <p><strong>Role:</strong> ${assistant.role}</p>
            <p><strong>Research Focus:</strong> ${assistant.focus}</p>
            <p><a href="${assistant.linkedin}" target="_blank">LinkedIn Profile</a></p>
        </div>
    `).join("");

    $('#assistants-list').html(assistants_html);
}

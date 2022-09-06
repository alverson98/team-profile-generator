// Manager Card
function generateManagerCard(arrayTeamMembers) {
  return `<div class="card">
            <div class="card-body">
                <div class="card-heading">
                    <h5 class="card-title">${arrayTeamMembers.managerName}</h5>
                    <h6 class="card-subtitle mb-2">Manager</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="id list-group-item">ID: ${arrayTeamMembers.managerId}</li>
                    <li class="email list-group-item">Email: <a href="mailto:${arrayTeamMembers.managerEmail}">${arrayTeamMembers.managerEmail}</a></li>
                     <li class="office-number list-group-item">Office Number: ${arrayTeamMembers.managerOfficeNumber}</li>
                 </ul>
            </div>
        </div>`;
}

// Engineer Card
function generateEngineerCard(arrayTeamMembers) {
  return `<div class="card">
              <div class="card-body">
                  <div class="card-heading">
                      <h5 class="card-title">${arrayTeamMembers.engineerName}</h5>
                      <h6 class="card-subtitle mb-2">Engineer</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="id list-group-item">ID: ${arrayTeamMembers.engineerId}</li>
                      <li class="email list-group-item">Email: <a href="mailto:${arrayTeamMembers.engineerEmail}">${arrayTeamMembers.engineerEmail}</a></li>
                       <li class="github list-group-item">GitHub Username: ${arrayTeamMembers.engineerGithub}</li>
                   </ul>
              </div>
          </div>`;
}

// Intern Card
function generateManagerCard(arrayTeamMembers) {
  return `<div class="card">
              <div class="card-body">
                  <div class="card-heading">
                      <h5 class="card-title">${arrayTeamMembers.internName}</h5>
                      <h6 class="card-subtitle mb-2">Intern</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="id list-group-item">ID: ${arrayTeamMembers.internId}</li>
                      <li class="email list-group-item">Email: <a href="mailto:${arrayTeamMembers.internEmail}">${arrayTeamMembers.internEmail}</a></li>
                       <li class="school list-group-item">School: ${arrayTeamMembers.internSchool}</li>
                   </ul>
              </div>
          </div>`;
}

// ##PSEUDO CODING
// Create cards based on employee type
//create array to push each card in
//function to make the overall HTML page (pass the array of cards)
//export the html page

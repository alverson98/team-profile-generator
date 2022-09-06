// Manager Card
const managerCard = function generateManagerCard(arrayTeamMembers) {
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
};

// Engineer Card
const engineerCard = function generateEngineerCard(arrayTeamMembers) {
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
};

// Intern Card
const internCard = function generateInternCard(arrayTeamMembers) {
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
};

// Creating the rest of the HTML to combine with the employee cards
const createPage = function generatePage(teamCards) {
  return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <title>Team Profile</title>
            </head>
            <body>
                <!-- Heading -->
                <header class="bg-primary bg-gradient text-white text-center">
                    <h1>My Team</h1>
                </header>
  
                <!-- Team Member cards -->
                <main class="main-content">
                    ${teamCards}
                </main>
  
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </body>
        </html>`;
};

// ##PSEUDO CODING
// Create cards based on employee type
//create array to push each card in
//function to make the overall HTML page (pass the array of cards)
//export the html page

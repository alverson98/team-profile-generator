// Array to store all of the created cards
var teamCardArray = [];

// Calling card functions when needed
const createPageHTML = function (arrayTeamMembers) {
  // Looping through each item in the arrayTeamMembers
  for (let i = 0; i < arrayTeamMembers.length; i++) {
    var teamMember = arrayTeamMembers[i];
    console.log(teamMember.getRole());
    // Manager
    if (teamMember.getRole() === "Manager") {
      const managerCard = generateManagerCard(teamMember);
      teamCardArray.push(managerCard);
    }

    //Engineer
    if (teamMember.getRole() === "Engineer") {
      const engineerCard = generateEngineerCard(teamMember);
      teamCardArray.push(engineerCard);
    }

    //Intern
    if (teamMember.getRole() === "Intern") {
      const internCard = generateInternCard(teamMember);
      teamCardArray.push(internCard);
    }
  }

  // Combining the strings in the array to use in generatePage()
  const teamCards = teamCardArray.join(" ");

  // Returning teamCards and passing to create the full HTML page
  const completedPage = generatePage(teamCards);
  return completedPage;
};

// Manager Card
function generateManagerCard(manager) {
  return `<div class="card">
            <div class="card-body">
                <div class="card-heading">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h6 class="card-subtitle mb-2">Manager</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="id list-group-item">ID: ${manager.getId()}</li>
                    <li class="email list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                     <li class="office-number list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                 </ul>
            </div>
        </div>`;
}

// Engineer Card
function generateEngineerCard(engineer) {
  return `<div class="card">
              <div class="card-body">
                  <div class="card-heading">
                      <h5 class="card-title">${engineer.getName()}</h5>
                      <h6 class="card-subtitle mb-2">Engineer</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="id list-group-item">ID: ${engineer.getId()}</li>
                      <li class="email list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                       <li class="github list-group-item">GitHub Username: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                   </ul>
              </div>
          </div>`;
}

// Intern Card
function generateInternCard(intern) {
  return `<div class="card">
              <div class="card-body">
                  <div class="card-heading">
                      <h5 class="card-title">${intern.getName()}</h5>
                      <h6 class="card-subtitle mb-2">Intern</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="id list-group-item">ID: ${intern.getId()}</li>
                      <li class="email list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                       <li class="school list-group-item">School: ${intern.getSchool()}</li>
                   </ul>
              </div>
          </div>`;
}

// Creating the rest of the HTML to combine with the employee cards
function generatePage(teamCards) {
  return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <link rel="stylesheet" href="./assets/css/style.css">
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
}

// Exporting
module.exports = createPageHTML;

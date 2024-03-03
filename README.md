# Lanie's FrontEnd project with ReactJS
This repo contains code that follows the content of the SheCodes Plus Perth Cohort of 2023-24.
Here we interact with the crowdfunding API built using DFR (see repo at https://github.com/lruizper/crowdfunding_back_end) which was deployed and is available at https://crowdfunding-back-end-lrp.fly.dev/.

## Deployed project
This project was deployed with Netlify and can be found by clicking this [link here](https://chipper-florentine-39a343.netlify.app/).

![Homepage screenshot of deployed site](src/assets/images/HomePage-deployed.png)
### The navigation bar
The Nav bar has been set up for displaying across the site, by definition as a component.
Its key feature is that it responds to the login status. As shown in the image above, before logging in, users will see options for either logging in or creating an account (Sign Up button). In contrast, when logged in, the options to log out and create a project are displayed.

### Listing projects
The main section of the home page features a grid that displays the existing projects.
In the future, I would like to filter the list by projects with status 'open' and sort by most recent first.

### Footer
Similar to the nav bar, it is defined as a stand-alone component that is used on the main page. Currently, the component acts more like a placeholder as it requires content to be added.

## Project creation page
Only when logged in, users will be able to interact with this page.
The form is set as a component which updates the state of the fields as they are being filled and then performs checks before submissions, such as avoiding empty fields, and forcing a minimum target of 1000 AUD.
![Screenshot of the project creation page](src/assets/images/ProjectCreationPage.png)
Upon successful submissions of the new project, the user is directed to the homepage, where the new project will be displayed.

## Project with pledges
The project page showing the basic information of the project, including: title, description, image, and the contributions it has received (pledges).
If a user has logged in properly, the 'Donate now' section will be visible, otherwise, a message requesting login is displayed.

![Project with pledges](src/assets/images/Proj-with-Pledge.png)
The contributions that the project has received are listed on the side of the bottom section. In case the project has not received any pledges yet, the user will be encouraged to donate.
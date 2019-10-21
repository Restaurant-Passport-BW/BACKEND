# BACKEND# BACKEND Restaurant Passport
**MVP
This app contains one user type.
Onboarding process for a new user. Include their name, city for their first passport, and email (can include other info you feel is needed).
Single Passport view: View lists of restaurants in a city they could go to and stamps/punches of restaurants they have been to. (for MVP just scroll down one long page, as a stretch create a book with pages to click and flip through)
Single restaurant view page:  Within a city passport, allow a user to click in and view restaurant details, mark that they visited the restaurant (which updates the homepage with a stamp or punch), or delete the restaurant from appearing in their passport.
(For the purpose of build week, choose a single city to build a passport for)
Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.
STRETCH
Add the ability to add multiple passports, and a homepage to view all of them. Add the ability to add friends so you can compare passports. Add the ability to filter what types of restaurants will appear in a passport. (chain restaurants, non-chain restaurants, mexican, italian, etc.)**

Server URL
https://localhost:4000

EndPoint list:

## Register User
POST https://

**Requirements to register:**
- unique username
- email
- password

**Example sending a request to register a new user**

{   "username" : "Shannon",
    "email": " shannon@gmail.com
    "password" : "thisisagoodone"
}

**Returns login token when user logs in**
POST https:

**Requirements to login:**
- existing username
- password





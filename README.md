# Angular-Travel-Diary
## Project Assignment for Angular Fundamentals SoftUni 2019

The project is a single-page web application created using Angular framework for the user interface and a local server built using Node.js and MongoDB for the back-end. It is a kind of blog system where keen travelers can share their exciting adventures like travels to exotic destinations or amazing discoveries closer to home.

The app uses Observables, Interceptors, Routing, Route Guards, Resolvers, Interfaces, Lazy loading of modules, Pipes and other Angular features. It supports error handling and data validation and uses Toastr to show the corresponding notifications. The styling is enhanced with the help of Bootstrap.

There are *three* main parts:
1. **Public part**, which is accessible to everyone, without authentication. Every visitor can:
* view the About page (by clicking the compass logo);
* view the Home page, with a welcome message, shortcut links and the three most recent adventures (posts);
* view all available posts by visiting the All Adventures page;
* perform search by category (again by visiting the All Adventures page);
* view details about each post by clicking its Details button;
* log in using the Login page (if he already has an account), or
* register using the Register page.

2. **Private part** – only for logged in users. After successful registration the user is automatically logged in. Now he can use the full functionality of the app:
* view the Home page, About page, All Adventures page, Search Results page and Details page for all posts;
* create new adventure using the Create New Adventure page;
* view his own posts by going to My Posts page;
* edit each one of his posts (only his) by clicking the Edit button under the post and visiting the Edit Adventure page;
* delete any of his posts (again only his) by clicking the Delete button under the post and visiting the Delete Adventure page;
* like adventures, posted by another user;
* logout.

3. **Administrative part** - only for admins. When the database is initiated for the first time, the server automatically seeds a user with username *Admin*, password *Admin123* and role Admin. He has the following functions:
* view the Home page, About page, All Adventures page, Search Results page and Details page for all posts;
* create new categories for the adventures using the Create New Category page. When the database is initiated for the first time, the server automatically seeds a default category '*General*'.
* view all categories in the All Categories page;
* he can like or delete any of the posts when he goes to the Details page
* he *cannot* create posts or edit the existing ones.

The app has the following *dynamic* pages:
1. **Home page** - displays a welcome message, shortcut links and the three most recent posts;
2. **All Adventures** - shows all available posts, each in a separate container, with its image, title, destination, author and date of creation. Offers search by category.
3. **Add Adventure** - a form with five fields - 3 input fields for title, imageUrl and destination, a textarea for the description and a select field for the category, with options corresponding to all available categories.
4. **My Posts** - shows only the posts of the currently logged in user in a format, similar to the all posts view.
5. **Details** - gives detailed info for the selected post, showing the author’s description of the adventure and the number of likes. Offers different options - like the post, edit or delete it(depending on the user status).
6. **Edit** - a form with four fields that are prefilled with the current info for the post. It allows the user to change the title, image, destination and/or description of the adventure;
7. **Delete** - shows the image of the post and a form with three disabled prefilled fields - title, destination and description. Allows the user/admin to permanently delete the post.
8. **Create Category** - for admins only. A form with one field for the name of the new category.
9. **All Categories** - for admins only. Shows all available categories.
10. **Search Results page** - shows the results of a search by category. Can be accessed only after a performed search. 

**Additionally** the app offers Login page, Register page, Logout option, About page and Search by category.

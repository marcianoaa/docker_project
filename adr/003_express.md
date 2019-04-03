# Choice of Web Server Framework
Name: Angelena Marciano // Course: CSCI 459
Express Node JS 

# Context: 

Build a docker image and container set using Ansible plabook instead of docker-compose file in order to run application and display a web page with data to the browser.

Express is a library of sequential middlewares that run on a NodeJS server. This allows you to define your own API for the client to interface with. 
Mongoose is a node dependency that makes it very easy to add CRUD features that interact with MongoDB.

# Decision:

I chose to use Express JS as my web server with my angular application for a few reaons. 
The first being that it is a free commercial open source software that is easy to use when building modern day applications and is designed specifically for building web applications and APIs, hence why I chose it for my angular app.
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express will 'listen' for any input/connection requests from clients.

Although I have never used it before, I felt comfortable testing it out with my personal web app.
The NodeJs server and express are an extremely important part of the MEAN stack because they allow developers to easily define the API routes for the client to access. 
When the client makes a request at the specified route, a function then occurs based on the request, then mongoose handles the database interaction from there. 


# Consequences: 

The Express JS server in my web application enabled me to collect input from the user, interpret it, and execute the correct response automatically.
After working out some kinks in my code due to making changes to the template, I was able to easily perform my CRUD operations directly in the web browser, which was incredibly easy and beneficial to see real-time change. I was able to use my Ansible playbook to link the express web server to the application successfully.



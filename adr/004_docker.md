# Choice of Container Management
Name: Angelena Marciano // Course: CSCI 459


# Context: 

Build a docker image and container using docker-compose in order to display a web page with data to the browser.


# Decision:

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a yml file to configure your application's services. In my case, we have 3 services: mongodb, express, and angular. Then, with a single command, create and start all the services from your configuration. Run docker-compose up starts and runs the entire app.
Docker Compose provides an easier waya to start up and launch multiple different services that are accompanied with your app. Otherwise, it could get complicated trying to determine where/how to start each aspect of your app.
Since I have never used it before, I was nervous testing it out with my personal web app, but the template and examples provided in class on OAKS provided me with comfort and asssistance.


# Consequences: 

I struggled at certain points throughout testing and building my docker-compose file, running into many errors throughout the way and being unable to run my web app as I wanted. 
After working out some kinks in my code due to making changes to the template, I was able to finally get my docker-cmopose file running when you when you run the code 'docker-compose up' in the terminal under the folder.



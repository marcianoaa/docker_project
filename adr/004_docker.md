# Choice of Container Management
Name: Angelena Marciano // Course: CSCI 459
Docker


# Context: 

Build a docker image and container set using Ansible plabook instead of docker-compose file in order to run application and display a web page with data to the browser.
In order to better manage each part of the App, Docker Compose allows for the three separate parts to exist individually in containers that link/communicate with each other.

# Decision:

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a yml file to configure your application's services. In my case, we have 3 services: mongodb, express, and angular. Then, with a single command, create and start all the services from your configuration. Run docker-compose up starts and runs the entire app.
Docker Compose provides an easier waya to start up and launch multiple different services that are accompanied with your app. Otherwise, it could get complicated trying to determine where/how to start each aspect of your app.
Since I have never used it before, I was nervous testing it out with my personal web app, but the template and examples provided in class on OAKS provided me with comfort and asssistance.


# Consequences: 

I struggled at certain points throughout testing and building my Ansible playbook file, running into many errors throughout the way and being unable to run my web app as I wanted.
After working out some kinks in my code due to making changes to the template, I was able to finally get my Ansible file running using the command 'ansible-playbook -v StartupPlaybook.yaml' in the terminal under the folder to start and load all of my specified tasks. All of my containers/images/other tasks all complete with no errors or failure now.



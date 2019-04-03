# Choice of Database Management System
Name: Angelena Marciano // Course: CSCI 459
Mongo DB

# Status: Accepted

# Context: 

Build a docker image and container set using Ansible plabook instead of docker-compose file in order to run application and display a web page with data to the browser.

MongoDB is a cross-platform, document-oriented database management system. 
Mongoose is a node dependency that makes it very easy to add CRUD features that interact with MongoDB.

# Decision:

I chose to use mongoDB as my database management system for a few reaons. 
The first being that it is a commercial open source, multi-platform service that is simple to understand and quick to use. MongoDB is also highly flexible and scalable, which is crucial in a database management system. It was designed for use with modern applications, hence the ease of use with the angular framework. 
MongoDB works differently from a relational DBMS, storing data in collections of documents (jsons) instead of indivdual table-like rows. 
MongoDB provides a simple way to manage your data, and I had no trouble using it with my angular application to perform all necessary CRUD operations.



# Consequences: 

Although I had never worked with mongoDB before, I have worked with other database management systems and feel like I had enough background knowledge to set up a working database with this new software.
It was not difficult to form the database and create my table in which I inserted data, but the struggles hit when trying to display the data from that table to the webpage. 
I had some trouble at first getting my data to be displayed on the webpage after inialization. When I would run my Ansible startup playbook, my localhost would load everything except the data, and in the terminal I would see that the tasks were skipped.
After some trial and error, I was able to make the environment operational for me and present an attractive table with sufficient and relatable data.



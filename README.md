# Full Stack Starter

Full stack engineering refers to the development of both the front-end (client-side) and back-end (server-side) portions of web applications or software. A full stack engineer is capable of working on all aspects of a web application or software project, from designing user interfaces and writing client-side code to developing server-side logic, managing databases, and deploying applications.

Here's a breakdown of the key components involved in full stack engineering:

Front-end Development: This involves building the user interface of a web application or software. Front-end developers work with technologies such as HTML, CSS, and JavaScript to create interactive and visually appealing interfaces that users interact with directly.

Back-end Development: Back-end development involves building the server-side logic and database management of a web application or software. Back-end developers work with programming languages such as Python, Ruby, Java, Node.js, and frameworks like Django, Ruby on Rails, Spring Boot, or Express.js to create server-side applications, handle data storage, authentication, and manage the application's business logic.

Database Management: Full stack engineers should be proficient in working with databases to store and retrieve data efficiently. They should have knowledge of database management systems like MySQL, PostgreSQL, MongoDB, or SQL Server and understand how to design database schemas, optimize queries, and ensure data integrity.

Version Control Systems: Full stack engineers often use version control systems like Git to manage codebase changes, collaborate with other developers, and track project history.

Deployment and DevOps: Understanding deployment processes and basic DevOps principles is crucial for full stack engineers. They should be familiar with deploying applications to servers, cloud platforms like AWS, Azure, or Google Cloud Platform, and using tools for continuous integration and continuous deployment (CI/CD).

In summary, full stack engineering encompasses the entire development process of web applications or software, from conceptualization and design to implementation, testing, deployment, and maintenance. Full stack engineers have a broad skill set that allows them to work on different layers of the technology stack and contribute to all aspects of a project.

This repository is a starter template that uses React.js for the front, Node/Express.js for the back, and MySQL for data persistence.

## Setting up an instance of MySQL

MySQL is one of the most popular databases worldwide. Per the 2022 Stack Overflow survey, MySQL was the most-loved database, with more than 46 percent of respondents using it. The community edition is available for free, and supported by a large and active community.

You may choose to run MySQL locally, or use a free cloud version such as [Free MySQL Hosting](https://www.freemysqlhosting.net/) or [db4free](https://db4free.net/)

After you create your account, you can use [phpMyAdmin](https://phpmyadmin.co/) to manage your database. Go ahead and create a table called `roster` and seed some data.

```
CREATE TABLE `Roster` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(255) NOT NULL,
 `grade` varchar(2) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1
```

The credentials you used to log in phpMyAdmin will also be used to connect from our backend computing server, specifically in the .env file

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

## Install and run

Run `npm install` in `backend` and `frontend` to install and `npm run start` to start.
---
id: heroku
title: Deploy
sidebar_label: Deploy
---

To let players connect with each other, the WSNET server have to be hosted on a cloud machine. This tutorial will guide on deploying the server on the service [Heroku](https://heroku.com), which offers a free plan to get started.

Other solutions are also available, e.g. AWS, Google Cloud, Digital Ocean, self hosting, etc.. 

---

### Create a new Account
Go on [Heroku](https://signup.heroku.com) and follow the procedure to create an account.

### Create a new App
Once you are logged in, click on _Create an app_

![Heroku Create App](../../../static/img/heroku-create-app.png)

Type your app name and select a region, then click the button _Create app_.

![Heroku App Name](../../../static/img/heroku-app-name.png)


### Deploy From your GitHub Repository
Select GitHub as Deployment method and proceed to login
![Heroku Deploy Github 1](../../../static/img/heroku_deploy_github_1.png)

Fork our [server](http://github.com/wsnet-lib/server) project<br/>
![Fork Server](../../../static/img/server_fork.png)

Select the repository you just forked
![Heroku Deploy Github 2](../../../static/img/heroku_deploy_github_2.png)

Click Deploy Branch
![Heroku Deploy Github 3](../../../static/img/heroku_deploy_github_3.png)


### Deploy From Heroku CLI
Go to the _Deploy_ tab and follow the procedure to upload the server code with the Heroku CLI and Git. If you haven't got _Git_ already, please install it first from this [link](https://git-scm.com/downloads).

![Heroku Deploy](../../../static/img/heroku-deploy.png)

### Test your App
If everything went smoothly, your server will now be running on the address `<your-app-name>.herokuapp.com:80`, which will be the address to connect from within the game (instead of `localhost:8080`). 

---

Note: to confirm that the server is up and running, go to the app logs and check that the server is started.

![Heroku Logs](../../../static/img/heroku-logs.png)

![Heroku Logs Server](../../../static/img/heroku-logs-server.png)

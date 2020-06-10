# cse_405_2020
___

This is a class required remote repository to be used for the Spring 2020 CSE 405 Server Programming Course.
I am using WebStorm as my IDE of choice for the coding assignments of this class. 
___
## Progress reports

### Git Progress report
This is the initial progress report for the week of **April 15th 2020.**
The objective was to set up a remote repository. 

### JavaScript and JSON
This is the progress report for the week of **April 24th 2020**

This report incorporates **Html,JavaScript,and JSON** fundamentals.
First off, I created a basic **Html text webpage** to display messages to the browser.

![skeleton](https://github.com/r0meroh/cse_405_2020/blob/master/images/html_body.PNG)


Next, I implemented a JavaScript code snipper to use with the <script> tag
  
![algosHtml](https://github.com/r0meroh/cse_405_2020/blob/master/images/algos_in_html.PNG)
 
 
 So far that gave us the output seen here in a **Chrome Browser** 
 
 ![resultBrowser](https://github.com/r0meroh/cse_405_2020/blob/master/images/result_html.PNG)
 
 
 After this, I created a seperate Javascript file to 'import' into the html file
 
 ![javascriptTag](https://github.com/r0meroh/cse_405_2020/blob/master/images/javascript_scriptTag.PNG)
 
 Using the additional **Html** syntax, I created a list for instructions the user can follow
 
 ![firstResult](https://github.com/r0meroh/cse_405_2020/blob/master/images/result_javascript.PNG)
 
This, so far, has been easy to accomplish, but in lecture, we learned about using the browser's **Developer Tools** to compile
to a browser based console. For this I added the following to the JavaScript file to display array manipulation, concatenation, and function declerations/initializations and loops.

![javaScriptBody](https://github.com/r0meroh/cse_405_2020/blob/master/images/javascript_code.PNG)



I also created a **Fibonacci Sequence Algorithm** from the pseudo code in the book I am currently reading "Fundamentals of Algorithmics"

![fibo](https://github.com/r0meroh/cse_405_2020/blob/master/images/fibo.PNG)


Unfortunately, I could not figure out in time how to implement the same algorithm using JavaScript's promises. I wanted to use them in a recursive manner, I will keep trying to complete it.

Here is the end result the code displays on the web brower's console. I used console Warnings to facilitate the readability of the console between code snippets


![JSON](https://github.com/r0meroh/cse_405_2020/blob/master/images/JSON.PNG)


The program also uses JavaScript's object oriented ability to implement objects and parse them into JSON styled output that can be written to an external file or sent to a server of choice


![console](https://github.com/r0meroh/cse_405_2020/blob/master/images/console_result.PNG)

---
---
---
### Node.Js

This is the progress report for the **Node.Js** week of **5/1/2020**.
I am able to understand the basics of Node modules and **NPM** which is a collection of Node Modules that one can use in their code. That is the whole point of Node.Js, to use and make node modules that can be implemented in the code. All of this is done in a way called "asynchronous" which means more than one process can be called and executed without having to wait on an other process to finish first before continuing in the script file.

Here I created a simple script

![script_node](https://github.com/r0meroh/cse_405_2020/blob/master/images/test_script.PNG)

I assign the value to be used and compare it to what I am expecting:

![result_node](https://github.com/r0meroh/cse_405_2020/blob/master/images/test_result.PNG)


Node modules are similar to the vast python libraries/modules used in python programs. In Node.Js there is a repository of various Node Modules that one can use on their code.  
Here I install some Node.Js modules to use on my code


![Node_installs](https://github.com/r0meroh/cse_405_2020/blob/master/images/installing_node_modules.PNG)


I made my own server script to run on my local machine within the console, I also made a version that I dictate which port to run on so when the browser is used the given port is required to access the result of the script.

![server_script](https://github.com/r0meroh/cse_405_2020/tree/master/images)



![server_result](https://github.com/r0meroh/cse_405_2020/blob/master/images/server_result.PNG)


![server_port](https://github.com/r0meroh/cse_405_2020/blob/master/images/server_port.PNG)


![server_running](https://github.com/r0meroh/cse_405_2020/blob/master/images/server_port_running.PNG)

![server_browser_port](https://github.com/r0meroh/cse_405_2020/blob/master/images/browser_port.PNG)

unfortuantely, I experienced a bug in some modules that I used that were old. Here both the IDE I am using(webstorm) and Github detected the potential compromised files.

![security](https://github.com/r0meroh/cse_405_2020/blob/master/images/security.PNG)


after removing these files, obviously the code couldn't run


![powershell](https://github.com/r0meroh/cse_405_2020/blob/master/images/node_missing_package.PNG)



This also led to merge conflicts with the repository remotely

![merge_conflict](https://github.com/r0meroh/cse_405_2020/blob/master/images/merge_conflict.PNG)

so, all in all I learned the basics of Node.Js and how to use modules and the importance of version control with relation to locally hosted working code and remote conflicts due to missing packages. Most importantly I learned the need for running certain Node.Js Modules with specific versions and updates that issued bug and security fixes.

---
---
### Firebase and authentication
This is the progress report for **5/8/2020** which is firebase implementation and user authentication.

first, I created a *Project* with the account I created in Google's firebase

![create](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/firebase_create.PNG)

In this class we are making a **WebApp**, so that is what I chose in the *firebase console* to be able to link to my localhost project on my computer.


![console](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/firebase_console.PNG)



I am given a **appId** and **authDomain** as well as other fields with their values directly from Firebase to be directly injected into the code of my app. For security reasons, I am not providing a full screenshot of the credentials.

![config](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/initialize_firebase.PNG)

Firebase gives couple of options in the matter of methods for user identification, here is the template I chose to go with, which sends an email to the user to verify the account.

![verify](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/user_authentication.PNG)


In the next progress report *firebase's* **firestore** will be used to create a data base that permitted users will be allowed to manipulate.


---
---
### Firestore Cloud based Database

This is the **Progress report for may 15th, 2020**

As part of the #webApp# that needs to be created for this class, a cloud storage provider named **Firestore** is implemented to work with the previous code from *Google's* **firebase**.

The first step is in the **Firebase** console I initalize a database with the **Firestore** option.

I add entries to the database manually in my code.


![employee_code](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/employees_firestore.PNG)



I linked the my current code for the web app with the firestore console:



![link](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/firestore_code.PNG)



and with that I am able to see the changes up on the cloud within the database option in the console of my firebase project:

![changes](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/added_employees.PNG)


![changes_2](https://github.com/r0meroh/cse_405_2020/blob/master/images_firebase/firestore_console.PNG)


---
---
### Prototype web app

This is the progress report for the week of **5/22/2020** which is for **hosting** on *firebase*

here is the process I had to do.

first download the *firebase* tools named CLI:

![tools](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/install_cli.PNG)


next, I had to log into **firebase** using the tool:

![login](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/firebase_LOog.PNG)

The confirmation was seen on the console(online):

![consoleLogin](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/firebase_login.PNG)

I ran the command *firebase init* and chose my existing project, added what services I wanted the project to have and deployed it:

![deploy](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/website.PNG)


and up to date(as of 5/22/2020) here is the working site:

https://cse-405-firebase.firebaseapp.com/


---
***Final report full app***
The final version has the working app. None of the contents display unless an user visting the app either logs in or signs up. The users then are stored in the authentication portion of firebase. The users logged in can make changes to the roster, but only when logged in. After logging out, the site stops displaying the content and the user can no longer make any changes and is logged out. The database also has rules that reflect that only existing logged in users can make changes.

user visiting site:

![not_loggedin](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/not_logged.PNG)


user signing up:

![signup](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/user_at_sign_up.PNG)


sign up code:

![signcode](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/user_signUp_code.PNG)


new user gets stored:

![storeduser](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/user_stored.PNG)


returning user logging in:   

![authcoded](https://github.com/r0meroh/cse_405_2020/blob/master/firebase_cse405/images_firebase/loggin.PNG)

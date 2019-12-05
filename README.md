# Semester Project - CIS4362

Authors: Danny Moolchand  
Class: Introduction to Cryptology   
Date: December 4, 2019    


----

### Table of Contents
- [Semester Project - CIS4362](#semester-project---cis4362)
    - [Table of Contents](#table-of-contents)
    - [Project Structure](#project-structure)
    - [Setup and Execution Instructions](#setup-and-execution-instructions)
    - [How To Use](#how-to-use)

---

### Project Structure 
The program was created with a server and a client. The server was written in python and the client was written in HTML/CSS/Javascript. For the server, I utilized Flask and SocketIO. Flask was used as the framework to structure my web application and SocketIO was used to handle the communcation between client and server and was also resposible for properly routing the messages to the clients. 
For the client, I used the jQuery and Bootstrap frameworks. jQuery was used to make handling Javascript/HTML interactions easier and Boostrap was used for making the client look nicer. For an IDE, I used VSCode. The server was tested on the Google Chrome and Mozilla Firefox browsers. 

Links to the technologies used are included below.

[Python 3.7](https://www.python.org/download/releases/3.0/)   
[Flask](https://pypi.org/project/Flask/)    
[SocketIO](https://python-socketio.readthedocs.io/en/latest/server.html)    
[jQuery](https://jquery.com/)   
[Boostrap](https://getbootstrap.com/)   
[VSCode](https://code.visualstudio.com/)    

---

### Setup and Execution Instructions 
To begin development on my project or to test the code yourself, the following steps must be done: 
1. Clone the repository to your local machine and place the files in a folder where you will be working. Or, if you have a zipped folder of the files, extract them to a similar place.
2. Open your IDE of choice and import the project. If using VSCode, open the folder directory directly into VSCode. Make sure the VSCode terminal is in the root directory of the project.
3. Run the command ".\env\Scripts\activate" if on Windows or "source ./env/Scripts/activate" if on Linux. This creates a virtual environment for the program.
4. Run the command "pip install -r requirements.txt" This will install all the dependencies for the project.
5. Run the command "python main.py". This will start the server on http://localhost:5000. Navigate to that URL to begin using the chat application.

Notes: The "/templates" directory houses the html files for the project. The "/static" folder houses the Javascript functions for the program. This is where the functions for encryptying and decrypting the messages can be found. 

---

### How To Use
When you first go to the URL, you will be prompted to enter a name. This is the name that will be shown on the messages you send. 

In the chat box, you can type a message and click enter or the submit button the send a message to all other connected clients. (To add more clients just open new tabs that also go to http://localhost:5000. All these clients can have different names.) 

By clicking the F12 key (or opening your browsers developer options), you can view the encrypted message being sent to the server. If one wants to experiment with different encryption keys, they can enter a new key in the KEY box. This will change how the encryption algorithm encrypts the message sent by the user. This change applies to all connected clients. 
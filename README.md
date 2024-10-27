# Smartfit Frontend Challenge
This repository contains my version of the smartfit challenge based on [Fernanda Kipper's](https://youtu.be/ozZXMkp8MnQ?si=BVlz-svnd18VbJxU) video.


![Node.js](https://img.shields.io/badge/Node.js-v14.17.6-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.6.4-blue)
![Angular](https://img.shields.io/badge/Angular-v14.2.0-red)
![Sass](https://img.shields.io/badge/Sass-v1.32.0-ff69b4)
![Docker](https://img.shields.io/badge/Docker-20.10.8-blue)


<img src="src/assets/images/svg/logo.svg" width="500" align="right">


## Technologies Used
- **NodeJS:**           16.10 
- **TypeScript:**       4.6.4
- **Angular:**          14.2.0
- **Docker:**           24.0.5


## How to run
There are two ways to run the project: the first and easiest is via Docker; the second is by setting up the environment locally and running the project manually with the Angular CLI. Below are the complete instructions for both options.

#### Option 1: Running the Project with Docker
1. **Step 1:** Make sure you have Docker installed.
    - **On Windows:** Install [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) and enable [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) if you don't already have it configured.
    - **On Linux:** Follow the instructions on the [Docker website](https://docs.docker.com/engine/install/) to install.
    - **On MacOS:** Use [Docker Desktop](https://docs.docker.com/desktop/install/mac-install/) for Mac.
2. **Step 2:** Build the Docker image. Run the command below: 
```bash
    docker build -t smartfit-frontend-challenge .
```
- `-t smartfit-frontend-challenge` creates a tag for the image called smartfit-frontend-challenge.
- The `.` indicates that Docker should use the Dockerfile present in the current directory.
3. **Step 3:** Run the newly created image container using:
```bash
docker run -p 4070:80 smartfit-frontend-challenge
```
- `-p 4070:80` maps **port 80** of the container to **port 4070** of the host.
- After running the command, the project will be available at the address: `http://localhost:4070`.

#### Option 2: Running the Project Locally
To run the project manually, you will need Node.js and Angular CLI, both at the versions specified below to avoid conflicts:

1. Install Node.js:
    - The project requires Node.js version 16.10.0.
    - Newer versions of Node.js may be incompatible with Angular 14.
    - Download the correct version from [Node.js LTS (16.10.0)](https://nodejs.org/en/blog/release/v16.10.0).
2. Install Angular CLI:
    - Make sure Angular CLI is 14.2.13, which is compatible with your project.
    - Install it with:
```bash
npm install -g @angular/cli@14.2.13
```
3. Configure TypeScript:
    - This project requires TypeScript version 4.6.4.
    - Install it with:
```bash
npm install -g typescript@4.6.4
```
4. Install Project Dependencies:
    - In the terminal, go to the project directory and run:
```bash
npm install
```
- This command installs the dependencies listed in `package.json`.

5. Start the Angular Server:
    - To run the project, use:
```bash
ng serve
```
or, to access the project from other machines on the same network:
```bash
ng serve --host 0.0.0.0
```
By default, the project will be accessible at http://localhost:4200. If you wish, you can change the port to any other:
```bash
ng serve --port 4070
ng serve --port 4070 --host 0.0.0.0
```
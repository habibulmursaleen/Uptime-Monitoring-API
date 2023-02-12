# Uptime-Monitoring-API

## Table of Contents

- [Details](#details)
- [How to run](#how-to-run)

## details

This is a Raw Node.Js project for Uptime Monitoring System.

```
1. RestAPI server
2. Token based Authentication & Authorization
3. User Signup and CRUD operation
4. User can set and have CRUD operation links to monitor and set up/down status code such as 201/501/403 and so on.
5. Check if a link has changed its state up/down by a Worker in every 10 secs.
6. SMS notification when a link is up/down with TwilioAPI
7. File system has been used for database.
8. Raw node.js without any external npm packages

```

<!-- HOW TO RUN -->

## How to run

Please follow the below instructions to run this project in your machine:

1. Clone this repository
   ```sh
   git clone https://github.com/habibulmursaleen/Uptime-Monitoring-API.git
   ```
2. Install dev dependencies
   ```sh
   npm install
   ```
3. Run the app
   ```sh
   npm start
   ```
4. The app should be available in http://localhost:3000

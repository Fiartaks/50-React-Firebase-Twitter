# 🐦 Twitter Social Media Application

## 📖 Project Overview
🌍 This project is a social media application designed to provide a Twitter-like experience for users. By integrating with Firebase for authentication and database functionalities, users can sign up, log in, post tweets, like and comment on posts, and view their personal feeds. Built with **React**, this application incorporates a modern design and real-time functionality.

## 📸 Screenshots 📸

![](rotate.gif)



## 💻 What’s in the Project?
- 🌟 **Main Component (App.js)**: Sets up routing for different pages and components and manages authentication state.  
- 🔐 **Authentication Page (AuthPage.js)**: Allows users to sign up or log in, supporting email/password and Google authentication methods.  
- 🛡️ **Protected Route (ProtectedRoute.js)**: Guards certain routes, ensuring only authenticated users can access them.  
- 📰 **Feed Page (FeedPage.js)**: Displays user-related content, including posts, tweets, and other interactions.  
- 📑 **Firebase Configuration**: Handles the setup for Firebase authentication and Firestore database to store user data and tweets.

## 🏗️ MVC Characteristics

### 1. Model
- **Data Structures**: Utilizes Firebase Firestore as the model to manage and store users, posts, and like interactions.
- **Authentication**: Firebase Auth is used to manage user sessions and interactions.

### 2. View
- **User Interface**: Components such as AuthPage, FeedPage, and Main deliver dynamic and responsive UIs for a rich user experience.
- **Styling**: Implemented with modern CSS and uses libraries like React Icons for intuitive navigation and interaction.

### 3. Controller
- **Business Logic**: Controllers like ProtectedRoute manage user authorization and route access. Authentication logic resides in AuthPage.
- **Real-Time Data**: Main component listens to real-time snapshot updates from Firestore, maintaining current post states.

## 🛠️ What Has Been Done in the Project?
- 🔄 Implemented user authentication and session management with Firebase.  
- 📰 Enabled users to create, edit, and delete posts in a feed-style timeline.  
- 💬 Integrated interactive features such as liking and commenting on posts.  
- 🎨 Crafted a structured, visually appealing interface using React and CSS.

## 📦 Libraries
- 📘 React  
- 🔥 Firebase  
- 🎨 React Icons  
- 🔧 React Router  
- 🎨 CSS  

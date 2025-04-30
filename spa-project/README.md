# SPA Project

This is a Single Page Application (SPA) built with React. The application includes sections for resume information, projects, and a contact page.

## Project Structure

```
spa-project
├── public
│   ├── index.html          # Main HTML entry point
├── src
│   ├── components          # Contains React components
│   │   ├── Contact.jsx     # Contact component
│   │   ├── Projects.jsx    # Projects component
│   │   └── Resume.jsx      # Resume component
│   ├── App.jsx             # Main App component with routing
│   ├── index.js            # Entry point for the React application
│   └── styles              # Contains CSS styles
│       └── App.css         # Styles for the application
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── .gitignore              # Git ignore file
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd spa-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- **Resume Section:** Displays detailed resume information including education, work experience, skills, and certifications.
- **Projects Section:** Lists various projects with descriptions and links.
- **Contact Section:** Provides contact information and a form for inquiries.

## Technologies Used

- React
- React Router
- CSS

## License

This project is licensed under the MIT License.
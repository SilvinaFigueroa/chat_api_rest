# Tech Pathway Advisor

## Description

Tech Pathway Advisor is a career advisor chatbot designed to assist users in creating their career roadmap for breaking into the tech industry. The application provides evidence-based, actionable tips and strategies in a friendly, supportive, and motivational tone. The advice is personalized based on the user's goals and challenges.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling client-side routing.
- **React Markdown**: For rendering markdown content.
- **Axios**: For making HTTP requests.
- **CSS**: For styling components.

### Backend

- **Google Generative AI (Gemini AI)**: For generating personalized career advice.
- **dotenv**: For managing environment variables.

## Routes

- `/`: The home page where users can input their name, desired career, and additional information.
- `/responses`: The response page that displays personalized career advice based on user input.

## Dependencies

- `@google/generative-ai`: ^0.15.0 - Used for integrating Google Generative AI to generate career advice.
- `axios`: ^1.7.2 - Used for making HTTP requests to the API.
- `dotenv`: ^16.4.5 - Used for managing environment variables.
- `react`: ^18.3.1 - The core library for building the user interface.
- `react-dom`: ^18.3.1 - Used for DOM manipulation with React.
- `react-markdown`: ^9.0.1 - Used for rendering markdown content in React components.
- `react-router-dom`: ^6.25.1 - Used for handling client-side routing.

## API

- **Google Generative AI (Gemini AI)**: The API used for generating personalized career advice. You need to add your API key to the environment variables.

## Deployment

The application is deployed on [Netlify](https://tech-advisor.netlify.app/) using [Netlify App](https://app.netlify.com/).

## Images

Images used in the application are from [Undraw](https://undraw.co/).

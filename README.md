# Punk Trivia

Punk Trivia is an interactive trivia application that tests your knowledge of punk history and culture. Answer questions about bands, albums, events, and more, and compete for the highest score.

## Features

- **Varied Questions**: Over 30 questions covering different aspects of punk.
- **Timer**: Each question has a time limit to answer.
- **Explanations**: After each answer, get a detailed explanation.
- **Final Score**: At the end of the game, your total score is displayed.
- **Confetti**: Celebrate your score with a confetti animation!

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **SCSS**: CSS preprocessor for more efficient and organized styles.
- **Vite**: Fast development tool for frontend projects.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/NerinaHctz/punk-trivia.git
    ```
2. Navigate to the project directory:
    ```bash
    cd punk-trivia
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Click "Start" to begin the game.
3. Answer the questions before the time runs out.
4. At the end of the game, review your score and click "Play Again" to try again.

## Project Structure

```plaintext
punk-trivia/
├── public/
│   ├── images/
│   │   └── ... (images used in the questions)
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MainPage.jsx
│   │   ├── Question.jsx
│   │   ├── Result.jsx
│   │   ├── Timer.jsx
│   │   └── ProgressBar.jsx
│   ├── styles/
│   │   ├── App.scss
│   │   ├── MainPage.scss
│   │   ├── Question.scss
│   │   ├── Result.scss
│   │   ├── Timer.scss
│   │   └── ProgressBar.scss
│   ├── App.jsx
│   ├── index.jsx
│   └── data/
│       └── questions.js (file with the questions)
├── .gitignore
├── package.json
└── README.md

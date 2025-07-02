# Stone Paper Scissors - React + Flask Game

A simple Stone Paper Scissors game using React for frontend and Flask for backend. The game tracks live scores and shows the computer's random choice as an image.

## Features
- Player can choose stone, paper, or scissors using buttons
- Computer randomly selects stone, paper, or scissors
- Live score updates
- Simple and modern user interface

## Project Structure
```text
stone-paper-scissors-project/
├── flask-server/
│   └── server.py
├── cloient/
│   ├── public/
│   │   └── images/
│   │       ├── stone.png
│   │       ├── paper.png
│   │       └── scissors.png
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## Setup

### Backend
```bash
cd flask-server
python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
pip install flask flask-cors
python server.py
```
Flask server runs at:  
**http://localhost:5000**

### Frontend
```bash
cd cloient
npm install
npm start
```
React app runs at:  
**http://localhost:3000**


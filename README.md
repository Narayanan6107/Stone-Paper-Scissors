tone Paper Scissors - React + Flask Game
This is a simple and interactive Stone Paper Scissors game built using React for the frontend and Flask for the backend. The game tracks live scores and displays the computer's random choice as an image.

Features
Clickable buttons with icons for player choices

Computer’s random choices displayed as images

Live scoreboard (Player vs Computer)

Clean, modern user interface

Project Structure
text
Copy
Edit
stone-paper-scissors-project/
│
├── flask-server/           # Flask backend
│   └── server.py
│
├── cloient/                # React frontend
│   ├── public/
│   │   └── images/         # Game icons (stone.png, paper.png, scissors.png)
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md
Setup Instructions
Backend (Flask)
bash
Copy
Edit
cd flask-server
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install flask flask-cors
python server.py
Flask server runs at:
http://localhost:5000

Frontend (React)
bash
Copy
Edit
cd cloient
npm install
npm start
React app runs at:
http://localhost:3000

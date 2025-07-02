from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/play', methods=['POST'])
def play():
    data = request.get_json()
    player_choice = data['choice']
    options = ['stone', 'paper', 'scissors']
    computer_choice = random.choice(options)

    if player_choice == computer_choice:
        result = 'Draw'
    elif (player_choice == 'stone' and computer_choice == 'scissors') or \
         (player_choice == 'paper' and computer_choice == 'stone') or \
         (player_choice == 'scissors' and computer_choice == 'paper'):
        result = 'You Win'
    else:
        result = 'You Lose'

    return jsonify({'result': result, 'computer_choice': computer_choice})

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, render_template , jsonify
import joblib

app = Flask(__name__)

# Load the model and vectorizer
model = joblib.load('hate_speech_model.pkl')
vectorizer = joblib.load('count_vectorizer.pkl')

@app.route('/')
def home():
    return render_template('index.html')

# @app.route('/predict', methods=['POST'])
# def predict():
#     if request.method == 'POST':
#         message = request.form['message']
#         data = vectorizer.transform([message]).toarray()
#         prediction = model.predict(data)
#         return jsonify({'prediction': str(prediction[0])})
@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Check if the request content type is JSON
        if request.is_json:
            # Get the JSON data from the request body
            data = request.get_json()
            
            # Extract the message from the JSON data
            message = data.get('message', '')
            
            # Transform the message using the vectorizer
            vectorized_data = vectorizer.transform([message]).toarray()
            
            # Perform the prediction using the model
            prediction = model.predict(vectorized_data)
            
            # Return the prediction as JSON
            return jsonify({'prediction': str(prediction[0])})
        else:
            return jsonify({'error': 'Unsupported Media Type'}), 415

if __name__ == '__main__':
    app.run(debug=True)
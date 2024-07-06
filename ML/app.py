from flask import Flask, request, render_template , jsonify
import joblib

app = Flask(__name__)

# Load the model and vectorizer
model = joblib.load('hate_speech_model.pkl')
vectorizer = joblib.load('count_vectorizer.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        message = request.form['message']
        data = vectorizer.transform([message]).toarray()
        prediction = model.predict(data)
        return jsonify({'prediction': str(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
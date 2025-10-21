from flask import Flask, request, jsonify
from flask_cors import CORS
from deep_translator import GoogleTranslator

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow React frontend

@app.route("/translate", methods=["POST"])
def translate_text():
    try:
        # Receive JSON data from React frontend
        data = request.get_json()
        text_to_translate = data.get("text_to_translate", "")
        target_language = data.get("select_language", "en")

        # Perform translation (auto-detect source language)
        translated_text = GoogleTranslator(source='auto', target=target_language).translate(text_to_translate)

        # Send response as JSON
        return jsonify({
            "translation_result": translated_text,
            "pronunciation": "",
            "detected_language": "Auto-detected"
        })

    except Exception as e:
        print("Error:", e)
        return jsonify({
            "translation_result": "Error: Unable to process your request.",
            "pronunciation": "",
            "detected_language": ""
        }), 500

if __name__ == "__main__":
    # Run Flask server on port 5000
    app.run(debug=True)

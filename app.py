from flask import Flask, request, jsonify, render_template
from openai import OpenAI
from flask_cors import CORS
import time
import base64
import requests
import io
from PIL import Image

app = Flask(
    __name__,
    static_url_path="/static",
    static_folder="build/static/js/main.a6efc8fa.js",
)
CORS(app)

client = OpenAI(api_key="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")


@app.route("/")
def index():
    return render_template("index.html")


# FMEA table
@app.route("/generate-fmea", methods=["POST"])
def generate_fmea():
    try:
        data = request.get_json()
        fmea_name = data["fmeaName"]
        prompt = f'generate full design FMEA for {fmea_name} in a table format and add at least 3 failure modes for each of the item/function?. Only return the generated FMEA table and don"t return any unwanted texts.'
        messages = [{"role": "user", "content": prompt}]
        start_time = time.time()
        completion = client.chat.completions.create(
            model="gpt-4-1106-preview", messages=messages, temperature=0
        )
        end_time = time.time()
        time_lapsed = end_time - start_time
        response = completion.choices[0].message.content

        return jsonify({"fmeaTable": response, "timeElapsed": round(time_lapsed, 2)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Sequence Diagram
@app.route("/generate-sequence-diagram", methods=["POST"])
def generate_sequence_diagram():
    try:
        data = request.get_json()
        name = data.get("name", "")

        prompt = f'Generate sequence diagram (mermaid code) for {name} process. Don"t return any numbers or any unwanted text, description of the response. Don"t return flowchart diagram.'
        messages = [{"role": "user", "content": prompt}]
        completion = client.chat.completions.create(
            model="gpt-4-1106-preview", messages=messages, temperature=0
        )
        response = completion.choices[0].message.content

        response = response.split("\n", 1)[1]
        graph = response.rsplit("\n", 1)[0]

        graphbytes = graph.encode("ascii")
        base64_bytes = base64.b64encode(graphbytes)
        base64_string = base64_bytes.decode("ascii")

        img = Image.open(
            io.BytesIO(requests.get("https://mermaid.ink/img/" + base64_string).content)
        )

        # Instead of using st.image, return the base64 encoded image string to the frontend
        buffered = io.BytesIO()
        img.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        return jsonify({"mermaidImage": img_str})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Mindmap Mermaid
@app.route("/generate-mindmap-diagram", methods=["POST"])
def generate_mindmap_diagram():
    try:
        data = request.get_json()
        name = data.get("name", "")

        prompt = f'Generate mindmap diagram (mermaid code) for {name} process. Don"t return any numbers or any unwanted text, description of the response. Don"t return flowchart diagram.'
        messages = [{"role": "user", "content": prompt}]
        start_time = time.time()
        completion = client.chat.completions.create(
            model="gpt-4-1106-preview", messages=messages, temperature=0
        )
        response = completion.choices[0].message.content
        end_time = time.time()
        time_lapsed = end_time - start_time
        response = response.split("\n", 1)[1]
        graph = response.rsplit("\n", 1)[0]

        graphbytes = graph.encode("ascii")
        base64_bytes = base64.b64encode(graphbytes)
        base64_string = base64_bytes.decode("ascii")

        img = Image.open(
            io.BytesIO(requests.get("https://mermaid.ink/img/" + base64_string).content)
        )

        # base64 encoded image string to the frontend
        buffered = io.BytesIO()
        img.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        return jsonify({"mermaidImage": img_str})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Mindmap plantuml
@app.route("/generate-plantuml-diagram", methods=["POST"])
def generate_mindmap_plantuml():
    try:
        data = request.get_json()
        name = data.get("name", "")

        prompt = f'generate OrgMode syntax for {name} with @startmindmap at the start and @endmindmap at the end. Don"t return any numbers or any unwanted text, description of the response. Don"t return flowchart diagram.'
        messages = [{"role": "user", "content": prompt}]
        start_time = time.time()
        completion = client.chat.completions.create(
            model="gpt-4-1106-preview", messages=messages, temperature=0
        )
        response = completion.choices[0].message.content
        end_time = time.time()
        time_lapsed = end_time - start_time
        response = response.split("\n", 1)[1]
        graph = response.rsplit("\n", 1)[0]

        graphbytes = graph.encode("ascii")
        base64_bytes = base64.b64encode(graphbytes)
        base64_string = base64_bytes.decode("ascii")

        img = Image.open(
            io.BytesIO(requests.get("https://mermaid.ink/img/" + base64_string).content)
        )

        # base64 encoded image string to the frontend
        buffered = io.BytesIO()
        img.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        return jsonify({"mermaidImage": img_str})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)

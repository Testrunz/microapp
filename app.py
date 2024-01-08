from flask import Flask, request, jsonify, render_template
from openai import OpenAI
from flask_cors import CORS
import time
import base64
import requests
import io
from PIL import Image
import os
from flask import Flask, request, jsonify
from langchain.document_loaders import (
    UnstructuredPDFLoader,
    OnlinePDFLoader,
    PyPDFLoader,
    TextLoader,
)
from langchain.vectorstores import Chroma, Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
from langchain.chat_models import ChatOpenAI
import tempfile
from langchain.chains import VectorDBQA
import re
from pymongo import MongoClient
from langchain.vectorstores import MongoDBAtlasVectorSearch
import numpy as np
from langchain.vectorstores import FAISS
import pinecone
from langchain.vectorstores import Pinecone
import base64
import gridfs
import openai
from langchain.docstore.document import Document
import pandas as pd
import ast

app = Flask(__name__)
CORS(app)

client = OpenAI(api_key="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")

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
def generate_plantuml_diagram():
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

# Process map
@app.route("/process-map", methods=["POST"])
def generate_process_map():
    try:
        data = request.get_json()
        name = data.get("name", "")

        prompt = f'Generate graph map (mermaid code) for {name} including output for each step . The output should be in between vertical slash and the input should be in between square brackets. The process should be ending with only a input and don"t include yes or no outputs or any questioning outputs or inputs. The graph map should be in sequence. Don"t return any numbers or any unwanted text, description of the response. Don"t return flowchart diagram.'
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

@app.route('/extract-test-cases', methods=['POST'])
def extract_test_cases():
    try:
        title = request.json.get('title')

        client = MongoClient("mongodb+srv://m220student:Gokulnath@cluster0.qp8h2nr.mongodb.net/")
        db_name = "electronics"
        collection_name = "electronics_pdf"
        collection = client[db_name][collection_name]
        print(collection)
        index_name = "langchain_demo"

        db = client.electronics
        col = db.electronics_pdf

        OPENAI_API_KEY = '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'
        embeddings = OpenAIEmbeddings(openai_api_key='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')
        index_name = "langchain-demo"
        pinecone.init(api_key="d860a1e6-532d-4673-873e-f61a4099f94d", environment="gcp-starter")

        index = Pinecone.from_existing_index(index_name=index_name, embedding=embeddings)
        print(index)
        query = f"{title}"
        results = index.similarity_search_with_score(query=query, k=1)
        print(results)
        text = col.find_one({"_id": results[0][0].metadata.get("source")})
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=200000, chunk_overlap=0)
        docs = [Document(page_content=x) for x in text_splitter.split_text(text.get("text"))]

        if results:
            llm = ChatOpenAI(
                model_name="gpt-4-1106-preview",
                temperature=0,
                openai_api_key=OPENAI_API_KEY,
            )
            chain = load_qa_chain(llm, chain_type="stuff")
            prompt = "Extract all the headers which is present at the start of new line and present only after an integer. Don't consider the text as heading if the integer which is present before the heading is not continuous and don't include its sub-headings. Don't include 'Scope','references','general requirements','test','annexes','TERMINOLOGY','instructions','purpose','Definitions','testing','instruments','Requirements' and other related words as headings. Return the response as dictionary with its respective clauses. Don't return any unwanted texts. Final answer should be in the following format: '''json {'text':[headings],'clause':[respective clauses]}'''. Ensure that all strings are enclosed in double quotes. Don't return any unwanted quotes like ``` json"
            response = chain.run(input_documents=docs, question=prompt)
            print(response)
            print("type", type(response))
            response1 = response.split("\n", 1)
            print("response1", response1)
            response = response.split("\n", 1)[1]
            print("dict_response", response)
            response = response.rsplit("\n", 1)[0]

            dict_response = ast.literal_eval(response)
            source = results[0][0].metadata.get("source")
            title_prompt = "Extract the Document title from the document. Don't return any other unwanted texts or numbers. Return only the title. Remove strings like Part, Requirements and related words."
            title_response = chain.run(input_documents=docs, question=title_prompt)
            title_response = title_response.split("\n", 1)[1].rsplit("\n", 1)[0]

            return jsonify({
                'source': source,
                'title_response': title_response,
                'tests': dict_response.get('text', []),
                'clauses': dict_response.get('clause', [])
            })

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)

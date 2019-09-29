import os
from flask import Flask, render_template, jsonify

app = Flask(__name__, static_url_path="")


@app.shell_context_processor
def make_shell_context():
    return {"os": os}


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/api", methods=("POST",))
def api():
    resp = request.get_json()
    return jsonify(resp)

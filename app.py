import os
from flask import Flask, render_template

app = Flask(__name__, static_url_path="")


@app.shell_context_processor
def make_shell_context():
    return {"os": os}


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


@app.route("/home")
def about():
    render_template("about.html")

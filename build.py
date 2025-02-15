import os
import json
import shutil
from bs4 import BeautifulSoup

# Define paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(BASE_DIR, "src")
DIST_DIR = os.path.join(BASE_DIR, "dist")

HTML_FILE = os.path.join(SRC_DIR, "index.html")
SCRIPT_FILE = os.path.join(SRC_DIR, "script.js")
MESSAGE_FILE = os.path.join(SRC_DIR, "message.js")
CSS_FILE = os.path.join(SRC_DIR, "styles.css")
RESUME_FILE = os.path.join(SRC_DIR, "resume.json")

# Ensure the dist directory exists
os.makedirs(DIST_DIR, exist_ok=True)

# Read HTML
with open(HTML_FILE, "r", encoding="utf-8") as f:
    html_content = f.read()
# Read JavaScript files
with open(SCRIPT_FILE, "r", encoding="utf-8") as f:
    script_content = f.read()
with open(MESSAGE_FILE, "r", encoding="utf-8") as f:
    message_script_content = f.read()
# Read CSS file
css_content = ""
if os.path.exists(CSS_FILE):
    with open(CSS_FILE, "r", encoding="utf-8") as f:
        css_content = f.read()
# Read and parse JSON resume file
resume_data = {}
if os.path.exists(RESUME_FILE):
    with open(RESUME_FILE, "r", encoding="utf-8") as f:
        resume_data = json.load(f)
# Inject resume data directly into script.js
script_content = f"const resumeData = {json.dumps(resume_data, indent=2)};\n" + script_content
# Parse HTML with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")
# Inject CSS into <head>
if css_content:
    style_tag = soup.new_tag("style")
    style_tag.string = css_content
    soup.head.append(style_tag)
# Inject resume content directly into the HTML
resume_container = soup.find
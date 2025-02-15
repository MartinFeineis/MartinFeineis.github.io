import os
import json
from bs4 import BeautifulSoup

# Define paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(BASE_DIR, "src")
DIST_DIR = os.path.join(BASE_DIR, "dist")

RESUME_FILE = os.path.join(SRC_DIR, "resume.json")
SCRIPT_FILE = os.path.join(SRC_DIR, "script.js")
CSS_FILE = os.path.join(SRC_DIR, "styles.css")

# Ensure the dist directory exists
os.makedirs(DIST_DIR, exist_ok=True)

try:
    # Read and parse resume.json
    resume_data = {}
    if os.path.exists(RESUME_FILE):
        with open(RESUME_FILE, "r", encoding="utf-8") as f:
            resume_data = json.load(f)

    # Read JavaScript file
    script_content = ""
    if os.path.exists(SCRIPT_FILE):
        with open(SCRIPT_FILE, "r", encoding="utf-8") as f:
            script_content = f.read()

    # Read CSS file
    css_content = ""
    if os.path.exists(CSS_FILE):
        with open(CSS_FILE, "r", encoding="utf-8") as f:
            css_content = f.read()

    # Create a new HTML document
    soup = BeautifulSoup("<!DOCTYPE html><html lang='en'><head></head><body></body></html>", "html.parser")

    # Add meta tags and title
    head = soup.head
    head.append(soup.new_tag("meta", charset="UTF-8"))
    head.append(soup.new_tag("meta", name="viewport", content="width=device-width, initial-scale=1.0"))
    title_tag = soup.new_tag("title")
    title_tag.string = resume_data.get("profile", {}).get("Name", "Resume")
    head.append(title_tag)

    # Inject CSS into <head>
    if css_content:
        style_tag = soup.new_tag("style")
        style_tag.string = css_content
        head.append(style_tag)

    # Create resume container
    body = soup.body
    resume_div = soup.new_tag("div", id="resume")
    body.append(resume_div)

    # Inject resume data directly into the HTML
    name = resume_data.get("profile", {}).get("Name", "Unknown Name")
    description = resume_data.get("profile", {}).get("Description", "No description available.")

    experience_html = ""
    for job in resume_data.get("jobs", []):
        company = job.get("Company", "Unknown Company")
        positions_html = ""
        for pos in job.get("Positions", []):
            title = pos.get("Title", "Unknown Title")
            start_date = pos.get("StartDate", "Unknown Start Date")
            end_date = pos.get("EndDate", "Unknown End Date")
            responsibilities = "".join([f"<li>{resp}</li>" for resp in pos.get("Responsibilities", [])])
            positions_html += f"""
            <li><strong>{title}</strong> ({start_date} - {end_date})</li>
            <ul>{responsibilities}</ul>
            """
        experience_html += f"<h2>{company}</h2><ul>{positions_html}</ul>"

    resume_div.append(BeautifulSoup(f"""
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>Work Experience</h2>
        {experience_html or '<p>No experience listed</p>'}
    """, "html.parser"))

    # Inject modified script.js
    script_tag = soup.new_tag("script")
    script_tag.string = f"const resumeData = {json.dumps(resume_data, indent=2)};\n" + script_content
    body.append(script_tag)

    # Write final HTML to dist directory
    output_file_path = os.path.join(DIST_DIR, "index.html")
    with open(output_file_path, "w", encoding="utf-8") as f:
        f.write(str(soup.prettify()))

    print(f"✅ Static HTML file created at: {output_file_path}")

except Exception as e:
    print(f"❌ Error during build: {e}")

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('index.html')
@app.route('/projects')
def project():
  return render_template('project.html')
@app.route('/about_me')
def about():
  return render_template('about_me.html')
app.run(debug=True)


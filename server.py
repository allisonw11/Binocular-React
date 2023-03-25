from flask import Flask, render_template
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined

# This is the Binocular-React version


@app.route('/')
def homepage():
    """Display the Binocular's homepage."""

    return render_template('homepage.html')


@app.route('/create_account')
def create_new_account():
    """Display the create account page."""

    return render_template('createAccount.html')


@app.route('/login')
def login():
    """Login page."""

    return render_template('login.html')


@app.route('/logout')
def logout():
    """Logout page."""

    return render_template('logout.html')


@app.route('/profile')
def profile():
    """Display login user profile."""

    return render_template('profile.html')


@app.route('/reviews')
def review():
    """Display login user reviews."""

    return render_template('reviews.html')


@app.route('/q&a')
def qa():
    """Display Q & A page."""

    return render_template('q&a.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

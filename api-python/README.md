## Hosted version

If you intend to focus on the client-side design aspect of the problem set, you can start by leveraging the hosted version at https://eq-work-samples-api.herokuapp.com

However, you'd still need to explore the source code to understand the routes. Eventually you're encourage to run your own copy either locally or remotely (see below [Setup and Run](#setup-and-run)) to maximize flexibility.

## Environment

* Python 3.6

## Setup and Run

0. Clone this repository `git clone git@github.com:EQWorks/work-samples.git`
1. Install Python level dependencies `$ pip install -r requirements.txt` (use of [`virtualenv`](https://virtualenv.pypa.io/en/stable/) is recommended)
2. Run `$ SQL_URI=<SQL connection URI> FLASK_APP=app.py FLASK_DEBUG=1 flask run` and by default it should now be listening on port `5000`
3. Open your browser and point to `localhost:5000` and you should see `Welcome to EQ Works 😎`

Alternatively, if you're familiar with [Heroku](https://www.heroku.com/) (free account is sufficient), you can either use that to run locally (`heroku local`) or deploy it to your own dyno to run remotely. To spawn a free Heroku dyno and run on it:

0. Clone this repository `git clone git@github.com:EQWorks/work-samples.git`
1. Get Heroku setup and have a `heroku` git remote configured for this repository
2. Configure Heroku environment variable `heroku config:set SQL_URI='<SQL connection URI>'`
3. Go to the `work-samples` project root and do `git subtree push --prefix api-python heroku master` (assuming `heroku` is the Heroku remote name)

_Note_: you'll be given necessary `SQL_URI` value along with the problem set

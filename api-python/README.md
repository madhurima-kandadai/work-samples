## Environment

* Python 3.6
* Up-to-date [`pip`](https://pip.pypa.io/en/stable/)
* [Optional, Recommended] Use of a [`virtualenv`](https://virtualenv.pypa.io/en/stable/)

## Setup and Run

The following instructions are based on `Linux/Unix` command line interface. Modify them according to your actual operating system used.

1. Install Python level dependencies `$ pip install -r requirements.txt`
2. Copy `sample-config.yml` to `config.yml` (`$ cp sample-config.yml config.yml`)
3. Run `$ FLASK_APP=app.py FLASK_DEBUG=1 flask run` and by default it should now be listening on port `5000`.
4. Open your browser and point to `localhost:5000` and you should see `Welcome to EQ Works 😎`

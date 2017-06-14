## Environment setup
- Install latest golang version
- Set the $GOPATH to point to project folder (../work-samples/backend-go/)
- Follow installation instructions from https://github.com/mattn/go-sqlite3
- Install Apache ab tool (for Ubuntu `sudo apt-get install apache2-utils`)

## Running the app
- Build the web server `go install counter`
- Start the server `../bin/counter`
- With the app running use `ab` tool to run benchmarks `ab -k -n 500 -c 2 http://localhost:8080/view/`
- Check the pages `http://localhost:8080/counter/` and `http://localhost:8080/counter-db/`

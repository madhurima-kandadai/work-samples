const express = require('express')
const pg = require('pg')

const app = express()

var PGHOST = 'work-samples-db.cx4wctygygyq.us-east-1.rds.amazonaws.com'
var PGPORT = '5432'
var PGDATABASE = 'work_samples'
var PGUSER = 'readonly'
var PGPASSWORD = 'w2UIO@#bg532!'
var SQL_URI = 'postgresql://readonly:w2UIO@#bg532!@work-samples-db.cx4wctygygyq.us-east-1.rds.amazonaws.com:5432/work_samples'

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// configs come from standard PostgreSQL env vars
// https://www.postgresql.org/docs/9.6/static/libpq-envars.html
const pool = new pg.Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
})

app.get('/', (req, res) => {
  res.send('Welcome to EQ Works 😎')
});

app.get('/events', (req, res, next) => {
  var withRowCount = req.query.withRowCount;
  var pageNumber = req.query.pageNumber;
  var limit = req.query.limit;
  var timeConstraint = req.query.timeConstraint;  
  var sqlQuery = '';
  var rowCountQuery = '';
  if (timeConstraint === "hourly") {
    rowCountQuery = `SELECT count(*) FROM public.hourly_events GROUP BY date, hour;  `
    sqlQuery = `SELECT date, hour, SUM(events) AS events 
    FROM public.hourly_events 
    GROUP BY date, hour 
    ORDER BY date DESC, hour 
    LIMIT ` + limit + ` OFFSET ` + (pageNumber - 1) * limit + `;`
  } else {
    rowCountQuery = `SELECT count(*) FROM public.hourly_events GROUP BY date;  `
    sqlQuery = `SELECT date, SUM(events) AS events 
                FROM public.hourly_events 
                GROUP BY date 
                ORDER BY date DESC 
                LIMIT ` + limit + ` OFFSET ` + (pageNumber - 1) * limit + `;`
  }
  var result = { rowCount: 0, data: {}, withRowCount: withRowCount, pageNumber: pageNumber, limit: limit };
  pool.query(sqlQuery, function (err, rows, fields) {
    result.data = rows.rows;
    if (err) throw err;
    if (withRowCount == "true") {
      pool.query(rowCountQuery, function (err, rows, fields) {
        result.rowCount = rows.rowCount;
        if (err) throw err;
        res.send(result);
      });
    }
    else {
      res.send(result);
    }
  });
});

app.get('/stats', (req, res, next) => {
  var withRowCount = req.query.withRowCount;
  var pageNumber = req.query.pageNumber;
  var limit = req.query.limit;
  var timeConstraint = req.query.timeConstraint;
  var rowCountQuery = '';
  var sqlQuery = '';
  if (timeConstraint === "hourly") {
    rowCountQuery = `SELECT count(*) FROM public.hourly_stats GROUP BY date, hour`;
    sqlQuery = `SELECT date, hour,SUM(impressions) AS impressions,SUM(clicks) AS clicks,SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date, hour
    ORDER BY date DESC, hour
    LIMIT ` + limit + ` OFFSET ` + (pageNumber - 1) * limit + `;`
  }
  else {
    rowCountQuery = `SELECT count(*) FROM public.hourly_stats GROUP BY date`;
    sqlQuery = ` SELECT date, SUM(impressions) AS impressions, SUM(clicks) AS clicks, SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date
    ORDER BY date DESC
    LIMIT ` + limit + ` OFFSET ` + (pageNumber - 1) * limit + `;`
  }
  var result = { rowCount: 0, data: {}, withRowCount: withRowCount, pageNumber: pageNumber, limit: limit };
  pool.query(sqlQuery, function (err, rows, fields) {
    result.data = rows.rows;
    if (err) throw err;
    if (withRowCount == "true") {
      pool.query(rowCountQuery, function (err, rows, fields) {
        result.rowCount = rows.rowCount;
        if (err) throw err;
        res.send(result);
      });
    }
    else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT || 5555, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log(`Running on ${process.env.PORT || 5555}`)
  }
})

// last resorts
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`)
  process.exit(1)
})
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  process.exit(1)
})

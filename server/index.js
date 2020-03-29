const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./api');
const {
  languages,
  technologies,
  employers,
  clients,
  projects,
  projectTasks
} = require('./routes');

const PORT = 4000;
const CORS_ORIGIN_NOT_ALLOWED =
  'The CORS policy for this site does not allow access from the specified Origin.';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:3000'];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (!allowedOrigins.includes(origin)) {
        return callback(new Error(CORS_ORIGIN_NOT_ALLOWED), false);
      }
      return callback(null, true);
    },
    credentials: true
  })
);

app.use('/languages', languages);
app.use('/technologies', technologies);
app.use('/employers', employers);
app.use('/clients', clients);
app.use('/projects', projects);
app.use('/project-tasks', projectTasks);

app.get('/', api);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import Root from './routes/Root';

const app = express();

app.use(express.static('./public'));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      res.send(`<!doctype html>${renderToString(<Root content={renderToString(<RouterContext {...props} />)} />)}`);
    } else {
      res.sendStatus(404);
    }
  });
});

export default app;

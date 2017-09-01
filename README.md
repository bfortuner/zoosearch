Label-AI
===========================

Hand-labeling tool accelerated with ML for blazing fast annotation.

Setup
-----

```sh
% npm install
% pip install -r flask/requirements.in
```

Usage
-----

Launch the GraphQL API server:

```sh
% cd flask
% python app.py
```

Launch the development web server which serves the static client-side app:

```sh
% npm start
```

Launch the prod JS server

```
npm run build
pushstate-server build
```
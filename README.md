SearchZoo
===========================

Search engine for machine learning models and datasets

Setup
-----

```sh
% npm install
```

Usage
-----

Launch the development web server:

```sh
% npm start
```

Launch the prod server

```
npm run build
pushstate-server build
```

Deploy
------

Deploy static website with [Surge](https://surge.sh/)

```sh
% npm run build
% surge
```

Follow instructions and point the path to your build/ directory when asked.

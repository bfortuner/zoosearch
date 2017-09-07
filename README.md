ZooSearch
===========================

Search engine for machine learning models and datasets

Submit new model/dataset
------------------------

Cut an issue or send a pull request with your new model/dataset. Example submissions can be found in the [models.js](https://github.com/bfortuner/modelzoo/blob/master/src/models.js) and [datasets.js](https://github.com/bfortuner/modelzoo/blob/master/src/datasets.js) files.

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

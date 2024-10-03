# @credential-handler/vc-playground-contexts-server

> Serves contexts of example credentials for CHAPI Playground.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

Contexts served by this package are to be used with CHAPI Playground and are
pulled in from [vc-examples](https://github.com/credential-handler/vc-examples).

## Install

- Node.js 18+ is required.

### Development

To install and start server locally (for development):

```sh
$ git clone https://github.com/credential-handler/vc-playground-contexts-server.git
$ cd vc-playground-contexts-server
$ npm install
$ npm start
$ curl -k https://localhost:65443/examples/movie-ticket/v2.json
```

The `contexts` directory of the
[vc-examples](https://github.com/credential-handler/vc-examples) repo is served
statically from the `/examples/` folder. Contexts are consequently available at
URLs similar to `http://localhost:65443/examples/alumni/v1.json`

## Usage

### Add / Update Contexts

Please add or update credential contexts in the `contexts` dir in
[vc-examples](https://github.com/credential-handler/vc-examples) repo.

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[New BSD License (3-clause)](LICENSE) © Digital Bazaar

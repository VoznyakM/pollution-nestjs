* WildfireNest

## Description

NestJS driven backend to manage Wildfire project

## Installation

```bash
$ npm install
```

## DB setup

setup correct encoding

```SQL
ALTER DATABASE wildfire CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE wildfire CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

WildfireNest is an GPL-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. 

## Stay in touch


## License

  WildfireNest is [GPL licensed](LICENSE).

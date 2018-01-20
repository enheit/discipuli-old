

# discipuli
The application to manage workflow between teachers and students

[![Build Status](https://travis-ci.org/enheit/discipuli.svg?branch=develop)](https://travis-ci.org/enheit/discipuli)
[![Coverage Status](https://coveralls.io/repos/github/enheit/discipuli/badge.svg?branch=coveralls-init)](https://coveralls.io/github/enheit/discipuli?branch=coveralls-init)

## CLI commands
### General (combined)
| Command  | Description |
| ------------- | ------------- |
| npm run dev  | Create `static/server.build.js` file and run with node |
| npm run prod | Create `static/browser.bundle.min.js` & `static/server.bundle.min.js` files in root folder  |
| npm run lint  | Run eslint for client, common and server folders |

### Dev build
| Command  | Description |
| ------------- | ------------- |
| npm run browser.dev  | Create `static/browser.bundle.js` file in root folder  |
| npm run server.dev  | Create `static/server.bundle.js` file in root folder |

### Prod build
| Command  | Description |
| ------------- | ------------- |
| npm run browser.prod  | Create `static/browser.bundle.min.js` file in root folder  |
| npm run server.prod  | Create `static/server.bundle.min.js` file in root folder  |

### Lint
| Command  | Description |
| ------------- | ------------- |
| npm run client.lint  | Run eslint for folder with client code |
| npm run common.lint  | Run eslint for folder with shared code |
| npm run server.lint  | Run eslint for folder with server code |

### Test
| Command  | Description |
| ------------- | ------------- |
| npm run test  | Run tests in all directories |

## TODO
- [x] Add [~~webpack-dev-server~~](https://webpack.js.org/configuration/dev-server/) (Added [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware), [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) and [react-hot-loader](https://github.com/gaearon/react-hot-loader))
- [x] Add server webpack config
- [x] Add [ESLint](https://eslint.org/)
- [x] Add [Travis](https://travis-ci.org/) CI
- [x] Add autodeploy to [Heroku](https://dashboard.heroku.com/)
- [x] Add [Jest](https://facebook.github.io/jest/)
- [ ] Improve webpack configs
- [ ] Start to use [JSDoc](http://usejsdoc.org/)

## Known issues
After update content of the component view the warning message is shown: `browser.bundle.js:1635 Warning: Text content did not match. Server: "Hello world1" Client: "Hello world"`. (Looks like server cannot send updated state to the client)

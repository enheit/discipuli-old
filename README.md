# discipuli
The application to manage workflow between teachers and students

## CLI commands
| Command  | Description |
| ------------- | ------------- |
| npm run browser.dev  | Create `static/browser.bundle.js` file in root folder  |
| npm run browser.prod  | Create `static/browser.bundle.min.js` file in root folder  |
| npm run server.dev  | Create `static/server.bundle.js` file in root folder |
| npm run server.prod  | Create `static/server.bundle.min.js` file in root folder  |


## TODO
- [x] Add [~~webpack-dev-server~~](https://webpack.js.org/configuration/dev-server/) (Added [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware), [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) and [react-hot-loader](https://github.com/gaearon/react-hot-loader))
- [x] Add server webpack config
- [ ] Add [ESLint](https://eslint.org/)
- [ ] Improve webpack configs
- [ ] Start to use [JSDoc](http://usejsdoc.org/)
- [ ] Add [Jest](https://facebook.github.io/jest/)

## Known issues
After update content of the component view the warning message is shown: `browser.bundle.js:1635 Warning: Text content did not match. Server: "Hello world1" Client: "Hello world"`. (Looks like server cannot send updated state to the client)

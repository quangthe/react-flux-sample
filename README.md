# References
  * Getting started with React:
    https://facebook.github.io/react/docs/getting-started.html
  * Flux architecture:
    Overview:
      https://facebook.github.io/flux/docs/overview.html
    Redux - predictable state container for JavaScript apps:
      http://redux.js.org/index.html
      https://github.com/reactjs/redux
  * CSS preprocessor:
    6 Current Options for CSS Preprocessors:
      http://www.sitepoint.com/6-current-options-css-preprocessors/
    Sass: CSS with superpowers
      http://sass-lang.com/guide
  * Build tool
    Webpack
      https://webpack.github.io/
    Gulp.js
      http://gulpjs.com
    Babel: JS compiler
      https://babeljs.io
    Browser-sync
      https://www.browsersync.io/
    Browserify
      http://browserify.org/
  * React router:
    https://github.com/reactjs/react-router
  * API services with Node.js and express.js:
    http://expressjs.com/
  * Mobile first responsive design
    Create a mobile first responsive web design
      http://www.html5rocks.com/en/mobile/responsivedesign/
    Foundation framework:
      https://github.com/zurb/foundation-sites

# Component
  Homepage
  <App>
    <EnvironmentList>
      <Environment>
        <SpaceList>
          <Space>
            <InstanceList>
              <Instance></Instance>
            </InstanceList>
          </Space>
        </SpaceList>
      </Environment>
    </EnvironmentList>
  </App>

  Login
  <LoginPage>
    <form>
      <input name="user">
      <input name="password">

      <input type="submit">
    </form>
  </LoginPage>

# Required global packages:
  gulp: npm i -g gulp

# Install dependencies:
  npm install
# Develop on local
  npm start
# Build static assets for deployment on prod
  npm run prod

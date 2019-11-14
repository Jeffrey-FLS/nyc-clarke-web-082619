# Heroku Deployment   

- Install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli) 
- Create heroku account (if you haven’t already) and `heroku login` in terminal	

## In Backend Repo...
- [ ] `Heroku create app-name`
- [ ] `heroku buildpacks:set https://github.com/bundler/heroku-buildpack-bundler2`
- [ ] In `puma.rb` comment out this line `pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }`
    - FYI I figured this out from my app crashing.. over and over and over again. [Stackoverflow to the rescue](https://stackoverflow.com/questions/57574694/why-does-the-heroku-rails-app-crash-after-upgrading-rails-to-6-0-0)
- [ ] In `Gemfile` comment out or delete `gem 'sqlite3'`
- [ ] In `Gemfile.lock` find this line `BUNDLED WITH` and delete it and the next line
    - FYI also figured out doing this from search and FAILING.[Stackoverflow to the rescue again](https://github.com/heroku/heroku-buildpack-ruby/issues/833)
- [ ] `git push heroku master`
- [ ] Prayer. Lots and lots of prayer.
- [ ] JK `heroku open`
- [ ] Test going to some of your GET endpoints and viewing the JSON in the browser. Once you can do that, you can move forward! 

## In Frontend Repo 
- [ ] `heroku create app-name -b https://github.com/mars/create-react-app-buildpack.git`
- [ ] `npm install --save dotenv`
- [ ] In `index.js` or very high in your app structure `require('dotenv').config()`
- [ ] Create an `.env.local` file and make sure it's in your .gitignore
    - [ ] In that file add your API base such as `REACT_APP_API_BASE="http://localhost:3001/api/v1"`
- [ ] `git push heroku master`
- [ ] More prayer. Lots more prayer
- [ ] JK. Go to your heroku dashboard and set the `Config Vars` for your API Base to point to your hosted backend application.
- [ ] Test our your application!!! 

## Notes
- Heroku app names are global so they need to be unique across ALL HEROKU APPS. If you try something like `example` it ain't gonna work. 


## Resources
- [Deploy rails to Heroku](https://devcenter.heroku.com/articles/getting-started-with-rails5)
- [Deploy react to Heroku](https://blog.heroku.com/deploying-react-with-zero-configuration)
- [Change your api DB from sqlite3 to postgresql](https://medium.com/@virtual_khan/converting-rails-from-sqlite3-to-postgresql-d97023314a14)



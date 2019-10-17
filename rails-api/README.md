## SWBATs
* Create a server that returns JSON as a response (using rails)
* Requests -> Routes -> Controller -> *Serializer (Optional)* -> Response {}
* Set up CORs - Cross Origin Resource Sharing
* What is the difference? `rails new app-name` vs `rails new app-name --api`

### Routes
  * We still have to configure routes
  * we can name space our routes.

### Controller
  * We still manipulate/interact with the models as we need.
  * However, now, we return JSON instead of HTML.

### Serializers
  * [Active Model Serializer](https://github.com/rails-api/active_model_serializers)
  * [Fast JSON API](https://github.com/Netflix/fast_jsonapi)
  * [jBuilder](https://github.com/rails/jbuilder)

## CORs
  * By default, we are not allowed to share resources across different domains. (Different servers at different IP adresses.)
  * We can choose to enable CORs in our rails api.
    * `gem 'rack-cors'`
    * config/initializes/cors.rb
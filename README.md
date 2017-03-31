# forgetful-elephant

Provides a REST API for "events." Data is stored in memory on Heroku, meaning that any deployment or dyno restart (which happens at least once every 24 hours) will cause all data to be lost. See it in action at https://forgetful-elephant.herokuapp.com

## Endpoints

### /events

#### POST /

Takes a JSON object in the body, adds an ID to it, and stores it in an array.

#### GET /

Responds with all stored objects.

#### GET /:id

Retrieves the object with ID `:id` and responds with it.

#### DELETE /:id

Deletes the object with ID `:id` and responds with it.

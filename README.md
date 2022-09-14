## Puppies API with Typescript

RESTful API with the following endpoints:

- GET: `api/puppies`. return a list of all puppies in JSON-format.
- GET: `api/puppies/:id`. return one puppy in JSON-format.
- POST: `api/puppies`. create and return the newly added puppy.
- PUT: `api/puppies/:id`. update the specific puppy.
- DELETE: `api/puppies/:id`. delete a puppy.

Each `puppy` has: 
    - id
    - breed
    - name
    - birth date

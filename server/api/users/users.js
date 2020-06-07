import uuidv4 from 'uuid/v4';

let users = [];

export function listContents(req, res) {
  // send the users array as json to the res object
  res.status(200);
  res.json({users});
}

export function findOne(req, res) {
  // extract a parameter named id from the req object and
  // search the users list for a user with a matching id

  // if no matching user is found, set the response code 404
  // and send an error JSON object
  res.status(404);
  res.json({message: 'Not Found'});

}

export function createUser(req, res) {
  // adds a new user object to the in-memory users list
  //users.push(id);
  let name = req.body.name;
  let address = req.body.address;
  let age = req.body.age;
  let id = uuidv4();

  let createdUser = {name, address, age, id};

  users.push(createdUser);

  res.status(201);
  res.json(createdUser);
}

#1: PATCH /users/:username is requiring admin. However, we should also allow users to update their own data
#2: PATCH /users/:username no validation is being done to ensure proper fields for updating
#3: authUser uses jwt.decode which does not validate the signiture.
#4: GET /users/:username does not throw an error for no such user. missing "throw"
#5: DELETE /users/:username does not await User.delete
#6: POST /auth/login incorrect credentials results in 500, not 401. Missing await for User.authenticate
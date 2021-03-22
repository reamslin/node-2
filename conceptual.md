### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

Json web token. This is a means of digitaling signing a payload of nonconfidential data. The payload prevents the server from having to query the database to ensure a user's data. A JWT can ensure that data has not been tampered with by allowing data to be signed with a secret key which will then be used to sign the  payload. 

- What is the signature portion of the JWT?  What does it do?

It allows the creator of the JWT to encode the payload using a secret key.  This can provide a guarantee that when the creator gets a token in response, they can validate the data has not been tampered with by comparing the results of the encoded signitures.

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes. Sensitive data should never be transmitted through a JWT.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

When a user logins, the server can create a token with the user's information and  send it back to them. For each subsequent request, the user will also send the token which the server can use to verify that the user is who they say they are.

- Compare and contrast unit, integration and end-to-end tests.

Unit tests are written to test individual compnonents or functions.
Integration tests ensure that separate components are working together as expected.
End to End tests test the flow of the entire system.

- What is a mock? What are some things you would mock?

A mock is a way of simulating a certain action within an application. You may want to mock certain API requests for example if the API had rate limits or charges based on requests.

- What is continuous integration?

When working with a team of developers, this means that the developers would integrate small changes to the shared code base regularly.

- What is an environment variable and what are they used for?

An environment variable is a variable that can be used outside of the realm of a program. They can be used to determine how to run a program, or what database to use.

- What is TDD? What are some benefits and drawbacks?

Test Driven Development. Benefits of test driven devlopment include better design and understanding of how a program should behave. It can also lead to fewer bugs. The drawbacks include a longer implementation period.

- What is the value of using JSONSchema for validation?

JSONSchema allows a clean and concise way of describing how data should be formatted in order to be used within an application. It can prevent your code from being riddled with specific data validation tests.

- What are some ways to decide which code to test?

You should definitely try to test any code which other parts of the program rely on. You should also try to test all end cases.

- What are some differences between Web Sockets and HTTP?

The main difference between these is that Web sockets are stateful while HTTP is stateless. This means that web sockets  must remain open in order to transfer data while a HTTP request contains everything you need to know within the request itself.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?

I would say I prefered using Flask in the context of this course because I enjoyed using ORMs.
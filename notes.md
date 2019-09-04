# notes



## steps

-create repository
- clone repository
- cd into folder
 - npm init -y
 - npx gitignore node || npi i -g git ignore and then gitignore node
 - git add.
 - git commit -m "message"
 - git git push -u origin master
 - npm i express

 React applications are broken up into components.

 Express APIs are broken up into Express Routers.


 ## client server architecture

 [client] <network (JSON)> [api] <> [data sources]

 ## request/ response cycle

 client makes a request to the server

 server produces a response and sends it to the client

 ## middlware 

 -can see the request and do something with the request
 -can stop the request and produce a response
 -can do nothing
 -can do the same wuth the response object
 -**can midify the request or response objects**

    three types.
    - built-in: no need to install
    - third party: need to install it using npm or yarn
    - custom: we build it

    can be use:
    - globally with server.js

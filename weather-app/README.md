## Weather App

In this section we learn non blocking asynchronous NodeJS. To demonstrate this we end up making a weather application to pull down weather information using an API.

---

### Call Stack
The Call Stack is a simple data structure provided by V8. It keeps track of currently all the functions running.

Example of this is with an error message. You can see call stack for when that error was thrown. The call stack is actually a stack data structure. You can add something to the top, and can only remove it from the top.

### Callback Queue
The job of a Callback Queue's job is to keep a list of callbacks that need to be executed. When an event is finished it is added to the callback queue. The callback queue is not executed until the call stack is empty.

---

### Running Weather App
This weather app runs from the terminal. You give it a location and it gives you the weather back for that location. An example of running is the following:

```
node app.js "New York City"
```

You should get back forecast for the location. The application will first use a Geocoding api to get the latitude and longitude for this location, and this pass that to the weather application to get the current weather.
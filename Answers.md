1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Filter, map, and reduce. Either Object.assign() or spread in previous state (...state).

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions send directions to the reducers, the reducers know how to handle those directions and use their logic to modify state, that state is then sent to the store and distributed into the application where it was called.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and the component state is local to that component. Redux stores application state in the store and it can be accessed on-demand throughout the application. Component state is good for local logic within a component that does not need to be used throughout the application.

1.  What is middleware?

Middleware intercepts redux actions and allows the user to interact with those actions before they reach the store's reducer. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows you to write action creators that return a function instead of just an action. This allows async logic such as AJAX requests with axios.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect.

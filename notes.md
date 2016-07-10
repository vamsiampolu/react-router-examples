Animations with `react-router` use the `ReaactCSSTransitionGroup`, it takes a `transitionName`, the `component` to apply the transition to and other arguments such as `transitionEnterTimeout` and `transitionLeaveTimeout`.

```
<ReactCSSTransitionGroup
  component="div"
  transitionName="example"
  transitionEnterTimeout={500}
  transitionLeaveTimeout={500}>

</ReactCSSTransitionGroup>
```

The `transitionName` refers to a css class defined elsewhere. It should have:


```
  /*these specify the animation that should occur*/
.example-enter {

}

.example-leave {

}

/*These contain the final states of the component(s) after the animation is applied*/
.example-enter.example-enter-active {

}

.example-leave.example-leave-active {

}
```

When doing nested animations, the value provided as `key` for the children has to be unique, if not the animation will not be rendered correctly.

An issue that I ran into is, we need to teach the `html-webpack-plugin` to respect `react-router`.

```
T http://localhost:3010/user/bundle.js
sally:37 GET http://localhost:3010/user/3010/webpack-dev-server.js
```

To route dynamically when a condition is satisfied, use the `withRouter` to inject the `router` into the application and push the route onto the location.
You can use multiple components when routing, this means that each one of these main components is a mini react application responsible for managing its own state. For example, we use the `components` prop to `Route` to pass it an object of named components. You can render the named components and render default components if those components were not found, you can specify the styles for them

## SWBATS
- [X] Understand how `create-react-app` works and what it offers a developer
- [X] Organize code into files and use the import-export syntax to pass data between components
- [X] Use props to make components more dynamic and reusable
- [X] Setup a new React app and play around with building UIs


## Notes
You can use either `npx create-react-app your-app-name` or `create-react-app your-app-name`


## When to use functions vs class

### Class Components
- ONLY Class components have internal state and let you access lifecycle methods [LEARN ABOUT IN UPCOMING LECTURES🎉]
- Use `this.props` in class components

### Functional Components
- Use function argument `props` in class components
- If the component is purely decorative (just displays some info) you can use a functional component

## high level what is state?
We'll get into state on Day 2 but high level state is a way for a class component to manage some data internally. 

### Previous ideas
 - Turtle Tinder (NinjaTinda)
 - Fantasy AirBnB ( AirDnD )
 - Reverse Yelp (Pley)
 - Etsy for Pets (Petsy)
 - Reddit for ETs (Redd.E.T.)

### New ideas
- Dating app for WWE Wrestlers  (based on christian mingle 😳)

### Import Export
- Way to share information across files

### Thinking about props

In thinking about props, repeat this mantra: props are to components as arguments are to functions!

Think back to mod 1:
Before ActiveRecord, you passed in arguments one by one and in a particular order: `User.new("Alex", 23, "therapist"`

With ActiveRecord, you passed a single hash and mapped your values onto the specific keys they corresponded to:
`User.new(name: "Alex", age: 23, occupation: "therapist"`

This is very much analogous to the change over from regular ol' JS functions to JSX components

### Links
[Webpack](https://webpack.js.org/)
[Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)
[Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction)
[PWAs and Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
[Export and Import](https://alligator.io/js/modules-es6/)
[Named Export vs. Default Export](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910)
[React Docs](https://reactjs.org/docs/create-a-new-react-app.html)
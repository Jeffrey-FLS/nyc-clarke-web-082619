React Router
============

## SWBAT

- [ ] Create a multi-page SPA
- [ ] Explain the advantages of using React Router
- [ ] Utilize the most common `react-router` components to build a SPA: `BrowserRouter`, `Route`, `Switch`, `Link`, and `NavLink`


- [ ] Use `push` and `history` to navigate pages
- [ ] Create dynamic routes and use `params`
- [ ] Make the distinction between `state` being one _Single Source of Truth_ and `react-router` being another _Single Source of Truth_
- [ ] **BONUS** Use `Redirect`to navigate pages


Features
- [ ] different routes for main movie view and login 
- [ ] dynamic routing for individual movie view

## Lecture Notes

### SPA benefits
- don't have to deal with routing (we dont want to have to set up routes)
- fast (...beyond the initial load)

### SPA Limitations
- hard to bookmark parts of the page
- no sharing :( 
- no way to go back 


### dynamic routing 
GET "users/:id"



### Using React Router
`npm install react-router-dom --save`

### Static vs Dynamic Routing

Server-side vs Client-side Routing.

- Client-side == no more request response.
- This results in a much faster/smoother feeling website.

**Why do we even need routes?**

- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking
- Users can bookmark urls

**What are the drawbacks to client-side routing?**

- We're loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### HTML5 History API

You can manipulate the URL in your browser with these:

```javascript
window.history.pushState({}, null, 'page');
window.history.back();
window.history.forward();
```

Combine that with `if/else` logic and tracking history and you get `react-router`.

### React Router API

> To get your intuition in line with React Router’s, think about components, not static routes. Think about how to solve the problem with React’s declarative composability because nearly every “React Router question” is probably a “React question”.
> [_source: React Router Philosophy_](https://reacttraining.com/react-router/web/guides/philosophy)

## Resources

- [HTML5 History API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [React Router Github](https://github.com/ReactTraining/react-router)
- [React Router Website](https://reacttraining.com/react-router/)





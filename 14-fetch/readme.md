# Fetch & DOM Manipulation

## SWBAT...
- Understand why we request data asynchronously
- Explain why we prefer async for Single-Page Applications (SPA)
- Create fetch requests (including GET, POST, PATCH, PUT, DELETE)
- Manipulate the DOM in conjunction with fetch calls
- Understand optimistic vs pessimistic rendering


---

## Single-Page Applications (SPAs)
Why you ask?!!?
Because we need the user experience (UX) to be seamless. Twitter == SPA! Airbnb == SPA! We don't need to make multiple requests to get new HTML for each new view. We can make requests for new data and update the page accordingly with JS. We don't have to wait and wait and wait each time we click a button on the page. 

... If we do have to wait, we can add pretty indicators like the spinning wheel (of doom). 



---

## THAT'S SO... FETCH?

**From CRUD to FETCH**

Persisting data/change? Well _crud_... how do we do that? 🤔

| CRUD              | FETCH         |
| ----------------- | ------------- |
| Create            | POST          |
| Read              | GET           |
| Update            | PATCH or PUT  |
| Delete / Destroy  | DELETE        |

[Using `fetch` Documentation][using-fetch-mdn]

`PUT` vs `PATCH`

The existing HTTP PUT method only allows a complete replacement of a document. This proposal adds a new HTTP method, PATCH, to modify an existing HTTP resource.

**About**

* `fetch` will always **return** a [_Promise_][mdn-promise] and it is promising to do something **if** it returns. We can think of this as the **promise** of an eventual value
  * There is **NO** guarantee of when it will come back!
  * There is **NO** guarantee that it will succeed!
* We **want** `fetch` to be **asynchronous _BECAUSE_**:
  * **If** `fetch` calls were **synchronous**, we would be stuck waiting for the call to finish before the code could proceed.
  * So **rather than _blocking_** any other JavaScript from running, we want `fetch` calls to be asynchronous. We want to write code around the eventual success or failure of some _asynchronous_ ⏳ operation such as an HTTP request.

**Usage**

* The `body` data **HAS** to be a string in a `POST`, `PUT`, or `PATCH` `fetch` call.
* You need `headers` in `POST`, `PUT`, or `PATCH` to tell the server what kind of content (`Content-Type`) you are sending to it. For example:
  * `'Content-Type': 'application/json'` is telling the server that you are sending a string of JSON in the `body` of your `fetch` request. You can [read more about the different types of data that can be sent here][mdn-mime-types]

---

## PLANNING YOUR CODE & PSEUDOCODE

Some of the labs we'll work on will be fairly simple and straightforward but the deeper you get into the course and your professional life, the larger features and projects will get. Be bold - but don't jump into the deep end first without a plan. Plan your code, know what you'll need, and create a game plan for how to handle it. 

Some things you'll want to consider and have planned out before hand:
- User stories: As a user I should.... fill in the blanks! What should they see and be able to do? 
- What events am I listening for? 
- What pseudocode can I write now? 
- Are there any unknowns or things I should look up before starting?
- *Looking forward:* What React components will you need to create and how will they relate to one another?

---

## POKEMON!!

### Mocking your own API

- Our "server" is being faked with a package called [json-server][json-server]. This package uses a local file, `db.json` to spin up a RESTful JSON API in about 30 seconds. To run your server:
  - `$ npm install -g json-server` this will install the node package (similar to a gem) globally `-g` on your machine
  - `$ json-server --watch db.json` this spins up the server, it will default to `localhost:3000`



### User Stories
- As a user, I should see all the Pokemon
- As a user, I should be able to create my own Pokemon
- [MAYBE] As a user, I should be able to delete a Pokemon on click of a button
- [MAYBE] As a user, I should be able to edit a clicked Pokemon 


---

## Optimistic 😃 and Pessimistic 😔 Rendering

### Optimistic

* You can manipulate the DOM synchronously (outside the `.then()`).
* This is referred to as optimist rendering because you are **not waiting** for the async response to resolve.

**Pros**:
* Super responsive! User Experience++!

**Cons**:
* `fetch`es (aka: the "Promise") can lie!! If the `fetch` fails, data can become out of sync.
* `fetch`es are also **NOT** guaranteed to run in order.
  * What if we create a Pokemon and then update it relying all on optimistic rendering? The `PATCH` might reach the server _before_ your `POST`!!

Very interesting example of optimistic rendering that is handled _robustly_: **Reddit**

> When you vote, your vote isn’t instantly processed—instead, it’s placed into a queue.
>
> Source: [Caching at Reddit](https://redditblog.com/2017/1/17/caching-at-reddit/)

[Hacker News commenter's insight](https://news.ycombinator.com/item?id=13433793):

> I remember looking into this a while ago and was bewildered to find that when I upvoted or downvoted, there was no XHR call to the backend! There was no hidden iframe/image, no silent form post. Absolutely no network activity. Yet when I refreshed, my vote was shown correctly. I thought I was going crazy.
>
> This was long ago so I'm a bit fuzzy on the details but after a bit of digging, I found the most elegant data collection technique I've ever seen. Instead of sending network data when I voted, a local cookie was set with the link id and vote value. Then when I went to another page, my browser naturally sent the cookie to the server, where I believe it was processed, and then a fresh cookie was sent back to my browser. I could vote on 10 links, the local cookie would get large and then on the next page refresh, the backend would receive my batch of votes, process them, and send me a fresh cookie again.

### Pessimistic

* You can manipulate the DOM asynchronously (inside the `.then()`) using the response from the server.
* Doing this is called pessimistic rendering because you **are waiting until** the async response has return to complete the action. In other words, you're pessimistic about the success of the request.
* This is to make sure the data on your page is consistent with the database.

**Pros**:
* What is reflected in the _client_ will always be in sync with the _server_.

**Cons**:
* If the `fetch` is slow, the UI will appear to not respond! (**hint** maybe good UX will signal to the user that something is happening)

![loading spinner](https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif)

Example of a feature you might want to always do pessimistically: **user signup**

* Think about registration forms on the web. What do they normally all do?
  * Disable things once you submit?
  * Show a spinner?
  * Anything else?
* You want to confirm that a new user was successfully created before redirecting your user somewhere. In this case, pessimistic rendering is preferable.

---

## Updating the DOM

As the developer, _it is your job to decide whether optimistic or pessimistic rendering is appropriate_. You must then remember to update the data **everywhere** that it is kept. At a **minimum**, this means:

1. `fetch` for making changes to your database
2. DOM manipulation for updating what the user sees in the browser

_But wait, there's more!_

3. Did you store any data in JavaScript variables?
  * Update them!

These steps are you being aware of _how_ **your** application is built.

**Considerations** for #1, #2, #3, etc...:

1. Where should you put that `fetch`?
  * When do you want it to be sent? 🤔
  * Perhaps on some sort of `event`? 🤔🤔
  * Maybe I can _listen_ for a certain type of `event`? 🤔🤔🤔
  * I wonder where I can _add_ that _`event`_ _listener_? 🤔🤔🤔🤔
  * Maybe somewhere where we can _delegate_ that responsibility? 🤔🤔🤔🤔🤔
2. How can we update the DOM?
  * JavaScript has a **TON** of ways to accomplish the same task. Some are more hacky than others. Some are better than others. However, **always** remember: Red, Green, Refactor!
  * **Do what you know** to work before you try and make it better!
  * Some example strategies for manipulating the DOM:
    * Rerender the entire container! 🙌
    * `appendChild` 🤱 (just make sure to construct the whole node to append)
    * Add to `innerHTML` +=
    * `event.currentTarget` to find what the event listener is attached to (where everything bubbles up to) 👂
    * Climbing the tree 🧗‍🌲:
      * `event.target.parentElement` or `event.target.parentNode` for looking up the tree ([difference](https://stackoverflow.com/questions/8685739/difference-between-dom-parentnode-and-parentelement))
      * `event.target.children` for looking down the tree
    * `removeChild` 😵
    * Be mindful where you create your variables for your `.querySelector()` (does it need to be inside the fetch? or event listener?)
    * Learn to use the MDN docs!
3. Be sure to update your global/local js variables after you've updated the server and the browser. Keep all datapoints in sync
  * **HOWEVER!** Remember to take note of which methods are destructive and which are NOT!
  * If you don't remember, look it up! Google, StackOverflow, MDN, think of them as your "phone a friend". ☎️
  * For example: `filter` does not mutate while `push` does! Consistency? Naming conventions? What do you think we are, Ruby? 💎🤣

**Et cetera!**

As you are adding functionality (those things above), there will be times where you will need to add, remove, or change the base HTML in order to be able to accomplish the task. Remember that you are the developer. **You get to decide how the HTML looks!**

---

## Want more practice?
- Make the pokemon cards flip 
- Enable the search bar to search for pokemon by name
- Enable the delete button to send a DELETE request via fetch 
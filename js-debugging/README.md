# Squashing Bugs in JS

## Agenda
- Intro to topics & techniques you can use
- Demo debugging in Monster app
- Pair practice debugging in Monster app
- Review practice
- (Time permitting) Live debug some real 🐛s you're having

## Topics / Techniques

### Ones we'll use today
- console.log --> check values
    - console.dir
    - console.table
- debugger --> look at a function under the hood
    - debug(funcName)
    - monitor(funcName)
- finding DOM elements by CSS

### Ones you should know exist for the future 
- Chrome Dev Tools Network tab
- Postman
- React Dev Tools
- Sizing in chrome 

### Where do I start? 🤯
First thing's first - ask yourself these questions **(and be as specific as possible)**:
1. What is the desired behavior? 
2. What is the actual behavior?
3. Where do you think the incorrect behavior is coming from? 

Then create a strategy. 

Do you need to console.log some values to make sure they are what you expect? Is there some wonky behavior somewhere inside of a function that you could pop a debugger into and inspect? Are you really sure you're getting back what you think from that fetch? 

## Monster Practice!!!
So far we've solved the following bugs: 🐛🐞
1. The form to create a new monster wasn't even on the page because...
    1. setAttribute doesn't return anything and we were chaining it
    2. appendChild returns the child element, not the parent element and we were chaining that too 😅

But we're not done!!!! 😳

There are more bugs 🦟🐛🕷🐞🐜🐛(and UX fails)... some of which I've found and likely at least one I haven't. Tackle 1-3 below and then go for whatever makes you happy. Try to get them all and see if you find any other UX fails to tackle. 
1. The age doesn't appear with each monster (it should)
2. The pageNum can go negative (and keep going)...?
3. Try to post a new monster. FAIL.
4. [HARDER... probably] Once you can post a monster... take a look at the JSON and notice some data differences. Fix them.
5. [HARDER... probably] Once you can post a monster... we can submit monsters without names. Let's not do that. 
6. [HARDER] If anything happens to make the POST request fail, we don't alert the user. We as developers know to check the console, but the user wouldn't. Improve the UX. 
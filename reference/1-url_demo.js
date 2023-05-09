const url = require('url');

const onUrl = new URL("https://www.google.com/search?q=color+of+parrot&oq=color+of+parrot&aqs=chrome..69i57.6568j0j7&sourceid=chrome&ie=UTF-8");

// serialized query
console.log(onUrl.search);

// Parameter objects
console.log(onUrl.searchParams);

console.log(onUrl.host);


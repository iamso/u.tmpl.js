u.tmpl.js
====
Simple javascript template function. Originally written by [John Resig](http://ejohn.org/blog/javascript-micro-templating/).

Usage
-----

Example template:

```html
<script type="text/html" id="template">
  <% if (users.length) { %>
    <% for ( var i = 0; i < users.length; i++ ) { %>
      <li><a href="<%=users[i].url%>"><%=users[i].name%></a></li>
    <% } %>
  <% }
  else  { %>
      <li>no users</li>
  <% } %>
</script>
```

Example data:

```javascript
var data = {
  users: [
    {
      name: 'Peter',
      url: '/peter'
    },
    {
      name: 'Paul',
      url: '/paul'
    },
    {
      name: 'Mary',
      url: '/mary'
    }
  ]
};
```

Example parsing:

```javascript
var parsed = u.tmpl('template', data);
```


License
-------

[MIT License](LICENSE)

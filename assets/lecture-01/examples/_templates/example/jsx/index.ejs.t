---
to: example-<%= name %>/index.html
unless_exists: true
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example <%= name %></title>
  <script crossorigin src="https://unpkg.com/react/umd/react.development.js" defer></script>
  <script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.development.js" defer></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js" defer></script>
  <script src="js/appx.js" defer></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>

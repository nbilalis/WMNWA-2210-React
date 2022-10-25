---
to: example-<%= name %>/js/app.jsx
unless_exists: true
---

…

const App = () => (
  <>
    …
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

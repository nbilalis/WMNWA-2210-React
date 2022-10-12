function Message({ name, 'show-bang': showBang }) {
    return <div>Hello, { name || 'World' }{showBang && '!'}</div>
}

function App({ color }) {
    return (
        <div style={{ color }}>
            <h1>JSX Components</h1>
            <Message name="SAE" show-bang={true} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App color='#61DAFB' />);

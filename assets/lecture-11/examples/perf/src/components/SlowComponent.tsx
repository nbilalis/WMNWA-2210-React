interface SlowComponentProps {
  text: string;
}

function SlowComponent({ text }: SlowComponentProps) {
  let now = performance.now();
  while (performance.now() - now < 300) {
    // Artificial delay -- do nothing for 100ms
  }

  return <div>{text}</div>;
}

export default SlowComponent;

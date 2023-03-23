import HelloWorld from "./../content/hello.mdx";

console.log(HelloWorld);

export default function Refer() {
  return (
    <main>
      <h1>Refer</h1>
      <HelloWorld />
    </main>
  );
}

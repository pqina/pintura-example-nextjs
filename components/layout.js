import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <h1>Pintura Image Editor</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Example</Link>
          </li>
          <li>
            <Link href="/example-default">Defaults</Link>
          </li>
          <li>
            <Link href="/example-modal">Modal</Link>
          </li>
          <li>
            <Link href="/example-overlay">Overlay</Link>
          </li>
          <li>
            <Link href="/example-filepond">FilePond</Link>
          </li>
          <li>
            <Link href="/example-video">Video</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}

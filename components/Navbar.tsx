import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cache">Cache - SSR</Link>
        </li>
        <li>
          <Link href="/seo">SEO - SSG(Default)</Link>
        </li>
        <li>
          <Link href="/microservices">Microservices - ISR</Link>
        </li>
        <li>
          <Link href="/rest">REST - ISR</Link>
        </li>
      </ul>
    </nav>
  );
}

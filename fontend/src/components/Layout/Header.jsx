import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav>
        <h1 className="text-3xl font-bold underline bg-red-600">header</h1>
        <Link to="./Home"> link</Link>
      </nav>
    </>
  );
}

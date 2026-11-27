export default function Navbar({
  name,
  age,
}: {
  name: string;
  age: string;
}) {
  return (
    <nav>
      Имя: {name} | Возраст: {age}
    </nav>
  );
}
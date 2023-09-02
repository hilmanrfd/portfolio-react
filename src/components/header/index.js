import style from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={style.container}>
        <h1> Hilmanrfd.com</h1>
        <h3> Welcome to hilmanrfd react portfolio </h3>
      </div>
    </header>
  );
}

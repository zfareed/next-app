import Link from "next/link";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main>
      <h1>Zain Fareed</h1>
      <Link href="/users">Users</Link>
      <br></br>
      <Link href="/users/zain">Zain User</Link>
      <br></br>
      <ProductList />


    </main>)
}

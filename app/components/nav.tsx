import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-gray-600">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/create-user">Create User</Link>
          <Link href="/client-member">Client Member</Link>
          <Link href="/member">Member</Link>
          <Link href="/public">Public</Link>
        </div>
      </nav>
    </header>
  );
}

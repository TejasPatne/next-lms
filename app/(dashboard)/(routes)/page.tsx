import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen md:hidden">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
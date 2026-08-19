"use client";
import { useRouter } from "next/navigation";
export default function AdminLogout() {
  const router = useRouter();
  return <button className="btn small" onClick={async()=>{await fetch("/api/admin/logout",{method:"POST"}); router.push("/admin/login"); router.refresh();}}>Sortir</button>;
}

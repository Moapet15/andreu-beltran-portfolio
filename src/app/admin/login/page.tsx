import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/AdminLoginForm";
import { getAdminSession } from "@/lib/auth";

export default async function AdminLoginPage() {
  if (await getAdminSession()) redirect("/admin");
  return <div className="login-card card"><div className="eyebrow">Zona privada</div><h1 style={{fontSize:"2rem",marginBottom:22}}>CRM · Andreu Beltran</h1><AdminLoginForm /></div>;
}

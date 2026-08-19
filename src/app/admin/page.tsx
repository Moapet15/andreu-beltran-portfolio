import Link from "next/link";
import { redirect } from "next/navigation";
import AdminLogout from "@/components/AdminLogout";
import LeadStatusSelect from "@/components/LeadStatusSelect";
import { getAdminSession } from "@/lib/auth";
import { db } from "@/lib/db";

type Lead = { id:number; name:string; company:string|null; email:string; service:string; status:string; created_at:string };

export default async function AdminPage() {
  if (!(await getAdminSession())) redirect("/admin/login");
  const sql = db();
  const leads = await sql`SELECT id,name,company,email,service,status,created_at FROM leads ORDER BY created_at DESC` as Lead[];
  const total = leads.length;
  const fresh = leads.filter(x=>x.status==="new").length;
  const active = leads.filter(x=>["contacted","meeting","proposal"].includes(x.status)).length;
  const won = leads.filter(x=>x.status==="won").length;

  return <>
    <div className="admin-top"><div className="container admin-top-row"><strong>CRM · Andreu Beltran</strong><AdminLogout /></div></div>
    <section className="section compact"><div className="container">
      <div className="eyebrow">Pipeline comercial</div><h1 className="h2">Leads</h1>
      <div className="stats"><div className="stat"><span className="muted">Total</span><strong>{total}</strong></div><div className="stat"><span className="muted">Nous</span><strong>{fresh}</strong></div><div className="stat"><span className="muted">En curs</span><strong>{active}</strong></div><div className="stat"><span className="muted">Guanyats</span><strong>{won}</strong></div></div>
      <div className="table-wrap"><table><thead><tr><th>Data</th><th>Contacte</th><th>Empresa</th><th>Servei</th><th>Estat</th><th></th></tr></thead><tbody>
        {leads.length===0 ? <tr><td colSpan={6} className="muted">Encara no hi ha leads.</td></tr> : leads.map((lead)=><tr key={lead.id}><td>{new Date(lead.created_at).toLocaleDateString("ca-ES")}</td><td><strong>{lead.name}</strong><br/><span className="muted">{lead.email}</span></td><td>{lead.company || "—"}</td><td>{lead.service}</td><td><LeadStatusSelect id={lead.id} value={lead.status} /></td><td><Link className="arrow" href={`/admin/leads/${lead.id}`}>Obrir →</Link></td></tr>)}
      </tbody></table></div>
    </div></section>
  </>;
}

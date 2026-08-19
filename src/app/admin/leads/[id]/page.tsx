import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import LeadStatusSelect from "@/components/LeadStatusSelect";
import { getAdminSession } from "@/lib/auth";
import { db } from "@/lib/db";

type Lead = { id:number; name:string; company:string|null; email:string; phone:string|null; service:string; budget:string|null; message:string; status:string; utm_source:string|null; utm_medium:string|null; utm_campaign:string|null; referrer:string|null; landing_page:string|null; created_at:string };

export default async function LeadPage({params}:{params:Promise<{id:string}>}) {
  if (!(await getAdminSession())) redirect("/admin/login");
  const {id}=await params; const numeric=Number(id); if(!Number.isInteger(numeric)) notFound();
  const sql=db(); const rows=await sql`SELECT * FROM leads WHERE id=${numeric} LIMIT 1` as Lead[]; const lead=rows[0]; if(!lead) notFound();
  return <section className="section compact"><div className="container">
    <Link href="/admin" className="arrow">← Tornar als leads</Link>
    <div style={{display:"flex",justifyContent:"space-between",gap:20,alignItems:"center",marginTop:28,flexWrap:"wrap"}}><div><div className="eyebrow">Lead #{lead.id}</div><h1 className="h2" style={{marginBottom:0}}>{lead.name}</h1></div><LeadStatusSelect id={lead.id} value={lead.status}/></div>
    <div className="detail-grid" style={{marginTop:30}}>
      <div className="detail-box"><h3>Contacte</h3><p><strong>Empresa:</strong> {lead.company||"—"}</p><p><strong>Email:</strong> <a href={`mailto:${lead.email}`}>{lead.email}</a></p><p><strong>Telèfon:</strong> {lead.phone||"—"}</p><p><strong>Servei:</strong> {lead.service}</p><p><strong>Pressupost:</strong> {lead.budget||"—"}</p></div>
      <div className="detail-box"><h3>Adquisició</h3><p><strong>UTM source:</strong> {lead.utm_source||"—"}</p><p><strong>UTM medium:</strong> {lead.utm_medium||"—"}</p><p><strong>UTM campaign:</strong> {lead.utm_campaign||"—"}</p><p><strong>Referrer:</strong> <span className="muted">{lead.referrer||"—"}</span></p></div>
    </div>
    <div className="detail-box" style={{marginTop:18}}><h3>Missatge</h3><p style={{whiteSpace:"pre-wrap"}}>{lead.message}</p></div>
  </div></section>;
}

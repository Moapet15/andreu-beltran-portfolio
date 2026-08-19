"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const statuses = ["new","contacted","meeting","proposal","won","lost"];
export default function LeadStatusSelect({ id, value }: { id: number; value: string }) {
  const router = useRouter();
  const [status,setStatus] = useState(value);
  return <select className="status" value={status} onChange={async(e)=>{
    const next=e.target.value; setStatus(next);
    const res=await fetch(`/api/admin/leads/${id}`, {method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:next})});
    if (!res.ok) setStatus(value); else router.refresh();
  }}>{statuses.map(s=><option key={s} value={s}>{s}</option>)}</select>;
}

import AdminDashboard from "@/components/admin/AdminDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Admin | Pizza Star Hub 🔐",
  description: "Secure content management portal for the Pizza Star brand team.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}

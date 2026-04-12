import DownloadClient from "@/components/download/DownloadClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download App | Pizza Star India 📱",
  description: "Get the official Pizza Star mobile app for Android and iOS. Experience fast ordering, exclusive Indian fusion pizza deals, and real-time tracking.",
};

export default function DownloadPage() {
  return <DownloadClient />;
}

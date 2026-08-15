import type { Metadata } from "next";
import BookingExperience from "@/components/botanik/BookingExperience";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Rendez-vous — Botanik'Afro",
};

export default function RendezvousPage() {
  return (
    <>
      <Header active="rendezvous" />
      <main>
        <BookingExperience />
      </main>
      <Footer compact />
    </>
  );
}

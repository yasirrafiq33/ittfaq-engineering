import { Hero } from "@/components/Hero";
import { ShapesAnimation } from "../components/ShapesAnimation";
import { Industries } from "@/components/Industries";
import Machines from "@/components/Machines";
import Customers from "@/components/Customers";
import ContactForm from "@/components/ContactUs";
import { QualitySystem } from "@/components/QualitySystem";

export default function Home() {
  return (
    <main className="wide-container">
      <Hero />
      <Industries />
      <Machines />
      <Customers />
      <QualitySystem />
      <ContactForm />
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/config/botanik";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card card">
      <div className="service-img">
        <span
          className={`badge ${service.badgeClass} service-cat`}
          style={service.badgeClass === "badge-outline" ? { background: "var(--coquille)" } : undefined}
        >
          {service.category}
        </span>
        <Image alt={service.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw" src={service.image} />
      </div>
      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-meta">
          <span className="service-duration">⏱ {service.duration}</span>
          <span className="service-price">{service.price}</span>
        </div>
        <Link href="/rendezvous" className="btn btn-primary">
          Réserver
        </Link>
      </div>
    </article>
  );
}

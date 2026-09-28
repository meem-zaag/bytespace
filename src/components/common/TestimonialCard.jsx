import Avatar from "@/components/ui/Avatar";
import { cn } from "@/lib/utils/cn";

/**
 * Community testimonial (Figma "Testimonial_Card"): 80px photo, name, blue role and quote.
 *
 * @param {object} props
 * @param {{ name: string, role: string, quote: string, avatar: { src: string, alt: string } }} props.testimonial
 * @param {string} [props.className]
 */
export default function TestimonialCard({ testimonial, className }) {
  const { name, role, quote, avatar } = testimonial;

  return (
    <figure className={cn("flex flex-col gap-6 rounded-card bg-white p-6", className)}>
      <Avatar src={avatar.src} alt={avatar.alt} size={80} />
      <figcaption>
        <p className="font-heading text-heading-xs text-black">{name}</p>
        <p className="text-body-l text-primary-800">{role}</p>
      </figcaption>
      <blockquote className="text-body-l text-ink-700">
        <p>{quote}</p>
      </blockquote>
    </figure>
  );
}

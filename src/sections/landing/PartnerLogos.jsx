import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Container from "@/components/ui/Container";
import PartnerLogo from "@/components/ui/PartnerLogo";

/**
 * Grey band of partner logos under the hero (Figma "Frame 2", 202px tall, 72px gaps).
 *
 * @param {object} props
 * @param {{ id: string, name: string, mark: string }[]} props.partners
 */
export default function PartnerLogos({ partners }) {
  return (
    <section aria-label="Trusted by" className="bg-neutral-50">
      <Container className="py-14 lg:flex lg:h-[202px] lg:items-start lg:pt-20 lg:pb-0">
        <Stagger
          as="ul"
          className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:flex-nowrap lg:justify-between lg:px-[34px]"
        >
          {partners.map((partner) => (
            <StaggerItem as="li" key={partner.id} y={12}>
              <PartnerLogo mark={partner.mark} name={partner.name} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

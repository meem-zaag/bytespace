/**
 * Eyebrow + large title at the top of the auth form card.
 *
 * @param {object} props
 * @param {string} props.eyebrow e.g. "Create an Account"
 * @param {string} props.title e.g. "Welcome to ByteSpace"
 */
export default function AuthCardHeader({ eyebrow, title }) {
  return (
    <div>
      <p className="text-body-l text-primary-800">{eyebrow}</p>
      <h1 className="font-heading text-heading-compact text-neutral-950 sm:text-heading-m">
        {title}
      </h1>
    </div>
  );
}

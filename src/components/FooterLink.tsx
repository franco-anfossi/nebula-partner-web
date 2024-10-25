import Image from "next/image";

interface FooterLinkProps {
  href: string;
  label: string;
  iconSrc: string;
}

export default function FooterLink({ href, label, iconSrc }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline"
    >
      <Image src={iconSrc} alt={`${label} icon`} width={16} height={16} />
      {label}
    </a>
  );
}

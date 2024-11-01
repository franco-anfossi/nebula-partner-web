interface FooterLinkProps {
  href: string;
  label: string;
  iconSrc?: string;
}

export default function FooterLink({ href, label, iconSrc }: FooterLinkProps) {
  return (
    <a href={href} className="flex items-center gap-2">
      {iconSrc && <img src={iconSrc} alt="" className="w-4 h-4" />}
      <span>{label}</span>
    </a>
  );
}

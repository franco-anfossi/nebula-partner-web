interface NavButtonProps {
    href: string;
    label: string;
  }
  
  export default function NavButton({ href, label }: NavButtonProps) {
    return (
      <a
        href={href}
        className="px-4 py-2 rounded-full border transition-colors 
                   hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {label}
      </a>
    );
  }
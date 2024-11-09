interface NavButtonProps {
  href: string;
  label: string;
}

export default function NavButton({ href, label }: NavButtonProps) {
  return (
    <a
      href={href}
      className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 transition-colors 
                 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {label}
    </a>
  );
}

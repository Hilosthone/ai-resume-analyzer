import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-[#0047AB] text-white hover:bg-[#003580] shadow-md', // Deep blue from UI
    secondary: 'bg-[#D1E4FF] text-[#0047AB] hover:bg-[#C2DBF6]', // Light blue from UI
  }

  return (
    <button
      className={cn(
        'px-8 py-3 rounded-md font-bold text-sm transition-all active:scale-95 flex items-center gap-2',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}

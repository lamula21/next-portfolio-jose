import { CopyButton } from "../CopyButton"
import { DEVICONS } from "../icons"

interface CodeHeaderProps {
  language: string
  filepath?: string
  raw?: string
}

export function CodeBlockHeader({ language, filepath, raw }: CodeHeaderProps) {
  const Icon = DEVICONS[language]
  return (
    <div className="flex h-14 w-full items-center justify-between border-b border-zinc-700/40 px-5">
      <div className="flex items-center gap-3">
        <Icon className="inline-flex h-6 w-6" />
        <span className="font-geist-sans text-sm text-zinc-400">
          {filepath}
        </span>
      </div>
      <CopyButton text={raw} showIcon />
    </div>
  )
}

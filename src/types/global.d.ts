export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type DocsConfig = {
  name: string
  description: string
  mainNav: NavItem[]
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
}

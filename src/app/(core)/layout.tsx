import { ReactNode } from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaTelegramPlane } from "react-icons/fa"
import { StyledLink } from "./core_components/styled";

export default function CoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <body className="text-core-secondary dark:text-core-primary selection:text-core-primary selection:bg-core-secondary flex h-screen flex-col font-mono">
        <Header />
        <main className="flex grow flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </>
  )
}

function Header() {
  return (
    <>
      <nav className="bg-core-primary dark:bg-core-secondary mb-16 flex items-center gap-5 p-5 shadow-md">
        <StyledLink href="/"> Home </StyledLink>
        <StyledLink href="/projects"> Projects </StyledLink>
        <StyledLink href="/resume"> Résumé </StyledLink>
        <StyledLink href="/showcases"> Showcases </StyledLink>
        <StyledLink href="pronunciation"> How to Pronounce Sakhezech </StyledLink>
      </nav>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer className="bg-core-primary dark:bg-core-secondary mt-16 flex items-center gap-5 p-5">
        You can find me here!
        <StyledLink href="https://t.me/sakhezech"> <FaTelegramPlane /> Telegram </StyledLink>
        <StyledLink href="https://discordapp.com/users/311643179009048578"> <FaDiscord /> Discord </StyledLink>
        <StyledLink href="https://github.com/sakhezech"> <FaGithub /> Github </StyledLink>
        <StyledLink href="mailto:contact@sakhezech.ru"> <FaEnvelope /> Email </StyledLink>
      </footer>
    </>
  )
}

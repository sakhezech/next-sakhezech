import { ReactNode } from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaTelegramPlane } from "react-icons/fa"
import { StyledLink } from "./core_components/styled";
import Image from "next/image";
import Link from "next/link";

export default function CoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <body className="text-core-secondary custom-color-background dark:text-core-primary selection:text-core-primary selection:bg-core-secondary flex h-screen flex-col font-mono">
        <Header />
        <main className="mx-16 flex grow flex-col">
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
      <nav className="bg-core-primary dark:bg-core-secondary mb-16 flex flex-wrap items-center gap-5 p-5 shadow-md">
        <Link href=''>
          <Image src='/skh.svg' width={50} height={32} alt='Skh Logo' />
        </Link>
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
      <footer className="bg-core-primary dark:bg-core-secondary mt-16 box-border flex flex-wrap items-center gap-5 border p-5">
        You can find me here!
        <StyledLink href="https://t.me/sakhezech"> <FaTelegramPlane /> Telegram </StyledLink>
        <StyledLink href="https://discordapp.com/users/311643179009048578"> <FaDiscord /> Discord </StyledLink>
        <StyledLink href="https://github.com/sakhezech"> <FaGithub /> Github </StyledLink>
        <StyledLink href="mailto:contact@sakhezech.ru"> <FaEnvelope /> Email </StyledLink>
      </footer>
    </>
  )
}

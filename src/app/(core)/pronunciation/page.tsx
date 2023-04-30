import Link from "next/link";

export default function PronunciationPage() {
  return (
    <>
      <div className="text-core-primary dark:text-core-secondary grid grow items-center text-center font-serif">
        <div>
          <span className="text-6xl md:text-9xl">
            SAKHEZECH
          </span>
          <br />
          <span className="text-xl md:text-4xl">
            {"[sa'xʲezʲetɕ] or ['saxa] or ['sax]"}
          </span>
          <br />
          <span className="md:text-xl">
            Video <Link href=""> here. </Link>
          </span>
        </div>
      </div>
    </>
  )
}

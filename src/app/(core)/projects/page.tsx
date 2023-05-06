import Image from "next/image"
import { StyledDiv, StyledLink } from "../core_components/styled"
import { FaPython } from "react-icons/fa"
import { SiCplusplus, SiPytest } from "react-icons/si"

export default function ProjectsPage() {

  return (
    <>
      <div className="bg-core-primary dark:bg-core-secondary flex justify-around gap-2 p-5">
        <ProjectCard title="hldlib" image='/skh.svg' desc='A python package for na' url='https://github.com/sakhezech/hldlib' tech={['Python', 'PyTest']} />
        <ProjectCard title="hldmodding" image='/skh.svg' desc='A python package for na' url='https://github.com/sakhezech/hldmodding' tech={['Python',]} /> {/* 'C++' */}
        <ProjectCard title="HLRandomizer" image='/skh.svg' desc='A python package for na' url='https://github.com/sakhezech/HLRandomizer' tech={['Python',]} />
      </div>
    </>
  )
}

function ProjectCard(props: { title: string, image: string, desc: string, url: string, tech: string[] }) {

  return (
    <>
      <StyledDiv className="flex flex-col gap-2 p-5">
        <Image src={props.image} width={200} height={200} alt={`${props.title} image`} />
        <h1> {props.title} </h1>
        <p>{props.desc}</p>
        <div className="flex">
          <div className="flex items-center gap-1">
            {
              props.tech.map((tech, i) => (
                <StyledDiv key={i} className="group relative p-1">
                  <StyledDiv className="absolute bottom-0 left-0 z-10 hidden p-1 group-hover:block">
                    {tech}
                  </StyledDiv>
                  {getTechIcon(tech)}
                </StyledDiv>
              ))
            }
          </div>
          <StyledLink href={props.url} className="ml-auto"> Project Page </StyledLink>
        </div>
      </StyledDiv>
    </>
  )
}

function getTechIcon(tech: string) {
  if (tech === 'Python') return <FaPython />
  if (tech === 'PyTest') return <SiPytest />
  if (tech == 'C++') return <SiCplusplus />

}

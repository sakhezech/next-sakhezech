import Link from "next/link"

export const StyledLink = ({...props}: React.ComponentProps<typeof Link>) => {
  return <Link {...props} className={
    `dark:shadow-white box-border border rounded-md bg-core-primary dark:bg-core-secondary no-underline hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md flex gap-1 p-1 items-center ` + props.className
  }>{props.children}</Link>
}
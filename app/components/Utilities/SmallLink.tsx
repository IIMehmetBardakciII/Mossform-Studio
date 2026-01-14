import { Link } from "react-router"

const SmallLink = ({text,to}:{text:string,to:string}) => {
  return (
    <Link to={to} className="small-link w-fit flex gap-2 hover:underline">
      {text}
      <img src="/icons/arrowRight.svg" alt="" aria-hidden="true" />
    </Link>
  )
}

export default SmallLink
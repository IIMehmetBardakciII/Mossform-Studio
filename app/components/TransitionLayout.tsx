import { Outlet, useLocation } from "react-router"
import PageTransition from "./Animations/PageTransition";

const TransitionLayout = () => {
    const location=useLocation();
    console.log(location)
  return (
    <PageTransition key={location.pathname}>
      <Outlet />
    </PageTransition>
  )
}

export default TransitionLayout
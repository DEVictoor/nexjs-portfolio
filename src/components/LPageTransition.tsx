import { motion, HTMLMotionProps } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function LPageTransition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  return (
    <motion.div
      ref={ref}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default LPageTransition;

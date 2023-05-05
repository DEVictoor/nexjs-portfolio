import React, {forwardRef} from 'react';
import {motion, HTMLMotionProps} from 'framer-motion';

type PageTransitionProps = HTMLMotionProps<'div'>;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function LPageTransition(
  {children, ...rest}: PageTransitionProps, ref: PageTransitionRef
) {
  
  const onTheRigth = {x: '100%'};
  const inTHeCenter = { x: 0};
  const onTheLeft = { x: '-100%'}

  const transition = { duration: 0.6, ease: 'easeInOut'}

  return (
    <motion.div style={{padding: '15px'}}
      ref={ref}
      initial={onTheRigth}
      animate={inTHeCenter}
      exit={onTheLeft}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(LPageTransition);

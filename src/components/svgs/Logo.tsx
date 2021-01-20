import { motion, Transition, Variants } from "framer-motion";
import React from "react";
import { Theme } from "../../theme";
import { useTheme } from "@material-ui/core";

interface LogoProps {
  backgroundColor?: string;
}

const Logo: React.FC<LogoProps> = ({ backgroundColor }) => {
  const { palette } = useTheme<Theme>();

  const blueVariants: Variants = {
    initial: {
      strokeWidth: 2,
      pathLength: 0,
      stroke: backgroundColor ? backgroundColor : palette.background.default,
      fill: backgroundColor ? backgroundColor : palette.background.default,
    },
    animate: {
      pathLength: 1,
      stroke: palette.primary.main,
      fill: palette.primary.main,
      strokeWidth: 0,
    },
  };
  const orangeVariants: Variants = {
    initial: {
      strokeWidth: 2,
      pathLength: 0,
      stroke: backgroundColor ? backgroundColor : palette.background.default,
      fill: backgroundColor ? backgroundColor : palette.background.default,
    },
    animate: {
      pathLength: 1,
      stroke: palette.secondary.main,
      fill: palette.secondary.main,
      strokeWidth: 0,
    },
  };
  const transition: Transition = {
    duration: 2,
    fill: {
      delay: 2,
      duration: 0.8,
    },
    strokeWidth: {
      delay: 2,
    },
  };

  return (
    <motion.svg width={207.5} height={52.5} viewBox="0 0 166 42" fill="none">
      <motion.path
        variants={blueVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M17.739,18.914h-4.369c-1.681,8.023-2.558,12.182-2.558,12.51c0,1.515,1.849,1.407,3.593,0.378 l1.143,3.844c-1.089,0.919-2.504,1.337-4.191,1.337c-3.432,0-5.173-1.842-5.173-5.145c0.013-0.796,0.834-5.072,2.514-12.924H5 l0.924-4.44h3.758l0.924-4.547L11.695,5h4.682c-0.166,0.92-0.493,2.491-0.981,4.71l-1.035,4.764h4.302L17.739,18.914z"
      />
      <motion.path
        variants={blueVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M36.843,14.361l-2.017,4.062c-0.656-0.183-1.337-0.256-2.017-0.217 c-1.992-0.009-3.956,0.475-5.714,1.407l-3.479,16.522h-4.682l4.625-21.66h3.865l-0.054,0.759c1.434-0.784,3.015-1.265,4.645-1.415	C33.646,13.668,35.289,13.852,36.843,14.361z"
      />
      <motion.path
        variants={orangeVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M33.462,36.953l-2.225-3.266l15.898-22.298c0.665-0.935,1.587-1.658,2.655-2.085 c1.068-0.426,2.238-0.537,3.368-0.319l6.111,25.357L56.792,36.9l-12.624-2.511L33.462,36.953z M44.554,30.163l9.831,1.956 l-4.262-17.635l-12.157,17.05l5.65-1.337L44.554,30.163z"
      />
      <motion.path
        variants={orangeVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M64.257,36.846l-6.111-25.357l2.477-2.557l12.624,2.511L83.95,8.878l2.225,3.266L70.28,34.442 c-0.666,0.934-1.588,1.657-2.656,2.083C66.556,36.952,65.387,37.063,64.257,36.846z M63.04,13.712l4.248,17.635l12.161-17.05 l-5.663,1.357l-0.914,0.02L63.04,13.712z"
      />
      <motion.path
        variants={blueVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M88.874,26.279c-0.108,0.68-0.163,1.368-0.165,2.056c0,2.819,1.306,4.228,3.919,4.226 c3.213,0,5.28-1.625,5.771-3.955l4.571,0.435C101.827,34.346,98.291,37,92.467,37c-5.445,0-8.44-3.467-8.44-8.719	c0-4.012,1.198-7.423,3.593-10.233c2.396-2.868,5.499-4.276,9.253-4.276c5.173,0,7.616,3.263,7.616,7.85 c-0.026,1.566-0.209,3.126-0.545,4.657H88.874z M90.124,22.384h9.747c0.107-0.499,0.162-1.008,0.165-1.518 c0-1.785-1.143-2.651-3.485-2.651C93.663,18.212,91.539,19.619,90.124,22.384z"
      />
      <motion.path
        variants={blueVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M112.442,31.41c0-0.244,1.862-9.08,5.579-26.41h-4.672c-0.871,4.07-1.827,8.474-2.867,13.212 c-1.795,8.284-2.665,12.831-2.665,13.643c0,3.303,1.741,5.145,5.173,5.145c1.68,0,3.099-0.435,4.188-1.337l-1.143-3.845 C114.294,32.828,112.442,32.938,112.442,31.41z"
      />
      <motion.path
        variants={blueVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M125.291,26.279c-0.107,0.68-0.163,1.368-0.164,2.056c0,2.819,1.306,4.228,3.919,4.22 c3.213,0,5.28-1.625,5.771-3.955l4.571,0.435c-1.143,5.306-4.679,7.96-10.504,7.96c-5.445,0-8.439-3.467-8.439-8.71 c0-4.012,1.197-7.423,3.593-10.233c2.396-2.868,5.498-4.276,9.256-4.276c5.17,0,7.62,3.246,7.62,7.8 c-0.027,1.566-0.209,3.126-0.545,4.657H125.291z M126.542,22.384h9.747c0.107-0.499,0.162-1.008,0.165-1.51 c0-1.785-1.143-2.651-3.486-2.651C130.081,18.212,127.957,19.619,126.542,22.384z"
      />
      <motion.path
        variants={blueVariants}
        initial="initial"
        animate="animate"
        {...{ transition }}
        d="M161,14.361l-2.017,4.062c-0.655-0.183-1.337-0.256-2.016-0.217 c-1.993-0.009-3.956,0.475-5.714,1.407l-3.483,16.515h-4.678l4.625-21.66h3.865l-0.037,0.766c1.432-0.781,3.01-1.262,4.636-1.412 C157.808,13.671,159.448,13.855,161,14.361z"
      />
    </motion.svg>
  );
};

export default Logo;

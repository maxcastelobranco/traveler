import { motion, Variants } from "framer-motion";
import React from "react";
import { Theme } from "../../theme";
import { useTheme } from "@material-ui/core";

const Logo: React.FC = () => {
  const { palette } = useTheme<Theme>();

  return (
    <motion.svg width={156} height={32} viewBox="0 0 156 32" fill="none">
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.primary.main,
          fill: palette.primary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M12.739,13.914H8.369C6.689,21.937,5.811,26.1,5.811,26.424c0,1.514,1.849,1.407,3.593.378l1.143,3.844a6.285,6.285,0,0,1-4.191,1.337c-3.432,0-5.173-1.842-5.173-5.145.014-.8.834-5.071,2.514-12.924H0l.924-4.44H4.682l.924-4.546L6.7,0h4.682Q11.13,1.38,10.4,4.71L9.361,9.474h4.3Z"
      />
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.primary.main,
          fill: palette.primary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M31.843,9.361l-2.016,4.061a6.24,6.24,0,0,0-2.017-.217A12.075,12.075,0,0,0,22.1,14.613L18.617,31.134H13.935L18.56,9.474h3.866l-.054.759a11.992,11.992,0,0,1,9.471-.872Z"
      />
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.secondary.main,
          fill: palette.secondary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M28.462,31.953l-2.225-3.266,15.9-22.3a6,6,0,0,1,6.023-2.4l6.111,25.357L51.792,31.9,39.167,29.389Zm11.092-6.79,9.831,1.956L45.123,9.484,32.966,26.534l5.65-1.337Z"
      />
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.secondary.main,
          fill: palette.secondary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M59.257,31.846,53.146,6.489l2.477-2.558L68.248,6.442l10.7-2.564,2.225,3.266L65.28,29.442a6.009,6.009,0,0,1-6.023,2.4ZM58.04,8.712l4.249,17.635L74.449,9.3l-5.663,1.357-.915.021Z"
      />
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.primary.main,
          fill: palette.primary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M83.874,21.279a13.351,13.351,0,0,0-.165,2.056q0,4.228,3.919,4.225c3.213,0,5.28-1.624,5.771-3.955l4.571.435C96.827,29.346,93.291,32,87.467,32c-5.445,0-8.44-3.467-8.44-8.719A15.244,15.244,0,0,1,82.62,13.048a11.51,11.51,0,0,1,9.253-4.276c5.173,0,7.616,3.263,7.616,7.85a23.548,23.548,0,0,1-.544,4.657Zm1.25-3.895h9.747a7.451,7.451,0,0,0,.165-1.518c0-1.785-1.143-2.651-3.486-2.651A6.844,6.844,0,0,0,85.124,17.384Z"
      />
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.primary.main,
          fill: palette.primary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M107.442,26.41c0-.244,1.862-9.08,5.579-26.41h-4.672q-1.307,6.105-2.867,13.212c-1.8,8.284-2.665,12.831-2.665,13.643,0,3.3,1.741,5.145,5.173,5.145a6.381,6.381,0,0,0,4.188-1.337l-1.143-3.845C109.294,27.828,107.442,27.938,107.442,26.41Z"
      />
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.primary.main,
          fill: palette.primary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M120.291,21.279a13.35,13.35,0,0,0-.164,2.056q0,4.228,3.919,4.225c3.213,0,5.28-1.624,5.771-3.955l4.571.435c-1.143,5.306-4.679,7.96-10.5,7.96-5.445,0-8.439-3.467-8.439-8.719a15.239,15.239,0,0,1,3.593-10.233,11.51,11.51,0,0,1,9.256-4.276c5.17,0,7.62,3.246,7.62,7.85a23.624,23.624,0,0,1-.545,4.657Zm1.251-3.895h9.747a7.451,7.451,0,0,0,.165-1.518c0-1.785-1.143-2.651-3.486-2.651A6.844,6.844,0,0,0,121.542,17.384Z"
      />
      <motion.path
        initial={{
          pathLength: 0,
          stroke: palette.background.default,
          fill: palette.background.default,
        }}
        animate={{
          pathLength: 1,
          stroke: palette.primary.main,
          fill: palette.primary.main,
        }}
        transition={{
          duration: 2,
          fill: {
            delay: 2,
            duration: 1.5,
          },
        }}
        d="M156,9.361l-2.017,4.061a6.234,6.234,0,0,0-2.016-.217,12.073,12.073,0,0,0-5.714,1.408L142.77,31.128h-4.678l4.625-21.66h3.865l-.037.765A11.987,11.987,0,0,1,156,9.361Z"
      />
    </motion.svg>
  );
};

export default Logo;

import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FC } from "react";

const Header: FC = () => {
  return (
    <motion.div
      className="flex gap-unit-sm items-center"
      initial={{
        opacity: 0,
        x: "-10vw",
      }}
      animate={{
        opacity: 1,
        x: "0",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <h1 className="text-2xl font-semibold">Country Recommendations</h1>
      <Chip size="sm" color="primary">
        BETA
      </Chip>
    </motion.div>
  );
};

export default Header;

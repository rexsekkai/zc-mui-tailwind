import { motion } from "framer-motion";
export function FadeInWhenVisible({ children, duration = 1 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: duration }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
        >
            {children}
        </motion.div>
    );
}

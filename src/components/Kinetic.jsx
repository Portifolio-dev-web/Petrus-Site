import { motion } from "framer-motion";

/**
 * MaskedReveal — masked line-by-line reveal.
 * Provide `lines` as an array of strings. Each line is placed in an overflow-hidden
 * mask and slides up from 100% with staggered delay.
 */
export function MaskedReveal({
    lines = [],
    className = "",
    delay = 0,
    stagger = 0.12,
    duration = 1,
    tag: Tag = "h1",
}) {
    return (
        <Tag className={className}>
            {lines.map((line, i) => (
                <span className="mask-line" key={i}>
                    <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                            duration,
                            ease: [0.76, 0, 0.24, 1],
                            delay: delay + i * stagger,
                        }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}

export function FadeUp({ children, delay = 0, className = "", y = 24 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

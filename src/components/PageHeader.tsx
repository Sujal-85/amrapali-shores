import { motion } from "framer-motion";

interface PageHeaderProps {
  subtitle: string;
  title: string;
}

const PageHeader = ({ subtitle, title }: PageHeaderProps) => (
  <section className="pt-28 pb-12 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gold font-semibold mb-2 tracking-wider uppercase text-sm">{subtitle}</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold">{title}</h1>
      </motion.div>
    </div>
  </section>
);

export default PageHeader;

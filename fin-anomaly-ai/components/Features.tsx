"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Eye, 
  Code2, 
  Lock, 
  Layers, 
  LineChart, 
  Bell 
} from "lucide-react"

const features = [
  {
    title: "Real-time Detection",
    description: "Sub-200ms response times for blocking transactions at the point of sale.",
    icon: Zap
  },
  {
    title: "Human-Readable Explanations",
    description: "Every anomaly score includes a clear explanation for compliance and customer support.",
    icon: Eye
  },
  {
    title: "5 Lines of Code",
    description: "Integrate into any stack in minutes with our simple REST API and SDKs.",
    icon: Code2
  },
  {
    title: "Privacy-First",
    description: "No PII storage. We process transaction metadata and return insights instantly.",
    icon: Lock
  },
  {
    title: "Universal Integration",
    description: "Works on top of Plaid, Stripe, Lithic, or any custom transaction feed.",
    icon: Layers
  },
  {
    title: "False Positive Reduction",
    description: "Smart context awareness reduces false alerts by 40% compared to rule-based systems.",
    icon: LineChart
  },
  {
    title: "User-Friendly Alerts",
    description: "Ready-to-use notification templates for informing users about unusual activity.",
    icon: Bell
  }
]

export function Features() {
  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-grade anomaly AI</h2>
            <p className="text-gray-400">
              Built for the modern fintech stack. Secure, fast, and regulator-friendly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:bg-surface/50 transition-all duration-300 border-white/5 hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
          
          {/* Custom Final Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="glass-card p-8 bg-linear-to-br from-primary/20 to-accent/20 border-primary/20 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl font-bold mb-3">Ready to start?</h3>
            <p className="text-gray-300 text-sm mb-6">
              Get your API key and start detecting anomalies today.
            </p>
            <button className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
              Get Started Free
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

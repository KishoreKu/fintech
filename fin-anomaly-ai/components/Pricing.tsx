"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for prototyping and testing.",
    features: [
      "1,000 API calls / month",
      "Sandbox access",
      "Standard support",
      "Community forum access"
    ],
    cta: "Start Free",
    variant: "secondary" as const
  },
  {
    name: "Growth",
    price: "$99",
    description: "Best for growing fintechs and platforms.",
    features: [
      "100,000 API calls / month",
      "Production access",
      "Priority support",
      "Explainability reports",
      "Custom alert templates"
    ],
    cta: "Get Started",
    variant: "primary" as const,
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large-scale operations.",
    features: [
      "Unlimited API calls",
      "SLA guarantees",
      "White-glove onboarding",
      "Dedicated account manager",
      "On-premise options"
    ],
    cta: "Contact Sales",
    variant: "secondary" as const
  }
]

export function Pricing() {
  return (
    <section className="py-24 bg-surface/30" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400">
            Scale your anomaly intelligence as your transaction volume grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col ${
                tier.featured 
                  ? "border-primary/50 relative overflow-hidden ring-2 ring-primary/20 scale-105" 
                  : "border-white/5"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-gray-500 text-sm">/mo</span>}
                </div>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.variant} 
                className="w-full"
                size="lg"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          *Pay only for what you use. Transaction volume counts against monthly cap.
        </p>
      </div>
    </section>
  )
}

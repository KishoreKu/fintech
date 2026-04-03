"use client"

import { motion } from "framer-motion"
import { Database, Zap, FileText } from "lucide-react"

const steps = [
  {
    title: "Send Transaction Data",
    description: "Forward transaction metadata (amount, merchant, location) via our secure REST API or SDK.",
    icon: Database,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "AI Analysis",
    description: "Our proprietary ML models analyze patterns against user history and global fraud vectors in real-time.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Actionable Insights",
    description: "Receive a simple anomaly score and a plain-English explanation for regulators and support teams.",
    icon: FileText,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-surface/30" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-gray-400">
            From raw transaction data to intelligent, explainable alerts in less than 200ms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before/After Example */}
        <div className="mt-20 glass-card overflow-hidden border-white/5 bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Raw Input (JSON)</span>
              </div>
              <pre className="text-xs font-mono text-gray-500 bg-black/40 p-4 rounded-lg overflow-x-auto">
{`{
  "transaction_id": "tx_49201",
  "amount": 1240.00,
  "currency": "USD",
  "mcc": 5732,
  "merchant": "Global Tech",
  "timestamp": "2024-05-12T14:20:01Z",
  "user_id": "usr_992"
}`}
              </pre>
            </div>
            <div className="p-8 bg-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">FinAnomaly Output</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Anomaly Score</span>
                  <span className="text-sm font-bold text-primary">82 / 100</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary" 
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">AI Explanation:</p>
                  <p className="text-sm text-gray-300 leading-relaxed italic">
                    &quot;User usr_992 typically transacts between $10-$50 at this MCC. A $1240 purchase is 25x their median spend. The location (Dublin, IE) is inconsistent with their last 5 sessions (Austin, TX).&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

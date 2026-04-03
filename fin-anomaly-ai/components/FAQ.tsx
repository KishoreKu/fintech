"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to integrate?",
    answer: "Most developers can integrate FinAnomaly AI in less than 30 minutes. It's a single REST API call that you can trigger after your transaction is authorized. Our SDKs for Node.js, Python, and Go make it even faster."
  },
  {
    question: "Is my transaction data stored?",
    answer: "No. We follow a privacy-first approach. We process the metadata sent in the request, return the analysis, and purge the data. We do not store PII or transaction history unless you specifically opt-in for historical pattern learning."
  },
  {
    question: "What is the accuracy rate?",
    answer: "FinAnomaly AI maintains a 99.8% accuracy rate on established fraud vectors. Our 'Explainable AI' feature specifically helps reduce false positives by 40% compared to traditional legacy rule engines by providing human-readable context."
  },
  {
    question: "Can I use it with Stripe or Plaid?",
    answer: "Absolutely. FinAnomaly AI is designed to work on top of any payment processor or data aggregator. Simply pass the metadata you receive from Stripe or Plaid to our endpoint."
  },
  {
    question: "Is FinAnomaly AI SOC-2 compliant?",
    answer: "Yes, we are SOC-2 Type II compliant. We also adhere to GDPR, CCPA, and PCI-DSS Level 1 standards to ensure your fintech platform stays compliant."
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0)

  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden border-white/5">
              <button
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-bold">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-0">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

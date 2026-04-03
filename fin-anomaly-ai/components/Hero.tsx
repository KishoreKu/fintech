"use client"

import { motion } from "framer-motion"
import { CheckCircle, Play } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="product">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v2.0 Now Live: Explanable AI
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Anomaly Intelligence for <br />
            <span className="gradient-text">Every Fintech</span> — One Simple API
          </h1>

          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            Detect fraud, unusual spending, errors, and surprises in real time. 
            Get plain-English explanations. Integrate in minutes. No ML team required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button size="lg" className="h-14 px-10">Try Sandbox Free</Button>
            <Button variant="secondary" size="lg" className="h-14 px-8 flex items-center gap-2">
              <Play className="w-4 h-4" /> Watch 45-second Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-4 opacity-70 grayscale">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-xs font-medium">SOC-2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-xs font-medium">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-xs font-medium">PCI Compliant</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[80px] -z-10 group-hover:bg-primary/20 transition-all duration-500" />
          
          <div className="flex flex-col gap-6">
            {/* Code Snippet Card */}
            <div className="glass-card p-6 border-white/10 shadow-2xl translate-x-[-10%] md:translate-x-[-15%] group-hover:translate-x-[-12%] transition-transform duration-500">
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <code className="text-sm font-mono block space-y-1">
                <p><span className="text-primary">const</span> alert = <span className="text-primary">await</span> fin.analyze({ "{" }</p>
                <p className="pl-4 text-gray-400">amount: <span className="text-accent">4500.00</span>,</p>
                <p className="pl-4 text-gray-400">merchant: <span className="text-accent">&quot;Lux Store&quot;</span>,</p>
                <p className="pl-4 text-gray-400">user_id: <span className="text-accent">&quot;usr_01J&quot;</span></p>
                <p>{ "}" });</p>
                <p className="mt-4 text-secondary font-semibold">// Returns: Anomaly detected (98%)</p>
              </code>
            </div>

            {/* Anomaly Alert Card */}
            <div className="glass-card p-6 border-primary/30 shadow-2xl translate-x-[10%] md:translate-x-[15%] group-hover:translate-x-[12%] transition-transform duration-500 bg-surface/80">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Critical Anomaly</p>
                    <p className="text-[10px] text-gray-500">Alert ID: #FA-882</p>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20">
                  98% Confidence
                </div>
              </div>
              <p className="text-xs leading-relaxed text-gray-300">
                &quot;This transaction is <span className="text-white font-semibold">highly unusual</span>. The user has never spent more than $200 in this category before, and the merchant is located in a high-risk jurisdiction.&quot;
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white w-full text-[10px]">Block Transaction</Button>
                <Button variant="secondary" size="sm" className="w-full text-[10px]">Flag for Review</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

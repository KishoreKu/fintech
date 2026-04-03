"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Mail, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-background overflow-hidden relative">
      {/* Visual Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="glass-card bg-primary/5 border-primary/20 p-8 md:p-16 mb-24 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[100px] -z-10" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to add anomaly <br className="hidden md:block" /> intelligence to your product?</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Join 50+ fintechs reducing chargebacks and improving user trust with one simple API call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" className="h-14 px-10 flex items-center gap-2">
              Get Your API Key <ArrowRight className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface border border-white/5">
              <Mail className="w-4 h-4 text-gray-400" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-hidden text-sm w-48 text-white focus:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Westley Group Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold">WESTLEY GROUP</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-6">
              Anomaly intelligence for modern fintech platforms. Catch fraud, unusual spending, and surprises in real time.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-surface border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">How it works</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Sandbox</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@westley-group.com" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-3 h-3" /> hello@westley-group.com
                </a>
              </li>
              <li className="text-sm text-gray-500 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="shrink-0">
                  <path d="M3.5 1C2.67 1 2 1.67 2 2.5V13.5C2 14.33 2.67 15 3.5 15C4.33 15 5 14.33 5 13.5V2.5C5 1.67 4.33 1 3.5 1ZM9.5 6C8.67 6 8 6.67 8 7.5V13.5C8 14.33 8.67 15 9.5 15C10.33 15 11 14.33 11 13.5V7.5C11 6.67 10.33 6 9.5 6Z" />
                </svg>
                +1 (732) 518-8899
              </li>
              <li className="text-sm text-gray-500 flex items-start gap-2">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="shrink-0 mt-1">
                  <path d="M8 0C4.69 0 2 2.69 2 6C2 10.5 8 16 8 16C8 16 14 10.5 14 6C14 2.69 11.31 0 8 0ZM8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8Z" />
                </svg>
                <span>613 Washington Blvd. #1342, Jersey City, NJ 07310</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600 mb-4 md:mb-0">
            © 2026 Westley Group LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-gray-600 px-2 py-0.5 rounded border border-gray-800">SOC-2 COMPLIANT</span>
            <span className="text-[10px] font-bold text-gray-600 px-2 py-0.5 rounded border border-gray-800">GDPR CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

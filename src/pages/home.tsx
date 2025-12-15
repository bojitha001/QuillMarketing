import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Download, Smartphone, Cloud, Shield, Menu, X, Feather } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Images
import heroImage from "../assets/mobile_app_hero_with_blue_theme.png";
import iconSync from "../assets/minimalist_icon_for_sync_feature.png";
import iconSecurity from "../assets/minimalist_icon_for_security_feature.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-blue-100">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 h-20 flex items-center">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Feather className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-gray-900">Quill</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Stories</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Button variant="ghost" className="hover:bg-blue-50 text-gray-700">Log in</Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6">Download App</Button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl"
        >
          <a href="#features" className="text-lg font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#testimonials" className="text-lg font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Stories</a>
          <a href="#pricing" className="text-lg font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <div className="h-px bg-gray-100 my-2"></div>
          <Button variant="outline" className="w-full justify-center">Log in</Button>
          <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700">Download App</Button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 border-blue-100 rounded-full">
                #1 Editor's Choice App
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-gray-900">
                Capture your thoughts. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Instantly.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                The most beautiful way to write, organize, and share your ideas on mobile. Distraction-free and synced everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-gray-900 hover:bg-gray-800 text-white px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Smartphone className="mr-2 w-5 h-5" /> Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-gray-200 hover:bg-white hover:border-gray-300 text-gray-700 px-8 h-14 text-lg glass-button">
                  Download for Android
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p>Loved by 1M+ writers</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full transform translate-y-12"></div>
              <div className="relative z-10 transform hover:-translate-y-2 transition-transform duration-700">
                <img src={heroImage} alt="Quill App Interface" className="w-full max-w-md mx-auto drop-shadow-2xl" />
                
                {/* Floating Badge 1 */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-20 -right-4 glass p-4 rounded-2xl flex items-center gap-3 shadow-lg max-w-[200px]"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Status</p>
                    <p className="text-sm font-bold text-gray-900">Synced to Cloud</p>
                  </div>
                </motion.div>

                 {/* Floating Badge 2 */}
                 <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-32 -left-4 glass p-4 rounded-2xl flex items-center gap-3 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Privacy</p>
                    <p className="text-sm font-bold text-gray-900">End-to-End Encrypted</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden bg-white/50">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Designed for Focus</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Everything you need to write your masterpiece, nothing to get in your way.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <img src={iconSync} className="w-12 h-12 object-contain" alt="Sync" />, 
                title: "Seamless Sync", 
                desc: "Start on your phone, finish on your tablet. Your words are always with you, everywhere you go." 
              },
              { 
                icon: <img src={iconSecurity} className="w-12 h-12 object-contain" alt="Security" />, 
                title: "Private & Secure", 
                desc: "Your thoughts are personal. We use military-grade encryption to keep your data safe and private." 
              },
              { 
                icon: <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Feather className="w-6 h-6" /></div>, 
                title: "Beautiful Typography", 
                desc: "Choose from our curated list of premium fonts designed for optimal reading and writing experience." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-transparent hover:border-t-blue-500"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Loved by Writers</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Quill has completely changed how I draft my blog posts. The mobile interface is simply stunning.", name: "Sarah Jenkins", role: "Travel Blogger" },
              { text: "Finally, a writing app that doesn't feel cluttered. It's just me and my words. Pure bliss.", name: "Marcus Chen", role: "Screenwriter" },
              { text: "The sync is instant. I can capture an idea on the subway and it's on my iPad when I get home.", name: "Elena Rodriguez", role: "Journalist" }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-blue-400 fill-current" />)}
                </div>
                <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?u=${idx + 30}`} alt={t.name} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Simple Pricing</h2>
            <p className="text-gray-500">Free forever for casual writers. Upgrade for power features.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="rounded-[2rem] border-0 shadow-sm p-2 hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Basic</h3>
                  <div className="text-4xl font-bold text-gray-900">$0<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                  <p className="text-gray-500 mt-2">Essential features for everyone.</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited notes', 'Basic formatting', 'Device sync (2 devices)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-xl h-12 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium shadow-none border border-transparent">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-0 shadow-2xl relative p-2 overflow-hidden bg-white">
               <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardContent className="p-8 relative">
                <div className="mb-8">
                  <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 border-0">Best Value</Badge>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Quill Pro</h3>
                  <div className="text-4xl font-bold text-gray-900">$4.99<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                  <p className="text-gray-500 mt-2">Unlock your full potential.</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited device sync', 'Advanced export (PDF, Markdown)', 'Custom themes & fonts', 'Version history'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-xl h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-lg shadow-blue-500/20">
                  Go Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">Write better, everywhere.</h2>
            <p className="text-xl text-gray-500 mb-10">Join the community of writers finding their focus with Quill.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-gray-900 hover:bg-gray-800 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Download className="mr-2 w-5 h-5" /> Download App
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
              <Feather className="w-5 h-5" />
            </div>
            <span className="font-bold text-gray-900">Quill</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Press Kit</a>
          </div>
          <p className="text-sm text-gray-400">© 2024 Quill App Inc.</p>
        </div>
      </footer>
    </div>
  );
}

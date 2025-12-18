import { motion } from "framer-motion";
import { Check, Star, Download, Smartphone, Menu, X, Feather, Brain, TrendingUp, Sparkles, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { OrganizationSchema } from "@/components/StructuredData";

// Images
import heroImage from "../assets/Hero.png";


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
    <>
      <SEO 
        title="QuillMarketing - Transform Your Digital Presence"
        description="Elevate your brand with QuillMarketing's cutting-edge digital marketing solutions. Expert SEO, content strategy, and innovative marketing campaigns that drive results."
        keywords="digital marketing, SEO optimization, content marketing, brand strategy, marketing solutions, social media marketing"
        ogUrl="https://quillmarketing.com/"
        canonicalUrl="https://quillmarketing.com/"
      />
      <OrganizationSchema />
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
                #1 Learning Platform 2025
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-gray-900">
                Learn anything. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Anytime, anywhere.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                Practice with interactive sessions tailored to your goals and get AI-powered guidance 24/7. Personalized learning that adapts to your pace and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-gray-900 hover:bg-gray-800 text-white px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Smartphone className="mr-2 w-5 h-5" /> Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-gray-200 hover:bg-white hover:border-gray-300 text-gray-700 px-8 h-14 text-lg glass-button">
                 <Smartphone className="mr-2 w-5 h-5" /> Download for Android
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
                <p>Trusted by 500K+ learners worldwide</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden md:block"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full transform translate-y-12 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative z-10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-700">
                <img src={heroImage} alt="Quill App Interface" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 px-6 py-2 text-sm font-semibold">
                ✨ Why Choose Us
              </Badge>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 bg-clip-text">
              Learn Smarter, Not Harder
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Powerful features designed to accelerate your learning journey and help you achieve your goals.</p>
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
                icon: <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Brain className="w-7 h-7" /></div>, 
                title: "AI-Powered Sessions", 
                desc: "Get instant feedback and personalized recommendations with our advanced AI tutor that adapts to your learning style.",
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "blue"
              },
              { 
                icon: <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><TrendingUp className="w-7 h-7" /></div>, 
                title: "Track Your Progress", 
                desc: "Monitor your improvement with detailed analytics and insights. See your growth and stay motivated every step of the way.",
                gradient: "from-purple-500 to-pink-500",
                glowColor: "purple"
              },
              { 
                icon: <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Sparkles className="w-7 h-7" /></div>, 
                title: "Interactive Practice", 
                desc: "Engage with hands-on exercises, real-world scenarios, and interactive challenges designed to reinforce your learning.",
                gradient: "from-orange-500 to-red-500",
                glowColor: "orange"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative glass-card p-8 rounded-3xl border border-gray-100 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon container */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {feature.desc}
                  </p>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 mb-6">Ready to experience the future of learning?</p>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Explore All Features →
            </Button>
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 px-6 py-2 text-sm font-semibold">
                <HelpCircle className="w-4 h-4 mr-2 inline" />
                FAQ
              </Badge>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything you need to know about our learning platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="glass-card border-0 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
                  How does the AI-powered learning work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Our AI analyzes your learning patterns, strengths, and areas for improvement to create personalized practice sessions. It adapts in real-time, providing instant feedback and tailored recommendations to help you learn more efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="glass-card border-0 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
                  Can I track my progress over time?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Absolutely! Our platform provides detailed analytics and insights showing your improvement across different skills. You'll see visual progress charts, milestone achievements, and personalized reports to keep you motivated and on track.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="glass-card border-0 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
                  What types of practice sessions are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  We offer a wide variety of interactive practice sessions including hands-on exercises, real-world scenarios, quizzes, coding challenges, and simulations. Each session is designed to reinforce your learning through active engagement and practical application.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="glass-card border-0 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
                  Is there a mobile app available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Yes! Our platform is available on iOS and Android, allowing you to learn on the go. All your progress syncs seamlessly across devices, so you can start a session on your phone and continue on your tablet or computer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="glass-card border-0 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
                  Can I cancel my subscription anytime?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Yes, you can cancel your subscription at any time with no penalties. If you cancel, you'll continue to have access to Pro features until the end of your current billing period. You can also downgrade to our free Basic plan to keep your progress and continue learning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="glass-card border-0 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
                  Do you offer certificates upon completion?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Pro members receive verified certificates for completed learning paths and milestones. These certificates can be shared on LinkedIn and other professional platforms to showcase your newly acquired skills to potential employers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Additional help section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center glass-card p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our support team is here to help you get started.</p>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Support
            </Button>
          </motion.div>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">Start learning today.</h2>
            <p className="text-xl text-gray-500 mb-10">Join thousands of learners mastering new skills with AI-powered practice sessions.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-gray-900 hover:bg-gray-800 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Download className="mr-2 w-5 h-5" /> Get Started Free
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
    </>
  );
}

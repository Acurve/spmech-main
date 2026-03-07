"use client"
import React, { useState } from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  Settings, 
  Layers, 
  CheckCircle, 
  Weight, 
  Menu, 
  X 
} from 'lucide-react';


// ==========================================
// COMPONENT: Hero Section
// ==========================================
const Hero = () => {
  return (
    <section className="pt-32 pb-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
            Turn-Assist
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            The Turn-Assist is your ultimate sidekick for CNC automation - quick, efficient, and so intuitive, you might start wondering who's really running the show (don't worry, it's still you).
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-red-600 text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition shadow-lg shadow-red-600/20">
              Book a demo
            </button>
            <button className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded font-bold hover:bg-slate-900 hover:text-white transition">
              Request an offer
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <img 
            src="https://images.unsplash.com/photo-1565439390118-86d137df755c?auto=format&fit=crop&q=80&w=1200" 
            alt="Turn-Assist Hero" 
            className="rounded-xl shadow-2xl w-full object-cover aspect-video" 
          />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: Stats Bar
// ==========================================
const StatsBar = () => {
  const stats = [
    { icon: <Settings className="w-6 h-6"/>, label: "Turning" },
    { icon: <Layers className="w-6 h-6"/>, label: "Small & Medium Series" },
    { icon: <CheckCircle className="w-6 h-6"/>, label: "Stacking of workpieces" },
    { icon: <Weight className="w-6 h-6"/>, label: "0 to 165kg" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-4 text-slate-800 font-bold">
               <div className="text-red-600 bg-red-50 p-3 rounded-full">{stat.icon}</div>
               <span>{stat.label}</span>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENT: Breadcrumbs
// ==========================================
const Breadcrumbs = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <p className="text-sm text-slate-500 font-medium">
      Home <span className="mx-2">/</span> <span className="text-slate-900">Turn-Assist</span>
    </p>
  </div>
);

// ==========================================
// COMPONENT: Innovation Section
// ==========================================
const Innovation = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Turn-Assist Innovation" 
              className="w-full h-auto rounded-xl shadow-lg" 
            />
        </div>
        <div className="lg:w-1/2 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Turn-Assist: Innovation born from experience
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>The Turn-Assist is where it all began for RoboJob: a journey driven by hands-on expertise and a vision for smarter automation. RoboJob was founded by Helmut De Roovere, who as the head of a CNC subcontracting company, saw the untapped potential of small and medium-sized series automation. Existing solutions didn't meet the demand for compactness, flexibility, and ease of use, so Helmut took the bold step to create his own. After three years of dedicated development, the first Turn-Assist was installed in 2010 at his company, Aluro CNC. That very first unit, with serial number 1, is still running strong today.</p>
              <p>Since then, the Turn-Assist has evolved into the industry standard, setting itself apart through continuous innovation. With a patented stacking principle for unmatched capacity on a small footprint, intuitive functionality, modular upgrades, and advanced gripper systems, it remains the trusted choice for CNC automation. A legacy of reliability, perfected over time.</p>
            </div>
            <button className="flex items-center text-red-600 font-bold hover:text-red-700 transition group mt-6">
              Request your Brochure <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: Tailored Automation Models
// ==========================================
const TailoredAutomation = () => {
  const models = [
    { name: "Turn-Assist Essential", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" },
    { name: "Turn-Assist 200", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Turn-Assist 270", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" },
    { name: "Turn-Assist Integrated", img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Turn-Assist: Tailored Automation for every workshop
          </h2>
          <div className="space-y-4 text-slate-600 text-lg">
            <p>Building on its proven legacy, the Turn-Assist offers reliable, flexible, and user-friendly automation in multiple configurations.</p>
            <p>The Integrated model is compact and standardized for quick installation and efficient use of space. The Separated version adds flexibility, with customizable layouts and easy access to tool magazines, making it perfect for versatile workshops.</p>
            <p>Choose from models like the compact Essential Mini, the versatile Essential, or the high-capacity 200 and robust 270 for larger batches - each designed to optimize CNC operations and boost productivity.</p>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, idx) => (
             <div key={idx} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-pointer">
               <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                 <img 
                   src={model.img} 
                   alt={model.name} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
               </div>
               <h3 className="font-bold text-slate-900 text-center text-lg">{model.name}</h3>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: Lathe Automation
// ==========================================
const LatheAutomation = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 sticky top-32">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Lathe automation made easy</h2>
             <p className="text-slate-600 mb-6 text-lg">Ready to automate your CNC turning but unsure where to start? The Turn-Assist integrates effortlessly into any machine park, regardless of brand or setup, ensuring a smooth transition to automation.</p>
             <p className="text-slate-600 text-lg">Whether entering automation or scaling up, the Turn-Assist offers a practical, approachable solution tailored to real-world needs. Start automating smarter today!</p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-zinc-50 p-10 rounded-2xl border border-gray-100 hover:border-red-200 transition-colors">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-red-600">
                 <CheckCircle className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">User-Friendly and Efficient</h3>
               <p className="text-slate-600 leading-relaxed">With its intuitive design, the Turn-Assist is hassle-free from installation to daily operation. No steep learning curves or extended downtimes - just efficient, productive manufacturing for beginners and experts alike.</p>
             </div>
             <div className="bg-zinc-50 p-10 rounded-2xl border border-gray-100 hover:border-red-200 transition-colors">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-red-600">
                 <Layers className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Compact and Flexible</h3>
               <p className="text-slate-600 leading-relaxed">The Turn-Assist's compact size fits effortlessly into most workshops, working seamlessly with various CNC turning brands and models. No major setup changes are needed - just better performance and efficiency.</p>
             </div>
          </div>
        </div>

        {/* Top views placeholder grid */}
        <div className="mt-20">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">Setup Configurations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['TA200i', '270i', 'TAEimini', 'TAEi'].map((model, i) => (
              <div key={i} className="aspect-[4/3] bg-zinc-50 rounded-xl flex flex-col items-center justify-center border border-dashed border-gray-300 hover:border-red-300 transition-colors group">
                <Settings className="w-8 h-8 text-gray-300 mb-3 group-hover:text-red-400 transition-colors" />
                <span className="text-sm font-semibold text-gray-500">Topview {model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: Flexibility Features
// ==========================================
const Flexibility = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 transform -skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl leading-tight">
           Unmatched flexibility for every turning operation
         </h2>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
             <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-3">
               <Layers className="w-6 h-6" /> Capacity meets footprint
             </h3>
             <p className="text-gray-300 leading-relaxed">The Turn-Assist's patented stacking system maximizes part capacity while keeping a minimal footprint, allowing for higher production without using extra workspace. Need grid plates? They integrate effortlessly. Prefer simpler setups? The system works just as seamlessly without them. This flexibility ensures efficiency and adaptability for any workshop setup.</p>
           </div>
           <div>
             <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-3">
               <Settings className="w-6 h-6" /> Configurable table
             </h3>
             <p className="text-gray-300 leading-relaxed">The Turn-Assist's table is fully adaptable, accommodating a wide range of part diameters, weights and materials. Whether you're machining small precision components or larger and heavier pieces, the configurable design ensures that you're always ready to meet new production demands without the need for additional adjustments or equipment.</p>
           </div>
           <div>
             <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-3">
               <CheckCircle className="w-6 h-6" /> Adjustable grippers
             </h3>
             <p className="text-gray-300 leading-relaxed">No matter the shape or size of your workpieces, the Turn-Assist's adjustable grippers are designed to handle them with accuracy and care. This means you can automate an incredible variety of products without worrying about compatibility issues.</p>
           </div>
         </div>

         <div className="mt-20 bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">The preferred automation for any CNC lathe</h3>
            <p className="text-gray-300 leading-relaxed max-w-5xl">Experience the original Turn-Assist: the benchmark in CNC lathe automation for over 15 years. While many have tried to copy, only the Turn-Assist delivers unmatched performance thanks to its patented stacking principle, powerful software, versatile grippers, and intuitive functionality. Trusted by countless users worldwide, it remains the gold standard in capacity, simplicity, and ease of use.</p>
         </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: Simplicity Section
// ==========================================
const Simplicity = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20 items-center">
         <div className="lg:w-1/2 relative">
           {/* Abstract decorative shape behind image */}
           <div className="absolute -inset-4 bg-zinc-100 rounded-2xl transform -rotate-3 -z-10" />
           <img 
             src="https://images.unsplash.com/photo-1581092334651-ddf727c62b45?auto=format&fit=crop&q=80&w=800" 
             alt="Software Interface" 
             className="rounded-xl shadow-2xl w-full object-cover" 
           />
         </div>
         <div className="lg:w-1/2 space-y-12">
           <div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
               Effortless automation: designed with simplicity in mind
             </h2>
             <p className="text-slate-600 text-lg">The Turn-Assist is built to make CNC automation easy and approachable. From quick setups to intuitive operation, every aspect of the system is crafted to save time and effort, keeping your focus on what matters most - getting the job done efficiently.</p>
           </div>
           
           <div className="space-y-8">
             <div className="pl-6 border-l-2 border-red-500">
               <h3 className="text-xl font-bold text-slate-900 mb-3">Smart software, clear setup</h3>
               <p className="text-slate-600 leading-relaxed">At the core of the Turn-Assist lies the most intuitive software available, designed to guide operators seamlessly through every step. Equipped with 3D visualizations, you can effortlessly view your workpieces, grippers, and table setup in real-time, making configuration feel natural and stress-free. In minutes—typically less than five—you're ready to run a new job.</p>
             </div>
             <div className="pl-6 border-l-2 border-gray-200 hover:border-red-300 transition-colors">
               <h3 className="text-xl font-bold text-slate-900 mb-3">Simpler start-up, quicker payoff</h3>
               <p className="text-slate-600 leading-relaxed">When installed, the Turn-Assist is ready to work right away. Switch between products in no time thanks to its clever, operator-friendly layout. Gripper adjustments and table configurations are quick and straightforward, allowing even less experienced operators to take full advantage.</p>
             </div>
             <div className="pl-6 border-l-2 border-gray-200 hover:border-red-300 transition-colors">
               <h3 className="text-xl font-bold text-slate-900 mb-3">Features that work for you</h3>
               <p className="text-slate-600 leading-relaxed">The Turn-Assist's smart features, like adjustable gripper force, airblow settings, Start & Stop functions, and Home mode, streamline workflows and eliminate unnecessary steps. Repetitive tasks become faster and easier.</p>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: Modules Grid
// ==========================================
const Modules = () => {
  const modules = [
    { name: "Shaft Handling", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=300" },
    { name: "Flip-over Unit", img: "https://images.unsplash.com/photo-1565439390118-86d137df755c?auto=format&fit=crop&q=80&w=300" },
    { name: "Pallet-Load", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=300" },
    { name: "Pallet-Unload", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=300" }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          Personalize your Turn-Assist with smart Modules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((m, idx) => (
             <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
               <div className="aspect-square bg-white p-6 relative overflow-hidden flex items-center justify-center">
                 <img 
                   src={m.img} 
                   alt={m.name} 
                   className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                 />
               </div>
               <div className="p-6 text-center border-t border-gray-50 bg-white relative z-10">
                 <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-600 transition-colors">{m.name}</h3>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: CTA / Bottom Action
// ==========================================
const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-3xl p-12 text-white flex flex-col justify-between items-start h-full shadow-2xl relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-bl-full blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Find your ideal automation solution.</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-md">Discover how CNC automation can enhance precision and safety in your manufacturing process. Use our wizard to find the best fit.</p>
          </div>
          <button className="bg-red-600 text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition relative z-10">
            Find my Match
          </button>
        </div>
        
        <div className="bg-zinc-100 rounded-3xl p-12 text-slate-900 flex flex-col justify-between items-start h-full border border-gray-200">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's get in touch</h2>
            <p className="text-slate-600 mb-10 text-lg max-w-md">Learn more about automating your CNC lathe today. Get in touch with one of our representatives to discuss your setup.</p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-800 transition">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// COMPONENT: Global Footer
// ==========================================


// ==========================================
// MAIN APP COMPONENT (Equivalent to Next.js Page)
// ==========================================
export default function TurnAssistPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      
       <main>
          <Hero />
          <StatsBar />
          <Breadcrumbs />
          <Innovation />
          <TailoredAutomation />
          <LatheAutomation />
          <Flexibility />
          <Simplicity />
          <Modules />
          <CTA />
       </main>
    </div>
  );
}
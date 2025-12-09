import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Collaborative Process</span>
      </h1>
      <p className="text-center text-lg md:text-xl text-[#C1C2D3] max-w-4xl mx-auto mt-6 px-4">
        I believe great websites are built through <span className="text-purple font-semibold">partnership</span>, not just code. 
        Here's how we'll work together to bring your vision to life:
      </p>
      
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <Card
          title="Discovery & Strategy Session"
          icon={<AceternityIcon order="01" />}
          des="Let's grab a virtual coffee and dive deep into your business goals, 
          target audience, and vision. We'll map out exactly what success looks like for your project."
          features={[
            "✓ Free 60-minute discovery call",
            "✓ Competitor analysis & market research",
            "✓ Project roadmap & timeline planning",
            "✓ Budget-friendly solutions discussion"
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        
        <Card
          title="Design & Iterative Development"
          icon={<AceternityIcon order="02" />}
          des="I'll transform our strategy into beautiful, functional designs. 
          You'll see progress every step of the way—no waiting for surprises at the end!"
          features={[
            "✓ Interactive wireframes & prototypes",
            "✓ Weekly progress demos & feedback sessions",
            "✓ Mobile-first responsive design",
            "✓ SEO-friendly structure from day one"
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-900 rounded-3xl overflow-hidden"
            colors={[
              [168, 85, 247],
              [216, 180, 254],
            ]}
            dotSize={2}
          />
        </Card>
        
        <Card
          title="Launch & Growth Partnership"
          icon={<AceternityIcon order="03" />}
          des="Launch day is just the beginning! We'll ensure your site performs beautifully 
          and continue optimizing based on real user data."
          features={[
            "✓ Performance optimization & speed testing",
            "✓ Post-launch support & maintenance",
            "✓ Analytics setup & performance tracking",
            "✓ Monthly growth strategy sessions"
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue-900 rounded-3xl overflow-hidden"
            colors={[[59, 130, 246]]}
          />
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-4">
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-8 md:p-12 border border-white/[0.1]">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Why This Approach Works for You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-purple text-3xl font-bold mb-2">100%</div>
              <p className="text-[#C1C2D3]">Transparent Process</p>
              <p className="text-sm text-gray-400 mt-2">No hidden costs or surprises. You're involved every step of the way.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-purple text-3xl font-bold mb-2">2-8 Weeks</div>
              <p className="text-[#C1C2D3]">Typical Timeline</p>
              <p className="text-sm text-gray-400 mt-2">From concept to launch, most projects are completed in under a month.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-purple text-3xl font-bold mb-2">30 Days</div>
              <p className="text-[#C1C2D3]">Free Support</p>
              <p className="text-sm text-gray-400 mt-2">Comprehensive post-launch support included with every project.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none group mx-auto">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="cursor-pointer inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-white font-semibold backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900">
                <a href="https://wa.me/+2348103057076">Schedule Your Free Discovery Call</a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  features,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  features?: string[];
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.1] group/canvas-card flex items-center justify-center
       max-w-sm w-full mx-auto p-4 relative lg:h-[40rem] rounded-3xl hover:scale-[1.02] transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(12,14,35,0.9) 0%, rgba(4,7,29,0.95) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-white opacity-20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-white opacity-20" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-white opacity-20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-white opacity-20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-6 w-full">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-300 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        
        <div className="opacity-0 group-hover/canvas-card:opacity-100 transform group-hover/canvas-card:translate-y-0 translate-y-10 transition-all duration-300">
          <h2
            className="text-white text-center text-2xl font-bold mb-4"
          >
            {title}
          </h2>
          
          <p
            className="text-sm mb-6 text-center leading-relaxed"
            style={{ color: "#E4ECFF" }}
          >
            {des}
          </p>
          
          {features && (
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <span className="text-purple text-lg">✓</span>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="transform hover:scale-110 transition-transform duration-300">
      <div className="relative inline-flex overflow-hidden rounded-full p-[2px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-20 w-20 items-center 
        justify-center rounded-full bg-slate-950 text-white backdrop-blur-3xl font-bold text-3xl"
        >
          {order}
        </span>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
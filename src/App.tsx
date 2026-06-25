/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowDownToLine, Calendar, Play, Users, Building2, GraduationCap, Briefcase, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the duration of the MBA program at HITM Ranchi?",
      a: "MBA at HITM Ranchi is a 2-year full-time program."
    },
    {
      q: "Is the MBA program AICTE approved?",
      a: "Yes. HITM Ranchi holds AICTE approval — among the largest approvals granted to a newly affiliated institution in India."
    },
    {
      q: "Who teaches the MBA program?",
      a: "MBA at HITM Ranchi is guided by IIT-associated faculty — bringing real academic excellence and industry insight into the classroom."
    },
    {
      q: "What is the eligibility for MBA admission?",
      a: "Graduation with minimum 50% marks from a recognised university."
    },
    {
      q: "What entrance exams are accepted?",
      a: "CAT / MAT / CMAT scores are accepted for MBA admission."
    },
    {
      q: "What makes HITM's MBA different from other colleges?",
      a: "HITM is Jharkhand’s One of the Biggest Dedicated Private Technology & Management Campus — focused exclusively on professional and career-oriented education, not a general college with unrelated courses."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Banner */}
      <div className="bg-[#FFD900] text-[#245AA8] font-bold tracking-wide text-center py-2.5 px-4 text-sm w-full z-30 relative shadow-sm">
        Founding Batch 2026–27 Admissions Open Now
      </div>

      {/* Main Hero Section */}
      <div className="relative flex-1 bg-gradient-to-br from-[#163A6C] via-[#245AA8] to-[#112D54] flex items-center w-full min-h-[600px] overflow-hidden">
        {/* Background decorative image with overlay */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E38]/80 to-transparent pointer-events-none"></div>

        <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 py-12 lg:py-20 relative z-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="mb-6">
              <span className="inline-block text-[#245AA8] bg-[#FFD900] font-bold tracking-widest text-xs uppercase px-3 py-1.5 rounded shadow-sm">
                PG PROGRAM
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              Business Mein Naam<br />Banana Hai?
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-blue-50 mb-6">
              MBA at HITM — <span className="font-semibold text-white">Sirf Degree Nahi, Real Direction.</span>
            </h2>

            <p className="text-blue-100 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Learn how real businesses think, grow & lead at <strong className="text-white font-semibold">Haider Institute of Technology & Management, Ranchi</strong>. Apply now for a career that stands out in the competitive corporate world.
            </p>

            <div className="inline-flex bg-white/10 text-[#FFD900] border border-white/20 font-bold px-5 py-2.5 rounded-md text-sm items-center gap-2 mb-10 w-fit shadow-sm backdrop-blur-sm">
              Founding Batch 2026–27 — Apply Now
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <button className="bg-[#FFD900] hover:bg-[#e6c300] text-[#245AA8] font-bold py-3.5 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-lg text-sm">
                DOWNLOAD BROCHURE
                <ArrowDownToLine className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3 text-blue-100 bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm border border-white/10">
                <Calendar className="w-5 h-5 text-[#FFD900]" />
                <span className="font-medium text-white tracking-wide text-sm">DURATION: 2 YEARS</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-5 w-fit shadow-xl">
              <div className="flex items-center gap-4 pr-5 border-r border-white/20">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-inner">
                  <span className="text-orange-600 font-extrabold text-sm tracking-tighter">AICTE</span>
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  AICTE<br />Approved
                </div>
              </div>
              <div className="flex items-center pl-1 pr-2">
                <div className="text-sm font-medium text-blue-100 leading-tight">
                  Institution of<br /><span className="text-white font-bold">Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-[440px] relative z-20">
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full p-8 md:p-10 text-gray-800 relative border-t-[5px] border-[#FFD900]">
              <h2 className="text-2xl font-bold text-center text-[#245AA8] mb-8 font-medium tracking-tight">Enquire Now</h2>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#245AA8] focus:border-transparent text-sm transition-all bg-gray-50 hover:bg-white" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                  <div className="flex">
                    <select className="border border-gray-300 rounded-l-lg px-3 py-3 bg-gray-100 text-gray-600 border-r-0 focus:outline-none text-sm font-medium">
                      <option>+91</option>
                    </select>
                    <input type="tel" placeholder="Enter your no." className="w-full border border-gray-300 rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#245AA8] focus:border-transparent text-sm transition-all bg-gray-50 hover:bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Email Id <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="abc@xyz.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#245AA8] focus:border-transparent text-sm transition-all bg-gray-50 hover:bg-white" />
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <div className="flex items-center h-5 mt-0.5">
                    <input type="checkbox" id="consent" className="w-4 h-4 text-[#245AA8] border-gray-300 rounded focus:ring-[#245AA8]" />
                  </div>
                  <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
                    By entering these details I agree that HITM and its associates can contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the Privacy Policy.
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#FFD900] text-[#245AA8] font-bold py-4 rounded-lg mt-6 hover:bg-[#e6c300] transition-colors duration-300 uppercase tracking-wider text-sm shadow-sm">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      {/* SECTION - 2: Info Cards */}
      <div className="bg-black py-8 md:py-12 w-full">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#121212] rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[120px] border border-white/5 transition-colors hover:bg-[#181818]">
              <div className="text-[#FFD900] font-semibold text-lg md:text-xl mb-1.5 tracking-wide">Vibrant</div>
              <div className="text-gray-300 text-xs md:text-sm font-light">Student Community</div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121212] rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[120px] border border-white/5 transition-colors hover:bg-[#181818]">
              <div className="text-[#FFD900] font-semibold text-lg md:text-xl mb-1.5 tracking-wide">Global</div>
              <div className="text-gray-300 text-xs md:text-sm font-light">Industry Ties</div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121212] rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[120px] border border-white/5 transition-colors hover:bg-[#181818]">
              <div className="text-[#FFD900] font-semibold text-lg md:text-xl mb-1.5 tracking-wide">Innovation</div>
              <div className="text-gray-300 text-xs md:text-sm font-light">Driven Campus</div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#121212] rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[120px] border border-white/5 transition-colors hover:bg-[#181818]">
              <div className="text-[#FFD900] font-semibold text-lg md:text-xl mb-1.5 tracking-wide">Future Ready</div>
              <div className="text-gray-300 text-xs md:text-sm font-light">Learning</div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION - 3: About HITM */}
      <div className="bg-white py-16 lg:py-24 w-full">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Image Area */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="HITM Campus" 
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto lg:h-[450px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent"></div>
              
              {/* Play Button Overlay */}
              <button className="absolute bottom-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-[#245AA8] hover:scale-110 hover:text-[#173A6C] transition-all border-[4px] border-white/80">
                <Play className="w-6 h-6 ml-1 fill-current" />
              </button>
            </div>

            {/* Right Text Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="text-[#245AA8] font-bold text-sm tracking-wide uppercase mb-3">
                ABOUT HITM RANCHI
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                A Premier AICTE-Approved Institute in the Heart of Jharkhand
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-light">
                HITM Ranchi offers industry-aligned programmes in Engineering, Management, and Technology — built to prepare students for real careers, not just degrees. Our experienced faculty, modern campus, and student-centric approach ensure learning goes beyond the classroom — shaping professionals who are confident, capable, and industry-ready.
              </p>

              {/* Feature Badges */}
              <div className="border border-gray-200 rounded-xl p-4 sm:p-5 flex flex-wrap sm:flex-nowrap justify-between gap-y-4 gap-x-2 bg-gray-50/50">
                
                <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#245AA8]/10 flex items-center justify-center text-[#245AA8] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
                    Student-Centric<br />Learning
                  </div>
                </div>
                
                <div className="hidden sm:block w-px h-10 bg-gray-200 self-center"></div>

                <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#245AA8]/10 flex items-center justify-center text-[#245AA8] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
                    Modern<br />Infrastructure
                  </div>
                </div>

                <div className="hidden sm:block w-px h-10 bg-gray-200 self-center"></div>

                <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#245AA8]/10 flex items-center justify-center text-[#245AA8] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
                    Expert<br />Faculty
                  </div>
                </div>

                <div className="hidden sm:block w-px h-10 bg-gray-200 self-center"></div>

                <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#245AA8]/10 flex items-center justify-center text-[#245AA8] shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
                    Industry<br />Exposure
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION - 4: Real Business Education */}
      <div className="bg-[#245AA8] py-16 lg:py-24 w-full relative overflow-hidden border-t border-white/5">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="flex-1 w-full">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-10 leading-[1.2] tracking-tight">
                Real Business Education.<br />Right Here in Jharkhand.
              </h2>

              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD900] shrink-0 stroke-[1.5]" />
                  <p className="text-blue-100 text-[15px] leading-relaxed">
                    <span className="text-white font-semibold text-base block mb-0.5">IIT Faculty Guidance</span> 
                    Learn from minds that have shaped real business leaders
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD900] shrink-0 stroke-[1.5]" />
                  <p className="text-blue-100 text-[15px] leading-relaxed">
                    <span className="text-white font-semibold text-base block mb-0.5">Industry-Oriented Curriculum</span> 
                    Case studies, real projects, real decisions
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD900] shrink-0 stroke-[1.5]" />
                  <p className="text-blue-100 text-[15px] leading-relaxed">
                    <span className="text-white font-semibold text-base block mb-0.5">Smart Classrooms</span> 
                    Modern learning environment built for management education
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD900] shrink-0 stroke-[1.5]" />
                  <p className="text-blue-100 text-[15px] leading-relaxed">
                    <span className="text-white font-semibold text-base block mb-0.5">AICTE Approved</span> 
                    Nationally Recognised MBA Program
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD900] shrink-0 stroke-[1.5]" />
                  <p className="text-blue-100 text-[15px] leading-relaxed">
                    <span className="text-white font-semibold text-base block mb-0.5">Career-First Approach</span> 
                    Focused exclusively on professional and management education
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 mb-10">
                <p className="text-blue-50 text-sm md:text-base leading-relaxed font-light">
                  At Haider Institute of Technology & Management, Ranchi, MBA means more than a degree — it means direction, mentorship and a career-first approach to management education.
                </p>
              </div>

              <button className="bg-[#FFD900] hover:bg-[#e6c300] text-[#245AA8] font-bold py-3.5 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,217,0,0.2)] text-sm uppercase tracking-wide">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Visual Area */}
            <div className="w-full lg:w-[45%] relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=1000" 
                  alt="Business Education Discussion" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#245AA8] via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFD900] rounded-full blur-[60px] opacity-20 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#173A6C] rounded-full blur-[80px] opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION - 6: Who Is This MBA For? */}
      <div className="bg-white py-16 lg:py-24 w-full">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          <div className="bg-[#f4f8fc] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 shadow-sm border border-[#245AA8]/10">
            
            {/* Left Header Area */}
            <div className="w-full lg:w-1/3 flex flex-col items-start">
              <div className="flex items-center gap-2 text-[#245AA8] font-semibold text-sm mb-2">
                <span className="text-xl">🎯</span> Who Is This
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">
                MBA For?
              </h2>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                If you are serious about a management career, HITM Ranchi is the right place to start.
              </p>
              <button className="bg-[#FFD900] hover:bg-[#e6c300] text-[#245AA8] font-bold py-3.5 px-8 rounded-full transition-transform hover:scale-105 shadow-md text-sm">
                Apply Now
              </button>
            </div>

            {/* Right Grid Area */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#245AA8] shrink-0 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5">Fresh Graduates</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Straight out of graduation and want a strong management foundation before entering the corporate world.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1.5 bg-[#245AA8] shrink-0 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5">Future Business Leaders</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Aspiring to lead teams, manage businesses, and make real decisions at the top.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1.5 bg-[#245AA8] shrink-0 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5">Aspiring Entrepreneurs</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Want to start, build, or scale your own business with the right knowledge and mentorship.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1.5 bg-[#245AA8] shrink-0 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5">Career Switchers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Looking to move from a technical or non-management role into a leadership position.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1.5 bg-[#245AA8] shrink-0 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5">IIT-Guided Learning Seekers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Want to learn from faculty who have been associated with India's top institutions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* SECTION - 9: Frequently Asked Questions */}
      <div className="bg-gray-50 py-16 lg:py-24 w-full border-t border-gray-200">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#245AA8] mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Got questions? We've got answers. If you have some other questions, feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openFaq === index ? 'border-[#245AA8] shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className={`font-semibold text-[15px] md:text-base pr-4 ${openFaq === index ? 'text-[#245AA8]' : 'text-gray-800'}`}>
                    {faq.q}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-[#245AA8] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

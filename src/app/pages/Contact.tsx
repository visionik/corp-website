import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    segment: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend or form service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        segment: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24">
      <PageMeta
        title="Contact Cambiar"
        description="Get in touch. Whether you're a PE firm, family office, startup, or government agency — let's talk about transformation."
      />

      {/* Hero */}
      <section className="bg-warm-cream py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="mb-6">Let's Talk</h1>
          <p className="font-['Inter'] text-[18px] text-text-gray max-w-3xl mx-auto leading-relaxed">
            Whether you're a PE firm exploring portfolio transformation, a family office seeking a trusted advisor, 
            or a founder building something new — we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3">
              {isSubmitted ? (
                <div className="bg-warm-cream rounded-[4px] p-12 text-center border-2 border-deep-amber">
                  <h3 className="mb-4 text-deep-amber">Message Sent!</h3>
                  <p className="text-text-gray text-[16px]">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-['Inter'] text-[15px] font-medium text-warm-charcoal mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-warm-cream border border-warm-charcoal/20 rounded-[3px] font-['Inter'] text-[16px] text-warm-charcoal focus:outline-none focus:border-deep-amber focus:ring-1 focus:ring-deep-amber transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-['Inter'] text-[15px] font-medium text-warm-charcoal mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-warm-cream border border-warm-charcoal/20 rounded-[3px] font-['Inter'] text-[16px] text-warm-charcoal focus:outline-none focus:border-deep-amber focus:ring-1 focus:ring-deep-amber transition-colors"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block font-['Inter'] text-[15px] font-medium text-warm-charcoal mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-warm-cream border border-warm-charcoal/20 rounded-[3px] font-['Inter'] text-[16px] text-warm-charcoal focus:outline-none focus:border-deep-amber focus:ring-1 focus:ring-deep-amber transition-colors"
                    />
                  </div>

                  {/* Segment */}
                  <div>
                    <label
                      htmlFor="segment"
                      className="block font-['Inter'] text-[15px] font-medium text-warm-charcoal mb-2"
                    >
                      Segment
                    </label>
                    <select
                      id="segment"
                      name="segment"
                      value={formData.segment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-warm-cream border border-warm-charcoal/20 rounded-[3px] font-['Inter'] text-[16px] text-warm-charcoal focus:outline-none focus:border-deep-amber focus:ring-1 focus:ring-deep-amber transition-colors"
                    >
                      <option value="">Select a segment</option>
                      <option value="private-equity">Private Equity</option>
                      <option value="family-office">Family Office</option>
                      <option value="startup">Startup</option>
                      <option value="government">Government</option>
                      <option value="non-profit">Non-Profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-['Inter'] text-[15px] font-medium text-warm-charcoal mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-warm-cream border border-warm-charcoal/20 rounded-[3px] font-['Inter'] text-[16px] text-warm-charcoal focus:outline-none focus:border-deep-amber focus:ring-1 focus:ring-deep-amber transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-deep-amber text-white px-7 py-4 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="md:col-span-2">
              <div className="bg-warm-cream rounded-[4px] p-8 sticky top-32">
                <h3 className="mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-amber/10 p-3 rounded-[3px]">
                      <Mail className="text-deep-amber" size={20} />
                    </div>
                    <div>
                      <h4 className="text-warm-charcoal mb-1 text-[16px]">Email</h4>
                      <a
                        href="mailto:jason@cambiar.ai"
                        className="text-deep-amber hover:text-warm-charcoal transition-colors text-[15px]"
                      >
                        jason@cambiar.ai
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-amber/10 p-3 rounded-[3px]">
                      <svg
                        className="text-deep-amber"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-warm-charcoal mb-1 text-[16px]">Website</h4>
                      <p className="text-text-gray text-[15px]">cambiar.ai</p>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-amber/10 p-3 rounded-[3px]">
                      <MapPin className="text-deep-amber" size={20} />
                    </div>
                    <div>
                      <h4 className="text-warm-charcoal mb-1 text-[16px]">Locations</h4>
                      <p className="text-text-gray text-[15px]">San Francisco, CA</p>
                      <p className="text-text-gray text-[15px]">Orlando, FL</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-warm-charcoal/10">
                  <p className="text-text-gray text-[14px] leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries, please indicate "URGENT" in your 
                    message subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="bg-midnight-navy py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-warm-cream mb-6">Ready to Transform?</h2>
          <p className="text-warm-cream text-[17px] leading-relaxed mb-8">
            Whether you need transformation consulting, managed development services, or want to explore co-investment 
            opportunities through our studio — let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/advisory"
              className="bg-deep-amber text-white px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-opacity-90 transition-all duration-200"
            >
              Learn About Advisory
            </a>
            <a
              href="/studio"
              className="bg-transparent border-[1.5px] border-warm-cream text-warm-cream px-7 py-3.5 rounded-[3px] font-['Inter'] font-semibold text-[15px] tracking-[1px] uppercase hover:bg-warm-cream hover:text-warm-charcoal transition-all duration-200"
            >
              Explore the Studio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
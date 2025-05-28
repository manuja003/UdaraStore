import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const faqs = [
  {
    question: 'What types of antiques do you offer?',
    answer: 'We offer a curated selection of rare antiques, vintage decor, and timeless treasures from various eras and regions.'
  },
  {
    question: 'Do you provide interior design services?',
    answer: 'Yes! We offer personalized interior design services that blend vintage elegance with modern charm.'
  },
  {
    question: 'How can I be sure of the authenticity of your antiques?',
    answer: 'Each piece is thoroughly researched and verified for provenance and historical value by our team of experts.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 14 days of delivery. Please see our Shipping & Returns page for full details.'
  },
  
  
];

const tabs = [
  { label: 'FAQ', value: 'faq' },
  { label: 'Shipping & Returns', value: 'shipping' },
  { label: 'Privacy Policy', value: 'privacy' },
  { label: 'Terms & Conditions', value: 'terms' },
];

const CustomerService = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.value}
              className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === tab.value ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-primary'}`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          {activeTab === 'faq' && (
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-muted/40 rounded-xl shadow-sm">
                  <button
                    className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${openIndex === idx ? 'bg-muted' : ''}`}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <span className={`ml-4 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-300 px-6 ${openIndex === idx ? 'max-h-40 py-2' : 'max-h-0 py-0'}`}
                    style={{ transitionProperty: 'max-height, padding' }}
                  >
                    <p className="text-muted-foreground text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'shipping' && (
            <div className="bg-muted/40 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Shipping & Returns</h2>
              <p className="text-muted-foreground mb-2">We strive to process and ship all orders within 1-2 business days. Delivery times may vary based on your location and selected shipping method. If you are not completely satisfied with your purchase, you may return most items within 14 days of delivery for a full refund or exchange, provided they are in original condition. Please review our full policy for details and instructions.</p>
            </div>
          )}
          {activeTab === 'privacy' && (
            <div className="bg-muted/40 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
              <p className="text-muted-foreground mb-2">Your privacy is important to us. We are committed to protecting your personal information and using it only for order processing, communication, and improving your shopping experience. We never sell or share your data with third parties except as required to fulfill your order or by law. For more information, please read our complete privacy policy.</p>
            </div>
          )}
          {activeTab === 'terms' && (
            <div className="bg-muted/40 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
              <p className="text-muted-foreground mb-2">By using our website and placing an order, you agree to our terms and conditions. These include information about payment, shipping, returns, and your rights as a customer. Please review our terms carefully to understand your obligations and our commitments to you.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CustomerService; 
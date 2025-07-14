'use client';

import React, { useState } from 'react';
import { services } from '@/lib/data';
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';

export default function BookingPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: services[0].name, date: '', message: '', referral: '' });
    const [formStatus, setFormStatus] = useState<'success' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ** IMPORTANT **
        // In a real app, you would send this data to a serverless function or a service like Formspree.
        // For now, we'll just log it to the console.
        console.log('Booking submitted:', formData);
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', service: services[0].name, date: '', message: '', referral: '' });
        setTimeout(() => setFormStatus(null), 5000);
    };

    return (
        <Section className="bg-gray-50 animate-fade-in">
            <SectionTitle>Book Your Session</SectionTitle>
            <SectionSubtitle>I'm excited to hear about your vision. Fill out the form below to get started.</SectionSubtitle>
            
            <div className="mt-12 max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-shadow"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-shadow"/>
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service of Interest</label>
                        <select id="service" name="service" required value={formData.service} onChange={handleChange} className="mt-1 block w-full pl-4 pr-10 py-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 sm:text-sm rounded-xl transition-shadow">
                            {services.map(s => <option key={s.name}>{s.name}</option>)}
                        </select>
                    </div>
                    <div>
                         <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                         <input type="date" name="date" id="date" required value={formData.date} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-shadow"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                        <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Tell me a bit about what you're looking for..." className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-shadow"></textarea>
                    </div>
                    <div>
                        <label htmlFor="referral" className="block text-sm font-medium text-gray-700">How did you hear about me?</label>
                        <input type="text" name="referral" id="referral" value={formData.referral} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-shadow"/>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-md text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105 active:scale-100">
                            Send Inquiry
                        </button>
                    </div>
                </form>
                {formStatus === 'success' && (
                    <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-r-lg">
                        <p className="font-bold">Thank you!</p>
                        <p>Your inquiry has been sent. I will get back to you shortly.</p>
                    </div>
                )}
            </div>
        </Section>
    );
};
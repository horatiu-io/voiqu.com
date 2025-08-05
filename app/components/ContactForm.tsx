"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    projectDescription: "",
    interestedServices: [] as string[],
    budgetRange: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = ["Backlinks", "Tracking", "PPC Campaigns", "SEO Strategy"]

  const budgetRanges = ["< $5,000", "$5,000 - $15,000", "$15,000 - $100,000", "+$100,000"]

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interestedServices: [...prev.interestedServices, service],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interestedServices: prev.interestedServices.filter((s) => s !== service),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // This function correctly encodes form data for the POST request
    const encode = ( Record<string, any>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    try {
      const submitData = {
        "form-name": "contact",
        ...formData,
        interestedServices: formData.interestedServices.join(', '),
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(submitData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: "",
          companyName: "",
          workEmail: "",
          phoneNumber: "",
          projectDescription: "",
          interestedServices: [],
          budgetRange: "",
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    // UPDATED: Added name, data-netlify, and data-netlify-honeypot attributes
    <form 
      name="contact"
      onSubmit={handleSubmit} 
      className="space-y-6" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* This hidden input MUST match the form's name attribute */}
      <input type="hidden" name="form-name" value="contact" />
      {/* This is the honeypot field to prevent spam */}
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      
      {submitStatus === 'success' && (
        <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      {/* ... (rest of your input fields like fullName, companyName, etc. are correct) ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName" className="text-white">Full Name *</Label>
          <Input id="fullName" name="fullName" required value={formData.fullName} onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))} className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"/>
        </div>
        <div>
          <Label htmlFor="companyName" className="text-white">Company Name</Label>
          <Input id="companyName" name="companyName" value={formData.companyName} onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))} className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="workEmail" className="text-white">Work Email *</Label>
          <Input id="workEmail" name="workEmail" type="email" required value={formData.workEmail} onChange={(e) => setFormData((prev) => ({ ...prev, workEmail: e.target.value }))} className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"/>
        </div>
        <div>
          <Label htmlFor="phoneNumber" className="text-white">Phone Number</Label>
          <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))} className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"/>
        </div>
      </div>
      <div>
        <Label htmlFor="projectDescription" className="text-white">Tell me about your project</Label>
        <Textarea id="projectDescription" name="projectDescription" rows={4} value={formData.projectDescription} onChange={(e) => setFormData((prev) => ({ ...prev, projectDescription: e.target.value }))} className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"/>
      </div>

      <div>
        <Label className="text-white mb-3 block">Interested Services</Label>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox 
                id={service} 
                // UPDATED: Added name attribute for Netlify
                name="interestedServices"
                value={service}
                checked={formData.interestedServices.includes(service)}
                onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)} 
              />
              <Label htmlFor={service} className="text-gray-300">{service}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-white mb-3 block">Budget Range</Label>
        <RadioGroup
          // UPDATED: Added name attribute for Netlify
          name="budgetRange"
          value={formData.budgetRange}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, budgetRange: value }))}
        >
          {budgetRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <RadioGroupItem value={range} id={range} />
              <Label htmlFor={range} className="text-gray-300">{range}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-600 hover:to-red-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send My Request'}
      </Button>
    </form>
  )
}

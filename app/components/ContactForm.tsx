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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName" className="text-white">
            Full Name *
          </Label>
          <Input
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
            className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
          />
        </div>
        <div>
          <Label htmlFor="companyName" className="text-white">
            Company Name
          </Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
            className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="workEmail" className="text-white">
            Work Email *
          </Label>
          <Input
            id="workEmail"
            type="email"
            required
            value={formData.workEmail}
            onChange={(e) => setFormData((prev) => ({ ...prev, workEmail: e.target.value }))}
            className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber" className="text-white">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
            className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="projectDescription" className="text-white">
          Tell me about your project
        </Label>
        <Textarea
          id="projectDescription"
          rows={4}
          value={formData.projectDescription}
          onChange={(e) => setFormData((prev) => ({ ...prev, projectDescription: e.target.value }))}
          className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
        />
      </div>

      <div>
        <Label className="text-white mb-3 block">Interested Services</Label>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox id={service} onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)} />
              <Label htmlFor={service} className="text-gray-300">
                {service}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-white mb-3 block">Budget Range</Label>
        <RadioGroup
          value={formData.budgetRange}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, budgetRange: value }))}
        >
          {budgetRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <RadioGroupItem value={range} id={range} />
              <Label htmlFor={range} className="text-gray-300">
                {range}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-600 hover:to-red-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
      >
        Send My Request
      </Button>
    </form>
  )
}

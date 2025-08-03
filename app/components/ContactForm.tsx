"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

function encode( { [key: string]: any }) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(
          Array.isArray(data[key]) ? data[key].join(", ") : data[key] ?? ""
        )
    )
    .join("&")
}

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

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const services = ["Backlinks", "Tracking", "PPC Campaigns", "SEO Strategy"]
  const budgetRanges = [
    "< $5,000",
    "$5,000 - $15,000",
    "$15,000 - $100,000",
    "+$100,000",
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interestedServices: checked
        ? [...prev.interestedServices, service]
        : prev.interestedServices.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      })
      setSubmitted(true)
      setFormData({
        fullName: "",
        companyName: "",
        workEmail: "",
        phoneNumber: "",
        projectDescription: "",
        interestedServices: [],
        budgetRange: "",
      })
    } catch {
      setError("Sorry, something went wrong. Try again later.")
    }
  }

  if (submitted) {
    return (
      <div className="p-6 text-center text-green-400">
        <p>Thank you for your message! We’ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      {error ? (
        <div className="text-red-400 text-center mb-4">{error}</div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName" className="text-white">
            Full Name *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, fullName: e.target.value }))
            }
            className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
          />
        </div>
        <div>
          <Label htmlFor="companyName" className="text-white">
            Company Name
          </Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, companyName: e.target.value }))
            }
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
            name="workEmail"
            type="email"
            required
            value={formData.workEmail}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, workEmail: e.target.value }))
            }
            className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber" className="text-white">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phoneNumber: e.target.value,
              }))
            }
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
          name="projectDescription"
          rows={4}
          value={formData.projectDescription}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              projectDescription: e.target.value,
            }))
          }
          className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
        />
      </div>

      <div>
        <Label className="text-white mb-3 block">Interested Services</Label>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={service}
                name="interestedServices"
                checked={formData.interestedServices.includes(service)}
                onCheckedChange={(checked) =>
                  handleServiceChange(service, !!checked)
                }
              />
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
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, budgetRange: value }))
          }
        >
          {budgetRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <RadioGroupItem
                value={range}
                id={range}
                name="budgetRange"
                checked={formData.budgetRange === range}
                onChange={() =>
                  setFormData((prev) => ({ ...prev, budgetRange: range }))
                }
              />
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

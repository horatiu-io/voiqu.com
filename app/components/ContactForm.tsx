"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  return (
    <form data-netlify="true" name="contact" className="space-y-6">
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName" className="text-white">
            Full Name *
          </Label>
          <Input
            id="fullName"
            required
            defaultValue=""
            className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
          />
        </div>
        <div>
          <Label htmlFor="companyName" className="text-white">
            Company Name
          </Label>
          <Input
            id="companyName"
            defaultValue=""
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
            defaultValue=""
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
            defaultValue=""
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
          defaultValue=""
          className="bg-[#0D0D0D] border-gray-700 text-white focus:border-cyan-500"
        />
      </div>

      <div>
        <Label className="text-white mb-3 block">Interested Services</Label>
        <div className="grid grid-cols-2 gap-3">
          <div key="Backlinks" className="flex items-center space-x-2">
            <Checkbox id="Backlinks" />
            <Label htmlFor="Backlinks" className="text-gray-300">
              Backlinks
            </Label>
          </div>
          <div key="Tracking" className="flex items-center space-x-2">
            <Checkbox id="Tracking" />
            <Label htmlFor="Tracking" className="text-gray-300">
              Tracking
            </Label>
          </div>
          <div key="PPC Campaigns" className="flex items-center space-x-2">
            <Checkbox id="PPC Campaigns" />
            <Label htmlFor="PPC Campaigns" className="text-gray-300">
              PPC Campaigns
            </Label>
          </div>
          <div key="SEO Strategy" className="flex items-center space-x-2">
            <Checkbox id="SEO Strategy" />
            <Label htmlFor="SEO Strategy" className="text-gray-300">
              SEO Strategy
            </Label>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-white mb-3 block">Budget Range</Label>
        <RadioGroup className="grid grid-cols-2 gap-3">
          <div key="budget1" className="flex items-center space-x-2">
            <RadioGroupItem value="budget1" id="budget1" />
            <Label htmlFor="budget1" className="text-gray-300">
              {"< $5,000"}
            </Label>
          </div>
          <div key="budget2" className="flex items-center space-x-2">
            <RadioGroupItem value="budget2" id="budget2" />
            <Label htmlFor="budget2" className="text-gray-300">
              {"$5,000 - $15,000"}
            </Label>
          </div>
          <div key="budget3" className="flex items-center space-x-2">
            <RadioGroupItem value="budget3" id="budget3" />
            <Label htmlFor="budget3" className="text-gray-300">
              {"$15,000 - $100,000"}
            </Label>
          </div>
          <div key="budget4" className="flex items-center space-x-2">
            <RadioGroupItem value="budget4" id="budget4" />
            <Label htmlFor="budget4" className="text-gray-300">
              {"+$100,000"}
            </Label>
          </div>
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

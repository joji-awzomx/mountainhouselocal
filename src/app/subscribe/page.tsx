'use client'

import { useState } from 'react'

type Step = 1 | 2 | 3

interface FormData {
  email: string
  firstName: string
  lastName: string
  interests: string[]
  zipCode: string
  ageGroup: string
  hearAboutUs: string
}

const interestOptions = [
  'Restaurants',
  'Shopping',
  'Events',
  'Real Estate',
  'Health & Fitness',
  'Family Activities',
  'Community News',
  'New Businesses',
]

const ageGroups = [
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65+',
]

export default function SubscribePage() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    interests: [],
    zipCode: '',
    ageGroup: '',
    hearAboutUs: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleNext = () => {
    if (step < 3) {
      setStep((step + 1) as Step)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stay Connected</h1>
          <p className="text-xl text-slate-200">
            Subscribe to Mountain House Local for news, events, and community updates
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          {submitted ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-4 text-5xl">✓</div>
              <h2 className="text-3xl font-bold mb-3 text-primary-600">
                Thank you for subscribing!
              </h2>
              <p className="text-gray-700 mb-6">
                Welcome to Mountain House Local! Check your email for a confirmation message and start exploring
                our latest stories, events, and community updates.
              </p>
              <a
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return Home
              </a>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Progress Indicator */}
              <div className="mb-10">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                        s === step
                          ? 'bg-blue-600 text-white'
                          : s < step
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Let's get started</h2>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">What interests you?</h2>
                    <p className="text-gray-700 mb-6">
                      Select the topics you'd like to hear about
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {interestOptions.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                          />
                          <span className="ml-3 text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Almost done!</h2>
                    <p className="text-gray-700 mb-6">
                      Tell us a bit more about yourself (optional)
                    </p>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="95046"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Age Group
                      </label>
                      <select
                        name="ageGroup"
                        value={formData.ageGroup}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select age group</option>
                        {ageGroups.map((group) => (
                          <option key={group} value={group}>
                            {group}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select option</option>
                        <option value="friend">Friend or Family</option>
                        <option value="social">Social Media</option>
                        <option value="search">Search Engine</option>
                        <option value="local">Local Business</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex justify-between gap-4 mt-10">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      step === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                    }`}
                  >
                    Back
                  </button>

                  {step === 3 ? (
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Next
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

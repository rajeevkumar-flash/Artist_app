"use client";

import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the form data interface
interface FormData {
  artistName: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
  profileImage?: FileList | null;
}

// Validation schema using Yup
const schema: yup.ObjectSchema<FormData> = yup.object({
  artistName: yup.string().required("Artist Name is required"),
  bio: yup
    .string()
    .min(50, "Bio must be at least 50 characters")
    .required("Bio is required"),
  category: yup
    .array()
    .of(yup.string().required())
    .min(1, "Select at least one category")
    .required("Category is required"),
  languages: yup
    .array()
    .of(yup.string().required())
    .min(1, "Select at least one language")
    .required("Languages spoken are required"),
  feeRange: yup.string().required("Fee Range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup
    .mixed<FileList>()
    .test("fileType", "Only JPEG/PNG/GIF allowed", (value) => {
      if (!value || value.length === 0) return true;
      return ["image/jpeg", "image/png", "image/gif"].includes(value[0].type);
    })
    .test("fileSize", "Max file size is 5MB", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 5 * 1024 * 1024;
    })
    .notRequired(),
});

// Dummy data for checkboxes and dropdowns
const artistCategories = [
  "Singers",
  "Dancers",
  "Speakers",
  "DJs",
  "Musicians",
  "Comedians",
];
const languagesSpoken = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Bengali",
  "Marathi",
];
const feeRanges = [
  "$0 - $500",
  "$500 - $1000",
  "$1000 - $2000",
  "$2000 - $5000",
  "$5000+",
];

export default function ArtistOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      artistName: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
      profileImage: null,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Artist Onboarded! Check console for data.");
    reset();
    setCurrentStep(1);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

   return (
    <div className="container mx-auto max-w-3xl px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8"> Artist Onboarding Form</h1>

      <div className="mb-6">
        <p className="text-gray-600 text-sm text-center mb-2">Step {currentStep} of {totalSteps}</p>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {currentStep === 1 && (
          <>
            <div>
              <label className="block mb-1 font-semibold text-black">Artist Name</label>
              <input
                type="text"
                {...register('artistName')}
                className={`w-full p-2 border rounded ${errors.artistName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.artistName && <p className="text-red-500 text-sm">{errors.artistName.message}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-black">Bio</label>
              <textarea
                {...register('bio')}
                rows={4}
                className={`w-full p-2 border rounded ${errors.bio ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div>
              <label className="block mb-1 font-semibold text-black">Categories</label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-2">
                    {artistCategories.map((cat) => (
                      <label key={cat} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={cat}
                          checked={field.value.includes(cat)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...field.value, cat]
                              : field.value.filter((v) => v !== cat);
                            field.onChange(newValue);
                          }}
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                )}
              />
              {errors.category && <p className="block mb-1 font-semibold text-black">{errors.category.message}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-black">Languages Spoken</label>
              <Controller
                name="languages"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-2">
                    {languagesSpoken.map((lang) => (
                      <label key={lang} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={lang}
                          checked={field.value.includes(lang)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...field.value, lang]
                              : field.value.filter((v) => v !== lang);
                            field.onChange(newValue);
                          }}
                        />
                        <span>{lang}</span>
                      </label>
                    ))}
                  </div>
                )}
              />
              {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div>
              <label className="block mb-1 font-semibold text-black">Fee Range</label>
              <select
                {...register('feeRange')}
                className={`w-full p-2 border rounded ${errors.feeRange ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select fee range</option>
                {feeRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-black">Location</label>
              <input
                type="text"
                {...register('location')}
                className={`w-full p-2 border rounded ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-black">Profile Image </label>
              <input
                type="file"
                accept="image/*"
                {...register('profileImage')}
                className={`w-full p-2 border rounded ${errors.profileImage ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.profileImage && <p className="text-red-500 text-sm">{errors.profileImage.message}</p>}
            </div>
          </>
        )}

        <div className="flex justify-between pt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
  

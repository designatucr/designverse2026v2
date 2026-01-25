"use client";

import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";

import SCHOOLS from "@/data/schools";

declare global {
  interface Window {
    submitted?: boolean;
  }
}

const MailingList = () => {
  const [firstName, setFirstName] = useState("");
  const [uni, setUni] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredSchools = SCHOOLS.filter((school: string) =>
    school.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (school: string) => {
    setUni(school);
    setSearchTerm(school);
    setIsOpen(false);
  };

  return (
    <>
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted === false) {
            window.submitted = true;
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success("Mailing List Form Submitted");
          }
        }}
      />

      <div className="flex items-center justify-center py-8">
        <div className="w-4/5 rounded-2xl bg-black p-2">
          {isSubmitted ? (
            <div className="text-md text-center text-white">
              Thank you for joining, {firstName}!
            </div>
          ) : (
            <form
              className="space-y-6"
              action="https://docs.google.com/forms/d/e/1FAIpQLSfqeakZT9uU8l7YVExKyeQhgEwT6dGlUBIfpSemRgVdf516GA/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => {
                window.submitted = false;
                setIsSubmitting(true);
              }}
            >
              <div className="text-md mb-2 text-white">First Name</div>
              <input
                className="w-full bg-white p-3 focus:outline-none"
                name="entry.902212704"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <div className="text-md mb-2 text-white">Uni</div>

              <div className="relative" ref={dropdownRef}>
                <input
                  type="text"
                  className="w-full bg-white p-3"
                  placeholder="Search your university..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  autoComplete="off"
                />

                <input
                  type="hidden"
                  name="entry.1845600068"
                  value={uni}
                  required
                />

                {isOpen && (
                  <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto bg-white">
                    {filteredSchools.length > 0 ? (
                      filteredSchools.map((school: string) => (
                        <div
                          key={school}
                          className="cursor-pointer p-3 hover:bg-gray-100"
                          onClick={() => handleSelect(school)}
                        >
                          {school}
                        </div>
                      ))
                    ) : (
                      <div className="p-3 text-gray-500">
                        No universities found
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-md border-2 border-white px-4 py-2 ${
                  isSubmitting
                    ? "cursor-not-allowed bg-black text-white"
                    : "cursor-pointer bg-black text-white"
                } `}
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default MailingList;

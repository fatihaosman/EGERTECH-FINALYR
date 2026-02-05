import "tailwindcss";

export default function SupportFormPage() {
  return (
    <section className="w-full min-h-screen bg-white py-10">
      <div className="max-w-3xl mx-auto px-4 space-y-10">

        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black">
          Student Support Request Form
        </h1>

        <form className="space-y-10 p-8 rounded-md shadow-2xl">

          {/* SECTION 1: STUDENT DETAILS */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black text-brand">
              Section 1: Student Details
            </h2>
           <div className="space-y-4">
              <div className="flex items-center gap-2">
                <label className="w-30 text-sm font-semibold text-black">
                  Full Name
                </label>
                <input type="text" className="line-input flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Registration No
                </label>
                <input type="text" className="line-input flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Student Email
                </label>
                <input type="email" className="line-input flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Faculty / Dept
                </label>
                <input type="text" className="line-input flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Phone No
                </label>
                <input type="tel" className="line-input flex-1" />
              </div>
          </div>

          </div>

          {/* SECTION 2: SUPPORT REQUEST */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black text-brand">
              Section 2: Support Request
            </h2>
          
               {/* Type of Need */}
              <div className="flex items-center gap-4">
                  <label className="w-40 text-sm font-semibold text-black">
                    Type of Need
                  </label>
                  <select className="flex-1 border-b border-black bg-transparent text-sm outline-none focus:border-b-2 focus:border-brand-accent">
                    <option value="">Select option</option>
                    <option>Tuition Fees</option>
                    <option>Accommodation</option>
                    <option>Meals / Living Expenses</option>
                    <option>Other</option>
                  </select>
              </div>
              
              <div className="flex items-start gap-4">
                <label className="w-40 text-sm font-semibold text-black pt-2">
                  Brief Explanation
                </label>
                <textarea
                  rows={3}
                  placeholder="Explain your situation briefly (200–300 words)"
                  className="flex-1 border text-sm pt-2 px-3 pb-2 rounded-md outline-none focus:border-2 focus:border-brand-accent"
                />
              </div>
           
            
          </div>

          {/* SECTION 3: FINANCIAL AID STATUS */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black text-brand">
              Section 3: Financial Aid Status
            </h2>

            <div className="space-y-2 text-sm text-black font-semibold">
              <label className="flex items-center gap-2">
                <input type="radio" name="aid" /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="aid" /> No
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="aid" /> In Progress
              </label>
            </div>
          </div>

          {/* SECTION 4: VERIFICATION */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black text-brand">
              Section 4: Verification (Optional but helpful)
            </h2>

            <div className="flex items-center gap-4">
                <p className="w-40 text-sm font-semibold text-black pt-2">
                  Upload fee statement or portal screenshot
                </p>
                <input type="file" className="text-sm" />
              </div>

            <h3 className="font-semibold text-black mt-4">
              Referee (must be a currently registered student)
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <label className="w-30 text-sm font-semibold text-black">
                  Full Name
                </label>
                <input type="text" className="line-input flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Registration No
                </label>
                <input type="text" className="line-input flex-1" />
              </div>
              
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Faculty / Dept
                </label>
                <input type="text" className="line-input flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Phone No
                </label>
                <input type="tel" className="line-input flex-1" />
              </div>
          </div>
          </div>

          {/* CONFIRMATION */}
          <label className="flex items-center gap-6 text-sm text-gray-700">
            <input type="checkbox" />
            <span>
              I confirm that the information provided is true and that I am a
              currently registered student.
            </span>
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-brand-danger text-white px-8 py-3 rounded-md text-sm font-semibold hover:opacity-70 transition"
          >
            Submit Request
          </button>

        </form>
      </div>
    </section>
  );
}

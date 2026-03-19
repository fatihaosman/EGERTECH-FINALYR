// import "tailwindcss";

// export default function SupportFormPage() {
//   return (
//     <section className="w-full min-h-screen bg-white py-10">
//       <div className="max-w-3xl mx-auto px-4 space-y-10">

//         <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black">
//           Student Support Request Form
//         </h1>

//         <form className="space-y-10 p-8 rounded-md shadow-2xl">

//           {/* SECTION 1: STUDENT DETAILS */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold text-black text-brand">
//               Section 1: Student Details
//             </h2>
//            <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Full Name
//                 </label>
//                 <input type="text" className="line-input flex-1" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Registration No
//                 </label>
//                 <input type="text" className="line-input flex-1" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Student Email
//                 </label>
//                 <input type="email" className="line-input flex-1" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Faculty / Dept
//                 </label>
//                 <input type="text" className="line-input flex-1" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Phone No
//                 </label>
//                 <input type="tel" className="line-input flex-1" />
//               </div>
//           </div>

//           </div>

//           {/* SECTION 2: SUPPORT REQUEST */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold text-black text-brand">
//               Section 2: Support Request
//             </h2>
          
//                {/* Type of Need */}
//               <div className="flex items-center gap-4">
//                   <label className="w-40 text-sm font-semibold text-black">
//                     Type of Need
//                   </label>
//                   <select className="flex-1 border-b border-black bg-transparent text-sm outline-none focus:border-b-2 focus:border-brand-accent">
//                     <option value="">Select option</option>
//                     <option>Tuition Fees</option>
//                     <option>Accommodation</option>
//                     <option>Meals / Living Expenses</option>
//                     <option>Other</option>
//                   </select>
//               </div>
              
//               <div className="flex items-start gap-4">
//                 <label className="w-40 text-sm font-semibold text-black pt-2">
//                   Brief Explanation
//                 </label>
//                 <textarea
//                   rows={3}
//                   placeholder="Explain your situation briefly (200–300 words)"
//                   className="flex-1 border text-sm pt-2 px-3 pb-2 rounded-md outline-none focus:border-2 focus:border-brand-accent"
//                 />
//               </div>
           
            
//           </div>

//           {/* SECTION 3: FINANCIAL AID STATUS */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold text-black text-brand">
//               Section 3: Financial Aid Status
//             </h2>

//             <div className="space-y-2 text-sm text-black font-semibold">
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="aid" /> Yes
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="aid" /> No
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="aid" /> In Progress
//               </label>
//             </div>
//           </div>

//           {/* SECTION 4: VERIFICATION */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold text-black text-brand">
//               Section 4: Verification (Optional but helpful)
//             </h2>

//             <div className="flex items-center gap-4">
//                 <p className="w-40 text-sm font-semibold text-black pt-2">
//                   Upload fee statement or portal screenshot
//                 </p>
//                 <input type="file" className="text-sm" />
//               </div>

//             <h3 className="font-semibold text-black mt-4">
//               Referee (must be a currently registered student)
//             </h3>

//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Full Name
//                 </label>
//                 <input type="text" className="line-input flex-1" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Registration No
//                 </label>
//                 <input type="text" className="line-input flex-1" />
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Faculty / Dept
//                 </label>
//                 <input type="text" className="line-input flex-1" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-30 text-sm font-semibold text-black">
//                   Phone No
//                 </label>
//                 <input type="tel" className="line-input flex-1" />
//               </div>
//           </div>
//           </div>

//           {/* CONFIRMATION */}
//           <label className="flex items-center gap-6 text-sm text-gray-700">
//             <input type="checkbox" />
//             <span>
//               I confirm that the information provided is true and that I am a
//               currently registered student.
//             </span>
//           </label>

//           {/* SUBMIT */}
//           <button
//             type="submit"
//             className="bg-brand-danger text-white px-8 py-3 rounded-md text-sm font-semibold hover:opacity-70 transition"
//           >
//             Submit Request
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import "tailwindcss";

export default function SupportFormPage() {
  // store all text input values
  const [formValues, setFormValues] = useState({
    full_name: "",
    registration_number: "",
    email: "",
    faculty: "",
    phone_number: "",
    type_of_need: "",
    explanation: "",
    financial_aid_status: "no",
    referee_full_name: "",
    referee_registration_number: "",
    referee_faculty: "",
    referee_phone_number: "",
    confirm_student_status: false,
  });

  const [proofDocument, setProofDocument] = useState<File | null>(null);

  // handle text, select, checkbox changes
 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, type, value } = e.target;

  // only inputs have 'checked'
  const checked = e.target instanceof HTMLInputElement ? e.target.checked : false;

  setFormValues((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProofDocument(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Get token from localStorage
  const token = localStorage.getItem("authToken");
  if (!token) {
    alert("You must be logged in to submit a support request.");
    return;
  }

  const data = new FormData();

  // append all form values
  Object.entries(formValues).forEach(([key, value]) => {
    data.append(key, String(value));
  });

  if (proofDocument) {
    data.append("proof_document", proofDocument);
  }

  try {
    const res = await fetch(
      "http://127.0.0.1:8000/api/posts/support-requests/",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`, // ✅ Include token
          // Do NOT set Content-Type when sending FormData
        },
        body: data,
      }
    );

    if (res.ok) {
      alert("Support request submitted successfully ✅");
      // Optionally reset form
      setFormValues({
        full_name: "",
        registration_number: "",
        email: "",
        faculty: "",
        phone_number: "",
        type_of_need: "",
        explanation: "",
        financial_aid_status: "no",
        referee_full_name: "",
        referee_registration_number: "",
        referee_faculty: "",
        referee_phone_number: "",
        confirm_student_status: false,
      });
      setProofDocument(null);
    } else {
      const text = await res.text();
      console.error("Error submitting:", text);
      alert("Failed to submit request ❌");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred ❌");
  }
};

  return (
    <section className="w-full min-h-screen bg-white py-10">
      <div className="max-w-3xl mx-auto px-4 space-y-10">
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black">
          Student Support Request Form
        </h1>

        <form
          className="space-y-10 p-8 rounded-md shadow-2xl"
          onSubmit={handleSubmit} // <-- connect to backend
        >

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
                <input
                  type="text"
                  name="full_name"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Registration No
                </label>
                <input
                  type="text"
                  name="registration_number"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Student Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Faculty / Dept
                </label>
                <input
                  type="text"
                  name="faculty"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Phone No
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: SUPPORT REQUEST */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black text-brand">
              Section 2: Support Request
            </h2>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-semibold text-black">
                Type of Need
              </label>
              <select
                name="type_of_need"
                className="flex-1 border-b border-black bg-transparent text-sm outline-none focus:border-b-2 focus:border-brand-accent"
                onChange={handleChange}
              >
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
                name="explanation"
                rows={3}
                placeholder="Explain your situation briefly (200–300 words)"
                className="flex-1 border text-sm pt-2 px-3 pb-2 rounded-md outline-none focus:border-2 focus:border-brand-accent"
                onChange={handleChange}
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
                <input
                  type="radio"
                  name="financial_aid_status"
                  value="yes"
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="financial_aid_status"
                  value="no"
                  onChange={handleChange}
                />{" "}
                No
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="financial_aid_status"
                  value="in_progress"
                  onChange={handleChange}
                />{" "}
                In Progress
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
              <input type="file" className="text-sm" onChange={handleFileChange} />
            </div>

            <h3 className="font-semibold text-black mt-4">
              Referee (must be a currently registered student)
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <label className="w-30 text-sm font-semibold text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="referee_full_name"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Registration No
                </label>
                <input
                  type="text"
                  name="referee_registration_number"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-30 text-sm font-semibold text-black">
                  Faculty / Dept
                </label>
                <input
                  type="text"
                  name="referee_faculty"
                  className="line-input flex-1"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* CONFIRMATION */}
          <label className="flex items-center gap-6 text-sm text-gray-700">
            <input
              type="checkbox"
              name="confirm_student_status"
              onChange={handleChange}
            />
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

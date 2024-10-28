// import React, { useState } from "react";
// import { Eye, EyeOff, Upload, AlertCircle, X } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// const RegisterPage = () => {
//   // State management for form inputs and validation
//   const [formData, setFormData] = useState({
//     email: "",
//     fullName: "",
//     password: "",
//     confirmPassword: "",
//     zipCode: "",
//   });

//   // State for password visibility toggles
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // State for profile image
//   const [imagePreview, setImagePreview] = useState(null);
//   const [error, setError] = useState("");

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         // 5MB limit
//         setError("Image size should be less than 5MB");
//         return;
//       }

//       if (!file.type.startsWith("image/")) {
//         setError("Please upload an image file");
//         return;
//       }

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//       setError("");
//     }
//   };

//   // Remove uploaded image
//   const removeImage = () => {
//     setImagePreview(null);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Validate form before submission
//   const validateForm = () => {
//     if (!imagePreview) {
//       setError("Please upload a profile image");
//       return false;
//     }

//     if (
//       !formData.email ||
//       !formData.fullName ||
//       !formData.password ||
//       !formData.confirmPassword ||
//       !formData.zipCode
//     ) {
//       setError("Please fill in all fields");
//       return false;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return false;
//     }

//     if (formData.password.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return false;
//     }

//     // Basic zip code validation (US format)
//     const zipRegex = /^\d{5}(-\d{4})?$/;
//     if (!zipRegex.test(formData.zipCode)) {
//       setError("Please enter a valid ZIP code");
//       return false;
//     }

//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted:", { ...formData, imagePreview });
//       setError("");
//       // Add your registration logic here
//     }
//   };

//   return (
//     // Main container with responsive padding and centering
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         {/* Page title */}
//         <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//           Create your account
//         </h2>

//         {/* Secondary text */}
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//             Sign in
//           </a>
//         </p>
//       </div>

//       {/* Form container */}
//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {/* Error message display */}
//           {error && (
//             <Alert variant="destructive" className="mb-6">
//               <AlertCircle className="h-4 w-4" />
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}

//           {/* Registration form */}
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Profile Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Profile Image
//               </label>
//               <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
//                 <div className="space-y-1 text-center">
//                   {imagePreview ? (
//                     <div className="relative inline-block">
//                       <img
//                         src={imagePreview}
//                         alt="Profile preview"
//                         className="h-32 w-32 rounded-full object-cover"
//                       />
//                       <button
//                         type="button"
//                         onClick={removeImage}
//                         className="absolute top-0 right-0 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                       <div className="flex text-sm text-gray-600">
//                         <label
//                           htmlFor="profile-image"
//                           className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 hover:text-blue-500"
//                         >
//                           <span>Upload a file</span>
//                           <input
//                             id="profile-image"
//                             name="profile-image"
//                             type="file"
//                             className="sr-only"
//                             accept="image/*"
//                             onChange={handleImageUpload}
//                           />
//                         </label>
//                       </div>
//                       <p className="text-xs text-gray-500">
//                         PNG, JPG up to 5MB
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Full Name input */}
//             <div>
//               <label
//                 htmlFor="fullName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 required
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
//               />
//             </div>

//             {/* Email input */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
//               />
//             </div>

//             {/* Password input */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 flex items-center pr-3"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4 text-gray-400" />
//                   ) : (
//                     <Eye className="h-4 w-4 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password input */}
//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={showConfirmPassword ? "text" : "password"}
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 flex items-center pr-3"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff className="h-4 w-4 text-gray-400" />
//                   ) : (
//                     <Eye className="h-4 w-4 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* ZIP Code input */}
//             <div>
//               <label
//                 htmlFor="zipCode"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 ZIP Code
//               </label>
//               <input
//                 id="zipCode"
//                 name="zipCode"
//                 type="text"
//                 required
//                 value={formData.zipCode}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
//                 placeholder="e.g., 12345"
//               />
//             </div>

//             {/* Submit button */}
//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Create Account
//               </button>
//             </div>
//           </form>

//           {/* Social registration options */}
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="bg-white px-2 text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <button
//                 type="button"
//                 className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
//               >
//                 Google
//               </button>
//               <button
//                 type="button"
//                 className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
//               >
//                 GitHub
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

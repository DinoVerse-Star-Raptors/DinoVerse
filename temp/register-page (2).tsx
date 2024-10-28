// import React, { useState } from 'react';
// import { Eye, EyeOff, Upload, AlertCircle, X, User } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';

// const RegisterPage = () => {
//   // Previous state management code remains the same
//   const [formData, setFormData] = useState({
//     email: '',
//     fullName: '',
//     password: '',
//     confirmPassword: '',
//     zipCode: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [error, setError] = useState('');

//   // Previous handlers remain the same
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setError('Image size should be less than 5MB');
//         return;
//       }

//       if (!file.type.startsWith('image/')) {
//         setError('Please upload an image file');
//         return;
//       }

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//       setError('');
//     }
//   };

//   const removeImage = () => {
//     setImagePreview(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Previous validation and submit handlers remain the same
//   const validateForm = () => {
//     if (!formData.email || !formData.fullName || !formData.password ||
//         !formData.confirmPassword || !formData.zipCode) {
//       setError('Please fill in all fields');
//       return false;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return false;
//     }

//     if (formData.password.length < 8) {
//       setError('Password must be at least 8 characters long');
//       return false;
//     }

//     const zipRegex = /^\d{5}(-\d{4})?$/;
//     if (!zipRegex.test(formData.zipCode)) {
//       setError('Please enter a valid ZIP code');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form submitted:', { ...formData, imagePreview });
//       setError('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//           Create your account
//         </h2>

//         <p className="mt-2 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//             Sign in
//           </a>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {error && (
//             <Alert variant="destructive" className="mb-6">
//               <AlertCircle className="h-4 w-4" />
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Updated Profile Image Upload section */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Profile Image
//               </label>
//               <div className="mt-1 flex flex-col items-center justify-center">
//                 {/* Profile Image Preview Area */}
//                 <div className="relative mb-4">
//                   {imagePreview ? (
//                     <div className="relative inline-block">
//                       <img
//                         src={imagePreview}
//                         alt="Profile preview"
//                         className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-100"
//                       />
//                       <button
//                         type="button"
//                         onClick={removeImage}
//                         className="absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600 shadow-sm"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="h-32 w-32 rounded-full bg-gray-100 flex items-center justify-center ring-4 ring-gray-50">
//                       <User className="h-16 w-16 text-gray-300" />
//                     </div>
//                   )}
//                 </div>

//                 {/* Upload Button Area */}
//                 <div className="flex flex-col items-center text-sm text-gray-600">
//                   <label
//                     htmlFor="profile-image"
//                     className="relative cursor-pointer rounded-md bg-white px-4 py-2 font-medium text-blue-600 hover:text-blue-500 border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors duration-200"
//                   >
//                     <span className="flex items-center space-x-2">
//                       <Upload className="h-4 w-4" />
//                       <span>{imagePreview ? 'Change photo' : 'Upload photo'}</span>
//                     </span>
//                     <input
//                       id="profile-image"
//                       name="profile-image"
//                       type="file"
//                       className="sr-only"
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                     />
//                   </label>
//                   <p className="mt-2 text-xs text-gray-500">
//                     PNG, JPG up to 5MB
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Rest of the form fields remain the same */}
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
//                   type={showPassword ? 'text' : 'password'}
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
//                   type={showConfirmPassword ? 'text' : 'password'}
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

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Create Account
//               </button>
//             </div>
//           </form>

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

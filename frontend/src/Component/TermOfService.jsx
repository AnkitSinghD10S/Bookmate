import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 flex justify-center">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h2>

        <section className="mb-6">
          <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, accessible at <strong>BookMate.com</strong>.</p>
          <p>By using this Website, you agree to accept all terms and conditions written here.</p>
        </section>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property Rights</h3>
        <p className="mb-6">
          Other than the content you own, under these Terms, <strong>BookMate</strong> owns all the intellectual property rights and materials contained in this Website.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Restrictions</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Publishing any Website material in any other media</li>
          <li>Selling or commercializing any Website material</li>
          <li>Publicly showing any Website material</li>
          <li>Using the Website in any way damaging to the Website</li>
          <li>Engaging in any data harvesting or similar activities</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Your Content</h3>
        <p className="mb-6">
          "Your Content" means any material you display on this Website. By displaying it, you grant <strong>BookMate</strong> a non-exclusive license to use it.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">No Warranties</h3>
        <p className="mb-6">This Website is provided "as is," with all faults, and <strong>BookMate</strong> expresses no representations or warranties.</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h3>
        <p>This Agreement is governed by and construed according to the laws of India.</p>
      </div>
    </div>
  );
};

export default TermsOfService;

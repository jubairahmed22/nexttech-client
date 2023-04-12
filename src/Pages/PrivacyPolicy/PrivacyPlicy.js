import React from 'react';
import './Privacy.css'

const PrivacyPlicy = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
             <div className='mt-20 lg:w-full md:w-[800px] sm:w-[500px] privacyBackground  dark:bg-gradient-to-r from-cyan-800 to-blue-900'>
             <h1 className='text-center privacyHeading'>Privacy <span className='headingSpan'>Policy</span></h1>
             </div>
            <div className='grid grid-cols-1 mt-10 place-items-center'>
            <div className='policyPera lg:w-[1200px] md:w-[500px] sm:w-[200px]'>
              <h1 className='mt-10'><span className='itemsHeading'>1. Introduction:</span> <br/> At Nexttech ITC, we are committed to protecting your privacy and ensuring that your personal information is collected, processed, and stored in accordance with applicable data protection laws and regulations.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>2. Personal Information We Collect:</span> <br/>We may collect personal information from you when you use our services, visit our website, or communicate with us. This may include your name, contact information, demographic information, and other information you provide to us.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>3. Use of Information: </span><br/>We use your personal information to provide you with our IT solutions and training services, to communicate with you, and to improve our services. For example, we may use your email address to send you important updates about our services or to send you newsletters and promotional materials.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>4. Sharing of Information: </span><br/>We do not share your personal information with third-party service providers. We may share your personal information with our business partners, such as other companies with whom we collaborate to provide IT solutions and training services. We do not sell or rent your personal information to third parties.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>5. Personal Data Security: </span><br/>We take the security of your personal data seriously and have implemented physical, technical, and administrative measures to safeguard it. For example, we use industry-standard encryption technology to protect your information when you submit it to us through our website. We also limit access to your personal data to authorized personnel who need to access it to perform their job functions.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>6. Your Rights: </span><br/>You have the right to access, correct, or delete your personal information that we hold about you. You also have the right to object to or restrict the processing of your personal information. If you wish to exercise any of these rights, please contact us at  info@nexttechitcbd.com</h1>
              <h1 className='mt-10'><span className='itemsHeading'>7. Use of Cookies and Other Tracking Technologies: </span><br/>We may use cookies, web beacons, and other tracking technologies to collect information about your use of our website and services. This information may include your IP address, browser type, operating system, and other usage information. We use this information to improve our website and services and to provide you with a better user experience.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>8. Links to Third-Party Websites:</span> <br/>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of these websites before providing them with your personal information.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>9. Changes to this Privacy Policy:</span><br/> We reserve the right to modify or update this privacy policy at any time. If we make any material changes to this privacy policy, we will notify you by email or by posting a notice on our website.</h1>
              <h1 className='mt-10'><span className='itemsHeading'>10. Contact Us:</span> <br/>If you have any questions or concerns about our privacy policy or our use of your personal information, please contact us at  info@nexttechitcbd.com. We will respond to your inquiry as soon as possible.</h1>
              </div>
            </div>
        </div>
    );
};

export default PrivacyPlicy;
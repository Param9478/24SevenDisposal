import React from 'react';

const Location = () => {
  return (
    <div className="w-full h-96 mt-5">
      <iframe
      className='rounded-xl'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.0410143610147!2d-79.69777682323695!3d43.772007444737696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d27f66d5be5%3A0x643f7f7f6c29b185!2s26%20Beckenham%20Rd%2C%20Brampton%2C%20ON%20L6P%202L8!5e0!3m2!1sen!2sca!4v1719681641779!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Location;

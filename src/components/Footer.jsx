import React, { useRef, useEffect } from 'react';
// import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  const footerDate = useRef();
  console.log(footerDate)

  useEffect(() => {
    footerDate.current = new Date().getFullYear();
  }, []);
  return (
    <footer>
      <span>
        {/* <BiCopyright /> */}
      </span>

      <p>{footerDate.current} Tony Tanaka</p>
    </footer>
  );
};

export default Footer;
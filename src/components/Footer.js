import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20   text-white font-semibold'>
    <footer className="footer p-10 bg-primary  text-neutral-content">
  <div>

    <span className="footer-title">Our Services</span> 
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Policy</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
<div>
    <p className='text-center'>Copyright © 2022 - All right reserved by Istiak Hasan</p>
  </div>
        </div>
    );
};

export default Footer;
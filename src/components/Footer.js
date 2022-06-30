import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20   text-white font-semibold'>
    <footer class="footer p-10 bg-primary  text-neutral-content">
  <div>

    <span class="footer-title">Our Services</span> 
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Policy</span> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
</footer>
<div>
    <p className='text-center'>Copyright © 2022 - All right reserved by Istiak Hasan</p>
  </div>
        </div>
    );
};

export default Footer;
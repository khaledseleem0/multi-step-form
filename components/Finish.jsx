import React from "react";
import Image from 'next/image'

function Finish() {
  return (
    <>
    <div className="form_container flex centered column">
      <div>
        <Image src="/assets/images/icon-thank-you.svg" alt="" width={80} height={80} />
      </div>
      <h1 className="py-10-20">Thank You!</h1>
      <p className="muted lh-25 txt-c">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      
    </div>
    <div class="attribution muted pt-20">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by<a href="https://twitter.com/@Khaled70834970"> Khalid Seleem</a>.
</div>
    </>
  );
}

export default Finish;

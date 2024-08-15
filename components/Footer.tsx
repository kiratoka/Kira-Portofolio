import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';



const Footer = () => {

    const icons = [
        { icon: <FaFacebookF />, url: "https://www.facebook.com" },
        { icon: <FaTwitter />, url: "https://www.twitter.com" },
        { icon: <FaYoutube />, url: "https://www.youtube.com" },
        { icon: <FaPinterest />, url: "https://www.pinterest.com" },
    ];

    return (
        <footer className=" relative bg-black-100 text-white py-8 px-4" id='contact'>
            <div className="w-full absolute left-0 top-0 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-[100vh] object-cover opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center h-[60vh]">
                <h1 className="heading lg:max-w-[45vw] px-2">
                    Ready to take <span className="text-cyan-400">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center max-md:mb-10 px-2">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="https://mail.google.com/" target='_blank'>
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                        otherClasses=''
                        bgNyala={true}
                    />
                </a>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Bagian kiri footer */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-xl font-bold">Kiratoka</p>
                    <p className="text-sm">Website created by Kiratoka</p>
                </div>
                {/* Right side of the footer */}
                <div className="flex gap-4">
                    {/* Looping data to display social media icons */}
                    {icons.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl hover:text-cyan-400"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
            {/* Separator line */}
            <hr className="border-gray-700 my-4" />
            {/* Bottom part of the footer */}
            <div className="container mx-auto text-center text-sm">
                <p>
                    © {new Date().getFullYear()} Kiratoka. All Rights Reserved.
                </p>
                {/* Adding copyright disclaimer */}
                <p>
                    This website may contain content that is not owned by Kiratoka. Kiratoka is not responsible for copyright infringements resulting from the use of such content. Kiratoka respects the original copyright owners and strives not to violate their copyrights. Copyright Disclaimer Under Section 107 of the Copyright Act 1976, fair use is permitted for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright law that may otherwise be infringing. Non-profit, educational, or personal use tips the balance in favor of fair use.
                </p>
            </div>
        </footer>
    )
}

export default Footer
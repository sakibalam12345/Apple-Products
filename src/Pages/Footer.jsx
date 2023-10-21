import { FaFacebook,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-10 bg-gray-100">
            <hr/>
            <h3 className='text-base font-medium mb-2 text-center underline'>Our trade Policy</h3>
            <p className=' lg:max-w-6xl md:max-w-5xl lg:mx-auto md:mx-auto border-b-2 '>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission. This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is obtained.
Apple Vision Pro will be available early next year on apple.com and at Apple retail stores in the U.S.
To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
A subscription is required for Apple TV+.</p>

            <h1 className="text-center text-xl mt-4">Find Us On Social media</h1>
            <div className='flex justify-center gap-6 mt-3 mb-5'>
             <a href=''><FaFacebook></FaFacebook></a>
             <a href=''><FaInstagramSquare></FaInstagramSquare></a>
             <a href=''><FaTwitterSquare></FaTwitterSquare></a>
            
            </div>
            <p className='text-center'>Copyright © 2023 Apple Inc. All rights reserved.</p>
        </div>
    );
};

export default Footer;
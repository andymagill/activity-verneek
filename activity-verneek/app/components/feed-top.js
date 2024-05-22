
// components/feed-top.js

import Image from 'next/image';
import BackButton from "../components/back-button.js"

const FeedTop = ({ title }) => {

    return (
        <div className="feed-heading flex justify-between gap-10 items-center p-1 mb-4">
            <BackButton />

            <h2 className="basis-full text-xl font-bold mb-0">{ title }</h2>

            {/* TODO: replace bars image with a functional filter button */}
            <Image src="./images/bars.svg" alt="" width={20} height={20} className="" />
        </div>
    );
}
export default FeedTop;
// components/feed-top.js
import BackButton from "../components/back-button.js"

const FeedTop = ({ title }) => {

    return (
        <div className="feed-heading flex justify-between">
            <BackButton />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{ title }</h2>
            {/* TODO: filter button */}
        </div>
    );
}
export default FeedTop;
// components/filters.js

const Filters = ({ activeTab, setActiveTab }) => {

  return (
    <div className="filters flex gap-2">
        {['All Workspace', 'Personal', 'Team', 'Community'].map( tab => (
          <button
            key={tab}
            className={`bg-gray-100 border-2 text-sm px-4 py-1 rounded-md ${activeTab === tab ? 'border-gray-200 text-black' :  'border-transparent text-gray-700' }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
    </div>
  )
};

export default Filters;
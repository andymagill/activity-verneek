// components/filters.js

const Filters = ({ activeTab, setActiveTab }) => {

  return (
    <div className="filters flex gap-2 mb-6">
        {['All Workspace', 'Personal', 'Team', 'Community'].map( tab => (
          <button
            key={tab}
            className={`border-2 text-sm px-4 py-1 rounded-md ${activeTab === tab ? 'activeTab' : '' }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
    </div>
  )
};

export default Filters;
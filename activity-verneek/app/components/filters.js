// components/filters.js

export async function Filters() {

  return (
    <div className="filters">
      <button>All Workspaces</button>
      <button className="active">Personal</button>
      <button className="notif-3">Team</button>
      <button>Community</button>
    </div>
  )
};

export default Filters;
function FilterBar({ options, filters, onFilterChange }) {
  return (
    <section className="filter-bar" aria-label="Portfolio filters">
      <div className="filter-group">
        <label htmlFor="role-filter">Role</label>
        <select
          id="role-filter"
          value={filters.role}
          onChange={(event) => onFilterChange('role', event.target.value)}
        >
          <option value="all">All roles</option>
          {options.roles.map((role) => (
            <option key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="tag-filter">Technique</label>
        <select
          id="tag-filter"
          value={filters.tag}
          onChange={(event) => onFilterChange('tag', event.target.value)}
        >
          <option value="all">All techniques</option>
          {options.tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}

export default FilterBar

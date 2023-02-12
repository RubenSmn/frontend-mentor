function Filter({
  filters,
  onRemoveFilter,
}: {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
}) {
  return filters.length === 0 ? null : (
    <div className="filter">
      <ul>
        {filters.map((filter) => {
          return (
            <li>
              <p>{filter}</p>
              <button
                className="remove-icon"
                onClick={() => onRemoveFilter(filter)}
              >
                <img
                  src="/frontend-mentor/challenges/job-listings-with-filtering/icon-remove.svg"
                  alt="remove-icon"
                />
              </button>
            </li>
          );
        })}
      </ul>
      <button className="clear-button" onClick={() => onRemoveFilter("all")}>
        Clear
      </button>
    </div>
  );
}

export default Filter;

import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="mb-3">
      <select className="form-control" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

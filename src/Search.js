function Search({ search, setSearch }) {
	return (
		<div>
			<form className="searchbar" name="search">
				<input
					type="text"
					id="search"
					placeholder="search jobs..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default Search;

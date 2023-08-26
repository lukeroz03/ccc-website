import "./LabelAndSearch.css";

function LabelAndSearch(props) {
		return (
			<div className="label-and-search-container">
			<h1>{props.label}</h1>
			<input type="text" placeholder={props.placeholder} value={props.searchQuery} onChange={e => {props.handleSearch(e.target.value);}} />
			</div>
			)
}

export default LabelAndSearch;

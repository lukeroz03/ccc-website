import Member from "./Member";
import LabelAndSearch from "./LabelAndSearch";
import { useState, useEffect } from "react";

function Members() {

	const [members, setMembers] = useState([]);
	const [filteredMembers, setFilteredMembers] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	useEffect(() => {
		fetch("http://localhost:5000/api/members")
			.then(res => res.json())
			.then(data => {
				setMembers(data);
			        setFilteredMembers(data);
			})
	}, []);

	function handleSearch(query) {
		setSearchQuery(query);
		const lowercaseQuery = query.toLowerCase();
		const filtered = members.filter((member) => {
			return member.name.toLowerCase().includes(lowercaseQuery);
		});
		setFilteredMembers(filtered);
	}

	return (
		<div>
		<h1>Members</h1>
		<input type="text" placeholder="Search Members" value={searchQuery} onChange={e => {handleSearch(e.target.value);}} />
		<LabelAndSearch label="Club Members" placeholder="Search" value={searchQuery} handleSearch={handleSearch} />
		{filteredMembers.map((member) => {
			return <Member key={member.link} member={member} />;
		})}
		</div>
	);
}

export default Members;

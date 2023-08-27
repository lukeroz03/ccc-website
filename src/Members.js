import Member from "./Member";
import LabelAndSearch from "./LabelAndSearch";
import "./Members.css";
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
		<div className="members-page">
		<LabelAndSearch label="Club Members" placeholder="Search" value={searchQuery} handleSearch={handleSearch} />
		<div className="members-container">
		{filteredMembers.map((member) => {
			return <Member key={member.link} member={member} />;
		})}
		</div>
		</div>
	);
}

export default Members;

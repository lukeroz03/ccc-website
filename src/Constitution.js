import "./Constitution.css";
function Constitution() {
  return (
    <div className="constitution-container">
      <h1> Christendom College Coding Club Constitution </h1>

      <h2> article zero: name and mission </h2>

	  <ol className="first-level">
	  <li>
	  {" "}
	  The organization shall be called the 'Coding Club' within the college,
	  and the 'Christendom College Coding Club' without (not simply the
		  'Christendom Coding Club', as that can be ambiguous).
	  </li>
	  <li>
	  {" "}
	  The organization is not affiliated with any national or state
	  organization.{" "}
	  </li>
	  <li>
	  {" "}
	  The goal of the organization is provide avenues for students to
	  practice computer science, to assist students in achieving
	  employment in related fields, and most importantly to help students learn
	  and admire the divine laws that organize and bind all information.
	  </li>
	  </ol>
	  <h2> article one: membership, rank, and office </h2>
	  <ol className="first-level">
	  <li> There are to be no requirements or fees for membership.</li>
	  <li> Members can be one of three ranks, increasing in privelige.</li>
	  <li> It should be noted that rank priveleges only apply to projects that are designated as official club projects (see article two). Projects that are not club projects are not bound by any rules in this document.</li>
	  <li> A club member keep may keep their rank after graduation until either they begin work at a computer science job, or the first day of classes the second school year after their graduation, whichever comes first. For example, a graduating senior in the 3005-3006 school year would retain their rank for the 3006-3007 school year and lose it at the start of the 3007-3008 chool year, or at the start of their first computer science job, if that came first. For simplicity, a member who keeps their rank in this way loses the vote their rank entitles them to in club decisions and elections.
	  </li>
	  <li> The ranks are to be as follows:
	  <ol className="second-level">
	  <li>
	  {" "}
	  The rank of Member is open to all current Christendom College students, regardless of status. Members are
	  given the Commit privelige, the ability to add to, subtract from, or
	  modify the code in a club project. That being said, Members have no
	  guarantee that changes they submit will be accepted---all changes a
	  Member submits to a club project must be approved by a student with
	  the Merge privelige.
	  </li>
	  <li>
	  {" "}
	  The rank of Coder is achieved when a student passes the Coder test:
	  solving a randomly chosen Easy difficulty LeetCode problem in a
	  language and category of their choice, in less than half an hour,
	  without any sort of assistance, be it internet, book, human, or
	  otherwise, and in the prescence of at least one student of the
	  Maintainer rank. The only requirement to pass is that the student's
	  solution is accepted by LeetCode---no other criteria shall be imposed.
	  A student who fails the Coder test must wait at least six days before
	  re-attempting. Students of the Coder rank are given the Member Page
	  privelege---they are permitted to create a webpage to be displayed on
	  the club website, advertising themselves and their programming
	  ability. To ensure that students learn about the infrastructure of
	  website development, no student may write code on or around another
	  student's Member Page---the new Coder must create and deploy their own
	  Member Page in its entirety, although other students may give advice.
	  Coders possess the priveleges of the Member rank in addition to those
	  of the Coder rank, and as such have the Commit privelege, but not the
	  Merge privelege---Coders can submit code to projects, but their code
	  must be accepted by a Maintainer. A Coder's Member Page is considered
	  to be a Club Project and the Coder it belongs to is its Project Lead
	  (see Article Two).
	  </li>
	  <li>
	  {" "}
	  The rank of Maintainer is achieved when a student passes the
	  Maintainer test, which is identical to the Coder test except in that
	  the LeetCode problem must be Medium difficulty, not Easy. The test is
	  the same in all other facets. Maintainers have the priveleges of the
	  Member and Coder ranks, and are elgible to be given in addition to
	  those the Merge privelege on one or more club projects. Article Two
	  will detail how a student may be given the Merge privelege for a given
	  project. The Merge privelege allows a student to accept code changes
	  submitted by other students. Before accepting a set of changes the
	  Maintainer must verify to the best of their ability that the code is
	  error-free. A Maintainer may only accept changes if they are familiar with the technologies involved. As all incoming changes to club projects must be approved
	  by a Maintainer, this means that all code brought into production on
	  club projects will be vetted for safety by a reasonably competent
	  coder. If at any point no students possess the rank of Maintainer, the
	  Coding Club will enter dormancy until a student passes the Maintainer
	  test in the prescence of the club's advisor.
	  </li>
	  </ol>
	  </li>
	  <li>
	  {" "}
	  There shall be three club officers---the President, the Treasurer, and the Website Lead. The
	  President is responsible for representing and advertising the club,
	  the Treasurer is responsible for club spending, and the Website Lead is responsible for the club website. Officers shall hold
	  office for one school year, or one semester if such a shortening is made
	  necessary by an officer leaving for the Rome semester. Elections shall
	  be determined by a popular vote of Coders and Maintainers, who will
	  select officers out of those Maintainers who are willing to be
	  candidates. Elections shall be held the day before spring semester
	  finals, at a time determined by the leaving President. If a club officer
	  attends the Rome program in the spring semester, an election for their
	  office will be held the day before finals of the fall semester, at a
	  time determined byt the current (possibly leaving for Rome)
	  President---a student cannot be a club officer while attending the Rome
	  program. 
	  </li>
	  <li> The duties of officers are to be as follows:
	  <ol className="second-level">
	  <li>
	  The duties of the President are to coordinate the club's
	  relation to the school and the public. Whenever a club member wishes to
	  publically advertise a meeting or event (as opposed to simply arranging
		  it with the members and/or non-members who will participate), contribute
	  to the club's social media prescence, or reach out to a company about
	  the club, they must first notify the President and recieve his or her
	  approval. The President must be a Maintainer if one is present and
	  willing, but may be a Coder if not.
	  </li>
	  <li>The duties of the Treasurer are to
	  control the spending of club funding. Members can make purchases for the
	  club with their own money, but only the Treasurer can make purchases
	  with club funding.
	  </li>
	  <li> The duties of the Website Lead are to coordinate the development of the club's website. The Website Lead must be a Maintainer if one is present and willing, but may be a Coder if not. The Website Lead must give permission for any changes to the website's Github to be pulled to the website. The Website Lead is responsible for aquiring and configuring hosting for the website. The Website Lead is responsible for coordinating with the school's Marketing department to configure the website's domain name and subdomains. The Website Lead is responsible for providing areas of the website to Marketing for review, and for placing appropriate disclaimers on areas that are not thus reviewed.
	  </li>
	  </ol>
	  <li>As per SAC requirements, one student cannot be both President and
	  Treasurer, but one student can be both President and Website Lead, or both Treasurer and Website Lead.
	  </li>
	  </li>
	  </ol>
	  <h2> article two: club projects </h2>
	  <ol className="first-level">
	  <li>
	  A member's member page may link to any programming project they
	  contributed to, provided it is not grossly immoral in function, as
	  determined by the club's Advisor.
	  </li>
	  <li>
	  If a project is contributed to only by members of the club (inluding former students who are still members, as specified at the beginning of article one), it is
	  eligible to be an official Club Project. Club Projects are listed on
	  the Projects page of the club website, which may also link to a
	  dedicated page for each project. A project becomes a Club Project when
	  a Maintainer adds it to the aforementioned page. That Maintainer then
	  becomes the Project Lead for that project, and is the driving force
	  behind the project. The Project Lead may give Maintainers of his
	  choice the Merge privelige for the project, to assist him or her in
	  maintaining it. The Project Lead resolves all disputes regarding the
	  project, and may remove any Maintainer from the project at any time.
	  The Project Lead of the club's website is the club's Website Lead, and
	  all Maintainers have merge priveleges to it, though not to those
	  sections of it that relate to projects that they do not have merge
	  priveleges to. If the Project Lead is the only Maintainer of a
	  project, any other Maintainer with experience in the technology that the project uses may merge his or her pull requests to
	  the website regarding that project, only examining the code to verify
	  that it does not contain dangerous bugs or pose a security risk to the
	  website. The Project Lead must still merge pull requests to that
	  project made by other members. If the hosting needs of a project that uses
	  club hosting grows to the point where it is no longer feasible to host
	  it on the club's website, the Project Lead must move it to a new
	  repository, and the project will no longer be a Club Project. Until
	  the project is moved, any hosting requirements that exceed the club
	  website's capabilities must be paid for by the project's Project Lead.
	  </li>
	  </ol>
	  <h2> article three: changing this constitution </h2>
	  <ol className="first-level">
	  <li>
	  The master copy of this Constitution shall be the copy stored in the
	  Constitution.js file of the main branch of the club website github
	  repository.
	  </li>
	  <li>
	  Any Coder or Maintainer may propose a change to this Constitution by
	  submitting a pull request. This pull request may then be merged and
	  its changes put into effect if the pull request is approved by a
	  majority vote of all Maintainers who are current students, which may be held online
	  or in person. In addition, the club's Advisor must read
	  and approve any changes to this Constitution. If not all Maintainers
	  vote, the pull request must still recieve a majority of all
	  Maintainers' votes. A Maintainer may not vote if they have not
	  personally read the proposed changes. If there are fewer than three
	  Maintainers in the club, this document may not be modified. To prevent
	  confusion, a pull request that changes Constitution.js may not contain
	  changes to any other files.
	  </li>
	  </ol>
	  <h2> article four: failsafes </h2>
	  <ol className="first-level">
	  <li>
	  If a club member's behavior is deemed to be harmful to the club, the
	  club's Advisor may remove them from the club, at the request of a
	  majority of all Coders and Maintainers who are current students.
	  </li>
	  <li>
	  If a Maintainer deliberately and/or out of gross negligence (as opposed to giving an honest effort but simply not noticing the issue), merges changes
	  that, when presented to the club's Advisor by any Coder or Maintainer,
	  are deemed to be of a dangerously low quality, in the sense of either
	  a crash risk, a data loss risk, or a security risk, they may be
	  demoted to the rank of Coder by the club's Advisor after a warning,
	  and may not retake the Maintainer test until the next school year.
	  </li>
	  <li>
	  If a club member consistently commits code that is of a dangerously
	  low quality, in the sense of either a crash risk, a data loss risk, or
	  a security risk, and does not correct their behavior when reprimanded,
	  they may be stripped of their Commit privelege by the club's Advisor
	  at the request of a Maintainer, until the start of the next semester.
	  </li>
	  <li>
	  The club's President,Treasurer, and/or Website Lead may be removed from office for
	  any reason by a two thirds majority of all Coders and
	  Maintainers who are current students, with the consent of the club's Advisor. An election for
	  their replacement must take place the same calendar day.
	  </li>
	  </ol>
	  </div>
  );
}

export default Constitution;

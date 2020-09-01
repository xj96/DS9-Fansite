import React from "react";
import EmployeeListItem from "./components/EmployeeListItem";

const employees = [
  {
    id: 1,
    name: "Benjamin Sisko",
    role: "Starfleet Captain",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/BenSisko.jpg/220px-BenSisko.jpg",
    bio:
      "Born in 2332 in New Orleans, Louisiana, Benjamin is the son of Joseph Sisko, the chef and owner of the restaurant 'Sisko's Creole Kitchen,' or 'Sisko's' for short. Sisko entered Starfleet Academy in 2350. During his sophomore year, he was in a field-study assignment on Starbase 137. He met a woman named Jennifer in Babylon, New York, on Gilgo Beach, shortly after graduating from the Academy. The two eventually wed and had a son named Jake. In 2369, Sisko is assigned to the Bajoran sector to command Deep Space Nine and to help Bajor's recovery from the recently concluded Cardassian occupation, shepherding them toward possible membership in the Federation.",
  },
  {
    id: 2,
    name: "Jake Sisko",
    role: "Journalist",
    image:
      "https://i.pinimg.com/originals/cf/0f/f3/cf0ff3be7d8fbca57a43b1ed8a2c2261.jpg",
    bio:
      "Jake was born in 2355 to Jennifer Sisko, who was killed in 2367 during the Battle of Wolf 359 when Benjamin Sisko served aboard USS Saratoga. In 2369, he reluctantly moved with his father to space-station Deep Space Nine. Jake aspires to be a writer, though he declines a scholarship to the Pennington School (New Zealand) in 2371.",
  },
  {
    id: 3,
    name: "Odo",
    role: "Constable",
    image:
      "https://www.startrek.com/sites/default/files/images/2019-08/vortex117.jpg",
    bio:
      "Odo, an alien male, middle-aged curmudgeon, and a shape-shifter. In his natural state he is a gelatinous liquid. He was found by the Bajoran and lived amongst them. At first he was sort of an Elephant Man, a source of curiosity and humor as he turned himself into a chair or pencil. Finally he realized he would have to take the form of a humanoid to assimilate and function in their environment.",
  },
  {
    id: 4,
    name: "Kira Nerys",
    role: "Colonel",
    image:
      "https://vignette.wikia.nocookie.net/memoryalpha/images/e/eb/Kira_Nerys%2C_Starfleet_commander.jpg/revision/latest?cb=20200505150416&path-prefix=en",
    bio:
      "Kira is assigned as the senior Bajoran Militia officer aboard Deep Space Nine, acting as the station's executive officer under the Starfleet commander Benjamin Sisko, who commands the facility. Initially, Kira is opposed to the Federation presence on DS9, feeling that the Bajoran people should have nothing to do with the Federation as Bajor has just endured a 50-year occupation by the Cardassians and Bajor needs to be able to stand on its own two feet.",
  },
  {
    id: 5,
    name: "Jadzia Dax",
    role: "Lieutenant Commander",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6c/JadziaDax.jpg",
    bio:
      "Jadzia Dax is a joined Trill. Though she appears to be a young woman, Jadzia lives in symbiosis with a wise and long-lived creature, known as a symbiont, named Dax. The two share a single, conscious mind, and her personality is a blending of the characteristics of both the host and the symbiont. As such, Jadzia has access to all the skills and memories of the symbiont's seven previous hosts. Prior to the symbiotic joining, Jadzia earned academic degrees in exobiology, zoology, astrophysics, and exoarchaeology.",
  },
  {
    id: 6,
    name: "Worf, Son of Mogh",
    role: "Lieutenant Commander",
    image: "https://upload.wikimedia.org/wikipedia/en/e/ed/WorfTNG.jpg",
    bio:
      "Worf was born in 2340 on Kronos (the Klingon homeworld) as the son of Mogh. Five years later, his parents moved to the Khitomer colony. Worf's parents were killed during a surprise attack by the Romulans on the Khitomer outpost. The colony's distress call was answered by the Federation starship USS Intrepid. In 2357, Worf entered Starfleet Academy. He graduated in 2361 and was commissioned with the rank of Ensign, becoming the first Klingon officer in Starfleet. Although Worf took immense pride and a sense of honor from serving in Starfleet, most other Klingons shunned and belittled his choice of vocation.",
  },
  {
    id: 7,
    name: "Julian Bashir",
    role: "Chief Medical Officer",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9c/JulianBashir.jpg",
    bio:
      "As a child, Julian Bashir fell behind in school, and was evaluated as having learning difficulties. Because of this, his parents, Richard and Amsha Bashir, had him subjected to genetic engineering. The procedure made him mentally superior to most humans, and greatly enhanced his physical abilities.",
  },
  {
    id: 8,
    name: "Ezri Dax",
    role: "Lieutenant Counselor",
    image:
      "https://vignette.wikia.nocookie.net/memoryalpha/images/1/13/Ezri_Dax%2C_2375.jpg/revision/latest/top-crop/width/360/height/450?cb=20200609080506&path-prefix=en",
    bio:
      "Ezri Tigan was born in 2354; she is a member of the indigenous species of the planet Trill. She enrolled in Starfleet Academy in 2372 in the medical program, with a specialization in psychology. Two years later, she was assigned as assistant ship's counsellor to the USS Destiny for field training. During this journey, the ship was assigned to transport the Dax symbiont from Deep Space Nine to Trill, after its host Jadzia (Terry Farrell) was killed by Dukat (Marc Alaimo), but it became necessary for the Dax symbiont to be joined to a new host en route.",
  },
  {
    id: 9,
    name: "Miles Obrien",
    role: "Chief of Operations",
    image:
      "https://vignette.wikia.nocookie.net/memoryalpha/images/5/56/Miles_O%27Brien%2C_2367.jpg/revision/latest/top-crop/width/220/height/220?cb=20200425092214&path-prefix=en",
    bio:
      "Miles O'Brien was born in Killarney, a town in County Kerry in Ireland, Earth, in September 2328. He claims descent from Brian Boru, the famous Ard Rí, or High King of Ireland (and founder of the O'Brien Clan). His father, Michael O'Brien, wanted him to play the cello, so he pursued this and was eventually accepted into the Aldebaran Music Academy. However, a few days before he was scheduled to start classes there, he enlisted in Starfleet.",
  },
  {
    id: 10,
    name: "Quark",
    role: "Owner of Quark's Bar",
    image:
      "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/6e7b33fdea3adc80ebd648fffb665bb8.jpg?itok=tq4ZsR9b",
    bio:
      "Before opening a bar, known as 'Quark's Bar, Grill, Gaming House and Holosuite Arcade', Quark served as a cook aboard a Ferengi freighter for eight years. He came to the station while it was named Terok Nor during the Cardassian occupation of Bajor. Originally, Quark admired the Cardassian race for their version of morality, but later he seemed to take pity on the downtrodden Bajoran people, selling them food and equipment just above cost, which could have gotten him into serious trouble if the Cardassians had found out. When the station changed hands at the end of the occupation, he decided to leave. Commander Sisko, feeling that Quark's Bar (which offered holosuites and gambling) would encourage commercial tourism to boost the station's economy, extorted Quark into staying, using Quark's nephew Nog as a bargaining chip.",
  },
  {
    id: 11,
    name: "Rom",
    role: "Crewman",
    image: "https://upload.wikimedia.org/wikipedia/en/1/15/RomDS9.jpg",
    bio:
      "Born around 2335, Rom did not have the business acumen typically associated with the Ferengi race; he was described as one who 'didn't have the 'lobes' for business'. He had a knack for fixing things but, until around 2372, he worked exclusively as a waiter and stock boy in his brother Quark's bar. After four years living among Federation and Bajoran citizens on the station, and possibly inspired by his son Nog's admission to Starfleet (which made him very proud), Rom left the bar to become an engineer in the Bajoran Militia.",
  },
  {
    id: 12,
    name: "Nog",
    role: "Ensign",
    image:
      "https://vignette.wikia.nocookie.net/memoryalpha/images/b/b2/Nog%2C_2375.jpg/revision/latest/top-crop/width/360/height/450?cb=20151219154106&path-prefix=en",
    bio:
      "Nog was born to Rom and Prinadora on Ferenginar in 2353. Later, he moved with his father to Deep Space Nine and worked at his uncle Quark's bar. Recognizing his father's failure to capitalize on his proficiency in mechanics and electronics, and not wanting to follow in those footsteps, Nog resolves to go into a career where he can make something of himself. After going through the Ferengi coming-of-age rite, he requests an apprenticeship under Commander, later Captain, Benjamin Sisko in order to attend Starfleet Academy. Nog is admitted with his recommendation and becomes the first Ferengi in Starfleet.",
  },
];

function EmployeeListCard(props) {
  const mapEmployees = function (employees) {
    return employees.map((employees) => (
      <EmployeeListItem
        key={employees.id}
        employee={employees}
        handleEmployeeClick={props.handleEmployeeClick}
      />
    ));
  };
  return (
    <div>
      <div className="card detail-card" style={{ width: "18rem" }}>
        <div className="card-body ">
          <h5 className="card-title list-title">Employee list</h5>
          <hr/>
          <ul className="list-group list-group-flush">
          {mapEmployees(employees)}
        </ul>
        </div>
        
      </div>
    </div>
  );
}

export default EmployeeListCard;

import "../styles/project.css";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="project-div1">
      <div className="project-div2">
        <a href={item.link} target="_blank">
          <img className="project-img" src={item.image} alt={item.id} />
        </a>
      </div>
      {/* <p className='project-p'> {item.category} </p> */}
      <h3 className="project-h3"> {item.name} </h3>
    </div>
  );
};

export default Project;

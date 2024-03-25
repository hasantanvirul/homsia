const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "homsiaor",
});

const getAllProjects = (req, res) => {
  const query = `
        SELECT p.*, i.link AS image
        FROM projects p
        LEFT JOIN images i ON p.id = i.projectid
    `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server error" });
      return;
    }
    // Grouping projects by id and collecting their images
    const projects = results.reduce((acc, project) => {
      const {
        id,
        title,
        address,
        featured,
        bedrooms,
        bathrooms,
        parkings,
        sft,
        description,
        status,
        image,
      } = project;
      if (!acc[id]) {
        acc[id] = {
          id,
          title,
          address,
          featured,
          bedrooms,
          bathrooms,
          parkings,
          sft,
          description,
          status,
          images: [],
        };
      }
      if (image) {
        acc[id].images.push(image);
      }
      return acc;
    }, {});

    // Converting the grouped projects object to an array
    const projectsArray = Object.values(projects);

    res.status(200).json(projectsArray);
  });
};

const getProjectById = (req, res) => {
  const projectId = req.params.id; // Extract project ID from URL parameters
  const query = `
        SELECT p.*, i.link AS image
        FROM projects p
        LEFT JOIN images i ON p.id = i.projectid
        WHERE p.id = ?
    `;
  connection.query(query, [projectId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server error" });
      return;
    }
    if (results.length === 0) {
      // If no project found with the given ID, return 404 Not Found
      res.status(404).json({ error: "Project not found" });
      return;
    }
    // Otherwise, return the details of the project along with its images
    const project = {
      id: results[0].id,
      title: results[0].title,
      address: results[0].address,
      featured: results[0].featured,
      bedrooms: results[0].bedrooms,
      bathrooms: results[0].bathrooms,
      parkings: results[0].parkings,
      sft: results[0].sft,
      description: results[0].description,
      status: results[0].status,
      images: results.reduce((acc, row) => {
        if (row.image) {
          acc.push(row.image);
        }
        return acc;
      }, []),
    };
    res.status(200).json(project);
  });
};

module.exports = { getAllProjects, getProjectById };

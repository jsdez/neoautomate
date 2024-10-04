import React from 'react';

const teamMembers = [
  {
    name: "Walter White",
    role: "Chief Executive Officer",
    imgSrc: "assets/img/team/team-1.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: ""
    }
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    imgSrc: "assets/img/team/team-2.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: ""
    }
  },
  {
    name: "William Anderson",
    role: "CTO",
    imgSrc: "assets/img/team/team-3.jpg",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: ""
    }
  },
];

const Team = () => {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>CHECK OUR TEAM</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="member">
                <div className="pic">
                  <img src={member.imgSrc} className="img-fluid" alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <div className="social">
                    <a href={member.socialLinks.twitter}><i className="bi bi-twitter-x"></i></a>
                    <a href={member.socialLinks.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={member.socialLinks.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={member.socialLinks.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

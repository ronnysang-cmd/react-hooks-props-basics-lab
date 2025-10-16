import React from "react";

function Links({ github, linkedin }) {
  return (
    <nav>
      <h3>Links</h3>
      {github ? <a href={github}>{github}</a> : null}
      {linkedin ? <a href={linkedin}>{linkedin}</a> : null}
    </nav>
  );
}

export default Links;

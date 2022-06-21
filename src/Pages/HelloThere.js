import React from "react";
import '../bootstrap.min.css'
import '../Pages/HelloThere.css'
import picture from '../images/PHOTO-2022-06-20-15-05-41.png'

function HelloThere() {
  return (
      <div className="container">
          <br/>
          <h4 className="alert-heading">Warning! You are now in depresive street! Be careful of Mr. Outly</h4>
          <br/>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Aliquam erat
              volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Nullam eget nisl. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nam libero tempore,
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Quisque porta. Etiam quis quam. Morbi leo mi,
              nonummy eget tristique non, rhoncus non leo. Integer vulputate sem a nibh rutrum consequat. Aenean
              placerat. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. In rutrum. Curabitur ligula
              sapien, pulvinar a vestibulum quis, facilisis vel sapien. Mauris dictum facilisis augue.

              Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nulla non arcu lacinia neque faucibus
              fringilla. Donec iaculis gravida nulla. Vivamus porttitor turpis ac leo. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos hymenaeos. Phasellus faucibus molestie nisl. Mauris
              metus. Etiam quis quam. Aenean fermentum risus id tortor. Fusce wisi. Donec quis nibh at felis congue
              commodo. <a href="/" className="alert-link">what are looking for?
              </a>.</p>

          <div className='image'>
              <img src={picture} alt="Logo"/>
          </div>

      </div>


  );
}

export default HelloThere;

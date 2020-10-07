import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";

import { SiteSiteMetadataAuthor } from "graphql-types";
import { rhythm } from "../../utils/typography";
import { yearsSince } from "../../utils/timeSince";
import { device } from "../../styles/constants";
import { useAvatar } from "../../hooks";

interface AboutProps {
  author: SiteSiteMetadataAuthor;
}

const About: React.FunctionComponent<AboutProps> = ({
  author,
}): React.ReactElement => {
  const avatar = useAvatar({ width: 200, height: 200 });

  return (
    <Root>
      <Avatar fixed={avatar.childImageSharp.fixed as FixedObject} />

      <Description>
        <h4>Hey there my friend!</h4>
        <p>
          My name is {author.name}, and I am {yearsSince(author.birthDate)}{" "}
          years old. I am a developer who loves to solve tricky problems and uplift those around me through mentorship.
        </p>

        <p>
          I contribute to my teams through my comprehensive front end knowledge, my growing knowledge and comfort in back end development and my expert problem-solving and Googling skills.
        </p>

        <p>
          When not working I am most often found on or near the skate track, both playing and coaching roller derby. If I'm off skates, I'm coordinating the learn to skate program. If I'm not doing either of those, I'll be organizing and orchestrating our competitive season as the Vice President of Operations. 
        </p>

        <p>
          I am occasionally not doing things related to roller derby. I am an avid reader of all types of media, with a special spot in my heart for fantasy and graphic novels. When not reading or writing, I'm teaching my dog to do a new trick (right now it's learning to jump through hoops). 
        </p>

        <p>
          Do you want to find out more about me? Please shoot me an email at{" "}
          <strong>{author.social.email}</strong> or reach out to me on social
          media, listed below.
        </p>
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-gap: ${rhythm(2)};
  margin-top: ${rhythm(0.5)};

  @media ${device.tablet} {
    grid-template-columns: minmax(20%, 200px) 70%;
  }
`;

const Avatar = styled(Image)`
  align-self: center;
  border-radius: 100px 100px 100px 8px;
  width: 150px;
  height: 150px;
  justify-self: center;
  align-self: flex-start;

  @media ${device.tablet} {
    width: auto;
    height: auto;
    justify-self: start;
  }
`;

const Description = styled.section`
  h4 {
    margin-top: ${rhythm(0.5)};
  }
`;

export default About;

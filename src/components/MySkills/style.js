import { styled } from "styled-components";
import bgSkills from "/assets/skills-bg.png";

export const MySkillsStyle = styled.div`
  padding: 4rem 20%;
  display: flex;
  gap: 5rem;
  box-sizing: border-box;

  .skills {
    display: flex;
    gap: 2rem;

    .softSkills {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-family: "Inter", sans-serif;
    }
    .hardSkills {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-family: "Inter", sans-serif;
    }
    .title {
      font-family: "Arimo", sans-serif;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .borderContainer {
      border-radius: 5px;
      width: 100%;
      padding: 5rem 4rem;
      font-family: "Inter", sans-serif;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background: url(${bgSkills}), #f9f9f9;
      box-sizing: border-box;
      height: 350px;
      margin-bottom: 50px;
      .title {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (max-width: 575.98px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;

    .skills {
      display: flex;
      justify-content: center;
      padding: 30px;
    }

    .borderContainer {
      margin-top: -0px;
      margin-bottom: 50px;
    }
  }

  @media only screen and (max-width: 767.98px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;

    .skills {
      display: flex;
      justify-content: center;
      padding: 30px;
    }

    .borderContainer {
      margin-top: -0px;
      margin-bottom: 50px;
    }
  }

  @media only screen and (max-width: 991.98px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;

    .skills {
      display: flex;
      justify-content: center;
      padding: 30px;
    }

    .borderContainer {
      margin-top: -0px;
      margin-bottom: 50px;
    }
  }

  @media only screen and (max-width: 1199.98px) {
    padding: 30px;
    gap: 1rem;
  }
`;

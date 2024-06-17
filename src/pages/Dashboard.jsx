import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import PodcastCard from "../components/PodcastCard";

const DashboardMain = styled.div`
paddin: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 768px) {
padding: 6px 10px;
}
`;

const FilterContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`;

const Topic = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 24px;
font-weight: 500;
display: flex;
justify-content: space-between;
alighn-items: center;
@media (max-width: 768px) {
font-size: 18px;
}
`;

const Span = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 16px;
font-weight: 400;
@media (max-width: 768px) {
font-size: 14px;
}
`;

const Podcast = styled.div`
display: flex;
flexwrap: wrap;
gap: 14px;
paddig: 18px 16px;
@media (max-width: 550px) {
justify-content: center;
}
`;

const Dashboard =() => {
    return <DashboardMain>
        <FilterContainer>
            <Topic>
                Most Popular
            <Link to={`/showpodcasts/mostpopular`} style={{textDecoration: "none"}}>
            <Span>Show All</Span>
            </Link>
            </Topic>
            <Podcast>

                <PodcastCard />
                <PodcastCard />
                <PodcastCard />

            </Podcast>
        </FilterContainer>

        <FilterContainer>
            <Topic>
                Comedy
            <Link to={`/showpodcasts/comedy`} style={{textDecoration: "none"}}>
            <Span>Show All</Span>
            </Link>
            </Topic>
            <Podcast>

            <PodcastCard />
            <PodcastCard />

            </Podcast>
        </FilterContainer>
    </DashboardMain>
};

export default Dashboard;
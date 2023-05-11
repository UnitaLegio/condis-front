import React from 'react';

interface TeamMemberProps {
    teamMember: {
        name: string;
        bio: string;
    };
}

const TeamMemberComponent: React.FC<TeamMemberProps> = ({ teamMember }) => {
    const { name, bio } = teamMember;

    return (
        <div className="team-member card my-3">
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{bio}</p>
            </div>
        </div>
    );
};

export default TeamMemberComponent;

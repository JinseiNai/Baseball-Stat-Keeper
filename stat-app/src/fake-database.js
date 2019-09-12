import React from 'react';

class FakeData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Calvin",
                    teams: [
                        {
                            id: 1,
                            name: "Renegades",
                            players: {
                                id: 1,
                                name: "Andrew",
                                stats: {
                                    G: 3,
                                    AB: 10,
                                    H: 5,
                                    HR: 2,
                                    RBI: 6,
                                    SO: 3,
                                    AVG: .550
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}

export default FakeData;